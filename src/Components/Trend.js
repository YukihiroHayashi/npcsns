import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Segment, Input, Icon, Header, List, Label } from 'semantic-ui-react';
import { mapStateToProps, mapDispatchToProps } from '../Load';
import TweetList from './TweetList';

export class Trend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTrendText: "",
        }

        this.onSearchTrendChange = this.onSearchTrendChange.bind(this);
        this.onSearchClearClick = this.onSearchClearClick.bind(this);
        this.onTrendClick = this.onTrendClick.bind(this);
    }

    onSearchTrendChange(evn, data) {
        this.setState({ searchTrendText: data.value })
    }

    onSearchClearClick(evn, data) {
        this.setState({ searchTrendText: "" })
    }

    onTrendClick(evn, data) {
        this.setState({ searchTrendText: data.trend })
    }

    render() {
        let trendOptions = [
            { value: "", text: "" },
            { value: "0422", text: "藤田大輝" },
            { value: "0423", text: "林幸宏" },
            { value: "0424", text: "有田健太郎" },
            { value: "0425", text: "十川晴菜" },
            { value: "0426", text: "渡辺大樹" },
            { value: "0427", text: "西村歩美" },
            { value: "vscode", text: "VS Code" },
            { value: "java", text: "Java" },
            { value: "springboot", text: "Spring Boot" },
            { value: "react", text: "React" },
            { value: ".netcore", text: ".Net Core" },
        ]

        return (
            <div className="flex">
                <div className="tweetList">
                    <TweetList searchTrendText={this.state.searchTrendText}/>
                </div>
                <div className="trend">
                    <Segment>
                        <Input
                            placeholder='キーワード検索'
                            icon={<Icon name='delete' link onClick={this.onSearchClearClick} />}
                            value={this.state.searchTrendText} onChange={this.onSearchTrendChange}
                        />

                        <Header as='h3' color="blue">
                            <Icon name='star' />
                            <Header.Content>おすすめトレンド</Header.Content>
                        </Header>

                        <List divided selection>
                            <List.Item onClick={this.onTrendClick} trend="VS Code">
                                <Label color='violet' horizontal>
                                    1位
                        </Label>
                        VS Code
                    </List.Item>
                            <List.Item onClick={this.onTrendClick} trend="Spring Boot">
                                <Label color='blue' horizontal>
                                    2位
                        </Label>
                        Spring Boot
                    </List.Item>
                            <List.Item onClick={this.onTrendClick} trend="Java">
                                <Label color='teal' horizontal>
                                    3位
                        </Label>
                        Java
                    </List.Item>
                            <List.Item onClick={this.onTrendClick} trend=".Net Framework">
                                <Label color='grey' horizontal>
                                    4位
                        </Label>
                        .Net Framework
                    </List.Item>
                            <List.Item onClick={this.onTrendClick} trend="React">
                                <Label color='grey' horizontal>
                                    5位
                        </Label>
                        React
                    </List.Item>
                        </List>
                    </Segment>
                </div>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Trend);