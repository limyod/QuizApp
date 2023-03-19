import React from "react";
import { VictoryPie } from "victory";
export default function Charts(props){
    const counts = {};

    // Loop through the object's keys
    props.quizResults.forEach((quizResult) => {
        quizResult.questions.forEach((question) => {
            if (counts[question.category]) {
                counts[question.category]++;
            } else {
                counts[question.category] = 1;
            }
        });
    });

    const PieData = Object.entries(counts).map(([key, value]) => {
        return { x: key, y: value };
    });
    
    return(
        <>
            <h1>My favorite Chart</h1>
            <VictoryPie data={PieData} />
        </>
    )
}