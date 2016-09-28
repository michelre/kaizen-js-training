import should from 'should';

import { toStringOperation } from '../../utils';

describe('Utils', () => {
  it('should return a string corresponding to an operation', () => {
    toStringOperation('+').should.eql('add');
    toStringOperation('-').should.eql('sub');
    toStringOperation('*').should.eql('mult');
    toStringOperation('/').should.eql('div');
  });
});
