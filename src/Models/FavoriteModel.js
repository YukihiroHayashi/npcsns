"use strict";
export default class {
    constructor(dataObject = null) {
        this.tweetId = "";
        this.userName = "";
        this.favoriteDate = "";

        //Import data if set
        if (dataObject) {
            try {
                this.tweetId = dataObject.tweetId;
                this.userName = dataObject.userName;
                this.favoriteDate = dataObject.favoriteDate;

            }
            catch (e) {
                throw "Data import error @ TweetFavaorite data.";
            }
        }
    }

    getDataObject() {
        return {
            tweetId: this.tweetId,
            userName: this.userName,
            favoriteDate: this.favoriteDate,
        }
    }
}