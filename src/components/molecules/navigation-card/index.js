import React from 'react'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const NavigationCard = ({ to, fluid, title, call, text }) => {
  return (
    <Link to={to}>
      <BackgroundImage className={styles.cardWrapper} fluid={fluid}>
        <div className={styles.cardContent}>
          <h3 className={styles.cardCall}>{call}</h3>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardText}>{text}</p>
        </div>
      </BackgroundImage>
    </Link>
  )
}

NavigationCard.propTypes = {
  to: PropTypes.string.isRequired,
  fluid: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  call: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default NavigationCard
