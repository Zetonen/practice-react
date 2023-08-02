import React from "react";
import { Control } from "./Control";
export class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  //   constructor() {
  //     super();
  //     this.state = {
  //       value: 2,
  //     };
  //   }

  // Магію що вище транспілювали bable тим що нижче
  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  };
  handleDecrement = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };
  render() {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="card bg-dark text-white" style={{ width: "600px" }}>
          <div className="card-body">
            <h5 className="card-title text-center fs-1">Counter</h5>
            <p className="card-text text-center" style={{ fontSize: "80px" }}>
              {this.state.value}
            </p>
            <Control
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            />
          </div>
        </div>
      </div>
    );
  }
}
