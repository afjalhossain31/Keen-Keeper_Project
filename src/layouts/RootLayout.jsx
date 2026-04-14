import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ToastStack from '../components/ToastStack'

export default function RootLayout({ toasts }) {
  return (
    <div className="min-h-screen bg-[#f7f8f8] text-slate-900">
      <Navbar />
      <main className="mx-auto min-h-[calc(100vh-220px)] max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
      <ToastStack toasts={toasts} />
    </div>
  )
}