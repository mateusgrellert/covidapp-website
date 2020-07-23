import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import useMedia from 'use-media'
import classnames from 'classnames'

import Description from './description'
import styles from './styles.module.css'

const Card = ({ className, href, name, description, fluid }) => {
  const [active, setActive] = useState(false)
  const mobile = useMedia({ maxWidth: 768 })

  const hasContent = !!description || !!href

  const onMouseEnter = () => {
    if (!mobile && hasContent && !active) setActive(true)
  }
  const onMouseLeave = () => {
    if (!mobile && hasContent && active) setActive(false)
  }

  const onClick = () => mobile && hasContent && setActive(!active)

  return (
    <div className={classnames(className, styles.card)}>
      <Description active={active} onMouseLeave={onMouseLeave}>
        <div
          className={styles.hero}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          role="presentation"
        >
          <Image fluid={fluid} />
        </div>
        <p>{name}</p>
        <p className={styles.descriptionText}>{description}</p>
        {href && (
          <a href={href} rel="noopener noreferrer" target="_blank" className={styles.link}>
            Saiba Mais
          </a>
        )}
      </Description>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  fluid: PropTypes.instanceOf(Object).isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
}

Card.defaultProps = {
  className: undefined,
  href: undefined,
  description: undefined,
}

export default Card
