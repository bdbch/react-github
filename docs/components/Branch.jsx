import React from "react";
import { useBranch } from "../../src";

const Branch = () => {
  const { branch, loading, error } = useBranch("facebook", "react", "master");

  return (
    <div>
      <h1>Branch by repo</h1>
      {loading && <div>Loading branch from Github</div>}
      {error && <div>{error}</div>}
      {branch && (
        <div>
          {branch.name} - {branch.commit.sha}
        </div>
      )}
    </div>
  );
};

export default Branch;
