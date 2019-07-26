import { useEffect, useState } from "react";

import { IBranchResponse } from "../..";

export default function useBranch(
  owner: string,
  repo: string,
  branchName: string
): IBranchResponse {
  const [branch, setBranch] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  if (!owner || !repo || !branchName) return { branch, loading, error };

  useEffect(() => {
    if (
      repo &&
      repo.length > 0 &&
      owner &&
      owner.length &&
      branchName &&
      branchName.length > 0
    ) {
      setLoading(true);
      setError(null);
      fetch(
        `https://api.github.com/repos/${owner}/${repo}/branches/${branchName}`
      )
        .then(res => res.json())
        .then(data => {
          setLoading(false);
          setBranch(data);
          setError(null);
        })
        .catch(e => {
          setLoading(false);
          setBranch(null);
          setError(e);
        });
    }
  }, [owner, repo, branchName]);

  return {
    branch,
    loading,
    error
  };
}
