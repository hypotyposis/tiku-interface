import React, { useState, useEffect } from 'react';
import { renderToStaticMarkup, renderToString } from "react-dom/server"
import styles from "./SingleSelection.module.css"
import { Highlight, PrismCode } from "../../components"
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import Prism from 'prismjs'
// import "../../css/okaidia.css"
import "prismjs/themes/prism-okaidia.css"
import { useSelector } from "../../redux/hooks";    
import { useDispatch } from "react-redux";
import {problemSetSlice} from "../../redux/problemset/slice"

interface questionDescriptionProps {
    content: string;
    // type: "text" | "image" | "code";
    type: string,
}

interface SingleSelectionProps {
    index: number;
    id: string,
    score: number,
    // type: "single selection" | "multi selection" | "fill in blank",
    type: string,
    questionDescriptions: Array<questionDescriptionProps>,
    choices: any
}

const fulfillSingleSelection = (questionDescription: questionDescriptionProps) => {
    switch (questionDescription.type) {
        case "text":
            return (<div className={styles.textContainer}>
                <p>{questionDescription.content}</p>
                </div>
            )
        case "image":
            return (
                <div className={styles.imageContainer}>
                    <img src={questionDescription.content} />
                </div>
            )
        case "code":
            return (
                <>
                <div className={styles.codeContainer}>
                    {/* <PrismCode 
                        code={questionDescription.content}
                        language="cpp"
                        plugins={["line-numbers", "show-language"]}
                    /> */}
                    <Highlight content={`<pre><code>` + questionDescription.content  + `</code></pre>`} />
                </div>
                </>
            )
    }
}


export const SingleSelection: React.FC<SingleSelectionProps> = ({index, id, score, type, questionDescriptions, choices}) => {

    const [answeredQuestions, setAnsweredQuestions] = useState(new Map());
    const answers = useSelector((state) => state.problemSet.answers)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("componentDidMount")
        setTimeout(() => Prism.highlightAll(), 0)
        return () => {
            console.log("componentWillUnmount")
        }
    }, [])

    // useEffect(() => Prism.highlightAll())
    
    const choiceClickHandler = async(e) => {
        // console.log("click event: ", e)
        const input = e.target;
        const questionId = input.name;
        const optionValue = input.defaultValue;
        await setAnsweredQuestions((prev) => {
            console.log("prev ", prev)
            const next = prev;
            next.set(questionId, optionValue);
            console.log("next ", next)
            return next;
        })
        console.log("answeredQuestions ", answeredQuestions);
        dispatch(problemSetSlice.actions.update(answeredQuestions))
    }

    return (
        <div className={styles.cardContainer}>
            <h3 id={id}>
                <span>单选题 { index + 1 }</span>
                <a href={"#" + id} className="anchor"></a>
            </h3>
            <ul>
                {questionDescriptions.map((d) => {
                    return fulfillSingleSelection(d)
                })}
            </ul>
            {/* <div className={styles.codeContainer} style={{marginLeft:'40px'}}>
                <pre>
                    <code className="language-javascript">
                    {`
                        onSubmit(e) {
                        e.preventDefault();
                        const job = {
                            title: 'Developer',
                            company: 'Facebook' 
                            };
                        }
                    `}
                    </code>
                </pre>
            </div> */}
            <ol className={styles.optionsContainer}>
                <li>
                    <div><input type="radio" name={id} value="A" onClick={choiceClickHandler}/>{choices.choiceA}</div>
                    <div><input type="radio" name={id} value="B" onClick={choiceClickHandler}/>{choices.choiceB}</div>
                    <div><input type="radio" name={id} value="C" onClick={choiceClickHandler}/>{choices.choiceC}</div>
                    <div><input type="radio" name={id} value="D" onClick={choiceClickHandler}/>{choices.choiceD}</div>
                </li>
            </ol>
            <span className={styles.scoreContainer}>分值: {score}</span>
        </div>
      );
}