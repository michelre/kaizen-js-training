import should from 'should';
import React from 'react';
import { shallow } from 'enzyme';

import TouchControl from '../../components/TouchControl';

describe('<TouchControl />', () => {
  it('should render correctly', () => {
    const props = {
      handleNumberClick: () => {},
      handleOperationClick: () => {},
      handleACClick: () => {},
      handleEqualClick: () => {},
    }
    const wrapper = shallow(<TouchControl {...props}/>);
    wrapper.find('.touch-numbers').children().length.should.eql(6);
    wrapper.find('.touch-control').children().length.should.eql(4);
  });
});
