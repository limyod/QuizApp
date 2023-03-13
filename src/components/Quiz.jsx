import React from 'react'
import data from '../data'
import Question from './Question'
import { nanoid } from 'nanoid'

export default function Quiz(){
    let questions = data.results.map((result)=>{
        return(
            <Question key={nanoid()} question={result} />
        )
    })

    return(
        <section className='quiz'>
            <div className="all_questions">
                {questions}
            </div>
            <button className='check_answer_button'>Check Answers</button>
        </section>
    )
}