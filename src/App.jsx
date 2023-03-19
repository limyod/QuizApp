import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <main>
        <Home />
        <Quiz />
      </main>
    </div>
  )
}

export default App
