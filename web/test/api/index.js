import should from 'should';
import sinon from 'sinon';
import 'should-sinon';
import $ from 'jquery';

import { add, sub, mult, div } from '../../api';

describe('API', () => {
  /*before(() => {
    sinon.stub($, 'get');
  });
  after(() => {
    $.get.restore();
  });*/
  it('should call get function from jQuery with the right URL (add)', () => {
    console.log($);
    sinon.stub($, 'get');
    add(1, 2);
    $.get.should.be.calledWith('/add/1/2');
    $.get.restore();
  });
  /*it('should call get function from jQuery with the right URL (sub)', () => {
    sub(1, 2);
    $.get.should.be.calledWith('/sub/1/2');
  });
  it('should call get function from jQuery with the right URL (mult)', () => {
    mult(1, 2);
    $.get.should.be.calledWith('/mult/1/2');
  });
  it('should call get function from jQuery with the right URL (div)', () => {
    div(1, 2);
    $.get.should.be.calledWith('/div/1/2');
  });*/
});
