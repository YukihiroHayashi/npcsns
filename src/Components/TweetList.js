import React, { Component } from 'react';
import ReactDom from "react-dom";
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Segment, Form, TextArea,Button } from 'semantic-ui-react';
import Tweet from "./Tweet";

export default class TweetList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tweetId: "", //ツイートID　Load.jsから取得する予定
            userName: "watanabe", //ユーザ名　Load.jsから取得する予定
            tweetText: "",　//ツイートテキスト
            tweetList: ["疲れすぎワロタ"]
        };

        //バインド
        this.onClickTweetButton = this.onClickTweetButton.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);

    }

    //ツイート内容をTweetListに表示させるようにしたい
    onClickTweetButton(evn, data) {
        let tweetList = this.state.tweetList;
        let newTweetList = [this.state.tweetText];    
        tweetList.push(newTweetList);
        this.setState({ tweetList: tweetList,tweetText: "" });
    }

    //ツイートテキストを変更したときに反映させる
    onTextAreaChange(evn, data){
        this.setState({ tweetText: data.value });
    }
    
    render(){
        return(
            <Segment>
                <div className = "tweetForm">
                    <Form>
                        <label >
                            Tweet
                        </label>
                        <TextArea 
                            value={this.state.tweetText}
                            onChange={this.onTextAreaChange}
                        />
                        <div style={{paddingTop: '10px',textAlign: 'right'}}>
                            <Button 
                                onClick={this.onClickTweetButton}
                                color = "blue"
                            >
                            Tweet
                            </Button >
                        </div>
                    </Form>
                </div>
                <Tweet 
                    tweetList = {this.state.tweetList} 
                    userName = {this.state.userName}
                />
            </Segment>
        )
    }

}