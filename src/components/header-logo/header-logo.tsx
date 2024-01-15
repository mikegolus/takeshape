'use client'

import Link from 'next/link'
import { Logo } from '../logo/logo'
import styles from './header-logo.module.css'

export const HeaderLogo = () => {
  return (
    <div className={styles.base}>
      <Link href="/">
        <Logo />
      </Link>
    </div>
  )
}
