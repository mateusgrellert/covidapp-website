import { useRef, useEffect } from 'react'

const useOnClickOutside = (onClickOutside, deps = [], shouldListen = true) => {
  const ref = useRef()
  const handleClickOutside = ({ target }) => {
    if (ref.current && !ref.current.contains(target)) {
      onClickOutside()
    }
  }

  const handleKeyDown = ({ key }) => {
    if (key === 'Escape') {
      onClickOutside()
    }
  }

  const addEventListeners = () => {
    if (shouldListen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('keydown', handleClickOutside)
      }
    }
    return () => {}
  }

  useEffect(addEventListeners, [deps])

  return ref
}

export default useOnClickOutside
