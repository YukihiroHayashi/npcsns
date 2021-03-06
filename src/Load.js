import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppConfig from './AppConfig'
import MenuList from './Components/MenuList';
import TweetList from './Components/TweetList';
import Trend from './Components/Trend';
import { Icon, Header, Divider, Segment, Dimmer, Loader, Container } from 'semantic-ui-react';
import './App.css';
import * as TweetAction from './Actions/TweetAction';

export class Load extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.TweetAction.tweetFetchData(AppConfig.ApiUrlTweet);
    }

    render() {

        return (
            <div className="app">
                <Header as='h2' className="header" color="blue">
                    <Icon name='send' />
                    <Header.Content>
                        NPC SNS
                        <Header.Subheader>For the future</Header.Subheader>
                    </Header.Content>
                </Header>
                <Divider />
                <Dimmer.Dimmable as={Container} fluid dimmed>
                    <Dimmer active={this.props.TweetReducer.tweetsIsLoading}>
                        <Header as="h2" inverted>
                            <Loader inline>Tweets Loading...</Loader>
                        </Header>
                    </Dimmer>
                    <div className="flex">
                        <div className="menu">
                            <MenuList />
                        </div>
                        <div className="trend-tweet">
                            <Trend />
                        </div>
                    </div>
                </Dimmer.Dimmable>

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