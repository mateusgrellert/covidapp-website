import React from 'react'

import SEO from '_atoms/seo'
import AboutApp from '_sections/about-app'

const AboutPage = () => (
  <>
    <SEO
      title="Próximos Passos"
      description="Saiba mais sobre o aplicativo."
      url="https://covidapp.ufsc.br/about-app"
    />
    <AboutApp />
  </>
)

export default AboutPage
