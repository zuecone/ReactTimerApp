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
    });
});
