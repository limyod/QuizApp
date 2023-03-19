import React from 'react'
import './App.css'
import Quiz from './components/Quiz'
import Home from './components/Home'

function App() {
  const defaultQuizSettings = {
    questionNumber: 5,
    difficulty: 'mixed',
    category: 'all'
  }
  const [isHome, setIsHome] = React.useState(true)
  const [quizSettings, setQuizSettings] = React.useState(defaultQuizSettings)
  return (
    <div className="App">
      <main>
        {isHome ? <Home quizSettings={quizSettings}
           setQuizSettings={setQuizSettings} setIsHome={setIsHome} /> :
          <Quiz quizSettings={quizSettings} setIsHome={setIsHome} />}
      </main>
    </div>
  )
}

export default App
