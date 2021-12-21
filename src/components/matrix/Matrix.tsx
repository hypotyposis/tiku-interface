import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useSelector } from "../../redux/hooks";  
import { Affix, Anchor, Button } from 'antd';
import styles from "./Matrix.module.css"
import questions from "../../mockdata/questions.json";
import { problemSetSlice } from '../../redux/problemset/slice';

const { Link } = Anchor;

interface IBlockProps {
    id: number;
}

export const Matrix: React.FC = () => {
    const [top, setTop] = useState(10);
    const [bottom, setBottom] = useState(10);
    const answeredQuestions = useSelector((state) => state.problemSet.answers);

    const questionList: Array<string> = [];
    const answeredQuestionIndex: Array<number> = [];

    // //initialize question list
    // useEffect(() => {
    //     questions.map((q, index) => {
    //         questionList.push(q.id);
    //     });
    // }, [])

    // useEffect(() => {
    //     questions.map((q, index) => {
    //         questionList.push(q.id);
    //     });
    //     console.log("answers update: ", answeredQuestions);
    //     console.log("question list ", questionList);
    //     answeredQuestions.forEach((value, key) => {
    //         console.log("key: ", key);
    //         answeredQuestionIndex.push(questionList.indexOf(key));
    //     })
    //     console.log("indexes updated: ", answeredQuestionIndex)
    // }, [answeredQuestions])

    return (
        <Affix offsetTop={top}>
        <div className={styles.matrixContainer}>
            <h3 className={styles.matrixTitle}>题目列表</h3>
            <ul className={styles.blockContainer}>
                {questions.map((q, index) => {
                    // return <span>{q.id}</span>
                    return (
                        <div className={styles.block}>
                            <Anchor>
                                <Link className={answeredQuestions.has(q.id)?styles.filledBlock:styles.nonfilledBlock} href={"#" + q.id} title={index + 1} />
                            </Anchor>
                        </div>
                    )
                })}
            </ul>
            </div>
        </Affix>
    )
}