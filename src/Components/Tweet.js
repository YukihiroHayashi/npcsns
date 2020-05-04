import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Segment, Table, Icon, Label } from 'semantic-ui-react';

export default class Tweet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tweetbox = this.props.tweetList;
        let rows = tweetbox.map((x) =>
            <Table.Row>
                <Table.Cell>
                    <Label >
                        <Icon name="user circle" />
                        {this.props.userName}
                    </Label>
                    <p>{x}</p>
                </Table.Cell>
            </Table.Row>
        );

        return (
            <Segment>
                <Table >
                    <Table.Body>
                        {rows}
                    </Table.Body>
                </Table>
            </Segment>
        )
    }

}