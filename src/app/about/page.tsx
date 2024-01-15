import { HeaderLogo } from '@/components/header-logo/header-logo'
import { LetsTalk } from '@/components/lets-talk/lets-talk'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Section } from '@/components/section/section'

export default function About() {
  return (
    <>
      <HeaderLogo />
      <Section heading="About" bg="strong" grid>
        <Paragraph>
          TAKE SHAPE is an agency that specializes in the creation of intuitive
          online apps, engaging marketing websites, and robust design systems.
          With well over a decade of industry experience, we have the knowledge
          and expertise to guide projects of any scale through all phases of
          design and development, from early brainstorming to launch, ensuring a
          seamless journey every step of the way.
        </Paragraph>
        <Paragraph>
          Our thorough approach to communication means we take the time to
          understand your unique needs so we can complete your project with
          precision. Throughout the process, we keep you in the loop so that
          there are never any surprises, only clarity and confidence.
        </Paragraph>
        <Paragraph callout>
          We look forward to the opportunity to assist you in bringing your
          vision to life and achieving your business goals.
        </Paragraph>
      </Section>
      <LetsTalk />
    </>
  )
}
