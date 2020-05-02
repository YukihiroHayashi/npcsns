import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Segment, Search, Table } from 'semantic-ui-react';

export default class Trend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            searchIsLoading: false,
        }

        this.trendSearch = this.trendSearch.bind(this);
    }

    trendSearch(evn, data) {
        this.setState({ searchText: data.value })
    }

    render() {
        return (
            <Segment>
                <Search
                    fluid
                    loading={this.state.searchIsLoading}
                    onSearchChange={this.trendSearch}
                    value={this.state.searchText}
                />
                <Table color="blue" fluid>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Recommended trends</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>VS Code</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Java</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Spring Boot</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>React</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>.Net Core</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Segment>
        )
    }

}