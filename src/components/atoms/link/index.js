import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Link as GLink } from 'gatsby'

import styles from './styles.module.css'

const TYPES = ['default', 'button']

const Link = ({ to, href, children, className, target, disabled, type, rel }) => {
  const linkClassName = classnames(
    styles.link,
    className,
    { [styles.disabled]: disabled },
    styles[type]
  )

  const onClick = () => disabled

  if (href) {
    return (
      <a onClick={onClick} rel={rel} target={target} href={href} className={linkClassName}>
        {children}
      </a>
    )
  }

  return (
    <GLink onClick={onClick} className={linkClassName} to={to}>
      {children}
    </GLink>
  )
}

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  target: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(TYPES),
  rel: PropTypes.string,
}

Link.defaultProps = {
  type: 'default',
  to: undefined,
  href: undefined,
  className: undefined,
  target: undefined,
  disabled: undefined,
  rel: undefined,
}

export default Link
