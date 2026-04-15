import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'
import TimelinePage from './pages/TimelinePage'
import StatsPage from './pages/StatsPage'
import FriendDetailsPage from './pages/FriendDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import ToastStack from './Components/ToastStack'
import { getStoredTimeline, saveStoredTimeline } from './utils/storage'
import friendsData from './data/friends.json'

export default function App() {
  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(true)
  const [timeline, setTimeline] = useState(getStoredTimeline())
  const [toasts, setToasts] = useState([])

  const addToast = (message) => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, message }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setFriends(friendsData)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    saveStoredTimeline(timeline)
  }, [timeline])

  const addTimelineEntry = (friend, type) => {
    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toISOString().slice(0, 10),
      friendId: friend.id,
    }

    setTimeline((prev) => [newEntry, ...prev])
    addToast(`${type} logged for ${friend.name}`)
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RootLayout />
          }
        >
          <Route index element={<HomePage friends={friends} loading={loading} timeline={timeline} />} />
          <Route path="timeline" element={<TimelinePage timeline={timeline} />} />
          <Route path="stats" element={<StatsPage timeline={timeline} />} />
          <Route
            path="friend/:id"
            element={<FriendDetailsPage friends={friends} onQuickAction={addTimelineEntry} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastStack toasts={toasts} />
    </>
  )
}
