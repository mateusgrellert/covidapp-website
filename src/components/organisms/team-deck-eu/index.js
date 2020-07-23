import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Deck from '_organisms/deck'
import { team } from '_content/team_eu.json'

const TeamDeck = ({ className }) => {
  const { files } = useStaticQuery(graphql`
    query {
      files: allFile(
        filter: {
          extension: { regex: "/(png|jp(e?)g)/" }
          relativeDirectory: { eq: "team/europe" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 200, traceSVG: { background: "#fafafa", color: "#fafafa" }) {
                originalName
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  return <Deck className={className} files={files} team={team} />
}

TeamDeck.propTypes = {
  className: PropTypes.string,
}

TeamDeck.defaultProps = {
  className: undefined,
}

export default TeamDeck
