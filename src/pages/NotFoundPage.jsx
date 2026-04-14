import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="max-w-md rounded-[32px] bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#155e52]">404 Error</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">The page you requested could not be found.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-[#155e52] px-5 py-3 text-sm font-semibold text-white">
          Back to Home
        </Link>
      </div>
    </div>
  )
}