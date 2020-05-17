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
            let tweets = [];
            try {
                //Get tweets (API will return the data in "data")
                let tweetsData = action.json.data;

                //Convert json to the instance
                if (tweetsData.length > 0) {
                    for (let item of tweetsData) {
                        tweets.push(new TweetModel(item));
                    }
                }

                return Object.assign({}, state, {
                    tweets: tweets,
                    loginUser: "watanabe",
                });

            } catch (e) {
                throw "Data format is not valid. " + e.message;
            }
        default:
            return state;
    }
}
