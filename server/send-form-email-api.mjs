import http from 'node:http'
import { sendFormEmail } from '../scripts/send-form-email.mjs'

const apiPort = Number(process.env.FORM_API_PORT || 8787)
const maxBodyBytes = 1024 * 1024

function sendJson({ response, statusCode, payload }) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  response.end(JSON.stringify(payload))
}

function validateFormData(formData) {
  if (!formData || typeof formData !== 'object') return 'Invalid form payload'

  const requiredFields = ['name', 'email', 'company', 'message']
  const hasMissingField = requiredFields.some((fieldName) => !String(formData[fieldName] || '').trim())
  if (hasMissingField) return 'Please fill in all required fields'

  return null
}

const server = http.createServer(async (request, response) => {
  if (request.method === 'OPTIONS') {
    response.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    })
    response.end()
    return
  }

  if (request.method !== 'POST' || request.url !== '/api/send-form-email') {
    sendJson({ response, statusCode: 404, payload: { ok: false, error: 'Not found' } })
    return
  }

  let rawBody = ''
  let bodySize = 0

  request.on('data', (chunk) => {
    bodySize += chunk.length
    if (bodySize > maxBodyBytes) {
      sendJson({ response, statusCode: 413, payload: { ok: false, error: 'Payload too large' } })
      request.destroy()
      return
    }

    rawBody += chunk
  })

  request.on('end', async () => {
    try {
      const parsedBody = JSON.parse(rawBody || '{}')
      const formData = parsedBody.formData
      const validationError = validateFormData(formData)

      if (validationError) {
        sendJson({ response, statusCode: 400, payload: { ok: false, error: validationError } })
        return
      }

      await sendFormEmail({ formData })
      sendJson({ response, statusCode: 200, payload: { ok: true } })
    } catch (error) {
      console.error('Failed to process form email request:', error)
      sendJson({ response, statusCode: 500, payload: { ok: false, error: 'Failed to send email' } })
    }
  })
})

server.listen(apiPort, () => {
  console.log(`Form email API listening on http://localhost:${apiPort}`)
})
