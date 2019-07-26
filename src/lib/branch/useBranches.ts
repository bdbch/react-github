import { useEffect, useState } from "react";

import { IBranchesResponse } from "../..";

export default function useBranches(
  owner: string,
  repo: string
): IBranchesResponse {
  const [branches, setBranches] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  if (!owner || !repo) return { branches, loading, error };

  useEffect(() => {
    if (repo && repo.length > 0 && owner && owner.length) {
      setLoading(true);
      setError(null);
      fetch(`https://api.github.com/repos/${owner}/${repo}/branches`)
        .then(res => res.json())
        .then(data => {
          setLoading(false);
          setBranches(data);
          setError(null);
        })
        .catch(e => {
          setLoading(false);
          setBranches([]);
          setError(e);
        });
    }
  }, [owner, repo]);

  return {
    branches,
    loading,
    error
  };
}
