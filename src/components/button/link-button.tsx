import { FC, HTMLAttributeAnchorTarget } from 'react'
import styles from './button.module.css'
import Link from 'next/link'
import cx from 'classnames'

interface LinkButtonProps {
  href: string
  label?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  primary?: boolean
  target?: HTMLAttributeAnchorTarget
}

export const LinkButton: FC<LinkButtonProps> = ({
  href,
  label,
  onClick,
  primary,
  target,
}) => (
  <Link
    href={href}
    className={cx(styles.base, primary && styles.primary)}
    onClick={onClick}
    target={target}
  >
    {label}
  </Link>
)
