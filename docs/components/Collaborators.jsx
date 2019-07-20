import React from "react";
import { useCollaborators } from "../../src";

const Forks = () => {
  const { collaborators, loading, error } = useCollaborators(
    "facebook",
    "react"
  );

  return (
    <div>
      <h1>Collaborators by repo</h1>
      {loading && <div>Loading collaborators from Github</div>}
      {error && <div>{error}</div>}
      {collaborators &&
        collaborators.length > 0 &&
        collaborators.map(collaborator => (
          <div key={collaborator.id}>
            <h4>{collaborator.login}</h4>
          </div>
        ))}
    </div>
  );
};

export default Forks;
