import React from "react";
import { useUser } from "../../src";

const Repos = () => {
  const { user, loading, error } = useUser("bdbch");

  return (
    <div>
      <h1>User</h1>
      {loading && <div>Loading user from Github</div>}
      {error && <div>{error}</div>}
      {user && (
        <div>
          <h4>{user.login}</h4>
          <img src={user.avatar_url} />
        </div>
      )}
    </div>
  );
};

export default Repos;
