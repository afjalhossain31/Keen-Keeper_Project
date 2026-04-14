import { Link } from 'react-router-dom'

const statusStyles = {
  overdue: 'bg-rose-100 text-rose-700 border border-rose-200',
  'almost due': 'bg-amber-100 text-amber-700 border border-amber-200',
  'on-track': 'bg-emerald-100 text-emerald-700 border border-emerald-200',
}

export default function FriendCard({ friend }) {
  return (
    <Link
      to={`/friend/${friend.id}`}
      className="group rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <img src={friend.picture} alt={friend.name} className="h-16 w-16 rounded-2xl object-cover ring-2 ring-slate-100" />
        <span className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusStyles[friend.status]}`}>
          {friend.status}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold tracking-tight group-hover:text-[#155e52]">{friend.name}</h3>
      <p className="mt-1 text-sm text-slate-500">{friend.days_since_contact} days since contact</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {friend.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}