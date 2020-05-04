"use strict";
export default class {
    constructor(dataObject = null) {
        this.tweetId = "";
        this.favorite = [];


        //Import data if set
        if (dataObject) {
            try {
                this.tweetId = dataObject.tweetId;
                this.favorite = dataObject.favorite;
            }
            catch (e) {
                throw "Data import error @ TweetFavaorite data.";
            }
        }
    }

    getDataObject() {
        return {
            tweetId: this.tweetId,
            favorite: this.favorite
        }
    }
}