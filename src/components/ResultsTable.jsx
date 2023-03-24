import React from 'react'
export default function ResultsTable(props){
    const quizResultEls = props.quizResults.map((result)=>{
        const quizLength = result.questions.length
        const score = result.questions.filter(q => q.answers.some(ans => ans.selected && ans.isCorrect)).length
        return(
            <tr key={result.date.toString()}>
                <td>{result.date.toString()}</td>
                <td>{`${score}/${quizLength}`}</td>
            </tr>
        )
    })
    
    return(
        <table>
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Score</td>
                </tr>
            </thead>
            <tbody>
                {quizResultEls}
            </tbody>
        </table>
    )
}