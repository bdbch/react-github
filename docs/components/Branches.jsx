import React from "react";
import { useBranches } from "../../src";

const Branches = () => {
  const { branches, loading, error } = useBranches("facebook", "react");

  return (
    <div>
      <h1>Branches by repo</h1>
      {loading && <div>Loading branches from Github</div>}
      {error && <div>{error}</div>}
      {branches &&
        branches.length > 0 &&
        branches.map(branch => (
          <div key={branch.commit.sha}>
            <h4>
              {branch.name} - {branch.commit.sha}
            </h4>
          </div>
        ))}
    </div>
  );
};

export default Branches;
