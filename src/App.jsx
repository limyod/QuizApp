import React from 'react'
import './App.css'
import Quiz from './components/Quiz'
import Home from './components/Home'

function App() {
  const defaultQuizSettings = {
    amount: 5,
    difficulty: 'mixed',
    category: 'none'
  }

  const [isHome, setIsHome] = React.useState(true)
  const [quizSettings, setQuizSettings] = React.useState(defaultQuizSettings)
  const [quizResults, setQuizResults] = React.useState([])
  
  function addQuizResult(quizResult) {
    console.log(quizResult)
    setQuizResults(oldQuizResults => [...oldQuizResults, quizResult])
  }

  function deleteQuizResults(){
    setQuizResults([])
  }

  return (
    <div className="App">
      <main>
        {isHome ? 
        <Home 
          quizResults={quizResults}
          quizSettings={quizSettings}
          setQuizSettings={setQuizSettings}
          setIsHome={setIsHome} 
          /> :
        <Quiz 
          addQuizResult={addQuizResult}
          quizSettings={quizSettings} 
          setIsHome={setIsHome}
          />}
      </main>
    </div>
  )
}

export default App
