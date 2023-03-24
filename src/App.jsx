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
  const [quizResults, setQuizResults] = React.useState(localStorage.getItem("quizResults") ? JSON.parse(localStorage.getItem("quizResults")) : [])
  console.log(quizResults)
  React.useEffect(()=>{
    localStorage.setItem("quizResults", JSON.stringify(quizResults))
  }, [quizResults])

  function addQuizResult(quizResult) {
    setQuizResults(oldQuizResults => [...oldQuizResults, quizResult])
  }

  function deleteQuizResults(){
    setQuizResults([])
  }

  return (
    <div className="App">
      {isHome ? 
      <Home 
        quizResults={quizResults}
        quizSettings={quizSettings}
        setQuizSettings={setQuizSettings}
        setIsHome={setIsHome} 
        deleteQuizResults={deleteQuizResults}
        /> :
      <Quiz 
        addQuizResult={addQuizResult}
        quizSettings={quizSettings} 
        setIsHome={setIsHome}
        />}
    </div>
  )
}

export default App
