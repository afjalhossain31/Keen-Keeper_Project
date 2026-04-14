import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a4731] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-7xl font-bold tracking-tight">KeenKeeper</h2>
          <p className="mt-8 max-w-2xl text-lg text-slate-300">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>

          <div className="mt-12">
            <h3 className="text-xl font-medium">Social Links</h3>
            <div className="mt-4 flex gap-4">
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1a4731] transition hover:bg-slate-100">
                <Instagram size={24} />
              </a>
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1a4731] transition hover:bg-slate-100">
                <Facebook size={24} />
              </a>
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1a4731] transition hover:bg-slate-100">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 opacity-30"></div>

        <div className="mt-10 flex flex-col items-center justify-between md:flex-row">
          <p className="text-base text-slate-400">© 2026 KeenKeeper. All rights reserved.</p>
          <div className="mt-6 flex gap-10 md:mt-0">
            <a href="#" className="text-base text-slate-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-base text-slate-400 hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-base text-slate-400 hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}