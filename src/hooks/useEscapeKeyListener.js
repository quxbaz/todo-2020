import {useEffect} from 'react'

const useEscapeKeyListener = (fn, deps=[]) => {

  const handleEscape = (event) => {
    if (event.key === 'Escape')
      fn()
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, deps)

}

export default useEscapeKeyListener
