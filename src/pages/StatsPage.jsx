import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

export default function StatsPage({ timeline }) {
  const counts = { Call: 0, Text: 0, Video: 0 }

  timeline.forEach((item) => {
    counts[item.type] += 1
  })

  const data = Object.entries(counts).map(([name, value]) => ({ name, value }))
  const total = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Friendship Analytics</h1>
        {/* <p className="mt-2 text-sm text-slate-500">A quick overview of how you stay connected.</p> */}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight">Interaction Breakdown</h2>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              {total} total
            </span>
          </div>

          <div className="h-85 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} dataKey="value" nameKey="name" innerRadius={70} outerRadius={110} paddingAngle={4}>
                  <Cell fill="#16a34a" />
                  <Cell fill="#0284c7" />
                  <Cell fill="#7c3aed" />
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid gap-4">
          {data.map((item) => (
            <div 
              key={item.name} 
              className="flex flex-col items-center justify-center rounded-xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <p className="text-sm text-slate-500">{item.name}</p>
              <p className="mt-2 text-3xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}