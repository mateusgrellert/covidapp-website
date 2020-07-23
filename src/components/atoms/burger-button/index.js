import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const BurgerButton = ({ active, onClick, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={classnames(className, styles.burgerBtn, { [styles.active]: active })}
  >
    <span />
    <span />
    <span />
  </button>
)

BurgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
  className: PropTypes.string,
}

BurgerButton.defaultProps = {
  active: undefined,
  className: undefined,
}

export default BurgerButton
