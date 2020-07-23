import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.css'

const Title = ({ children, className, alignment }) => (
  <h1 className={classnames(styles.title, className, styles[alignment])}>{children}</h1>
)

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  alignment: PropTypes.oneOf(['right', 'left', 'center']),
}

Title.defaultProps = {
  className: undefined,
  alignment: 'left',
}

export default Title
