import {
  useState,
  useEffect
} from 'react'

export default function useCollaborators(owner, repo) {
  const [collaborators, setCollaborators] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (repo && repo.length > 0 && owner && owner.length) {
      setLoading(true)
      setError(null)
      fetch(`https://api.github.com/repos/${owner}/${repo}/collaborators`)
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          setCollaborators(data)
          setError(null)
        })
        .catch(e => {
          setLoading(false)
          setCollaborators([])
          setError(e)
        })
    }
  }, [owner, repo])

  return {
    collaborators,
    loading,
    error
  }
}
