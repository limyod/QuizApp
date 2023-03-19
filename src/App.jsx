import React from 'react'
import './App.css'
import Quiz from './components/Quiz'
import Home from './components/Home'
import TriviaCategories from './TriviaCategories'
function App() {
  const defaultQuizSettings = {
    amount: 5,
    difficulty: 'mixed',
    category: 'none'
  }
  const [isHome, setIsHome] = React.useState(true)
  const [quizSettings, setQuizSettings] = React.useState(defaultQuizSettings)
  const [quizResults, setQuizResults] = React.useState([])
  console.log(quizResults)
  
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
          quizSettings={quizSettings}
          setQuizSettings={setQuizSettings}
          setIsHome={setIsHome} 
          /> :
        <Quiz 
          addQuizResult={addQuizResult}
          quizSettings={quizSettings} 
          setIsHome={setIsHome} 
          triviaCategories={TriviaCategories.trivia_categories}
          />}
      </main>
    </div>
  )
}

export default App
