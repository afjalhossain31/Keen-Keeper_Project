export function getStoredTimeline() {
  try {
    const saved = localStorage.getItem('keenkeeper-timeline')

    if (saved) {
      return JSON.parse(saved)
    }

    return [
      { id: 101, type: 'Call', title: 'Call with Sarah Kim', date: '2026-04-11', friendId: 2 },
      { id: 102, type: 'Text', title: 'Text with Michael Torres', date: '2026-04-12', friendId: 3 },
      { id: 103, type: 'Video', title: 'Video with Alex Johnson', date: '2026-04-13', friendId: 1 }
    ]
  } catch {
    return []
  }
}

export function saveStoredTimeline(timeline) {
  localStorage.setItem('keenkeeper-timeline', JSON.stringify(timeline))
}