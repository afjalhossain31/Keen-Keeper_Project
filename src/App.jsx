import { useEffect, useState } from 'react'
    const timer = setTimeout(() => {
      setFriends(friendsData)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    saveStoredTimeline(timeline)
  }, [timeline])

  const showToast = (message) => {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { id, message }])

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 2500)
  }

  const addTimelineEntry = (friend, type) => {
    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toISOString().slice(0, 10),
      friendId: friend.id,
    }

    setTimeline((prev) => [newEntry, ...prev])
    showToast(`${type} logged for ${friend.name}`)
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RootLayout toasts={toasts} />
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
  )
}