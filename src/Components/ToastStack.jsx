export default function ToastStack({ toasts }) {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex w-[calc(100%-2rem)] max-w-sm flex-col gap-2">
      {toasts.map((toast) => (
        <div key={toast.id} className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg">
          {toast.message}
        </div>
      ))}
    </div>
  )
}