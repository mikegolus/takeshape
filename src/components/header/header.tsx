'use client'

import { useCallback, useEffect, useState } from 'react'
import styles from './header.module.css'
import cx from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useClickAway } from '@uidotdev/usehooks'

export const Header = () => {
  const [navActive, setNavActive] = useState(false)

  const handleToggleNav = useCallback(() => {
    setNavActive(!navActive)
  }, [navActive])

  const handleScroll = useCallback(() => {
    setNavActive(false)
  }, [])

  const navPanelRef = useClickAway<HTMLElement>(() => {
    setNavActive(false)
  })

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <nav ref={navPanelRef} className={cx(navActive && styles.active)}>
        <button
          type="button"
          className={styles['menu-toggle']}
          onClick={handleToggleNav}
        >
          <div className={styles.lines}></div>
        </button>
        <ul>
          <li>
            <Link
              href="/"
              className={cx(pathname === '/' && styles.current)}
              onClick={handleToggleNav}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={cx(pathname === '/about' && styles.current)}
              onClick={handleToggleNav}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={cx(pathname === '/projects' && styles.current)}
              onClick={handleToggleNav}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={cx(pathname === '/contact' && styles.current)}
              onClick={handleToggleNav}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
