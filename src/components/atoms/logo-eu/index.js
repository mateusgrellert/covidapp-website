import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import styles from './styles.module.css'

const LogoEU = () => {
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "icons/logo_EU.png" }) {
          publicURL
        }
      }
    `
  )

  return (
    <a href="https://coronavirus-outbreak-control.github.io/web/">
      <img className={styles.logo} src={logo.publicURL} alt="Logo do App europeu." />
    </a>
  )
}

export default LogoEU
