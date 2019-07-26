import { useEffect, useState } from "react";

import { IGithubRepo, IReposResponse } from "..";

export default function useRepos(githubUserName: string): IReposResponse {
  const [repos, setRepos] = useState<IGithubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  if (!githubUserName) return { repos, loading, error };

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${githubUserName}/repos`)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setRepos(data);
      })
      .catch(err => {
        setRepos([]);
        setError(err);
      });
  }, [githubUserName]);

  return {
    repos,
    loading,
    error
  };
}
