import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const MainContainer = ({ children }) => <main className={styles.container}>{children}</main>

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainContainer
