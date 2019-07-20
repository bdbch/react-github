import React from "react";
import { useTaggedRelease } from "../../src";

const TaggedRelease = () => {
  const { release, loading, error } = useTaggedRelease(
    "facebook",
    "react",
    "v16.8.4"
  );

  return (
    <div>
      <h1>Tagged release by repo</h1>
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
              {release.tag_name}
            </a>
          </h4>
          <div>{release.body}</div>
        </div>
      )}
    </div>
  );
};

export default TaggedRelease;
