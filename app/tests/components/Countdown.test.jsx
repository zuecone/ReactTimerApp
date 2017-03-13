var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

    describe('handleSetCountDown', () => {
      it('should set state to started and count down',(done) =>{
        var countDown = TestUtils.renderIntoDocument(<Countdown/>);
        countDown.handleSetCountDown(10);
        expect(countDown.state.count).toBe(10);
        expect(countDown.state.countdownStatus).toBe('started');

        setTimeout(() => {
          expect(countDown.state.count).toBe(8);
          done();
        },2001)
      });

      it('should not count down past 0',(done) =>{
        var countDown = TestUtils.renderIntoDocument(<Countdown/>);
        countDown.handleSetCountDown(1);
        expect(countDown.state.count).toBe(1);
        expect(countDown.state.countdownStatus).toBe('started');

        setTimeout(() => {
          expect(countDown.state.count).toBe(0);
          done();
        },3001)
      });

      it('should pause countdown on paused status',(done) =>{
        var countDown = TestUtils.renderIntoDocument(<Countdown/>);
        countDown.handleSetCountDown(3);
        countDown.handleStatusChange('paused');

        setTimeout(() => {
          expect(countDown.state.count).toBe(3);
          expect(countDown.state.countdownStatus).toBe('paused');
          done();
        },1001)
      });

      it('should reset count on stopped',(done) =>{
        var countDown = TestUtils.renderIntoDocument(<Countdown/>);
        countDown.handleSetCountDown(3);
        countDown.handleStatusChange('stopped');

        setTimeout(() => {
          expect(countDown.state.count).toBe(0);
          expect(countDown.state.countdownStatus).toBe('stopped');
          done();
        },1001)
      });
    });
});
