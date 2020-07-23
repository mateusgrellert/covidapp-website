import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const UL = ({ children }) => <ul className={styles.customUL}>{children}</ul>

UL.propTypes = {
  children: PropTypes.node.isRequired,
}

export default UL
