import React, { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import useMedia from 'use-media'

import DownArrow from '_atoms/down-arrow'
import useOnClickOutside from '_hooks/use-on-click-outside'

import styles from './styles.module.css'

const DropdownMenu = ({ children, label }) => {
  const [active, setActive] = useState(false)
  const mobile = useMedia({ maxWidth: 768 })

  const toggle = () => setActive(!active)
  const close = () => active && setActive(false)

  const ref = useOnClickOutside(close, [active], !mobile)

  return (
    <div ref={ref} className={styles.menuWrapper}>
      <button type="button" onClick={toggle} className={styles.menuBtn}>
        <p className={styles.menuBtnLabel}>{label}</p>
        <DownArrow position={active ? 'up' : 'down'} />
      </button>
      <div className={classnames(styles.menu, { [styles.menuActive]: active })}>
        <div className={styles.menuContent}>{children}</div>
      </div>
    </div>
  )
}

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
}

export default DropdownMenu
