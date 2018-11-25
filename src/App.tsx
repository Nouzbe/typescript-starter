import * as React from "react";
import { Provider } from "react-redux";
import "./App.css";

import "antd/dist/antd.css";
import Hello from "./components/hello";
import store from "./state/store";

const App = () => (
  <Provider store={store}>
    <Hello />
  </Provider>
);

export default App;
