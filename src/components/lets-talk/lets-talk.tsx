import { sendEmail } from '@/actions/send-email'
import { Input, Select, TextArea } from '../inputs/inputs'
import { Paragraph } from '../paragraph/paragraph'
import { Section } from '../section/section'
import styles from './lets-talk.module.css'
import { SubmitButton } from './submit-button'

export const LetsTalk = () => (
  <Section heading="Let's Talk" headingLarge>
    <form action={sendEmail} className={styles.form}>
      <Paragraph callout>
        Are you interested in discussing a project with us? Give us a few
        details to get the conversation started.
      </Paragraph>
      <Input name="name" label="What's your name?" required />
      <Input
        name="companyName"
        label="What's the name of your company?"
        required
      />
      <Input
        name="email"
        label="Email"
        description="We'll respond in 1-2 business days"
        required
      />
      <Select
        name="budget"
        label="What's your estimated project budget?"
        required
      >
        <option value="under $10K" selected>
          under $10K
        </option>
        <option value="$10-$25K">$10&ndash;$25K</option>
        <option value="$25-$50K">$25&ndash;$50K</option>
        <option value="over $25K">over $50</option>
      </Select>
      <TextArea
        name="message"
        label="Message"
        prompt="Tell us about your project."
        required
      />
      <SubmitButton />
    </form>
  </Section>
)
