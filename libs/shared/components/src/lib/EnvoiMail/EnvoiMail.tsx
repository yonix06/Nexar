import { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import { env } from '@/env.mjs'
import { transporter } from '@/config/email'
import { Select } from 'components/forms/select'
import { Input } from 'components/forms/input'
import { Button } from 'components/button'


import styled from 'styled-components';

const StyledEnvoiMail = styled.div`
  color: pink;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

type Recipient = {
  label: string
  email: string
}

export function EnvoiMail() {
  const [recipients, setRecipients] = useState<Recipient[]>([])
  const [selectedRecipient, setSelectedRecipient] = useState<Recipient | null>(null)
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSend = async () => {
    if (selectedRecipient && subject && message) {
      const mailOptions = {
        from: env.SMTP_USERNAME,
        to: selectedRecipient.email,
        subject,
        text: message,
      }

      try {
        await transporter.sendMail(mailOptions)
        alert('Email sent successfully')
      } catch (error) {
        console.error(error)
        alert('Error sending email')
      }
    }
  }

  return (
    <StyledEnvoiMail>
      <h1>Send an email</h1>
      <h1>Welcome to EnvoiMail!</h1>

      <Select
        label="Recipient"
        options={recipients}
        value={selectedRecipient}
        onChange={(option) => setSelectedRecipient(option)}
      />

      <Input
        label="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <Input
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button onClick={handleSend}>Send</Button>
      <ul>
        <li>
          <Link to="/">EnvoiMail root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the EnvoiMail root route.</div>} />
    </StyledEnvoiMail>
  );
}

export default EnvoiMail;

