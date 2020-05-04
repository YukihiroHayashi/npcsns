import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Segment, Table, Icon,Label } from 'semantic-ui-react';

export default class Tweet extends Component {
    constructor(props){
        super(props);
    }

    renderTable() {
        const tweetbox = this.props.tweetList;
    
        const rows = tweetbox.map((tweetbox) =>
            <Table.Row>
                <Table.Cell>
                    <Label >
                    <Icon name= "user circle" />
                    {this.props.userName}
                     </Label>
                    <p>{tweetbox}</p>
                </Table.Cell>
            </Table.Row>
        );
                                
        return (
          <Table >
             <Table.Body>
               {rows}
             </Table.Body> 
          </Table>
        )
    }

    render(){
        return(
            <Segment>
                {this.renderTable()}
            </Segment>
        )
    }

}