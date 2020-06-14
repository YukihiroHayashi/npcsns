import * as TweetConstant from '../Constants/TweetConstant';
import TweetModel from '../Models/TweetModel';
import FavoriteModel from '../Models/FavoriteModel';
import ReplyModel from '../Models/ReplyModel';


const initialState = {
    tweetsIsLoadingError: false,
    tweetsIsLoading: true,
    tweets: [],
    activeMenu: "Home",
    loginUser: "",
}

export default function TweetReducer(state = initialState, action) {
    let tweets =    null;
    let tweet = null;
    
    switch (action.type) {
        case TweetConstant.TWEETS_ACT_ISLOADINGERROR:
            return Object.assign({}, state, {
                tweetsIsLoadingError: action.tweetsIsLoadingError,
            });

        case TweetConstant.TWEETS_ACT_ISLOADING:
            return Object.assign({}, state, {
                tweetsIsLoading: action.tweetsIsLoading,
            });

        case TweetConstant.MENU_ACT_CHANGEACTIVEMANU:
            return Object.assign({}, state, {
                activeMenu: action.activeMenu,
            });

        case TweetConstant.TWEETS_ACT_LOADINGSUCCESS:
            tweets = [];
            try {
                //Get tweets (API will return the data in "data")
                let tweetsData = action.json.data;

                //Convert json to the instance
                if (tweetsData.length > 0) {
                    for (let item of tweetsData) {
                        let tweet = new TweetModel(item);
                        tweet.reply = action.json.reply.filter(x => x.tweetId == item.tweetId).map(x => new ReplyModel(x));
                        tweet.favorite = action.json.favorite.filter(x => x.tweetId == item.tweetId).map(x => new FavoriteModel(x));

                        tweets.push(tweet);
                    }
                }

                return Object.assign({}, state, {
                    tweets: tweets,
                    loginUser: "hayashi",
                });

            } catch (e) {
                throw "Data format is not valid. " + e.message;
            }

        case TweetConstant.TWEETS_ACT_ADDTWEET:
            tweets = [].concat(state.tweets);
            tweets.push(action.tweet);
            return Object.assign({}, state, {
                tweets: tweets,
            });
        
        case TweetConstant.TWEETS_ACT_FAVORITE:
            tweets = [].concat(state.tweets);
            tweet = tweets.find(x => x.tweetId = action.favorite.tweetId);
            let disTweet = tweet.favorite.filter(x => x.userName == action.favorite.userName);
            if (disTweet.length <= 0){
                tweet.favorite.push(action.favorite);
            }else{
                tweet.favorite = tweet.favorite.filter(x => x.userName != action.favorite.userName);
            }
            return Object.assign({}, state, {
                tweets: tweets,
            });
    
        case TweetConstant.TWEETS_ACT_REPLY:
            tweets = [].concat(state.tweets);
            tweet = tweets.find(x => x.tweetId = action.reply.tweetId);
            tweet.reply.push(action.reply);
            return Object.assign({}, state, {
                tweets: tweets,
            });

        default:
            return state;
    }
}
