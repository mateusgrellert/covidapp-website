import React from 'react'
import Image from 'gatsby-image'
import { useStaticQuery, graphql, Link } from 'gatsby'
import useMedia from 'use-media'

import { Title, Text, SectionContainer } from '_atoms'
import AppCarousel from '_molecules/app-carousel'

import styles from './styles.module.css'

const AppTutorial = () => {
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

  const mobile = useMedia({ maxWidth: 768 })

  return (
    <SectionContainer className={styles.aboutApp} id="app-tutorial">
      <Title alignment="center">O que é o CovidApp?</Title>
      <Text className={styles.aboutAppText}>
        Somos um time global de desenvolvedores voluntários e professores universitários da
        Universidade Federal de Santa Catarina. Estamos desenvolvendo um aplicativo para notificação
        de possíveis contágios, tendo como prioridade a preservação da{' '}
        <strong> privacidade </strong> dos usuários. Sabemos que atualmente a maior dificuldade é
        fazer as pessoas entenderem e respeitarem o isolamento social.
        <br />A solução será composta por um <strong> aplicativo móvel</strong>, destinado à
        população em geral e profissionais de saúde, juntamente com uma{' '}
        <strong>aplicação web </strong> para gestores. O aplicativo móvel irá coletar os encontros
        físicos entre pessoas usando o Bluetooth dos celulares. Bluetooth é uma tecnologia que
        detecta outros dispositivos próximos sem armazenar a localizacão geográfica do indivíduo.
      </Text>
      <Link to="/about-app" className={styles.aboutAppBtn}>
        Saiba mais
      </Link>
      <Title alignment="center">E na prática, como funciona o CovidApp?</Title>
      <Text className={styles.contentText}>
        Diferente de outras iniciativas como o aplicativo do MIT (Massachusetts Institute of
        Technology) e do Governo de Israel, que capturam a trajetória dos usuários invadindo a sua
        privacidade, o CovidApp não coleta rastros e é totalmente anônima, e portanto preserva a
        privacidade dos usuários.
      </Text>
      <div className={styles.wrapper}>
        {mobile ? (
          <AppCarousel />
        ) : (
          <Image className={styles.hero} fluid={tutorial.childImageSharp.fluid} />
        )}
      </div>
      <Text className={styles.contentText}>
        Na instalação do app, idade e eventuais fatores de risco podem ser informados pelo usuário.
        Sempre que o usuário quiser, pode atualizar os sintomas que estiver sentindo.
      </Text>
    </SectionContainer>
  )
}

export default AppTutorial
