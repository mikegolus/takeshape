import { Chip } from '../chip/chip'
import { Logo } from '../logo/logo'
import styles from './intro.module.css'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'] })

export const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo animate words color />
        </div>
        <div className={styles.copy}>
          <h1 className={lora.className}>
            We build beautiful web apps and online experiences.
          </h1>
          <div className={styles.chips}>
            <Chip label="App Development" />
            <Chip label="UI/UX Design" />
            <Chip label="Marketing Sites" />
            <Chip label="Product Design" />
            <Chip label="Design Systems" />
          </div>
        </div>
      </div>
    </section>
  )
}
