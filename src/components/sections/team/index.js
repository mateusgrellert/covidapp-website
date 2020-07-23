import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { SectionContainer, Title, Subtitle, Text } from '_atoms'
import BreadCrumb from '_molecules/bread-crumb'
import { TeamDeck, TeamDeckEu } from '_organisms'

import styles from './styles.module.css'

const Team = () => {
  const { br, eu } = useStaticQuery(
    graphql`
      query {
        br: file(relativePath: { eq: "team/team_br.png" }) {
          childImageSharp {
            fluid(maxWidth: 743, traceSVG: { background: "#fafafa", color: "#fafafa" }) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        eu: file(relativePath: { eq: "team/team_eu.png" }) {
          childImageSharp {
            fluid(maxWidth: 743, traceSVG: { background: "#fafafa", color: "#fafafa" }) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <SectionContainer className={styles.teamPage}>
      <BreadCrumb
        className={styles.teamPageBreadCrumb}
        path={[{ href: '/', name: 'Início' }]}
        current="Conheça a nossa equipe"
      />
      <Subtitle alignment="left" className={styles.teamPageSubtitle}>
        A rotina da
      </Subtitle>
      <Title alignment="left" className={styles.teamPageTitle}>
        Nossa equipe
      </Title>
      <div className={styles.borderTop}>
        <Text className={styles.teamPageText}>
          O aplicativo está sendo desenvolvido por uma equipe global, formando dois times, um na
          Europa e o outro em Florianópolis/SC. A equipe na Europa, composta por 14 desenvolvedores
          voluntários é liderada por Luca Mastrostefano. A equipe de Florianópolis, composta por 13
          voluntários, é liderada pelos professores da UFSC Jônata Tyska e Vania Bogorny.
        </Text>
      </div>
      <Subtitle alignment="center">aqui no Brasil</Subtitle>
      <TeamDeck />
      <Subtitle alignment="center">na Europa</Subtitle>
      <TeamDeckEu />

      <Title alignment="left" className={styles.teamPageTitle}>
        Trabalho em Equipe
      </Title>
      <Subtitle alignment="left" className={styles.teamPageSubtitle}>
        em tempos de pandemia
      </Subtitle>
      <div className={styles.borderLeft}>
        <Text className={styles.teamPageText}>
          Estamos trabalhando dia e noite de forma incansável e voluntária, colocando todo o nosso
          conhecimento a serviço de quem mais importa nesse mundo: as pessoas. Acreditamos numa
          sociedade onde a tecnologia é usada para o bem-estar de todos, e estamos ajudando a
          construir essa sociedade. Embasados em dados científicos acreditamos que o distanciamento
          social é fundamental para enfrentar essa crise, e que a nossa solução vai permitir que
          façamos isso de forma inteligente. Enquanto isso trabalhamos assim: afastados mas sempre
          juntos.
        </Text>
      </div>
      <div className={styles.teamPhotos}>
        <Image className={styles.teamImage} fluid={br.childImageSharp.fluid} />
        <Image className={styles.teamImage} fluid={eu.childImageSharp.fluid} />
      </div>
    </SectionContainer>
  )
}

export default Team
