interface IGithubRepoPermissions {
  admin: boolean;
  push: boolean;
  pull: boolean;
}

interface IGithubLicense {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
}

interface IGithubOrganization {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface IGithubBaseUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: "User";
  site_admin: boolean;
}

interface IGithubUser extends IGithubBaseUser {
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

interface IGithubRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: IGithubBaseUser;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  notifications_url: string;
  pulls_url: string;
  releases_url: string;
  ssh_url: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  clone_url: string;
  mirror_url: string;
  hooks_url: string;
  svn_url: string;
  homepage: string;
  language?: string;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  size: number;
  default_branch: string;
  open_issues_count: number;
  is_template: boolean;
  topics: string[];
  has_issues: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_downloads: boolean;
  archived: boolean;
  disabled: boolean;
  pushed_at: string;
  created_at: string;
  updated_at: string;
  permissions: IGithubRepoPermissions;
  allow_rebase_merge: boolean;
  template_repository?: string;
  allow_squash_merge: boolean;
  allow_merge_commit: boolean;
  subscribers_count: number;
  network_count: number;
  license: IGithubLicense;
  organization?: IGithubOrganization;
  parent?: IGithubRepo;
}

interface IUserResponse {
  user?: IGithubUser;
  loading: boolean;
  error?: string;
}

interface IReposResponse {
  repos?: IGithubRepo[];
  loading: boolean;
  error?: string;
}

interface IBranchResponse {
  branch?: any;
  loading: boolean;
  error?: string;
}

interface IBranchesResponse {
  branches?: any[];
  loading: boolean;
  error?: string;
}

interface IReleaseResponse {
  release?: any;
  loading: boolean;
  error?: string;
}

interface ICollaboratorsResponse {
  collaborators?: any[];
  loading: boolean;
  error?: string;
}

interface IForksResponse {
  forks?: any[];
  loading: boolean;
  error?: string;
}

declare function useUser(githubUserName: string): IUserResponse;
declare function useRepos(githubUserName: string): IReposResponse;
declare function useBranch(
  owner: string,
  repo: string,
  branch: string
): IBranchResponse;
declare function useBranches(owner: string, repo: string): IBranchesResponse;
declare function useLatestRelease(
  owner: string,
  repo: string
): IReleaseResponse;
declare function useTaggedRelease(
  owner: string,
  repo: string
): IReleaseResponse;
declare function useCollaborators(
  owner: string,
  repo: string
): ICollaboratorsResponse;
declare function useForks(owner: string, repo: string): IForksResponse;
