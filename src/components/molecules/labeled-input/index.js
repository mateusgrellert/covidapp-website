import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Input from '_atoms/input'

import styles from './styles.module.css'

const LabeledInput = ({
  className,
  label,
  placeholder,
  onChange,
  value,
  name,
  id,
  autoComplete,
  inputClass,
  onBlur,
  type,
  required,
}) => (
  <label className={classnames(className, styles.inputWrapper)} htmlFor={id}>
    <p className={styles.label}>{label}</p>
    <Input
      className={inputClass}
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
  </label>
)

LabeledInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  inputClass: PropTypes.string,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  required: PropTypes.bool,
}

LabeledInput.defaultProps = {
  type: 'text',
  className: undefined,
  inputClass: undefined,
  placeholder: undefined,
  value: undefined,
  autoComplete: undefined,
  onChange: undefined,
  onBlur: undefined,
  required: undefined,
}

export default LabeledInput
