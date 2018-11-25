import { Button } from "antd";
import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../../state/actions";
import { StoreState } from "../../types";

import "./Hello.css";

export interface Props {
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export interface State {
  name: string;
}

const getExclamationMarks = (numChars: number) => Array(numChars + 1).join("!");

export class UnpluggedHello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "Daniel",
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { enthusiasmLevel = 1, onIncrement, onDecrement }: Props = this.props;
    const { name }: State = this.state;
    if (enthusiasmLevel <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {`${name}${getExclamationMarks(enthusiasmLevel)}`}
        </div>
        <input value={name} onChange={this.handleChange} />
        <Button
          type="primary"
          className="decrement-button"
          onClick={onDecrement}
        >
          -
        </Button>
        <Button
          type="default"
          className="increment-button"
          onClick={onIncrement}
        >
          +
        </Button>
      </div>
    );
  }
}

export default connect(
  ({ enthusiasmLevel }: StoreState) => ({ enthusiasmLevel }),
  (dispatch: Dispatch<actions.EnthusiasmAction>) => ({
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  })
)(UnpluggedHello);
