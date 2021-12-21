import React from 'react';
import styles from "./DashboardPage.module.css"
import { UploadFeishuDoc } from '../../components'
import { MainLayout } from '../../layouts/mainLayout';

export const DashboardPage: React.FC = () => {
    return (
        <MainLayout>
            <div className={styles.container}>
                <UploadFeishuDoc />
            </div>
        </MainLayout>
    )
}