import React from 'react'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow rounded p-6">
        <h1 className="text-2xl font-bold mb-4">Amigo Invisible</h1>
        <Home />
      </div>
    </div>
  )
}
