import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.css'

const Description = ({ children, active, onMouseLeave }) => (
  <div
    onMouseLeave={onMouseLeave}
    className={classnames(styles.description, { [styles.descriptionActive]: active })}
    role="presentation"
  >
    {children}
  </div>
)

Description.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  onMouseLeave: PropTypes.func.isRequired,
}

Description.defaultProps = {
  active: undefined,
}

export default Description
