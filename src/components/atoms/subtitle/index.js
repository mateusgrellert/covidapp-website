import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.css'

const Subtitle = ({ children, className, alignment }) => (
  <h2 className={classnames(styles.subtitle, className, styles[alignment])}>{children}</h2>
)

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  alignment: PropTypes.oneOf(['right', 'left', 'center']),
}

Subtitle.defaultProps = {
  className: undefined,
  alignment: 'left',
}

export default Subtitle
