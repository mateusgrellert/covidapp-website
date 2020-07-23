import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SectionContainer from '_atoms/section-container'
import NavigationCard from '_molecules/navigation-card'

import styles from './styles.module.css'

const Navigation = () => {
  const { whatsNextImage, teamImage } = useStaticQuery(
    graphql`
      query {
        whatsNextImage: file(relativePath: { eq: "nav/whats-next.png" }) {
          childImageSharp {
            fluid(maxWidth: 1300, traceSVG: { background: "#fafafa", color: "#fafafa" }) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        teamImage: file(relativePath: { eq: "nav/team.png" }) {
          childImageSharp {
            fluid(maxWidth: 1300, traceSVG: { background: "#fafafa", color: "#fafafa" }) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <SectionContainer id="navigation" className={styles.navigation}>
      <NavigationCard
        fluid={teamImage.childImageSharp.fluid}
        to="team"
        call="Conheça"
        title="A nossa equipe"
        text="Quem está, dia após dia, na construção do CovidApp."
      />
      <NavigationCard
        fluid={whatsNextImage.childImageSharp.fluid}
        to="next"
        call="Saiba mais sobre"
        title="Próximos passos"
        text="O que estamos planejando para o futuro do CovidApp."
      />
    </SectionContainer>
  )
}

export default Navigation
