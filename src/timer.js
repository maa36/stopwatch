import React from "react";
import "./timer.css";
import "./App.css";
import Result from "./result";
import 'bootstrap/dist/css/bootstrap.min.css';


class Timer extends React.Component {

  constructor(propos) {
    super(propos);
    this.state = {
      timer: 0,
      d: false,
      incr: setInterval(this.increment, 1000)
    };
  }

  increment = () => {
    if (this.state.d === true) {
      this.setState({timer: this.state.timer + 1});
    }
  }

  start = () => {
    this.setState({d: true});
  }

  stop = () => {
    this.setState({d: false});
  };

  reset = () => {
    this.setState({timer: 0, d: false});
  };

  render() {
    return (
      <div className="principal">
        <div className="App">
          <div className="Number">
            <Result val={this.state.timer} />
          </div>
          <div className="nom">
            <h3>HH : MM : SS</h3>
          </div>
        </div>
        <div className="blocButton">
          <button type="button" onClick={this.start} className="btn btn-outline-success">Start</button>
          <button type="button" onClick={this.stop} className="btn btn-outline-primary">Pause</button>
          <button type="button" onClick={this.reset} className="btn btn-outline-danger">Reset</button>
        </div>
      </div>
    );
  }
}

export default Timer;
