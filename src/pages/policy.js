import React from 'react'

import SEO from '_atoms/seo'
import Policy from '_sections/policy'

const PolicyPage = () => (
  <>
    <SEO
      title="Política de Privacidade"
      description="Política de Privacidade do CovidApp."
      url="https://covidapp.ufsc.br/policy"
    />
    <Policy />
  </>
)

export default PolicyPage
