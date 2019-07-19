import {
  useState,
  useEffect
} from 'react'

export const useBranch = (owner, repo, branchName) => {
  const [branch, setBranch] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (repo && repo.length > 0 && owner && owner.length && branchName && branchName.length > 0) {
      setLoading(true)
      setError(null)
      fetch(`https://api.github.com/repos/${owner}/${repo}/branches/${branchName}`)
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          setBranch(data)
          setError(null)
        })
        .catch(e => {
          setLoading(false)
          setBranch(null)
          setError(e)
        })
    }
  }, [owner, repo, branchName])

  return {
    branch,
    loading,
    error
  }
}
