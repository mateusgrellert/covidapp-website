import React, { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import ArrowButton from '_molecules/arrow-button'

import styles from './styles.module.css'

const Carousel = ({ children, itemClass, activeClass }) => {
  const [position, setPosition] = useState(0)

  const childrenCount = React.Children.count(children)

  const toRight = () => setPosition(position === childrenCount - 1 ? position : position + 1)
  const toLeft = () => setPosition(position === 0 ? position : position - 1)

  const items = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      className: classnames(styles.carouselItem, itemClass, {
        [styles.first]: position - 1 === index,
        [styles.second]: position === index,
        [activeClass]: position === index,
        [styles.third]: position + 1 === index,
      }),
    })
  )

  const thumbs = Array.from({ length: childrenCount })

  return (
    <div className={styles.carousel}>
      {position === 0 || (
        <ArrowButton
          className={classnames(styles.arrow, styles.arrowLeft, { [styles.hide]: position === 0 })}
          onClick={toLeft}
          direction="right"
        />
      )}
      <div className={styles.carouselContent}>{items}</div>
      {position === childrenCount - 1 || (
        <ArrowButton
          className={classnames(styles.arrow, styles.arrowRight, {
            [styles.hide]: position === childrenCount - 1,
          })}
          onClick={toRight}
        />
      )}
      <div className={styles.thumbs}>
        {thumbs.map((thumb, index) => (
          <div className={classnames(styles.thumb, { [styles.thumbActive]: index === position })} />
        ))}
      </div>
    </div>
  )
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  itemClass: PropTypes.string,
  activeClass: PropTypes.string,
}

Carousel.defaultProps = {
  itemClass: undefined,
  activeClass: undefined,
}

export default Carousel
