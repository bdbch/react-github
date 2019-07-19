import React from "react";
import { render } from "react-dom";
import Repos from "./components/Repos";
import User from "./components/User";

function App() {
  return (
    <div>
      <Repos />
      <hr />
      <User />
      <hr />
    </div>
  );
}

render(<App />, window.root);
