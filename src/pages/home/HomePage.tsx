import React from 'react';
import {
    Header,
    Footer,
} from "../../components";
import { MainLayout } from "../../layouts/mainLayout"
import { Row, Col, Typography } from "antd";
import styles from "./HomePage.module.css";
import contests from "../../mockdata/contests.json"

export const HomePage: React.FC = () => {
    return (
        <>
            <MainLayout>
            <h1>题库主页</h1>
            <ul>
                {contests.map((c) => {
                    return (
                        <h2>
                        <a href={"/problemset/" + c.id}>{c.name}</a>
                        </h2>
                    )
                })}
                </ul>
            </MainLayout>
        </>
    )
}