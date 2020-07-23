import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Link } from '_atoms'

import styles from './styles.module.css'

const BreadCrumb = ({ path, current, className }) => (
  <p className={classnames(className, styles.breadCrumb)}>
    {path.map(page => (
      <>
        {' '}
        <Link to={page.href}>{page.name}</Link>
        {' > '}
      </>
    ))}
    <span>{current}</span>
  </p>
)

BreadCrumb.propTypes = {
  path: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, href: PropTypes.string }))
    .isRequired,
  current: PropTypes.string.isRequired,
  className: PropTypes.string,
}

BreadCrumb.defaultProps = {
  className: undefined,
}

export default BreadCrumb
