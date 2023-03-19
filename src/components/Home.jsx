import React from 'react'
export default function Home(props){
    function startQuiz(){
        props.setIsHome(false)
    }
    
    return(
        <>
            <h1>Welcome to Brain Bites</h1>
            <p>Brain Bites is a space to test your trivia skills and see your results.</p>
            <button type='button' onClick={startQuiz}>Begin!</button>
            <button type='button'>Clear my Results</button>
            <div className="settings">
                <h3>Quiz Settings</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quis commodi natus delectus, sapiente dolore animi accusamus odit molestiae itaque doloremque necessitatibus facere voluptas? Obcaecati sed id dicta repudiandae! Voluptas!</p>
            </div>
            <section>
                See my Results
            </section>
        </>
    )
}