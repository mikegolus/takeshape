import { HeaderLogo } from '@/components/header-logo/header-logo'
import { Paragraph } from '@/components/paragraph/paragraph'
import { Section } from '@/components/section/section'

export default function About() {
  return (
    <>
      <HeaderLogo />
      <Section heading="Thanks!" headingLarge>
        <Paragraph>
          We&apos;re thrilled that you&apos;re considering allowing us the
          oppotunity to work with you on your next project. Expect to hear from
          us in 1&ndash;2 business days to continue the conversation. You will
          also receive an email shortly with a copy of what you sent us for your
          reference.
        </Paragraph>
      </Section>
    </>
  )
}
