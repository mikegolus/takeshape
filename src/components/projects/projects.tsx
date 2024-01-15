import { Section } from '../section/section'
import { Project } from './project'
import styles from './projects.module.css'
import terratoryMain from '../../../public/terratory-main.png'
import whichDayMain from '../../../public/whichday-main.png'
import aClassicRetoldMain from '../../../public/a-classic-retold-main.png'

export const Projects = () => (
  <Section heading="Recent Projects">
    <div className={styles['project-grid']}>
      <Project
        image={terratoryMain}
        imageAlt="Terratory app screenshots"
        label="Terratory"
        href="/projects/terratory"
        sublabel="Progressive Web App"
        skills={['UI/UX Engineering', 'Design Systems']}
      />
      <Project
        image={whichDayMain}
        imageAlt="WhichDay.io app screenshot"
        label="WhichDay.io"
        sublabel="Side Project"
        href="/projects/whichday"
        skills={['App Design', 'Development']}
      />
      <Project
        image={aClassicRetoldMain}
        imageAlt="A Classic Retold website screenshot"
        label="A Classic Retold"
        sublabel="Marketing Website"
        href="/projects/a-classic-retold"
        skills={['Design', 'Development', 'CMS Integration']}
      />
    </div>
  </Section>
)
