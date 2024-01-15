import { FC, PropsWithChildren } from 'react'
import styles from './section.module.css'
import cx from 'classnames'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'] })

interface SectionProps extends PropsWithChildren {
  bg?: 'default' | 'strong' | 'strongest'
  grid?: boolean
  heading?: string
  headingLarge?: boolean
  noTopPadding?: boolean
}

export const Section: FC<SectionProps> = ({
  bg = 'default',
  grid,
  children,
  heading,
  headingLarge,
  noTopPadding,
}) => (
  <section
    className={cx(
      styles.section,
      styles[bg],
      grid && styles.grid,
      noTopPadding && styles['no-top-padding'],
    )}
  >
    <div className={styles.content}>
      {heading && (
        <h2
          className={cx(lora.className, headingLarge && styles.large)}
        >{`.${heading}`}</h2>
      )}
      {children}
    </div>
  </section>
)
