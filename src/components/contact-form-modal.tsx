import { useEffect, useState, type FormEvent } from 'react'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

interface ContactFormState {
  name: string
  email: string
  company: string
  message: string
}

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  company: '',
  message: ''
}

const formApiUrl = import.meta.env.VITE_FORM_API_URL || 'http://localhost:8787/api/send-form-email'

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formState, setFormState] = useState<ContactFormState>(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (!isOpen) return

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onEscape)
    }
  }, [isOpen, onClose])

  function updateField(fieldName: keyof ContactFormState, fieldValue: string) {
    setFormState((prevState) => ({ ...prevState, [fieldName]: fieldValue }))
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setErrorMessage('')
    setHasSubmitted(false)
    setIsSubmitting(true)

    try {
      const response = await fetch(formApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData: formState })
      })

      const payload = await response.json()
      if (!response.ok) throw new Error(payload?.error || 'Failed to send form')

      setHasSubmitted(true)
      setFormState(initialFormState)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unexpected error while sending form'
      setErrorMessage(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <button
        className="absolute inset-0 bg-black/55"
        onClick={onClose}
        aria-label="Закрыть форму"
      />
      <div className="relative z-10 w-full max-w-xl rounded-2xl border border-black/10 bg-bg p-6 shadow-2xl sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Запросить пилот</h3>
            <p className="mt-2 text-sm text-ink/70">Оставьте контакты, и мы свяжемся с вами</p>
          </div>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-lg leading-none hover:bg-black/5"
            onClick={onClose}
            aria-label="Закрыть модальное окно"
          >
            ×
          </button>
        </div>

        <form className="space-y-4" onSubmit={onSubmit}>
          <input
            required
            type="text"
            placeholder="Имя"
            value={formState.name}
            onChange={(event) => updateField('name', event.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={formState.email}
            onChange={(event) => updateField('email', event.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
          />
          <input
            required
            type="text"
            placeholder="Компания"
            value={formState.company}
            onChange={(event) => updateField('company', event.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
          />
          <textarea
            required
            rows={4}
            placeholder="Опишите ваш кейс"
            value={formState.message}
            onChange={(event) => updateField('message', event.target.value)}
            className="w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
          />

          {errorMessage && <p className="text-sm font-medium text-red-600">{errorMessage}</p>}
          {hasSubmitted && <p className="text-sm font-medium text-green-700">Форма успешно отправлена</p>}

          <button className="btn-primary-lg w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      </div>
    </div>
  )
}
