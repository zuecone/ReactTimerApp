var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      countdownStatus: 'stopped',
      count: 0
    };
  },
  componentDidUpdate: function(prevProps,prevState) {
    // console.log('previous state:' + prevState.countdownStatus);
    // console.log('current countdon status: ' + this.state.countdownStatus);
    if (this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  handleStatusChange: function(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },
  startTimer: function(){
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if(newCount === 0){
        this.setState({
          countdownStatus: 'stopped'
        });
      }
    },1000);
  },
  render: function(){
    var {countdownStatus, count} = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} clockType={'timer'} onStatusChage={this.handleStatusChange}/>;
      }else {
        return <Controls countdownStatus={countdownStatus} clockType={'timer'}  onStatusChage={this.handleStatusChange}/>;
      }
    };

    return (
      <div>
        <h1 class="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Timer;
