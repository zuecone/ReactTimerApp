var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChage: React.PropTypes.func.isRequired
  },
  onStatusChage: function(newStatus) {
    return () => {
      this.props.onStatusChage(newStatus);
    }
  },
  render: function(){
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if (countdownStatus === 'started'){
        return <button class="button secondary" onClick={this.onStatusChage('paused')}>Pause</button>
      }else if (countdownStatus === 'paused') {
        return <button class="button primary" onClick={this.onStatusChage('started')}>Start</button>
      }
    };

    return(
      <div class="controls">
        {renderStartStopButton()}
        <button class="button alert hollow" onClick={this.onStatusChage('stopped')}>Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
