import React from 'react'
import Image from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Carousel from '_organisms/carousel'

import styles from './styles.module.css'

const AppCarousel = ({ className }) => {
  const { files } = useStaticQuery(graphql`
    query {
      files: allFile(
        filter: { extension: { regex: "/png/" }, relativeDirectory: { eq: "boards" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 800, traceSVG: { background: "transparent", color: "#fafafa" }) {
                originalName
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const items = files.edges
    .map(edge => edge.node.childImageSharp.fluid)
    .sort(({ originalName: a }, { originalName: b }) => {
      if (a > b) {
        return 1
      }
      if (b > a) {
        return -1
      }
      return 0
    })

  return (
    <Carousel
      itemClass={styles.item}
      activeClass={styles.activeItem}
      className={className}
      showArrows
      showThumbs={false}
    >
      <div>
        <Image fluid={items[0]} />
        <p>
          1. O aplicativo usa o bluetooth do dispositivo para detectar outros celulares na
          vizinhança.
        </p>
      </div>
      <div>
        <Image fluid={items[1]} />
        <p>
          2. O app cria um registro para cada dispositivo detectado a menos de 2 metros de distância
          do usuário.
        </p>
      </div>
      <div>
        <Image fluid={items[2]} />
        <p>
          3. Ficam armazenados no banco de dados os registros dos últimos 14 dias, incluindo data,
          duração e distãncia.
        </p>
      </div>
      <div>
        <Image fluid={items[3]} />
        <p>4. Um possível infectado procura o médico.</p>
      </div>
      <div>
        <Image fluid={items[4]} />
        <p>
          5. Apenas um médico tem permissão para diagnosticar pacientes como &quot;positivo&quot;.
          Nesse caso, o banco de dados é atualizado.
          <br /> 6. Uma mensagem será enviada para todos os dispositivos que tiveram um encontro com
          a pessoa confirmada.
        </p>
      </div>
      <div>
        <Image fluid={items[5]} />
        <p>
          7. As mensages enviadas servirão para alertar que pessoas que tiveram contato com
          infectados entrem em quarentena ou entrem em contato com uma unidade de saúde. <br /> As
          mensages a serem enviadas e os destinatários serão definidos pelos profissionais de saúde.
        </p>
      </div>
    </Carousel>
  )
}

AppCarousel.propTypes = {
  className: PropTypes.string,
}

AppCarousel.defaultProps = {
  className: undefined,
}

export default AppCarousel
