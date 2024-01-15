import { FC, PropsWithChildren } from 'react'
import styles from './paragraph.module.css'
import cx from 'classnames'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'] })

interface ParagraphProps extends PropsWithChildren {
  callout?: boolean
}

export const Paragraph: FC<ParagraphProps> = ({ callout, children }) => {
  return (
    <p
      className={cx(
        styles.base,
        callout && lora.className,
        callout && styles.callout,
      )}
    >
      {children}
    </p>
  )
}
