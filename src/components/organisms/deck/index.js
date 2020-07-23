import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Card from '_molecules/card'

import styles from './styles.module.css'

const TeamDeck = ({ className, team, files }) => {
  const teamFiles = files.edges.map(file => file.node.childImageSharp.fluid)

  const getPerson = ({ name, file, description, href }) => ({
    name,
    photo: teamFiles.find(({ originalName }) => originalName === file),
    description,
    href,
  })

  return (
    <div className={classnames(styles.deck, className)}>
      {team
        .sort(({ name: a }, { name: b }) => {
          if (a > b) {
            return 1
          }
          if (b > a) {
            return -1
          }
          return 0
        })
        .map(data => {
          const person = getPerson(data)

          return (
            <Card
              className={styles.teammateCard}
              key={person.name}
              name={person.name}
              href={person.href}
              description={person.description}
              fluid={person.photo}
            />
          )
        })}
    </div>
  )
}

TeamDeck.propTypes = {
  className: PropTypes.string,
  team: PropTypes.instanceOf(Array).isRequired,
  files: PropTypes.instanceOf(Object).isRequired,
}

TeamDeck.defaultProps = {
  className: undefined,
}

export default TeamDeck
