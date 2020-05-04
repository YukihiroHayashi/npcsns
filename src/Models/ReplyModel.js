"use strict";
export default class {
    constructor(dataObject = null) {
        this.tweetId = "";
        this.reply = {};


        //Import data if set
        if (dataObject) {
            try {
                this.tweetId = dataObject.tweetId;
                this.reply = dataObject.reply;
            }
            catch (e) {
                throw "Data import error @ TweetsReply data.";
            }
        }
    }

    getDataObject() {
        return {
            tweetId: this.tweetId,
            reply: this.reply
        }
    }
}