import React from "react";
import { useLatestRelease } from "../../src";

const LatestRelease = () => {
  const { release, loading, error } = useLatestRelease("facebook", "react");

  return (
    <div>
      <h1>Latest release by repo</h1>
      {loading && <div>Loading release from Github</div>}
      {error && <div>{error}</div>}
      {release && (
        <div>
          <h4>
            <a
              href={release.html_url}
              target="_blank"
              rel="nofollow noreferrer"
            >
              {release.name}
            </a>
          </h4>
          <div>{release.body}</div>
        </div>
      )}
    </div>
  );
};

export default LatestRelease;
