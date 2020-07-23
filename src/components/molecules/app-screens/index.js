import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import styles from './styles.module.css'

const AppScreens = () => {
  const { files } = useStaticQuery(graphql`
    query {
      files: allFile(
        filter: { extension: { regex: "/png/" }, relativeDirectory: { eq: "app-screens" } }
      ) {
        edges {
          node {
            childImageSharp {
              fixed(
                width: 191
                height: 329
                traceSVG: { background: "#fafafa", color: "#fafafa" }
              ) {
                originalName
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const screens = files.edges.map(edge => edge.node.childImageSharp.fixed)

  return (
    <div className={styles.screensWrapper}>
      {screens.map(fixed => (
        <Image key={fixed.originalName} fixed={fixed} />
      ))}
    </div>
  )
}

export default AppScreens
