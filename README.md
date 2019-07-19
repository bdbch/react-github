# `@d2k/react-github`

> React hooks for Github API integrations

> You'll need to install `react`, `react-dom`, etc at `^16.8.4`

## Install

```sh
npm i @d2k/react-github --save
```

## Usage

### Get repos by username

```js
import { useRepos } from "@d2k/react-github";

function MyComponent() {
  const { repos, loading, error } = useRepos("nat");

  return (
    <div>
      {loading && <div>Loading repositories</div>}
      {error && <div>{err}</div>}
      {repos &&
        repos.length > 0 &&
        repos.map(repo => <div key={repo.id}>{repo.name}</div>)}
    </div>
  );
}
```

### Get user

```js
import { useUser } from "@d2k/react-github";

function MyComponent() {
  const { user, loading, error } = useUser("nat");

  return (
    <div>
      {loading && <div>Loading repositories</div>}
      {error && <div>{err}</div>}
      {user && (
        <div>
          <h1>{user.login}</h1>
          <img src={user.avatar_url} />
        </div>
      )}
    </div>
  );
}
```
