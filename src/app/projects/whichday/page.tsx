import { LinkButton } from '@/components/button/link-button'
import { HeaderLogo } from '@/components/header-logo/header-logo'
import { LetsTalk } from '@/components/lets-talk/lets-talk'
import { Project } from '@/components/projects/project'
import { Section } from '@/components/section/section'
import image from '../../../../public/whichday-main.png'
import { Paragraph } from '@/components/paragraph/paragraph'

export default function WhichDay() {
  return (
    <>
      <HeaderLogo />
      <Section>
        <Project
          image={image}
          imageAlt="WhichDay.io app screenshot"
          label="WhichDay.io"
          sublabel="Side Project"
          skills={['App Design', 'Development']}
        />
      </Section>
      <Section heading="Summary" noTopPadding>
        <Paragraph>
          This past December, after some less than successful attempts to plan
          holiday get-togethers, TAKE SHAPE founder Mike Golus was inspired to
          create an app that provides easily shareable calendars to help people
          find get-together dates that work best for everyone in a group.
        </Paragraph>
        <Paragraph>
          TAKE SHAPE plans to evolve this project over time to include more
          features that will completely automate the legwork involved in
          coordinating a group event or meet ups.
        </Paragraph>
        <LinkButton
          href="https://whichday.io"
          target="_blank"
          label="Check it out"
        />
      </Section>
      <LetsTalk />
    </>
  )
}
