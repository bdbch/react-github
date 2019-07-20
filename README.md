# `@d2k/react-github`

> React hooks for Github API integrations

> You'll need to install `react`, `react-dom`, etc at `^16.8.4`

# [Open Demo](https://d2k-react-github.netlify.com/)

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

  // your component
}
```

### Get user

```js
import { useUser } from "@d2k/react-github";

function MyComponent() {
  const { user, loading, error } = useUser("nat");

  // your component
}
```

### Get branches from repo

```js
import { useBranches } from "@d2k/react-github";

function MyComponent() {
  const { branches, loading, error } = useBranches("facebook", "react");

  // your component
}
```

### Get branch from repo

```js
import { useBranch } from "@d2k/react-github";

function MyComponent() {
  const { branch, loading, error } = useBranch("facebook", "react", "master");

  // your component
}
```

### Get latest release from repo

```js
import { useLatestRelease } from "@d2k/react-github";

function MyComponent() {
  const { release, loading, error } = useLatestRelease("facebook", "react");

  // your component
}
```

### Get release by tag from repo

```js
import { useTaggedRelease } from "@d2k/react-github";

function MyComponent() {
  const { release, loading, error } = useTaggedRelease(
    "facebook",
    "react",
    "v16.8.4"
  );

  // your component
}
```

### List forks from repo

```js
import { useForks } from "@d2k/react-github";

function MyComponent() {
  const { forks, loading, error } = useForks("facebook", "react");

  // your component
}
```
