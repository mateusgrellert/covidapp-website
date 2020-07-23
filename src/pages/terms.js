import React from 'react'

import SEO from '_atoms/seo'
import Terms from '_sections/terms'

const TermsPage = () => (
  <>
    <SEO
      title="Termos e Condições"
      description="Termos do CovidApp."
      url="https://covidapp.ufsc.br/terms"
    />
    <Terms />
  </>
)

export default TermsPage
