import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Segment, Table, Icon, Label, Container, Button, Modal, Header, Input, TextArea, Form } from 'semantic-ui-react';
import { mapStateToProps, mapDispatchToProps } from '../Load';
import ReplyModel from '../Models/ReplyModel';
import FavoriteModel from '../Models/FavoriteModel';

export class Tweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openRepModal: false,
            replyMessage: '',
            selectedId: '',
        }

        this.onClickFavo = this.onClickFavo.bind(this);
        this.onOpenRepModal = this.onOpenRepModal.bind(this);
        this.onCloseRepModal = this.onCloseRepModal.bind(this);
        this.onChangeReply = this.onChangeReply.bind(this);
        this.onClickRep = this.onClickRep.bind(this);
        
    }

    onClickFavo(evn, data) {
        let favorite = new FavoriteModel({
            tweetId: data.id,
            userName: this.props.userName,
        })
        this.props.TweetAction.favorite(favorite);
    }

    onOpenRepModal(evn, data){
        this.setState({
            openRepModal: true,
            selectedId: data.id,
        })
    }

    onCloseRepModal(evn, data){
        this.setState({
            replyMessage: '',
            openRepModal: false,
            selectedId: '',
        })
    }

    onChangeReply(evn, data){
        this.setState({
        replyMessage: data.value,
        })
    }

    onClickRep(evn, data){
        let reply = new ReplyModel({
            tweetId: this.state.selectedId,
            reply: this.state.replyMessage,
            userName: this.props.userName,
        })
        this.props.TweetAction.Reply(reply);
        this.setState({
            replyMessage: '',
            openRepModal: false,
            selectedId: '',
        })
    }

    render() {
        if (!this.props.tweetList) {
             return <div>Data loading..</div>
        }
        let styleWideTable = { height: "60vh", overflowY: "scroll", };
        let rows = this.props.tweetList.map((x) => {
            let favorite = x.favorite.length;
            let reply = x.reply.length;

            return(
                <Table.Row>
                    <Table.Cell>
                        <Label >
                            <Icon name="user circle" />
                            {x.userName}
                        </Label>
                        <Container>
                            <p>{x.tweetContent}</p>
                            < div className = "flex-end">
                                < Button circular icon='reply' label={reply}
                                    id = {x.tweetId}
                                    onClick = {this.onOpenRepModal}
                                />
                                < Button circular icon='star' label={favorite}
                                    id = {x.tweetId}
                                    onClick = {this.onClickFavo}
                                />
                            </div>
                        </Container>
                    </Table.Cell>
                </Table.Row>
            )
        });

        return (
            <div>
                <Segment>
                    <div style={styleWideTable}>
                        <Table fixed>
                            <Table.Body>
                                {rows}
                            </Table.Body>
                        </Table>
                    </div>
                </Segment>

                <Modal open={this.state.openRepModal}>
                    <Modal.Header>Reply</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <TextArea onChange={this.onChangeReply} value={this.state.replyMessage} />
                        </Form>
                        </Modal.Content>
                    <Modal.Actions>
                        <Button inverted color='orange' onClick={this.onCloseRepModal}>
                            <Icon name='remove' /> Cancel
                        </Button>
                        <Button inverted color='blue' onClick={this.onClickRep}>
                            <Icon name='reply' /> Reply
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tweet);