import React from 'react'
import Image from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { Title, Text, SectionContainer } from '_atoms'

import styles from './styles.module.css'

const AboutCovid = () => {
  const { screen } = useStaticQuery(graphql`
    query {
      screen: file(relativePath: { eq: "screen-banner.png" }) {
        childImageSharp {
          fixed(
            width: 262
            height: 310
            traceSVG: { background: "transparent", color: "#fafafa" }
          ) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <SectionContainer className={styles.aboutCovid} clean>
      <div className={styles.heroContainer}>
        <Image className={styles.screenBanner} fixed={screen.childImageSharp.fixed} />
        <Title className={styles.aboutCovidTitle}>
          Como ajudar no controle da pandemia do <span>Coronavírus?</span>
        </Title>
      </div>
      <div>
        <Text className={styles.aboutCovidText}>
          A única forma garantida, hoje, de se evitar a propagação do surto de coranavírus é com
          distanciamento social.
        </Text>
        <Text className={styles.aboutCovidTip}>Que tal fazer de forma inteligente?</Text>
      </div>
    </SectionContainer>
  )
}

export default AboutCovid
