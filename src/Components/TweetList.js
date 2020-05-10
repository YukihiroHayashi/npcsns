import React, { Component } from 'react';
import ReactDom from "react-dom";
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Segment, Form, TextArea, Button, Message } from 'semantic-ui-react';
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
            tweetButtonFlg: true,
            errors: {}
        };

        //バインド
        this.onClickTweetButton = this.onClickTweetButton.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);

    }

    //ツイート内容をTweetListに表示させるようにしたい
    onClickTweetButton(evn, data) {

        //valid
        let errors = this.createTweetDate();

        if (Object.keys(errors).length > 0) {
            this.setState({ errors: errors, });
        } else {
            let tweetList = this.state.tweetList;
            let newTweetList = [this.state.tweetText];
            tweetList.push(newTweetList);
            this.setState({
                tweetList: tweetList,
                tweetText: "",
                tweetButtonFlg: true,
                errors: {}
            });
        }
    }

    createTweetDate() {
        let tweetNewModelData = this.state.tweetModel ? Object.assign(Object.create(this.state.tweetModel), this.state.tweetModel)
            : new TweetModel() // Store clone

        tweetNewModelData.tweetContent = this.state.tweetText;
        tweetNewModelData.userName = this.state.userName;
        let errors = tweetNewModelData.validate();

        return errors;
    }

    //ツイートテキストを変更したときに反映させる
    onTextAreaChange(evn, data) {

        this.setState({ tweetText: data.value }, () => {
            //ボタンの非活性
            if (this.state.tweetText != "") {
                this.setState({ tweetButtonFlg: false });
            } else {
                this.setState({ tweetButtonFlg: true });
            }
        });

    }

    render() {
        let props = this.props;
        let styleClear = { clear: 'both', };
        let errorMessage = Object.keys(this.state.errors).length > 0 ?
            <Message warning style={styleClear}>
                <Message.Header>Error occured. Please fix below.</Message.Header>
                {Object.keys(this.state.errors).map(k => (<p>{this.state.errors[k]}</p>))}
            </Message>
            : "";


        return (
            <Segment>
                <div className="tweetForm">
                    {errorMessage}
                    <Form>
                        <label >
                            Tweet
                        </label>
                        <TextArea
                            value={this.state.tweetText}
                            onChange={this.onTextAreaChange}
                            className={this.state.errors.tweetContent ? "Error-Zone" : ""}
                        />
                        <div style={{ paddingTop: '10px', textAlign: 'right' }}>
                            <Button
                                onClick={this.onClickTweetButton}
                                color="blue"
                                disabled={this.state.tweetButtonFlg}
                            >
                                Tweet
                            </Button >
                        </div>
                    </Form>
                </div>
                <Tweet
                    tweetList={this.state.tweetList}
                    userName={this.state.userName}
                />
            </Segment>
        )
    }

}