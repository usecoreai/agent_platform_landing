import nodemailer from 'nodemailer'

function getRequiredEnv(name) {
  const value = process.env[name]
  if (value) return value

  throw new Error(`Missing required env var: ${name}`)
}

function parseFormData() {
  const rawData = process.env.FORM_DATA_JSON
  if (!rawData) throw new Error('Missing FORM_DATA_JSON env var with serialized form payload')

  const parsedData = JSON.parse(rawData)
  if (!parsedData || typeof parsedData !== 'object') throw new Error('FORM_DATA_JSON must be a valid object')

  return parsedData
}

function formatEmailBody(formData) {
  return Object.entries(formData)
    .map(([fieldName, value]) => `${fieldName}: ${String(value)}`)
    .join('\n')
}

export async function sendFormEmail({ formData }) {
  if (!formData || typeof formData !== 'object') throw new Error('Form data is required')

  const smtpHost = getRequiredEnv('SMTP_HOST')
  const smtpPort = Number(getRequiredEnv('SMTP_PORT'))
  const smtpUser = getRequiredEnv('SMTP_USER')
  const smtpPass = getRequiredEnv('SMTP_PASS')
  const emailFrom = getRequiredEnv('FORM_EMAIL_FROM')
  const emailTo = getRequiredEnv('FORM_EMAIL_TO')

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  })

  await transporter.sendMail({
    from: emailFrom,
    to: emailTo,
    subject: 'New form submission',
    text: formatEmailBody(formData)
  })

  console.log('Form email sent successfully')
}

if (import.meta.url === `file://${process.argv[1]}`) {
  sendFormEmail({ formData: parseFormData() }).catch((error) => {
    console.error('Failed to send form email:', error)
    process.exit(1)
  })
}
