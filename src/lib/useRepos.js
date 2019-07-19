import {
  useState,
  useEffect
} from 'react'

export default function useRepos(githubUserName) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  if (!githubUserName) return repos

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.github.com/users/${githubUserName}/repos`)
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setRepos(data)
      })
      .catch(err => {
        setRepos([])
        setError(err)
      })
  }, [githubUserName])

  return {
    repos,
    loading,
    error
  }
}
