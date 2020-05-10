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
        //NULL
        if (this.tweetContent == null || this.tweetContent.trim() == "") {
            errors.tweetContent = "何か入力おくんなまし";
        }
        //文字数
        if (this.tweetContent.length > 150) {
            errors.tweetContent = "文字数オーバー.";
        }



        return errors;
    }

}