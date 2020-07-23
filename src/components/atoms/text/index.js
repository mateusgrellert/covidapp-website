import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.css'

const Text = ({ children, className }) => (
  <p className={classnames(className, styles.text)}>{children}</p>
)

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Text.defaultProps = {
  className: undefined,
}

export default Text
