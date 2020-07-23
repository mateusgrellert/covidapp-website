import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import styles from './styles.module.css'

const AboutAppHero = () => {
  const { tutorial } = useStaticQuery(
    graphql`
      query {
        tutorial: file(relativePath: { eq: "app-tutorial.png" }) {
          childImageSharp {
            fluid(maxWidth: 1300, traceSVG: { background: "#fafafa", color: "#fafafa" }) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return <Image className={styles.hero} fluid={tutorial.childImageSharp.fluid} />
}

export default AboutAppHero
