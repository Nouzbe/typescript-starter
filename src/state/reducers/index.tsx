import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from "../../constants";
import { StoreState } from "../../types";
import { EnthusiasmAction } from "../actions";

export const enthusiasm = (
  state: StoreState,
  action: EnthusiasmAction
): StoreState => {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel - 1 };
    default:
      return state;
  }
};
