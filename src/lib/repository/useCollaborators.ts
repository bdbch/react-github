import { useEffect, useState } from "react";

import { ICollaboratorsResponse } from "../..";

export default function useCollaborators(
  owner: string,
  repo: string
): ICollaboratorsResponse {
  const [collaborators, setCollaborators] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  if (!owner || !repo) return { collaborators, loading, error };

  useEffect(() => {
    if (repo && repo.length > 0 && owner && owner.length) {
      setLoading(true);
      setError(undefined);
      fetch(`https://api.github.com/repos/${owner}/${repo}/collaborators`)
        .then(res => res.json())
        .then(data => {
          setLoading(false);
          setCollaborators(data);
          setError(undefined);
        })
        .catch(e => {
          setLoading(false);
          setCollaborators([]);
          setError(e);
        });
    }
  }, [owner, repo]);

  return {
    collaborators,
    loading,
    error
  };
}
