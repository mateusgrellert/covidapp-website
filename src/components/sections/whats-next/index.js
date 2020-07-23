import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { Title, Subtitle, Text, SectionContainer, OL, UL } from '_atoms'
import BreadCrumb from '_molecules/bread-crumb'

import styles from './styles.module.css'

const Team = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "analytics.png" }) {
        childImageSharp {
          fixed(width: 307, height: 266, traceSVG: { background: "transparent", color: "#333" }) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <SectionContainer className={styles.whatsNext} id="whats-next">
      <BreadCrumb
        className={styles.nextPageBreadCrumb}
        path={[{ href: '/', name: 'Início' }]}
        current="Próximos passos"
      />
      <Subtitle className={styles.whatsNextSubtitle}>Veja quais são os nossos</Subtitle>
      <Title className={styles.whatsNextTitle} alignment="left">
        Próximos Passos
      </Title>
      <div className={styles.dots} />
      <Text className={styles.whatsNextText}>
        A detecção de exposição ao vírus e a entrega de mensagens é <span>apenas o começo</span>.
        Através de análises inteligentes dos dados, sempre de forma anônima, o CovidApp vai permitir
        que pesquisadores e autoridades sanitárias entendam melhor o comportamento do coronavírus e
        sua propagação, auxiliando no combate a esta epidemia.
      </Text>
      <div className={styles.whatsNextCollapsible}>
        <div className={styles.whatsNextBoard}>
          <div className={styles.whatsNextBoardTitle}>
            <h1>
              <span>1.</span>
            </h1>
            <h2>Seleção inteligente para testagem</h2>
          </div>
          <div className={styles.whatsNextBoardText}>
            <Text>
              Através do registro voluntário de sintomas por parte dos usuários, será possível
              analisar como o vírus evolui para cada perfil de risco, e ainda enviar notificações
              com instruções específicas, definidas por infectologistas especializados.
            </Text>
            <Text>
              Considerando a impossibilidade de testar toda a população, tal funcionalidade poderia
              ajudar na triagem de pacientes que deveriam realizar os testes. Os usuários que
              precisam ser testados serão automaticamente notificados a procurar uma unidade de
              saúde e a mostrar a notificação recebida ao profissional de saúde.
            </Text>
          </div>
        </div>
        <div className={styles.whatsNextDivider} />
        <div className={styles.whatsNextBoard}>
          <div className={styles.whatsNextBoardTitle}>
            <h1>
              <span>2.</span>
            </h1>
            <h2>Geração de conhecimento sobre a COVID-19</h2>
          </div>
          <div className={styles.whatsNextBoardText}>
            <Text>
              É possível garantir o anonimato dos usuários e ao mesmo tempo gerar informações
              fundamentais para gestores e autoridades sanitárias. Por exemplo, estatísticas básicas
              sobre sua a situação:
            </Text>
            <OL>
              <li>número de casos confirmados;</li>
              <li>total de casos suspeitos;</li>
              <li>pacientes recuperados, que já se curaram;</li>
              <li>número de usuários não infectados.</li>
            </OL>
          </div>
        </div>
        <div className={styles.whatsNextContent}>
          <Image className={styles.whatsNextBanner} fixed={file.childImageSharp.fixed} />
          <Text className={styles.whatsNextContentText}>
            Essas análises poderão ser feitas de forma estratificada por faixa etária, sexo, fatores
            de risco e sintomas. Além disso, o total de médicos autorizados a utilizar o aplicativo
            também será processado para que possamos detectar regiões com maior e menor capacidade
            de diagnóstico.
          </Text>
          <Text className={styles.whatsNextContentText}>
            Com um pouco mais de tempo, análises mais sofisticadas com inteligência artificial
            poderão ser realizadas:
          </Text>
          <UL>
            <li>Detecção inteligente e estatísticas sobre aglomerações por dia;</li>
            <li>Análise do impacto do número de aglomerações diárias na disseminação do vírus;</li>
            <li>
              Análise de risco de infectados (estimativa de casos positivos sem realizar teste);
            </li>
            <li>Detecção de infectados assintomáticos;</li>
            <li>
              Análises e modelos probabilísticos que avaliam sintomas e confirmações de todos os
              usuários para calcular a necessidade de testagem para cada usuário, baseado em seu
              perfil de risco, sintomas e encontros com infectados;
            </li>
            <li>
              Análise temporal de propagação da doença:
              <OL>
                <li>entre cidades;</li>
                <li>
                  tempo de propagação entre usuários (estatísticas sobre o tempo entre o contato e a
                  manifestação dos sintomas, e entre o início dos sintomas e a confirmação).
                </li>
              </OL>
            </li>
          </UL>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Team
