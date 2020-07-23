import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.css'

const DownArrow = ({ active, className, position }) => (
  <svg
    className={classnames(styles.downArrow, className, styles[position], {
      [styles.active]: active,
    })}
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="10.805"
    viewBox="0 0 18 10.805"
  >
    <g transform="translate(0 10.805) rotate(-90)">
      <g transform="translate(0 0)">
        <path
          fill="#151e3c"
          d="M10.534,2.461,4.651,8.344a.929.929,0,0,0,0,1.313l5.882,5.882a.929.929,0,0,1,0,1.313l-.877.877a.929.929,0,0,1-1.313,0L.271,9.656a.929.929,0,0,1,0-1.313L8.344.271a.929.929,0,0,1,1.313,0l.877.877A.929.929,0,0,1,10.534,2.461Z"
        />
      </g>
    </g>
  </svg>
)
DownArrow.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  position: PropTypes.oneOf(['up', 'down', 'right', 'left']),
}

DownArrow.defaultProps = {
  active: false,
  className: undefined,
  position: undefined,
}

export default DownArrow
