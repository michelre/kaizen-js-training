import should from 'should';
import 'should-sinon';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Touch from '../../components/Touch';

describe('<Touch />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Touch text='foobar' />);
    wrapper.find('p').text().should.eql('foobar');
  });
  it('should handle click correctly', () => {
    const clickFn = sinon.stub();
    const wrapper = shallow(<Touch handleNumberClick={clickFn} />);
    wrapper.find('div.touch').simulate('click');
    clickFn.should.be.calledOnce();
  });
});
