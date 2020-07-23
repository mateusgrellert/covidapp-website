import React, { useState } from 'react'
import BackgroundImage from 'gatsby-background-image'
import classnames from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'
import { useToasts } from 'react-toast-notifications'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

import { Title, Subtitle, Text, SectionContainer, Loading } from '_atoms'
import LabeledInput from '_molecules/labeled-input'
import { saveContact } from '_services'

import styles from './styles.module.css'

const AboutApp = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const { addToast } = useToasts()

  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "screens.png" }) {
        childImageSharp {
          fluid(maxWidth: 1366, traceSVG: { background: "transparent", color: "#333" }) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const handleInputChange = e => {
    const { name, value } = e.target
    const newData = { ...data }

    newData[name] = value

    setData(newData)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    saveContact(data)
      .then(() => {
        addToast('Seu contato foi salvo com sucesso!', {
          appearance: 'success',
          autoDismiss: true,
        })
        trackCustomEvent({
          category: 'User',
          action: 'Subscribe',
          label: 'User subscribed to get app news',
        })
      })
      .catch(() => {
        addToast('Aconteceu um erro, por favor tente novamente mais tarde.', {
          appearance: 'error',
          autoDismiss: true,
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <SectionContainer className={styles.app} id="app" clean>
      <BackgroundImage className={styles.appBackground} fluid={file.childImageSharp.fluid}>
        <Title className={styles.appTitle} alignment="center">
          Falta Pouco
        </Title>
        <Text className={styles.appText}>
          <span>
            O CovidApp está em <b>fase de testes</b> e ainda não está disponível para download.
            Estamos trabalhando dia e noite e logo o aplicativo poderá ser encontrado na{' '}
            <b>Play Store</b> e na <b>Apple Store</b>.
          </span>
        </Text>
        <div className={styles.appBadgeContainer}>
          <Subtitle className={styles.appTitle} alignment="center">
            Quero saber quando estiver tudo pronto
          </Subtitle>
          <form className={styles.appForm} onSubmit={handleSubmit}>
            <LabeledInput
              placeholder="Nome completo"
              label="Nome"
              name="name"
              id="name"
              autoComplete="name"
              type="text"
              onBlur={handleInputChange}
              required
            />
            <LabeledInput
              placeholder="Informe o seu e-mail principal"
              label="E-mail"
              id="email"
              name="email"
              autoComplete="email"
              type="email"
              onBlur={handleInputChange}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className={classnames(styles.submitBtn, { [styles.loading]: loading })}
            >
              {loading ? <Loading /> : 'Me avise'}
            </button>
          </form>
        </div>
      </BackgroundImage>
    </SectionContainer>
  )
}

export default AboutApp
