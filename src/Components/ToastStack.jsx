export default function ToastStack({ toasts }) {
  return (
    <div className="pointer-events-none fixed top-24 right-4 z-[9999] flex flex-col gap-3">
      {toasts.map((toast) => (
        <div 
          key={toast.id} 
          className="pointer-events-auto flex min-w-[280px] items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-500"
        >
          <div className="h-2 w-2 rounded-full bg-[#155e52] animate-pulse"></div>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-bold text-slate-800">Notification</p>
            <p className="text-xs text-slate-500">{toast.message}</p>
          </div>
        </div>
      ))}
    </div>
  )
}