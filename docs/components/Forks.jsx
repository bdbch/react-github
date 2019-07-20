import React from "react";
import { useForks } from "../../src";

const Forks = () => {
  const { forks, loading, error } = useForks("facebook", "react");

  return (
    <div>
      <h1>Forks by repo</h1>
      {loading && <div>Loading forks from Github</div>}
      {error && <div>{error}</div>}
      {forks &&
        forks.length > 0 &&
        forks.map(fork => (
          <div key={fork.id}>
            <h4>{fork.full_name}</h4>
          </div>
        ))}
    </div>
  );
};

export default Forks;
