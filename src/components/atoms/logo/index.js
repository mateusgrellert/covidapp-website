import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import styles from './styles.module.css'

const Logo = () => {
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "icons/logo.svg" }) {
          publicURL
        }
      }
    `
  )

  return (
    <Link to="/">
      <img
        className={styles.logo}
        src={logo.publicURL}
        alt="Escudo azul defendendo do vírus em verde."
      />
    </Link>
  )
}

export default Logo
