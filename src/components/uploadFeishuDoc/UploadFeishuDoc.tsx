import React, { useRef } from 'react';
import styles from "./UploadFeishuDoc.module.css"
import axios from "axios"
import { Input, Button } from 'antd';

export const UploadFeishuDoc: React.FC = () => {
    const inputEl = useRef(null)

    const clickHandler = async (event) => {
        // console.log(event)
        // if (inputEl.current)
        // {
        //     console.log(inputEl.current)
        // }
        let targetUrl = "https://v1sdc3qqoe.feishu.cn/docs/doccnXPtmxMLzyB1GKrYR0a8IC3";
        try {
            const { data } = await axios.post(
                `http://127.0.0.1:5000/createContest`,
                {
                    targetUrl: targetUrl,
                }
            );
            console.log(data)
          } catch (error:any) {
            console.log(error)
          }
    }


    return (
        <>
            <Input ref={inputEl} size="large" placeholder="在这里粘贴飞书文档链接" />
            <Button type="primary" size="large" onClick={clickHandler}>创建试卷</Button>
        </>
    )
}