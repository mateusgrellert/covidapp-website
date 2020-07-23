import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.css'

const ArrowButton = ({ onClick, direction, ariaLabel, className }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    className={classnames(styles.arrowBtn, className, styles[direction])}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="9.604" height="16" viewBox="0 0 9.604 16">
      <path
        fill="#fff"
        d="M.216,13.787,5.445,8.558a.826.826,0,0,0,0-1.167L.216,2.163A.826.826,0,0,1,.216,1L1,.216a.826.826,0,0,1,1.167,0L9.338,7.392a.826.826,0,0,1,0,1.167L2.163,15.734a.826.826,0,0,1-1.167,0l-.78-.78A.826.826,0,0,1,.216,13.787Z"
        transform="translate(0.025 0.025)"
      />
    </svg>
  </button>
)

ArrowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
}

ArrowButton.defaultProps = {
  direction: 'left',
  className: undefined,
}

export default ArrowButton
