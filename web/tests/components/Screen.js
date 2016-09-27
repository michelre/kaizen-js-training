import should from 'should';
import React from 'react';
import { shallow } from 'enzyme';

import Screen from '../../components/Screen';

describe('<Screen />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Screen text='foo'/>);
    wrapper.find('p').text().should.eql('foo');
  });
});
