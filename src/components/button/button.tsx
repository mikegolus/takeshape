import { FC } from 'react'
import styles from './button.module.css'
import cx from 'classnames'

interface ButtonProps {
  label?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  primary?: boolean
  processing?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  primary,
  processing,
  type,
}) => (
  <button
    className={cx(
      styles.base,
      primary && styles.primary,
      processing && styles.processing,
    )}
    onClick={onClick}
    {...(type && { type: type })}
  >
    <span className={styles.label}>{label}</span>
    <div role="status" className={styles['processing-indicator-container']}>
      <svg
        aria-hidden="true"
        className={styles['processing-indicator']}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeWidth="4"
          strokeDasharray="24"
          strokeDashoffset="24"
        />
        <circle opacity="0.4" cx="12" cy="12" r="10" stroke-width="4" />
      </svg>
      <span className={styles['sr-only']}>Processing...</span>
    </div>
  </button>
)
