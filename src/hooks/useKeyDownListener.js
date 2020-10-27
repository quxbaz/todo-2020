import {useEffect} from 'react'

const useKeyDownListener = (fn, deps=[]) => {

  const handleKeyDown = (event) => fn(event)

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, deps)

}

export default useKeyDownListener
