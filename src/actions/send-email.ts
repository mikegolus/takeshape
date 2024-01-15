'use server'

import { redirect } from 'next/navigation'
import { ServerClient } from 'postmark'

export async function sendEmail(formData: FormData) {
  const { name, companyName, email, budget, message } = {
    name: formData.get('name') as string,
    companyName: formData.get('companyName') as string,
    email: formData.get('email') as string,
    budget: formData.get('budget') as string,
    message: formData.get('message') as string,
  }

  if (process.env.POSTMARK_SERVER_TOKEN) {
    const client = new ServerClient(process.env.POSTMARK_SERVER_TOKEN)

    await client.sendEmailWithTemplate({
      From: 'yourfriends@takeshape.rocks',
      To: email,
      MessageStream: 'outbound',
      TemplateId: 34480844,
      TemplateModel: {
        client_name: name,
        client_company: companyName,
        client_email: email,
        client_budget: budget,
        message: message,
      },
    })

    await client.sendEmailWithTemplate({
      From: 'yourfriends@takeshape.rocks',
      To: 'yourfriends@takeshape.rocks',
      MessageStream: 'outbound',
      TemplateId: 34481033,
      TemplateModel: {
        client_name: name,
        client_company: companyName,
        client_email: email,
        client_budget: budget,
        message: message,
      },
    })

    redirect('/thanks')
  }
}
