import {
  useState,
  useEffect
} from 'react'

export default function useTaggedRelease(owner, repo, tag) {
  const [release, setRelease] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (owner && owner.length > 0 && repo && repo.length > 0 && tag && tag.length > 0) {
      setError(null)
      setLoading(true)

      fetch(`https://api.github.com/repos/${owner}/${repo}/releases/tags/${tag}`)
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          setRelease(data)
        })
        .catch(e => {
          setLoading(false)
          setRelease(null)
          setError(e)
        })
    }
  }, [owner, repo])

  return {
    release,
    loading,
    error
  }
}
