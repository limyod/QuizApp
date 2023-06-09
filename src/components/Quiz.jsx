import React, { useEffect } from 'react'
//import data from '../data'
import Question from './Question'
import { nanoid } from 'nanoid'
import he from 'he';

export default function Quiz(props){
    const [questions, setQuestions] = React.useState([])
    const [answersChecked, setAnswersChecked] = React.useState(false)
    React.useEffect(()=>{
        fetchQuizData()
    }, [])
    
    async function fetchQuizData() {
        const { amount, difficulty, category } = props.quizSettings
        let queryParams = `amount=${amount}`
        if (difficulty != 'mixed') queryParams += `&difficulty=${difficulty}`
        if (category != 'none') queryParams += `&category=${category}`
        const apiLink = `https://opentdb.com/api.php?` + queryParams
        try {
            const response = await fetch(apiLink);
            const data = await response.json();
            const transformedData = transformData(data)
            setQuestions(transformedData)
        } catch (error) {
            console.log(error);
        }
    }

    function transformData(data){
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

        const transformedData = data.results.map(question => {
            const inCorrectAnswers = question.incorrect_answers.map((ans)=>{
                return { text: he.decode(ans), selected: false, isCorrect: false }
            })
            const correctAnswer = { text: he.decode(question.correct_answer), selected: false, isCorrect: true }
            let answerArray = [correctAnswer, ...inCorrectAnswers]
            shuffleArray(answerArray)
            return (
                {
                    question: he.decode(question.question),
                    type: question.type,
                    category: question.category,
                    difficulty: question.difficulty,
                    answers: answerArray,
                    id: nanoid()
                }
            )
        })
        return transformedData
    }

    function selectAnswer(questionId, answer_text){
        setQuestions(oldQuestions => oldQuestions.map(q=>{
            return (q.id === questionId) ? 
                {...q,
                answers: q.answers.map((answer)=>{
                    return answer.text === answer_text ? 
                        { ...answer, selected: !answer.selected } : {...answer, selected: false}
                })}
                : q
        }))
    }

    function checkAnswers(){
        setAnswersChecked(true);
    }

    function calculateScore() {
        return questions.filter(q => q.answers.some(ans => ans.selected && ans.isCorrect)).length
    }

    function checkAnswers() {
        const questionsAnswered = questions.filter(q => q.answers.some(ans => ans.selected)).length
        if(questionsAnswered === questions.length){
            props.addQuizResult({date: new Date(), questions: questions})
            setAnswersChecked(true)
        }else{
            errorMessage()
        }
    }

    function goHome(){
        props.setIsHome(true)
    }
    
    function errorMessage() {
        alert(`you haven't answered all the questions!`)
    }

    function startNewQuiz(){
        fetchQuizData()
        setAnswersChecked(false)
    }

    const questionElements = questions.map((data)=>{
        return(
            <Question key={data.id} question={data} answersChecked={answersChecked} selectAnswer={selectAnswer} />
        )
    })

    return(
        <section className='quiz'>
            <div className="all-questions">
                {questions.length > 0 ? questionElements: <h2>Loading...</h2>}
            </div>
            {answersChecked && 
                <p>You answered {calculateScore()} out of {questions.length} questions correctly!</p>
            }
            <div className='quiz-navigation-btns'>
                {answersChecked && <button onClick={startNewQuiz}>Play again</button>}
                <button onClick={checkAnswers} className='check-answer-btn'>Check Answers</button>
                <button onClick={goHome}>Return to Home Page</button>
            </div>
        </section>
    )
}