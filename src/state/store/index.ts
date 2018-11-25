import { createStore } from "redux";
import { StoreState } from "../../types";
import { EnthusiasmAction } from "../actions";
import { enthusiasm } from "../reducers";

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: "TypeScript",
});

export default store;
