import React from "react";
import { useRepos } from "../../src";

const Repos = () => {
  const { repos, loading, error } = useRepos("bdbch");

  return (
    <div>
      <h1>Repos by username</h1>
      {loading && <div>Loading repositories from Github</div>}
      {error && <div>{error}</div>}
      {repos &&
        repos.length > 0 &&
        repos.map(repo => (
          <div key={repo.id}>
            <h4>{repo.name}</h4>
            {repo.description && <p>{repo.description}</p>}
          </div>
        ))}
    </div>
  );
};

export default Repos;
