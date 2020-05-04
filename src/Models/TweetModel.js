"use strict";
export default class {
    constructor(dataObject = null) {
        this.tweetId = "";
        this.userName = "";
        this.tweetContent = "";
        this.favorite = [];
        this.reply = {};


        //Import data if set
        if (dataObject) {
            try {
                this.tweetId = dataObject.tweetId;
                this.userName = dataObject.userName;
                this.tweetContent = dataObject.tweetContent;
                this.favorite = dataObject.favorite;
                this.reply = dataObject.reply;
            }
            catch (e) {
                throw "Data import error @ Tweets data.";
            }
        }
    }

    getDataObject() {
        return {
            tweetId: this.tweetId,
            userName: this.userName,
            tweetContent: this.tweetContent,
            favorite: this.favorite,
            reply: this.reply

        }
    }

    validate() {
        let errors = {};
        if (this.tweetContent == null || this.tweetContent == "") {
            errors.tweetContent = "test!.";
        }

        return errors;
    }

}