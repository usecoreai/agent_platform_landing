import { useEffect } from 'react'
import { brand, mailto } from '../data/content'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <button
        className="absolute inset-0 bg-black/55"
        onClick={onClose}
        aria-label="Закрыть"
      />
      <div className="relative z-10 w-full max-w-xl rounded-2xl border border-black/10 bg-bg p-6 shadow-2xl sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Свяжитесь с нами</h3>
            <p className="mt-2 text-sm text-ink/70">Обсудим внедрение AI для вашего бизнеса</p>
          </div>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-lg leading-none hover:bg-black/5"
            onClick={onClose}
            aria-label="Закрыть модальное окно"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-black/10 bg-white p-5">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-ink/40">
              Email
            </div>
            <a
              href={mailto.general}
              className="mt-2 block text-lg font-semibold text-brand hover:underline break-all"
            >
              {brand.email}
            </a>
          </div>

          <div className="rounded-xl border border-black/10 bg-white p-5">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-ink/40">
              Время работы
            </div>
            <p className="mt-2 text-base font-medium text-ink">{brand.workingHours}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
