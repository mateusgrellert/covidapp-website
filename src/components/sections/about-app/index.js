import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { Title, Text, SectionContainer, Subtitle, OL } from '_atoms'
import BreadCrumb from '_molecules/bread-crumb'
import NavigationCard from '_molecules/navigation-card'

import styles from './styles.module.css'

const AboutApp = () => {
  const { whatsNextImage, aboutAppImage } = useStaticQuery(graphql`
    query {
      whatsNextImage: file(relativePath: { eq: "nav/whats-next.png" }) {
        childImageSharp {
          fluid(maxWidth: 1300, traceSVG: { background: "#fafafa", color: "#fafafa" }) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      aboutAppImage: file(relativePath: { eq: "about-app-image.png" }) {
        childImageSharp {
          fixed(width: 500, height: 413, traceSVG: { background: "#fafafa", color: "#fafafa" }) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <SectionContainer className={styles.aboutApp} id="about-app">
      <BreadCrumb
        className={styles.aboutAppBreadCrumb}
        path={[{ href: '/', name: 'Início' }]}
        current="Conheça o CovidApp"
      />
      <div className={styles.aboutAppSection}>
        <Subtitle alingment="left" className={styles.aboutAppSubtitle}>
          Afinal,
        </Subtitle>
        <Title alignment="left" className={styles.aboutAppTitle}>
          O que é o CovidApp?
        </Title>
        <Image className={styles.aboutAppImage} fixed={aboutAppImage.childImageSharp.fixed} />
        <Text className={styles.aboutAppText}>
          Somos um aplicativo para notificação de possíveis contágios que tem como prioridade a
          preservação da privacidade dos usuários. Sabemos que atualmente a maior dificuldade é as
          pessoas entenderem e respeitarem o isolamento social.
          <br /> <br /> A solução será composta por um aplicativo móvel, destinado à população em
          geral e a profissionais de saúde, bem como e uma aplicação web para gestores.
          <br /> <br /> O aplicativo móvel irá coletar os encontros físicos entre pessoas usando o
          Bluetooth dos celulares. Bluetooth é uma tecnologia que detecta outros dispositivos
          próximos sem armazenar a localização geográfica de cada indivíduo. Serão armazenados os
          encontros entre os dispositivos Bluetooth e a duração desses encontros.
        </Text>
      </div>

      <div className={styles.detailSection}>
        <Subtitle>A solução proposta não utiliza o GPS por diversas razões:</Subtitle>
        <OL>
          <li>não funciona em locais fechados como shoppings, edifícios, etc.;</li>
          <li>não possui a precisão necessária para a detecção de encontros;</li>
          <li>
            gera um grande volume de dados (big data) inviável de ser processado em tempo real,
            portanto não é escalável e nenhum computador comportaria o processamento agil dos dados
            em caso de uso por grande parte da população;
          </li>
          <li>
            invade a privacidade dos usuários, que se sentiriam vigiados, o que prejudicaria a
            adesão ao aplicativo.
          </li>
        </OL>
        <Subtitle>O aplicativo terá três modalidades que serão destinadas:</Subtitle>
        <div className={styles.contentContainer}>
          <div className={styles.contentItem}>
            <Subtitle className={styles.contentSubtitle}>Para a população</Subtitle>
            <Text className={styles.contentText}>
              Cada cidadão poderá reportar a presença de sintomas pelo aplicativo, e será notificado
              com base em seus eventuais encontros com casos suspeitos ou confirmados, e no seu
              perfil de risco e sintomas reportados.
            </Text>
          </div>
          <div className={styles.contentItem}>
            <Subtitle className={styles.contentSubtitle}>Para os profissionais da saúde</Subtitle>
            <Text className={styles.contentText}>
              Os profissionais de saúde serão responsáveis por identificar usuários como casos
              suspeitos ou confirmados.
            </Text>
          </div>
          <div className={styles.contentItem}>
            <Subtitle className={styles.contentSubtitle}>Para os gestores</Subtitle>
            <Text className={styles.contentText}>
              uma área gerencial para os gestores de saúde, por onde serão definidas quais e quando
              notificações devem ser enviadas aos cidadãos baseadas na quantidade e duração de
              encontros, e no perfil de risco dos usuários. Pela interface gerencial, será também
              possível consultar relatórios com estatísticas sumarizadas, sem a identificação de
              usuários, mas que informem aos gestores o andamento da quarentena e o percentual de
              mobilidade da população.
            </Text>
          </div>
        </div>
        <Subtitle>Os problemas de hoje e como solucioná-los</Subtitle>
        <Text className={styles.contentText}>
          Muitos não respeitam o isolamento social, seja por acharem que não estão na população de
          risco, seja por acharem que o contato com o vírus é improvável. Com a solução proposta, os
          usuários serão notificados sobre contatos nos últimos 14 dias com pessoas infectadas e
          estarão mais propensos a respeitar o isolamento e a quarentena. Além disso os gestores de
          saúde terão maior ciência se as medidas impostas por eles estão funcionando com base nas
          estatísticas geradas pela solução.
          <br /> <br />
          Inicialmente motivado pelos órgãos de saúde, os usuários irão instalar o aplicativo e
          passarão a receber mensagens de elogio e incentivo enquanto se mantiverem em isolamento.
        </Text>
      </div>
      <div className={styles.navCard}>
        <NavigationCard
          fluid={whatsNextImage.childImageSharp.fluid}
          to="next"
          call="Saiba mais sobre"
          title="Próximos passos"
          text="O que estamos planejando para o futuro do CovidApp."
        />
      </div>
    </SectionContainer>
  )
}

export default AboutApp
