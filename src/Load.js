import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppConfig from './AppConfig'
import Menu from './Components/Menu';
import TweetList from './Components/TweetList';
import Trend from './Components/Trend';
import { Icon } from 'semantic-ui-react'
import * as TweetAction from './Actions/TweetAction';

export class Load extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets:{},
        }

    }

    componentDidMount() {
        let tweets = this.props.TweetAction.tweetFetchData(AppConfig.ApiUrlTweet);
        this.setState({tweets: tweets});
    }



    render(){
        let loadingInfo = [];
        if (this.props.TweetReducer.tweetsIsLoading) {
            loadingInfo.push(
                <div>
                    <Icon loading size='large' name='spinner' /> Loading Tweets...
                </div>
            );
        }
        if (!loadingInfo.length) {
            return (
                <div className="App">
                    <Menu />
                    <TweetList />
                    <Trend />

                </div>
            );
        } else {
            return <div>{loadingInfo}</div>;
        }
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