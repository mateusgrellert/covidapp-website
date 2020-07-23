import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const OL = ({ children }) => <ol className={styles.customOl}>{children}</ol>

OL.propTypes = {
  children: PropTypes.node.isRequired,
}

export default OL
