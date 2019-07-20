import {
  useState,
  useEffect
} from 'react'

export default function useForks(owner, repo) {
  const [forks, setForks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (repo && repo.length > 0 && owner && owner.length) {
      setLoading(true)
      setError(null)
      fetch(`https://api.github.com/repos/${owner}/${repo}/forks`)
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          setForks(data)
          setError(null)
        })
        .catch(e => {
          setLoading(false)
          setForks([])
          setError(e)
        })
    }
  }, [owner, repo])

  return {
    forks,
    loading,
    error
  }
}
