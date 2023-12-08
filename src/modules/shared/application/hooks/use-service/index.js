import { useEffect, useState } from 'react'
import { usePrevious } from './use-previous'

export function useService (
  serviceFunction,
  {
    args,
    options
  } = { args: {}, options: { shouldFetch: true, onComplete: undefined } }
) {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null
  })

  const setLoading = (loading = false) => {
    setState(prevState => ({ ...prevState, loading }))
  }

  const setError = (error = null) => {
    setState(prevState => ({ ...prevState, error }))
  }

  const setData = (data = null) => {
    setState(prevState => ({ ...prevState, data }))
  }

  const performQuery = async newArgs => {
    setLoading(true)
    try {
      const data = await serviceFunction({ ...args, ...newArgs })
      setData(data)
      return data
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  // Needed to check only once the suspense config to avoid
  // an infinite loop
  const initialShouldFetch = usePrevious(options?.shouldFetch)

  useEffect(() => {
    if (options === undefined) {
      performQuery().then()
    } else if (options?.shouldFetch !== initialShouldFetch && !!options?.shouldFetch) {
      performQuery()
        .then(data => options.onComplete && options.onComplete({ data }))
        .catch(error => options.onComplete && options.onComplete({ error }))
    }
  }, [options])

  const reset = () => {
    setState({
      loading: true,
      data: null,
      error: null
    })
  }

  return { ...state, refetch: performQuery, reset }
}
