import should from 'should';
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import 'should-sinon';

import Calculator from '../../components/Calculator';
import * as api from '../../api';

describe('<Calculator />', () => {
  it('should be initiated correctly', () => {
    const wrapper = mount(<Calculator />);
    wrapper.state().should.eql({ screenText: '' });
  });
  it('should render correctly', () => {
    const wrapper = mount(<Calculator />);
    wrapper.find('.calculator-container').should.have.lengthOf(1);
    wrapper.find('.calculator-container').children().should.have.lengthOf(2);
  });
  it('should handle a click on a number', () => {
    const wrapper = mount(<Calculator />);
    wrapper.find('.touch-9').simulate('click')
    wrapper.state().should.eql({ screenText: '9' });
  });
  it('should handle a click on an operation', () => {
    const wrapper = mount(<Calculator />);
    wrapper.setState({ screenText: '9' })
    wrapper.find('.touch-*').simulate('click');
    wrapper.state().should.eql({ screenText: '9 * ' });
  });
  it('should handle a click on equal', () => {
    const multStub = sinon.stub(api, 'mult')
      .returns(new Promise((res, rej) => res({ result: 0 })));
    const wrapper = mount(<Calculator />);
    wrapper.setState({ screenText: '9 * 23' })
    wrapper.find('.touch-=').simulate('click');
    api.mult.should.be.calledWith('9', '23');
    api.mult.restore();
  });
  it('should handle a click on the AC button', () => {
    const wrapper = mount(<Calculator />);
  });
});
