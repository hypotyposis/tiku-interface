import React from 'react';
import {
    Header,
    Footer,
    SingleSelection,
    Matrix,
    Contest
} from "../../components";
import { MainLayout } from "../../layouts/mainLayout"
import { Row, Col, Typography, BackTop } from "antd";
import questions from "../../mockdata/questions.json";
import styles from "./TrainingPage.module.css";

export const TrainingPage: React.FC = () => {
    return (
        <>
            <MainLayout>
                {/* <h1>自由练习</h1> */}
                <div className={styles.mainContainer}>
                    <Matrix />
                    <Contest questions={questions} />
                </div>
                <BackTop>
                    <div className={styles.backTop}>UP</div>
                </BackTop>
            </MainLayout>
        </>
    )
}