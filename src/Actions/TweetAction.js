import * as TweetConstant from '../Constants/TweetConstant';

export function tweetFetchData(url) {
    return (dispatch) => { //後でdispatchを調べる
        dispatch(tweetsSetLoadingError(false));
        dispatch(tweetsSetLoading(true));
        let tweets = {
            data: [
                {
                    tweetId: 1,
                    userName: "watanabe",
                    tweetContent: "まじ卍",
                    favorite: [ "hayashi", "nishimura", "fujita" ],
                    reply: { name: "hayashi", value: "おつかれいのすけメンテン" },
                }
            ]
        };
        dispatch(tweetsFetchDataSuccess(tweets));
        dispatch(tweetsSetLoading(false));
    };
}
export function tweetsSetLoadingError(bool) {
    return {
        type: TweetConstant.TWEETS_ACT_ISLOADINGERROR,
        tweetsIsLoadingError: bool
    };
}
export function tweetsSetLoading(bool) {
    return {
        type: TweetConstant.TWEETS_ACT_ISLOADING,
        tweetsIsLoading: bool
    };
}
export function tweetsFetchDataSuccess(tweets) {
    return {
        type: TweetConstant.TWEETS_ACT_LOADINGSUCCESS,
        json: tweets,
    };
}
export function changeActiveMenu(activeMenu) {
    return {
        type: TweetConstant.MENU_ACT_CHANGEACTIVEMANU,
        activeMenu: activeMenu,
    };
}
