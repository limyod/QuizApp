import React from 'react'
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
            <div>
                {props.quizResults.map((quizResult)=> (<h1>{quizResult.date.toString()}</h1>))}
            </div>
        </section>
    )
}