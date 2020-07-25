import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Modal, Button, Table, Container,List } from 'semantic-ui-react';
import { mapStateToProps, mapDispatchToProps } from '../Load';


export class DraftModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalFlg: false,
        }
        this.onCloseDraft = this.onCloseDraft.bind(this);
        this.onClickText = this.onClickText.bind(this);
        this.deleteDraft = this.deleteDraft.bind(this);



    }

    //モーダルを閉じるメソッド
    onCloseDraft() {
        this.setState({ openDraft: false }, ()=> {
            this.props.TweetAction.changeActiveMenu("Home");
        })
    }



    onClickText(evn, data) {
        //Tweettextにステータスを入れる
        this.props.TweetAction.addTweetText(data.value);
        this.props.TweetAction.changeTweetButtonFlg(false)
        //Draftから値を削除する
        this.props.TweetAction.deleteDraft(data.value);
        this.onCloseDraft();
    }

    deleteDraft(evn, data) {
        //Draftから値を削除する
        this.props.TweetAction.deleteDraft(data.value);
        this.onCloseDraft();
    }


    render() {


        let rows = this.props.TweetReducer.draft.map((x) => {

            return (
                <List.Item
                    onClick={this.onClickText}
                    value={x}
                >
                    <List.Content>
                        <List.Header>
                                {x}
                            <Button
                                floated='right'
                                value = {x}
                                onClick={this.deleteDraft}
                            >削除
                            </Button>
                        </List.Header>
                    </List.Content>
                </List.Item>
                
            )
        });
        

        return (
            <Modal size='small' open={this.props.openDraftModalFlg } >
                <Modal.Header>
                    下書き
                </Modal.Header>
                <Modal.Content>
                    <List animated verticalAlign='middle'>
                        {rows}
                    </List>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        onClick={this.onCloseDraft}
                    >
                        閉じる
                    </Button>
                </Modal.Actions>
            </Modal>

        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DraftModal);


