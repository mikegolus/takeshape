import { FC } from 'react'
import styles from './chip.module.css'
import cx from 'classnames'

interface ChipProps {
  label: string
  small?: boolean
}

export const Chip: FC<ChipProps> = ({ label, small }) => (
  <div className={cx(styles.base, small && styles.small)}>{label}</div>
)
