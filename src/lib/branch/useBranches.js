import {
  useState,
  useEffect
} from 'react'

export const useBranches = (owner, repo) => {
  const [branches, setBranches] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (repo && repo.length > 0 && owner && owner.length) {
      setLoading(true)
      setError(null)
      fetch(`https://api.github.com/repos/${owner}/${repo}/branches`)
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          setBranches(data)
          setError(null)
        })
        .catch(e => {
          setLoading(false)
          setBranches([])
          setError(e)
        })
    }
  }, [owner, repo])

  return {
    branches,
    loading,
    error
  }
}
