import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Segment, Table, Icon, Label, Container } from 'semantic-ui-react';

export default class Tweet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tweetbox = this.props.tweetList;
        let styleWideTable = { height: "60vh", overflowY: "scroll", };
        let rows = tweetbox.map((x) =>
            <Table.Row>
                <Table.Cell>
                    <Label >
                        <Icon name="user circle" />
                        {x.userName}
                    </Label>
                    <Container>
                        <p>{x.tweetContent}</p>
                    </Container>
                </Table.Cell>
            </Table.Row>
        );

        return (
            <Segment>
                <div style={styleWideTable}>
                    <Table fixed>
                        <Table.Body>
                            {rows}
                        </Table.Body>
                    </Table>
                </div>
            </Segment>
        )
    }

}