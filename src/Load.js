import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppConfig from './AppConfig'
import MenuList from './Components/MenuList';
import TweetList from './Components/TweetList';
import Trend from './Components/Trend';
import { Icon, Header, Divider } from 'semantic-ui-react';
import './App.css';
import * as TweetAction from './Actions/TweetAction';

export class Load extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: {},
        }
    }

    componentDidMount() {
        let tweets = this.props.TweetAction.tweetFetchData(AppConfig.ApiUrlTweet);
        this.setState({ tweets: tweets });
    }

    render() {
        let loadingInfo = this.props.TweetReducer.tweetsIsLoading ?
            <div>
                <Icon loading size='large' name='spinner' /> Loading Tweets...
            </div> : "";

        return (
            <div className="app">
                <Header as='h2' className="header" color="blue">
                    <Icon name='twitter' />
                    <Header.Content>
                        NPC SNS
                        <Header.Subheader>For the future</Header.Subheader>
                    </Header.Content>
                </Header>
                <Divider />
                {loadingInfo}
                <div className="flex">
                    <div className="menu">
                        <MenuList />
                    </div>
                    <div className="tweetList">
                        <TweetList />
                    </div>
                    <div className="trend">
                        <Trend />
                    </div>
                </div>

            </div>
        );
    }

}
// state の中に store.js の combineReducers で指定したキーの State が全部入ってくる
export function mapStateToProps(state) {
    return state;
    // return {
    //   ProductList: state.ProductList,
    // };
}

export function mapDispatchToProps(dispatch) {
    return {
        TweetAction: bindActionCreators(TweetAction, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Load);