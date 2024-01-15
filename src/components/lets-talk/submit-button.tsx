'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '../button/button'

export const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <div>
      <Button type="submit" label="Submit" primary processing={pending} />
    </div>
  )
}
