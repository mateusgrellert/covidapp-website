import { useState, useLayoutEffect, useRef } from 'react'

const useCollapse = (initialCollapsed = true) => {
  const [maxHeight, setMaxHeight] = useState()
  const [height, setHeight] = useState()
  const [collapsed, setCollapsed] = useState(initialCollapsed)

  const ref = useRef()

  const onLoad = () => {
    if (ref.current) {
      const { offsetHeight } = ref.current

      setMaxHeight(offsetHeight)
      setHeight(initialCollapsed ? 0 : offsetHeight)
    }
  }

  const toggle = () => {
    setHeight(collapsed ? maxHeight : 0)
    setCollapsed(!collapsed)
  }

  useLayoutEffect(onLoad, [])

  return [ref, height, toggle, collapsed]
}

export default useCollapse
