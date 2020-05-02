import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Segment, Menu, Label } from 'semantic-ui-react';

export default class MenuList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenu: "",
        }

        this.menuClick = this.menuClick.bind(this);
    }

    menuClick(evn, data) {
        let activeMenu = data.name;
        this.setState({ activeMenu: activeMenu });
    }

    render() {

        return (
            <Segment>
                <Menu fluid vertical>
                    <Menu.Item
                        name='Home'
                        active={this.state.activeMenu == "Home"}
                        onClick={this.menuClick}
                    />
                    <Menu.Item
                        name='Notifications'
                        active={this.state.activeMenu == "Notifications"}
                        onClick={this.menuClick}
                    >
                        <Label color='blue'>1</Label>
                        Notifications
                    </Menu.Item>
                    <Menu.Item
                        name='Profile'
                        active={this.state.activeMenu == "Profile"}
                        onClick={this.menuClick}
                    />
                    <Menu.Item
                        name='Draft'
                        active={this.state.activeMenu == "Draft"}
                        onClick={this.menuClick}
                    />
                </Menu>
            </Segment>
        )
    }
}
