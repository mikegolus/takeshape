import { HeaderLogo } from '@/components/header-logo/header-logo'
import { LetsTalk } from '@/components/lets-talk/lets-talk'
import { Project } from '@/components/projects/project'
import { Section } from '@/components/section/section'
import image from '../../../../public/terratory-main.png'
import { Paragraph } from '@/components/paragraph/paragraph'

export default function Terratory() {
  return (
    <>
      <HeaderLogo />
      <Section>
        <Project
          image={image}
          imageAlt="Terratory app screenshots"
          label="Terratory"
          sublabel="Progressive Web App"
          skills={['UI/UX Engineering', 'Design Systems']}
        />
      </Section>
      <Section heading="Summary" noTopPadding>
        <Paragraph>
          Terratory is solving for the software gap the vast majority of small
          lawncare and landscaping businesses find themselves in. With an
          accessible and affordable solution for team management, intelligent
          scheduling, and easy routing, operators can know the work is getting
          done and spend more time living the life they want.
        </Paragraph>
        <Paragraph>
          We are working with the Terratory engineering and design team to build
          a layout and core component framework in Elixir and develop the
          Phoenix LiveView frontend for their progressive web app meant to mimic
          many native mobile UI patterns. We worked closely with the lead
          product designer to establish a lightweight and highly flexible design
          system in order to simplify the translation of rapidly evolving design
          requirements into efficient frontend code throughout early ideation
          phases.
        </Paragraph>
      </Section>
      <LetsTalk />
    </>
  )
}
