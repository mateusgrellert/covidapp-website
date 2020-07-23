import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const Input = ({
  className,
  placeholder,
  onChange,
  value,
  name,
  id,
  autoComplete,
  onBlur,
  type,
  required,
}) => (
  <input
    className={classnames(className, styles.input)}
    id={id}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    autoComplete={autoComplete}
    name={name}
    onBlur={onBlur}
    type={type}
    required={required}
  />
)

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
}

Input.defaultProps = {
  className: undefined,
  placeholder: undefined,
  value: undefined,
  autoComplete: undefined,
  onChange: undefined,
  onBlur: undefined,
  type: undefined,
  required: undefined,
}

export default Input
