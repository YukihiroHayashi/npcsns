import React, { Component } from 'react';
import ReactDom from "react-dom";
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Segment, Form, TextArea, Button, Message } from 'semantic-ui-react';
import Tweet from "./Tweet";
import TweetModel from "../Models/TweetModel";
import * as TweetAction from '../Actions/TweetAction';
import { mapStateToProps, mapDispatchToProps } from '../Load';



export  class TweetList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},   
        };

        //バインド
        this.onClickTweetButton = this.onClickTweetButton.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onClickDraftButton = this.onClickDraftButton.bind(this);

    }

    //ツイート内容をTweetListに表示させるようにしたい
    onClickTweetButton(evn, data) {
        //valid
        let tweetNewModelData = this.createTweetDate();
        let errors = tweetNewModelData.validate();

        if (Object.keys(errors).length > 0) {
            this.setState({ errors: errors, });
        } else {
            this.props.TweetAction.addTweet(tweetNewModelData);
            this.props.TweetAction.addTweetText("");
            this.props.TweetAction.changeTweetButtonFlg(true)
            this.setState({
                errors: {},
            });
        }
    }

    //textエリアの値を下書きに保存する
    onClickDraftButton(evn, data) {
        //Draftに保存するメソッドの作成
        this.props.TweetAction.saveDraft(this.props.TweetReducer.tweetText);
        this.props.TweetAction.addTweetText("");
        this.props.TweetAction.changeTweetButtonFlg(true);

        alert("下書きに保存しました。");
        this.setState({
            tweetButtonFlg: true,
            errors: {},
        });

    }


    createTweetDate() {
        let tweetNewModelData = new TweetModel();

        tweetNewModelData.tweetContent = this.props.TweetReducer.tweetText;
        tweetNewModelData.userName = this.props.loginUser;
        
        return tweetNewModelData;
    }

    //ツイートテキストを変更したときに反映させる
    onTextAreaChange(evn, data) {
        this.props.TweetAction.addTweetText(data.value);
        //ボタンの非活性
        if (data.value != "") {
            this.props.TweetAction.changeTweetButtonFlg(false)
        } else {
            this.props.TweetAction.changeTweetButtonFlg(true)
        }
    }




    getFilteredTweetList(evn, data) {
        return this.state.tweetList.filter(
            x => (
                (x ? x : "").includes(this.props.searchTrendText)
            )
        );
    }

    render() {
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
                            value={this.props.TweetReducer.tweetText}
                            onChange={this.onTextAreaChange}
                            className={this.state.errors.tweetContent ? "Error-Zone" : ""}
                        />
                        <div style={{ paddingTop: '10px', textAlign: 'right' }}>
                            <Button
                                onClick={this.onClickTweetButton}
                                color="blue"
                                disabled={this.props.TweetReducer.tweetButtonFlg}
                            >
                                Tweet
                            </Button >
                            <Button
                                onClick={this.onClickDraftButton}
                                disabled={this.props.TweetReducer.tweetButtonFlg}
                            >
                                Draft
                            </Button >
                        </div>
                    </Form>
                </div>
                <Tweet
                    tweetList = {this.props.filteredTweets}
                    userName={this.props.loginUser}
                />
            </Segment>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TweetList);