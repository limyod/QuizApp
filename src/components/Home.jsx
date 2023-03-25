import React from 'react'
import ResultsTable from './ResultsTable'
import ProgressionChart from './ProgressionChart'
export default function Home(props){
    function startQuiz(){
        props.setIsHome(false)
    }
    return(
        <section className='home-container'>
            <h1>Welcome to Brain Bites</h1>
            <p>Brain Bites is a space to test your trivia skills and see your results.</p>
            <div className="home-btn-group">
                <button type='button' onClick={startQuiz}>Begin!</button>
                <button type='button' 
                    onClick={props.deleteQuizResults} 
                    disabled={props.quizResults.length === 0}>Clear my Results</button>
            </div>
            {props.quizResults.length > 1 
                ?
                <div class="quiz-results-container">
                    <ResultsTable quizResults={props.quizResults}/>
                    <ProgressionChart quizResults={props.quizResults}/>
                </div>
                :
                <h3>Play {2 - props.quizResults.length} more times to see view your past Results</h3>
            }
        </section>
    )
}