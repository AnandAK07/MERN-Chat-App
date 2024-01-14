import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Homepage } from '../pages/Homepage'
import { ChatPage } from '../pages/ChatPage'

export const AllRoutes = () => {
  return (
    <div>
          <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/chats' element={<ChatPage />} />
          </Routes>
    </div>
  )
}
