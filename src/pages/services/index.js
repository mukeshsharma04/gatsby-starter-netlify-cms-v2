import React, { Component } from 'react';
import TabBar from '../../components/TabBar';

export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <TabBar data={['Overview','Mobile','Web','DevOps','Salesforce','Pricing']}/>
      </React.Fragment>
    )
  }
}
