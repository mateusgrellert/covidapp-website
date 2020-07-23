import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.css'

const SectionContainer = ({ children, primary, className, id, clean }) => (
  <section
    id={id}
    className={classnames(styles.container, className, {
      [styles.primary]: primary,
      [styles.clean]: clean,
    })}
  >
    {children}
  </section>
)

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  clean: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  primary: PropTypes.bool,
}

SectionContainer.defaultProps = {
  primary: false,
  className: undefined,
  id: undefined,
  clean: undefined,
}

export default SectionContainer
