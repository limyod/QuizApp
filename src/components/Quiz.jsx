import React, { useEffect } from 'react'
import data from '../data'
import Question from './Question'
import { nanoid } from 'nanoid'
/**
 * What data do we need for each question?
 * question id
 * question text
 * correct answer, incorrect answer, along with whether its selected.
 * category, question type, difficulty
 * 
 */
export default function Quiz(){
    const [questions, setQuestions] = React.useState(getNewQuestions())
    const [answersChecked, setAnswersChecked] = React.useState(false)
    function getNewQuestions(){
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        const x = data.results.map(question => {
            const inCorrectAnswers = question.incorrect_answers.map((ans)=>{
                return { text: ans, selected: false, isCorrect: false }
            })
            const correctAnswer = { text: question.correct_answer, selected: false, isCorrect: true }
            let answerArray = [correctAnswer, ...inCorrectAnswers]
            shuffleArray(answerArray)
            return (
                {
                    question: question.question,
                    type: question.type,
                    category: question.category,
                    difficulty: question.difficulty,
                    answers: answerArray,
                    id: nanoid()
                }
            )
        })
        return x
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

    const questionElements = questions.map((data)=>{
        return(
            <Question key={data.id} question={data} answersChecked={answersChecked} selectAnswer={selectAnswer} />
        )
    })

    function calculateScore() {
        return questions.filter(q => q.answers.some(ans => ans.selected && ans.isCorrect)).length
    }

    function checkAnswers() {
        const questionsAnswered = questions.filter(q => q.answers.some(ans => ans.selected)).length
        questionsAnswered === questions.length ? setAnswersChecked(true) : errorMessage()
    }

    function errorMessage() {
        alert(`you haven't answered all the questions!`)
    }

    return(
        <section className='quiz'>
            <div className="all_questions">
                {questionElements}
            </div>
            {answersChecked && <span>You answered {calculateScore()} out of {questions.length} questions correctly!</span>}
            <button onClick={checkAnswers} className='check_answer_button'>Check Answers</button>
        </section>
    )
}