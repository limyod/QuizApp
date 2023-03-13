import React from 'react'
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
    
    function getNewQuestions(){
        const x = data.results.map(question => {
            let inCorrectAnswers = question.incorrect_answers.map((ans)=>{
                return { text: ans, selected: false, isCorrect: false }
            })

            let correctAnswer = { text: question.correct_answer, selected: true, isCorrect: true }
            return (
                {
                    question: question.question,
                    type: question.type,
                    category: question.category,
                    difficulty: question.difficulty,
                    answers: [correctAnswer, ...inCorrectAnswers],
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
                        { ...answer, selected: true } : {...answer, selected: false}
                })}
                : q
        }))
    }


    const questionElements = questions.map((data)=>{
        return(
            <Question key={data.id} question={data} selectAnswer={selectAnswer} />
        )
    })

    return(
        <section className='quiz'>
            <div className="all_questions">
                {questionElements}
            </div>
            <button className='check_answer_button'>Check Answers</button>
        </section>
    )
}