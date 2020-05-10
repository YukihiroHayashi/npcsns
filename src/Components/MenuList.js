import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Segment, Menu, Label } from 'semantic-ui-react';
import { mapStateToProps, mapDispatchToProps } from '../Load';
import * as TweetAction from '../Actions/TweetAction';


export class MenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenu: "Home",
        }

        this.menuClick = this.menuClick.bind(this);
    }

    menuClick(evn, data) {
        let activeMenu = data.name;
        this.setState({ activeMenu: activeMenu }, () => {
            TweetAction.changeActiveMenu(this.state.activeMenu);
        });
    }

    render() {

        return (
            <Segment>
                <Menu fluid vertical>
                    <Menu.Item
                        name='Home'
                        active={this.state.activeMenu == "Home"}
                        onClick={this.menuClick}
                    >
                        ホーム
                    </Menu.Item>
                    <Menu.Item
                        name='Notifications'
                        active={this.state.activeMenu == "Notifications"}
                        onClick={this.menuClick}
                    >
                        <Label color='blue'>1</Label>
                        通知
                    </Menu.Item>
                    <Menu.Item
                        name='Profile'
                        active={this.state.activeMenu == "Profile"}
                        onClick={this.menuClick}
                    >
                        プロフィール
                    </Menu.Item>
                    <Menu.Item
                        name='Draft'
                        active={this.state.activeMenu == "Draft"}
                        onClick={this.menuClick}
                    >
                        下書き
                    </Menu.Item>
                </Menu>
            </Segment>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuList);
