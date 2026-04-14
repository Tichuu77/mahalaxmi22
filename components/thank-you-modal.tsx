"use client"

import { CheckCircle2 } from "lucide-react"

interface ThankYouModalProps {
  isOpen: boolean
  timeRemaining: number
}

export default function ThankYouModal({ isOpen, timeRemaining }: ThankYouModalProps) {

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50">
      <div
        className="relative w-full max-w-md rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in-95"
        style={{
          background: "#fff",
          animation: "slideUp 0.3s ease-out",
        }}
      >
        <style>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
        
        <div className="flex flex-col items-center justify-center text-center">
          <div
            className="mb-4 flex h-20 w-20 items-center justify-center rounded-full animate-bounce"
            style={{ background: "rgba(48,83,74,0.1)" }}
          >
            <CheckCircle2 size={40} className="text-[var(--green)]" />
          </div>
          
          <h2 className="mb-2 text-2xl font-bold text-[var(--text-dark)]">Thank You!</h2>
          <p className="mb-2 text-sm text-[var(--text-muted)]">
            Your message has been sent successfully.
          </p>
          <p className="text-sm font-medium text-[var(--text-muted)]">
            We&apos;ll get in touch within 30 minutes.
          </p>
          
          <div className="mt-6">
            <p className="text-xs text-[var(--text-muted)]">
              Closing in <span className="font-bold text-[var(--green)]">{timeRemaining}s</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
