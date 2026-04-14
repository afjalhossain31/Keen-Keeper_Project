export default function ToastStack({ toasts }) {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[9999] flex w-full max-w-xs flex-col gap-2">
      {toasts.map((toast) => (
        <div 
          key={toast.id} 
          className="pointer-events-auto flex items-center justify-between rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-2xl animate-in fade-in slide-in-from-right-4 duration-300"
        >
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  )
}