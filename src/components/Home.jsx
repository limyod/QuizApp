import React from 'react'
import Charts from './Charts'
export default function Home(props){
    function startQuiz(){
        props.setIsHome(false)
    }
    return(
        <>
            <h1>Welcome to Brain Bites</h1>
            <p>Brain Bites is a space to test your trivia skills and see your results.</p>
            <button type='button' onClick={startQuiz}>Begin!</button>
            {/* <div className="settings">
                <h3>Quiz Settings</h3>
                <button>See All</button>
                <h4>Current Settings</h4>
                <ul>
                    <li>Question Category: all</li>
                    <li>Difficulty: mixed</li>
                    <li>Question Quantity: 5</li>
                </ul>
                <form action="">
                    <input type="range" min="5" max="15" step="5" name="" id="" />
                </form>
            </div> */}
            {props.quizResults.length > 0 && <Charts quizResults={props.quizResults}/>}
            <button type='button'>Clear my Results</button>
        </>
    )
}