export default function Footer() {
  return (
    <footer className="bg-[#244D3F] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-7xl font-bold tracking-tight">Keen-Keeper</h2>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>

          {/* added Social Links  */}
          <div className="mt-8">
            <h3 className="text-xl font-medium">Social Links</h3>
            <div className="mt-4 flex gap-4">
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all duration-300 hover:bg-slate-200 hover:scale-110 overflow-hidden shadow-lg">
                <img src="/instagram.png" alt="Instagram" className="h-11 w-11 object-contain" />
              </a>
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all duration-300 hover:bg-slate-200 hover:scale-110 overflow-hidden shadow-lg">
                <img src="/facebook.png" alt="Facebook" className="h-11 w-11 object-contain" />
              </a>
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all duration-300 hover:bg-slate-200 hover:scale-110 overflow-hidden shadow-lg">
                <img src="/twitter.png" alt="Twitter" className="h-11 w-11 object-contain" />
              </a>
            </div>
          </div>
        </div>
        {/* added Border  */}
        <div className="mt-8 border-t border-white/12 opacity-70"></div>

        <div className="mt-5 flex flex-col items-center justify-between md:flex-row">
          <p className="text-base text-slate-400">© 2026 Keen-Keeper. All rights reserved.</p>
          <div className="mt-4 flex gap-10 md:mt-0">
            <a href="#" className="text-base text-slate-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-base text-slate-400 hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-base text-slate-400 hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}