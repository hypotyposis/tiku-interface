import React from 'react';
import { SingleSelection } from '../../components';

interface IQuestionsProps {
    questions: Array<any>
}

export const Contest: React.FC<IQuestionsProps> = ({ questions }) => {
    return (
        <>
            <ul>
                {questions.map((q, index) => (
                    <SingleSelection index={index} id={q.id} type={q.type} score={q.score} questionDescriptions={q.questionDescriptions} choices={q.choices} />
                ))}
            </ul>
        </>
    )
}