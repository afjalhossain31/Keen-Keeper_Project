import { useNavigate, useParams, Link } from 'react-router-dom'
import { Mail, Clock3, Archive, Trash2, Pencil, Phone, MessageCircle, Video } from 'lucide-react'

function GhostButton({ icon: Icon, label, danger }) {
  return (
    <button className={`flex w-full items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium ${
      danger ? 'border-rose-200 text-rose-700 hover:bg-rose-50' : 'border-slate-200 text-slate-700 hover:bg-slate-50'
    }`}>
      <Icon size={16} />
      {label}
    </button>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
  )
}

export default function FriendDetailsPage({ friends, onQuickAction }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const friend = friends.find(f => f.id === parseInt(id))

  if (!friend) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">Friend Not Found</h1>
        <Link to="/" className="text-[#155e52] underline">Go back home</Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
        >
          ← Back
        </button>
      </div>

      <section className="overflow-hidden rounded-[32px] bg-white shadow-sm ring-1 ring-slate-200">
        <div className="flex items-start gap-6 p-6">
          <img src={friend.picture} alt={friend.name} className="h-24 w-24 rounded-3xl object-cover ring-2 ring-slate-100" />
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight">{friend.name}</h1>
            <p className="mt-1 text-sm text-slate-500">Last contacted {friend.days_since_contact} days ago</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {friend.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className={`rounded-full px-4 py-2 text-sm font-semibold capitalize ${
            friend.status === 'overdue' ? 'bg-rose-100 text-rose-700' :
            friend.status === 'almost due' ? 'bg-amber-100 text-amber-700' :
            'bg-emerald-100 text-emerald-700'
          }`}>
            {friend.status}
          </span>
        </div>

        <div className="border-t border-slate-100 px-6 py-5">
          <div className="mt-5 flex items-center gap-2 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
            <Mail size={16} className="text-[#155e52]" />
            {friend.email}
          </div>

          <div className="mt-6 grid gap-3">
            <GhostButton icon={Clock3} label="Snooze 2 Weeks" />
            <GhostButton icon={Archive} label="Archive" />
            <GhostButton icon={Trash2} label="Delete" danger />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard label="Days Since Contact" value={friend.days_since_contact} />
          <StatCard label="Goal" value={`${friend.goal} days`} />
          <StatCard label="Next Due Date" value={friend.next_due_date} />
        </div>

        <div className="rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight">Relationship Goal</h2>
              <p className="mt-1 text-sm text-slate-500">Stay in touch every {friend.goal} days.</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              <Pencil size={15} /> Edit
            </button>
          </div>
        </div>

        <div className="rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-bold tracking-tight">Quick Check-In</h2>
          <p className="mt-1 text-sm text-slate-500">Log a new interaction instantly.</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <button
              onClick={() => onQuickAction(friend, 'Call')}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#155e52] px-4 py-4 text-sm font-semibold text-white"
            >
              <Phone size={17} /> Call
            </button>

            <button
              onClick={() => onQuickAction(friend, 'Text')}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#155e52] px-4 py-4 text-sm font-semibold text-white"
            >
              <MessageCircle size={17} /> Text
            </button>

            <button
              onClick={() => onQuickAction(friend, 'Video')}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#155e52] px-4 py-4 text-sm font-semibold text-white"
            >
              <Video size={17} /> Video
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}