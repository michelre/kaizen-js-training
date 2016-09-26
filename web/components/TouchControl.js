import React from 'react';
import R from 'ramda';

import Touch from './Touch';

const TouchControl = ({ handleNumberClick, handleACClick, handleOperationClick, handleEqualClick }) => {
  return <div>
    <div className="touch-numbers">
      <div>{R.map(i => <Touch key={i} text={i} handleNumberClick={handleNumberClick} />, R.range(7, 10))}</div>
      <div>{R.map(i => <Touch key={i} text={i} handleNumberClick={handleNumberClick} />, R.range(4, 7))}</div>
      <div>{R.map(i => <Touch key={i} text={i} handleNumberClick={handleNumberClick} />, R.range(1, 4))}</div>
      <Touch key='0' text='0' handleNumberClick={handleNumberClick} />
      <Touch key='AC' text='AC' handleACClick={handleACClick} />
      <Touch key='=' text='=' handleEqualClick={handleEqualClick} />
    </div>
    <div className="touch-control">
      <Touch key='/' text='/' handleOperationClick={handleOperationClick} />
      <Touch key='*' text='*' handleOperationClick={handleOperationClick} />
      <Touch key='+' text='+' handleOperationClick={handleOperationClick} />
      <Touch key='-' text='-' handleOperationClick={handleOperationClick} />
    </div>
  </div>
}

export default TouchControl;
