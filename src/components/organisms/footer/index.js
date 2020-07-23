import React from 'react'

import { Title, Text, Subtitle } from '_atoms'

import styles from './styles.module.css'

const Footer = () => (
  <footer className={styles.contact} id="contact">
    <div className={styles.contactGrid}>
      <Title className={styles.contactTitle}>Contatos</Title>
        <Text className={styles.contactText}>
          <span>E-mail: </span> covidapp@contato.ufsc.br
        </Text>
    </div>
  </footer>
)

export default Footer
