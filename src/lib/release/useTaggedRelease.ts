import { useEffect, useState } from "react";

import { IReleaseResponse } from "../..";

export default function useTaggedRelease(
  owner: string,
  repo: string,
  tag: string
): IReleaseResponse {
  const [release, setRelease] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  if (!owner || !repo || !tag) return { release, loading, error };

  useEffect(() => {
    if (
      owner &&
      owner.length > 0 &&
      repo &&
      repo.length > 0 &&
      tag &&
      tag.length > 0
    ) {
      setError(undefined);
      setLoading(true);

      fetch(
        `https://api.github.com/repos/${owner}/${repo}/releases/tags/${tag}`
      )
        .then(res => res.json())
        .then(data => {
          setLoading(false);
          setRelease(data);
        })
        .catch(e => {
          setLoading(false);
          setRelease(null);
          setError(e);
        });
    }
  }, [owner, repo]);

  return {
    release,
    loading,
    error
  };
}
