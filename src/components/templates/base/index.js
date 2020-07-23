import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { ToastProvider } from 'react-toast-notifications'
import useMedia from 'use-media'

import { SEO, MainContainer } from '_atoms'
import { Navbar, Footer } from '_organisms'
import { poke } from '_services'
import '_styles/base.css'

const BaseTemplate = ({ children, title, description, image, pathname, article }) => {
  useEffect(() => {
    poke()
  }, [])
  const mobile = useMedia({ maxWidth: 768 })

  const placement = mobile ? 'top-center' : 'top-right'

  return (
    <ToastProvider placement={placement}>
      <MainContainer>
        <SEO
          title={title}
          description={description}
          image={image}
          pathname={pathname}
          article={article}
        />
        <Navbar />
        {children}
        <Footer />
      </MainContainer>
    </ToastProvider>
  )
}

BaseTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.string,
}

BaseTemplate.defaultProps = {
  title: undefined,
  description: undefined,
  image: undefined,
  pathname: undefined,
  article: undefined,
}

export default BaseTemplate
