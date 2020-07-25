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
                },
            ],
            reply: [
                {
                    tweetId: 1,
                    reply: "おつかれいのすけメンテン",
                    userName: "hayashi",
                    replyDate: "2020/06/14",
                },
            ],
            favorite: [
                {
                    tweetId: 1,
                    userName: "hayashi",
                    favoriteDate: "2020/06/14",
                },
                {
                    tweetId: 1,
                    userName: "nishimura",
                    favoriteDate: "2020/06/14",
                },
                {
                    tweetId: 1,
                    userName: "fujita",
                    favoriteDate: "2020/06/14",
                },
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
export function addTweet(tweet) {
    return {
        type: TweetConstant.TWEETS_ACT_ADDTWEET,
        tweet: tweet,
    }
}
export function favorite(favorite) {
    return {
        type: TweetConstant.TWEETS_ACT_FAVORITE,
        favorite: favorite,
    }
}
export function Reply(reply){
    return {
        type: TweetConstant.TWEETS_ACT_REPLY,
        reply: reply,
    }
}
export function saveDraft(draft) {
    return {
        type: TweetConstant.SAVE_DRAFT,
        draft: draft
    }
}

export function addTweetText(tweetText) {
    return {
        type: TweetConstant.ADD_TWEET_TEXT,
        tweetText: tweetText
    }
}
export function changeTweetButtonFlg(tweetButtonFlg) {
    return {
        type: TweetConstant.CHANGE_TWEET_BUTTON_FLG,
        tweetButtonFlg: tweetButtonFlg
    }
}

export function deleteDraft(draft) {
    return {
        type: TweetConstant.DELETE_DRAFT,
        draft: draft
    }
}

