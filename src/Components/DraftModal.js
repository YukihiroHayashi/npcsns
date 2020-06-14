import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Modal, Button, Table, Container } from 'semantic-ui-react';
import { mapStateToProps, mapDispatchToProps } from '../Load';


export class DraftModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDraft: false
        }
        this.onCloseDraft = this.onCloseDraft.bind(this);
        this.onClickText = this.onClickText.bind(this);

    }

    //モーダルを閉じるメソッド
    onCloseDraft() {
        this.setState({ openDraft: false })
    }

    //モーダルを開くメソッド
    componentWillReceiveProps(nextProps) {
        let activeMenu = nextProps.activeMenu;
        if (activeMenu == "Draft") {
            this.setState({ openDraft: true})
        }
    }


    onClickText(evn, data) {
        alert("てすと");
        //Tweettextにステータスを入れる



        this.onCloseDraft();
    }




    render() {

        return (

            <Modal size='small' open={this.state.openDraft } onClose={this.onCloseDraft} >
                <Modal.Header>
                    下書き
                </Modal.Header>
                <Modal.Content>
                    <Table fixed>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell
                                    onClick={this.onClickText}
                                >
                                    <Container>
                                    </Container>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>

                    <p
                        onClick = {this.onClickText}
                    >
                        {this.state.draft}
                    </p>
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

