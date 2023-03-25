import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
 Legend, ResponsiveContainer} from 'recharts'

export default function ProgressionChart(props){
    const data = props.quizResults.map((result, index)=>{
        const attempt = index + 1;
        const quizLength = result.questions.length;
        const score = result.questions.filter(q => q.answers.some(ans => ans.selected && ans.isCorrect)).length
        const percentage = Math.round(100* score / quizLength)
        return {
            attemptNumber: attempt,
            quizLength: quizLength,
            score: percentage
        }
    })

    return(
        <ResponsiveContainer width={"100%"} aspect={2}>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
            }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="attemptNumber" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#8884d8" />
            </LineChart>
            
        </ResponsiveContainer>
    )
}