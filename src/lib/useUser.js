import {
  useState,
  useEffect
} from 'react'

export default function useUser(githubUserName) {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  if (!githubUserName) return user

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.github.com/users/${githubUserName}`)
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setUser(data)
      })
      .catch(err => {
        setRepos([])
        setError(err)
      })
  }, [githubUserName])

  return {
    user,
    loading,
    error
  }
}
