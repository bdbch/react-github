import React from "react";
import { render } from "react-dom";
import Repos from "./components/Repos";
import User from "./components/User";
import Branches from "./components/Branches";
import Branch from "./components/Branch";
import LatestRelease from "./components/LatestRelease";
import TaggedRelease from "./components/TaggedRelease";
import Forks from "./components/Forks";
import Collaborators from "./components/Collaborators";

function App() {
  return (
    <div>
      <Repos />
      <hr />
      <User />
      <hr />
      <Branches />
      <hr />
      <Branch />
      <hr />
      <LatestRelease />
      <hr />
      <TaggedRelease />
      <hr />
      <Forks />
      <hr />
    </div>
  );
}

render(<App />, window.root);
