import { Loader2, UserRound, Bell, CalendarDays, Phone, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

const statusStyles = {
  overdue: 'bg-[#ff4d4d] text-white',
  'almost due': 'bg-[#f0ad4e] text-white',
  'on-track': 'bg-[#5cb85c] text-white',
}

function FriendCard({ friend }) {
  return (
    <Link
      to={`/friend/${friend.id}`}
      className="group flex flex-col items-center rounded-xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md"
    >
      <div className="relative mb-6">
        <img
          src={friend.picture}
          alt={friend.name}
          className="h-28 w-28 rounded-full object-cover ring-4 ring-slate-50"
        />
      </div>

      <h3 className="text-2xl font-bold text-[#1e293b]">{friend.name}</h3>
      <p className="mt-2 text-base text-slate-500">{friend.days_since_contact}d ago</p>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {friend.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#dcfce7] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#166534]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5">
        <span className={`rounded-full px-6 py-2 text-sm font-bold text-white shadow-sm ${
          friend.status === 'overdue' ? 'bg-[#ef4444]' : 
          friend.status === 'almost due' ? 'bg-[#f59e0b]' : 
          'bg-[#22c55e]'
        }`}>
          {friend.status === 'on-track' ? 'On Track' : friend.status === 'almost due' ? 'Almost Due' : 'Overdue'}
        </span>
      </div>
    </Link>
  )
}

export default function HomePage({ friends, loading, timeline }) {
  const totalFriends = friends.length
  const overdueFriends = friends.filter(f => f.status === 'overdue').length
  const recentInteractions = timeline.filter(entry => {
    const entryDate = new Date(entry.date)
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    return entryDate >= weekAgo
  }).length

  const summary = [
    { label: 'Total Friends', value: totalFriends, icon: UserRound },
    { label: 'Overdue', value: overdueFriends, icon: Bell },
    { label: 'This Week', value: recentInteractions, icon: CalendarDays },
    { label: 'Quick Call', value: '...', icon: Phone },
  ]

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[32px] bg-white shadow-sm ring-1 ring-slate-200">
        <div className="border-b border-slate-100 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-6 py-12 text-center sm:px-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#155e52]">Friendship Tracker</p>
          <h1 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
            Reconnect with the people who matter most.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Track conversations, stay consistent with your relationship goals, and never let meaningful friendships fade away.
          </p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#155e52] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px]">
            <Plus size={16} />
            Add a Friend
          </button>
        </div>

        <div className="grid gap-4 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4 sm:px-10">
          {summary.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#155e52] shadow-sm ring-1 ring-slate-200">
                <Icon size={20} />
              </div>
              <p className="text-3xl font-bold">{value}</p>
              <p className="mt-1 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-2xl font-bold tracking-tight">Your Friends</h2>
          <p className="text-sm text-slate-500">Keep tabs on who needs a quick check-in.</p>
        </div>

        {loading ? (
          <div className="grid min-h-[280px] place-items-center rounded-[32px] border border-dashed border-slate-300 bg-white">
            <div className="text-center">
              <Loader2 className="mx-auto mb-3 animate-spin text-[#155e52]" size={34} />
              <p className="text-sm text-slate-500">Loading friends data...</p>
            </div>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}