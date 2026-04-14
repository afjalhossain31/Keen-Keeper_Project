import { useNavigate, useParams, Link } from 'react-router-dom'
          <div className="mt-5 flex items-center gap-2 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
            <Mail size={16} className="text-[#155e52]" />
            {friend.email}
          </div>

          <div className="mt-6 grid gap-3">
            <GhostButton icon={Clock3} label="Snooze 2 Weeks" />
            <GhostButton icon={Archive} label="Archive" />
            <GhostButton icon={Trash2} label="Delete" danger />
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
    </div>
  )
}