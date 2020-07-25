import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Segment, Menu, Label} from 'semantic-ui-react';
import { mapStateToProps, mapDispatchToProps } from '../Load';
import * as TweetAction from '../Actions/TweetAction';
import DraftModal  from './DraftModal';


export class MenuList extends Component {
    constructor(props) {
        super(props);

        this.menuClick = this.menuClick.bind(this);
    }

    menuClick(evn, data) {
        this.props.TweetAction.changeActiveMenu(data.name);
    }

    render() {

        let openDraftModalFlg = this.props.TweetReducer.activeMenu == "Draft" ? true : false
        let draftCount = this.props.TweetReducer.draft.length
        let draftLabel = ""
        if (draftCount > 0) {
             draftLabel = < Label color='blue' >{draftCount}</Label >
        } else {
             draftLabel = ""
        }




        return (
            
            <Segment>
                <Menu fluid vertical>
                    <Menu.Item
                        name='Home'
                        active={this.props.TweetReducer.activeMenu == "Home"}
                        onClick={this.menuClick}
                    >
                        ホーム
                    </Menu.Item>
                    <Menu.Item
                        name='Notifications'
                        active={this.props.TweetReducer.activeMenu == "Notifications"}
                        onClick={this.menuClick}
                    >
                        <Label color='blue'>1</Label>
                        通知
                    </Menu.Item>
                    <Menu.Item
                        name='Profile'
                        active={this.props.TweetReducer.activeMenu == "Profile"}
                        onClick={this.menuClick}
                    >
                        プロフィール
                    </Menu.Item>
                    <Menu.Item
                        name='Draft'
                        active={this.props.TweetReducer.activeMenu == "Draft"}
                        onClick={this.menuClick}
                    >
                        {draftLabel}
                        下書き
                    </Menu.Item>
                </Menu>
                <DraftModal
                    openDraftModalFlg={openDraftModalFlg}
                />
            </Segment>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuList);

