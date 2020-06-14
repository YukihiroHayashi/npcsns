"use strict";
export default class {
    constructor(dataObject = null) {
        this.tweetId = "";
        this.reply = "";
        this.userName = "";
        this.replyDate = "";

        //Import data if set
        if (dataObject) {
            try {
                this.tweetId = dataObject.tweetId;
                this.reply = dataObject.reply;
                this.userName = dataObject.userName;
                this.replyDate = dataObject.replyDate;

            }
            catch (e) {
                throw "Data import error @ TweetsReply data.";
            }
        }
    }

    getDataObject() {
        return {
            tweetId: this.tweetId,
            reply: this.reply,
            userName: this.userName,
            replyDate: this.replyDate,
        }
    }
}