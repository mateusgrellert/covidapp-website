import React, { useState } from 'react'
import classnames from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'

import { BurgerButton, Logo, LogoEU, Link } from '_atoms'
import DropdownMenu from '_molecules/dropdown-menu'

import styles from './styles.module.css'

const Navbar = () => {
  const [navlistActive, setNavListActive] = useState(false)

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            contact
          }
        }
      }
    `
  )
  const onClickBurger = () => setNavListActive(!navlistActive)

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContent}>
        <Logo />
        <LogoEU />
        <BurgerButton
          onClick={onClickBurger}
          active={navlistActive}
          className={styles.responsiveMenu}
        />
      </div>
      <nav>
        <ul className={classnames(styles.navList, { [styles.active]: navlistActive })}>
          <li>
            <DropdownMenu label="sobre">
              <Link className={styles.nestedLink} to="/about-app">
                Conheça o CovidApp
              </Link>
              <Link className={styles.nestedLink} to="/next">
                Próximos passos
              </Link>
            </DropdownMenu>
          </li>
          <li>
            <Link className={styles.menuLink} to="/team">
              A Equipe
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              rel="noopener noreferer"
              className={styles.menuLink}
              href={`mailto:${site.siteMetadata.contact}`}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
