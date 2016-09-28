import React from 'react';
import R from 'ramda';

const handleClick = (props) => {
  if(R.has('handleNumberClick', props)){
    props.handleNumberClick(props.text);
  }
  if(R.has('handleOperationClick', props)){
    props.handleOperationClick(props.text);
  }
  if(R.has('handleEqualClick', props)){
    props.handleEqualClick(props.text);
  }
  if(R.has('handleACClick', props)){
    props.handleACClick();
  }
}

const Touch = (props) => {
  const { text } = props;
  return <div className={`touch touch-${text}`} onClick={() => handleClick(props)}>
    <p className='content'>{text}</p>
  </div>
};

export default Touch;
