import { useEffect, useState } from "react";

import { IGithubUser, IUserResponse } from "..";

export default function useUser(githubUserName: string): IUserResponse {
  const [user, setUser] = useState<IGithubUser | undefined>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  if (!githubUserName) return { user, loading, error };

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${githubUserName}`)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setUser(data);
      })
      .catch(err => {
        setUser(undefined);
        setError(err);
      });
  }, [githubUserName]);

  return {
    user,
    loading,
    error
  };
}
