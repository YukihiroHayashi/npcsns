import * as TweetConstant from '../Constants/TweetConstant';
import TweetModel from '../Models/TweetModel';
import FavoriteModel from '../Models/FavoriteModel';
import ReplyModel from '../Models/ReplyModel';


const initialState = {
    tweetsIsLoadingError: false,
    tweetsIsLoading:true,
    tweets:[]

}

export default function tweetConstant(state = initialState, action) {
    switch (action.type) {
        case TweetConstant.TWEETS_ACT_ISLOADINGERROR:
            return Object.assign({}, state, {
                tweetsIsLoadingError: action.tweetsIsLoadingError,
            });
        case TweetConstant.TWEETS_ACT_ISLOADING:
            return Object.assign({}, state, {
                tweetsIsLoading: action.tweetsIsLoading,
            });
        case TweetConstant.TWEETS_ACT_LOADINGSUCCESS:
                let tweets = [];
                try {
                    //Get tweets (API will return the data in "data")
                    let tweetsData = action.json.data;
    
                    //Convert json to the instance
                    if (tweetsData.length > 0) {
                        for (let item of tweetsData) {
                            let tweet = new TweetModel(item)
                            tweet.favorite = action.json.FavoriteData.filter(x => x.tweetId == item.tweetId).map(x => new FavoriteModel(x));
                            tweet.reply = action.json.ReplyData.filter(x => x.tweetId == item.tweetId).map(x => new ReplyModel(x));
                            tweets.push(tweet);
                        }
                    }
    
                    return Object.assign({}, state, {
                        tweets: tweets,
                    });
    
                } catch (e) {
                    throw "Data format is not valid. " + e.message;
                }
        default:
        return state;
    }
}
