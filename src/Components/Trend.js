import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Segment, Dropdown, Table } from 'semantic-ui-react';
import { mapStateToProps, mapDispatchToProps } from '../Load';

export class Trend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            searchIsLoading: false,
            selectTrend: "",
        }

        this.trendSearch = this.trendSearch.bind(this);
        this.changeTrend = this.changeTrend.bind(this);
    }

    trendSearch(evn, data) {
        this.setState({ searchText: data.value })
    }

    changeTrend(evn, data) {
        this.setState({ selectTrend: data.value })
    }

    render() {
        let trendOptions = [
            {value: "", text: ""},
            {value: "0422", text: "藤田大輝"},
            {value: "0423", text: "林幸宏"},
            {value: "0424", text: "有田健太郎"},
            {value: "0425", text: "十川晴菜"},
            {value: "0426", text: "渡辺大樹"},
            {value: "0427", text: "西村歩美"},
            {value: "vscode", text: "VS Code"},
            {value: "java", text: "Java"},
            {value: "springboot", text: "Spring Boot"},
            {value: "react", text: "React"},
            {value: ".netcore", text: ".Net Core"},
        ]

        return (
            <Segment>
                <Dropdown
                    placeholder='ユーザー / タグ検索'
                    fluid
                    search
                    selection
                    options={trendOptions}
                    value={this.state.selectTrend}
                    onChange={this.changeTrend}
                />
                <Table color="blue" fluid>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>おすすめトレンド</Table.HeaderCell>
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
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Trend);