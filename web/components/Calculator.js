import React from 'react';

import Screen from './Screen';
import TouchControl from './TouchControl';

import { toStringOperation } from '../utils';
import * as api from '../api';

export default class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = { screenText: '' };
  }
  handleNumberClick(i){
    const { screenText } = this.state;
    this.setState({ screenText: screenText + i });
  }
  handleOperationClick(op){
    const { screenText } = this.state;
    this.setState({ screenText: `${screenText} ${op} ` });
  }
  handleEqualClick(){
    const { screenText } = this.state;
    const [allMatch, op1, op, op2] = /(\d*)(\W*)(\d*)/.exec(screenText);
    api[toStringOperation(op.trim())].apply(null, [op1, op2]).then(({ result }) => {
      this.setState({ screenText: result });
    });
  }
  handeACClick(){
    const { screenText } = this.state;
    this.setState({ screenText: '' });
  }
  render(){
    return <div className="calculator-container">
      <Screen text={this.state.screenText}/>
      <TouchControl
        handleNumberClick={this.handleNumberClick.bind(this)}
        handleOperationClick={this.handleOperationClick.bind(this)}
        handleEqualClick={this.handleEqualClick.bind(this)}
        handleACClick={this.handeACClick.bind(this)} />
    </div>
  }
}
