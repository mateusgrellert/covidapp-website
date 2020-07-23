import React from 'react'

import { Title, Text, SectionContainer } from '_atoms'

import styles from './styles.module.css'

const Support = () => {
  return (
    <SectionContainer className={styles.support} id="support">
      <div className={styles.supportSection}>
        <Title alignment="left" className={styles.supportTitle}>
          Apoiadores
        </Title>
        <Text className={styles.supportText}>
          Temos o prazer de contar com o apoio do{' '}
          <a className={styles.supportLink} href="https://covid19-hpc-consortium.org/">
            Covid-19 HPC Consortium{' '}
          </a>
          . Esse apoio vai contribuir com suporte financeiro para uma infraestrutura pela{' '}
          <strong>Amazon Web Services</strong> para
          <strong> 1 milhão </strong>de usuários durante 6 meses.
          <br /> <br /> Essa é uma enorme conquista, mas é só o primeiro passo para que a nossa
          solução seja útil para a toda a população. Estamos incansavelmente atrás de novas fontes
          de apoio para garantir que nossa iniciativa seja uma importante ferramenta no combate à
          pandemia.
        </Text>
      </div>
    </SectionContainer>
  )
}

export default Support
