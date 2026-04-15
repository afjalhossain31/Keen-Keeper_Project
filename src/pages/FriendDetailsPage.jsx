import { useParams, Link } from 'react-router-dom'
import { Bell, Archive, Trash2, Pencil, Phone, MessageCircle, Video } from 'lucide-react'

function SidebarButton({ icon: Icon, label, danger }) {
  return (
    <button className={`flex w-full items-center justify-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3.5 text-sm font-semibold shadow-sm transition hover:bg-slate-50 ${
      danger ? 'text-rose-500' : 'text-slate-700'
    }`}>
      {Icon && <Icon size={18} className={danger ? 'text-rose-500' : 'text-slate-600'} />}
      {label}
    </button>
  )
}

function StatCard({ label, value, subLabel }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[20px] bg-white p-8 text-center shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      <p className="text-4xl font-bold text-[#1e3a34]">{value}</p>
      <p className="mt-2 text-sm font-medium text-slate-400">{label}</p>
      {subLabel && <p className="text-xs text-slate-400">{subLabel}</p>}
    </div>
  )
}

export default function FriendDetailsPage({ friends, onQuickAction }) {
  const { id } = useParams()
  const friend = friends.find(f => f.id === parseInt(id))
// PageNot Found functionallity
  if (!friend) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-bold text-slate-800">Friend Not Found</h1>
        <Link to="/" className="mt-4 rounded-full bg-[#155e52] px-6 py-2 text-white transition hover:bg-opacity-90">
          Go back home
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Sidebar */}
        <div className="space-y-6 lg:col-span-4">
          <section className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-100">
            <img 
              src={friend.picture} 
              alt={friend.name} 
              className="h-24 w-24 rounded-full object-cover ring-4 ring-slate-50" 
            />
            <h1 className="mt-6 text-2xl font-bold text-slate-800">{friend.name}</h1>
            
            <div className="mt-3 flex flex-col items-center gap-2">
              <span className={`rounded-full px-5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm ${
                friend.status === 'overdue' ? 'bg-[#ff4d4d]' : 'bg-[#f0ad4e]'
              }`}>
                {friend.status}
              </span>
              <span className="rounded-full bg-[#e8fbf1] px-5 py-1 text-xs font-bold uppercase tracking-wider text-[#1e4620]">
                {friend.tags[0] || 'FRIEND'}
              </span>
            </div>

            <p className="mt-6 text-base italic text-slate-500">
              "{friend.bio || 'Former colleague, great mentor'}"
            </p>
            <p className="mt-2 text-xs text-slate-400">Preferred: {friend.email ? 'email' : 'any'}</p>
          </section>

          <div className="space-y-3">
            <SidebarButton icon={Bell} label="Snooze 2 Weeks" />
            <SidebarButton icon={Archive} label="Archive" />
            <SidebarButton icon={Trash2} label="Delete" danger />
          </div>
        </div>

        {/* Right Content Area */}
        <div className="space-y-6 lg:col-span-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatCard label="Days Since Contact" value={friend.days_since_contact} />
            <StatCard label="Goal (Days)" value={friend.goal} />
            <StatCard 
              label="Next Due" 
              value={new Date(friend.next_due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} 
            />
          </div>


          {/* Relationship Goal Card */}
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#1e3a34]">Relationship Goal</h2>
              <button className="rounded-lg bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100">
                Edit
              </button>
            </div>
            <p className="mt-4 text-lg text-slate-500">
              Connect every <span className="font-bold text-[#1e3a34]">{friend.goal} days</span>
            </p>
          </div>

          {/* Quick Check-In Card */}
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-lg font-bold text-[#1e3a34]">Quick Check-In</h2>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <button 
                onClick={() => onQuickAction(friend, 'Call')}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-slate-50 bg-[#f8fafc] py-6.5 transition-all duration-300 hover:bg-white hover:shadow-sm hover:-translate-y-0.5 hover:border-[#1e3a34]/5"
              >
                <div className="rounded-full p-2 transition-colors group-hover:bg-[#1e3a34]/5">
                  <Phone size={22} className="text-[#1e3a34]" />
                </div>
                <span className="text-sm font-semibold text-[#1e3a34]">Call</span>
              </button>
              
              <button 
                onClick={() => onQuickAction(friend, 'Text')}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-slate-50 bg-[#f8fafc] py-6.5 transition-all duration-300 hover:bg-white hover:shadow-sm hover:-translate-y-0.5 hover:border-[#1e3a34]/5"
              >
                <div className="rounded-full p-2 transition-colors group-hover:bg-[#1e3a34]/5">
                  <MessageCircle size={22} className="text-[#1e3a34]" />
                </div>
                <span className="text-sm font-semibold text-[#1e3a34]">Text</span>
              </button>
              
              <button 
                onClick={() => onQuickAction(friend, 'Video')}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-slate-50 bg-[#f8fafc] py-6.5 transition-all duration-300 hover:bg-white hover:shadow-sm hover:-translate-y-0.5 hover:border-[#1e3a34]/5"
              >
                <div className="rounded-full p-2 transition-colors group-hover:bg-[#1e3a34]/5">
                  <Video size={22} className="text-[#1e3a34]" />
                </div>
                <span className="text-sm font-semibold text-[#1e3a34]">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}