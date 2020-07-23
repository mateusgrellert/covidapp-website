import React from 'react'

import { MainContainer, SEO } from '_atoms'
import Team from '_sections/team'

const TeamPage = () => (
  <MainContainer>
    <SEO
      url="https://covidapp.ufsc.br/team"
      title="Nossa equipe"
      description="Conheça a equipe por trás do CovidApp"
    />
    <Team />
  </MainContainer>
)

export default TeamPage
