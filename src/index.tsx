import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

const root = document.getElementById("root") as HTMLElement;

const render = <P extends object>(Component: React.ComponentType<P>) => {
  ReactDOM.render(<Component />, root);
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(<NextApp />, root);
  });
}

registerServiceWorker();
