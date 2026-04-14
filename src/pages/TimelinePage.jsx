import { useMemo, useState } from 'react'
  const filteredTimeline = useMemo(() => {
    let data = [...timeline]

    if (filter !== 'All') {
      data = data.filter((item) => item.type === filter)
    }

    if (query.trim()) {
      const searchValue = query.toLowerCase()
      data = data.filter((item) => item.title.toLowerCase().includes(searchValue))
    }

    data.sort((a, b) => {
      return sort === 'newest'
        ? b.date.localeCompare(a.date)
        : a.date.localeCompare(b.date)
    })

    return data
  }, [timeline, filter, sort, query])

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-3xl font-bold tracking-tight">Timeline</h1>
        <p className="mt-2 text-sm text-slate-500">History of your calls, texts, and video check-ins.</p>

        <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {['All', 'Call', 'Text', 'Video'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  filter === type ? 'bg-[#155e52] text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by friend or interaction"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm outline-none"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm outline-none"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredTimeline.length === 0 ? (
          <div className="rounded-[32px] border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
            No timeline entries found.
          </div>
        ) : (
          filteredTimeline.map((item) => <TimelineRow key={item.id} item={item} />)
        )}
      </div>
    </div>
  )
}