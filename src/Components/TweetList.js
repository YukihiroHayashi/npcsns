import React, { Component } from 'react';
import ReactDom from "react-dom";
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Segment, Form, TextArea,Button } from 'semantic-ui-react';
import Tweet from "./Tweet";
import TweetModel from "../Models/TweetModel";

export default class TweetList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweetModel: this.props.tweetModel ? Object.assign(Object.create(this.props.tweetModel), this.props.tweetModel)
                : new TweetModel(), // Store clone

            tweetId: "", //ツイートID　Load.jsから取得する予定
            userName: "watanabe", //ユーザ名　Load.jsから取得する予定
            tweetText: "",　//ツイートテキスト
            tweetList: ["疲れすぎワロタ"],
            tweetButtonFlg: false,
            errors:{},
        };

        //バインド
        this.onClickTweetButton = this.onClickTweetButton.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);

    }

    //ツイート内容をTweetListに表示させるようにしたい
    onClickTweetButton(evn, data) {
        //ボタンの非活性
        this.setState({ tweetButtonFlg: true}); 

        //vaild
        let errors = this.state.tweetModel.validate();
        if (Object.keys(errors).length > 0) {
            this.setState({ errors: errors, });
        }

        let tweetList = this.state.tweetList;
        let newTweetList = [this.state.tweetText];
        tweetList.push(newTweetList);
        this.setState({ 
            tweetList: tweetList,
            tweetText: "" ,
            tweetButtonFlg: false
        });
    }

    //ツイートテキストを変更したときに反映させる
    onTextAreaChange(evn, data) {
        this.setState({ tweetText: data.value });
    }

    getFilteredTweetList() {
        return this.state.tweetList.filter(
            x => (
                (x ? x : "").includes(this.props.searchTrendText)
            )
        );
    }

    render() {
        let filteredTweetList = this.getFilteredTweetList();

        return (
            <Segment>
                <div className="tweetForm">
                    <Form>
                        <label >
                            Tweet
                        </label>
                        {this.errors}
                        <TextArea 
                            value={this.state.tweetText}
                            onChange={this.onTextAreaChange}
                        />
                        <div style={{ paddingTop: '10px', textAlign: 'right' }}>
                            <Button
                                onClick={this.onClickTweetButton}
                                color = "blue"
                                disabled={this.state.tweetButtonFlg}
                            >
                                Tweet
                            </Button >
                        </div>
                    </Form>
                </div>
                <Tweet
                    tweetList={filteredTweetList}
                    userName={this.state.userName}
                />
            </Segment>
        )
    }

}