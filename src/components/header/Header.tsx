import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";

export const Header: React.FC = () => {
  const history = useHistory();
    return (
        <div className={styles["app-header"]}>
          {/* top-header */}
          <div className={styles["top-header"]}>
          <div className={styles.inner}>
            <img src={logo} alt="logo" className={styles["App-logo"]} />
              <Typography.Text>AC编程 - 题库</Typography.Text>
              <Button.Group className={styles["button-group"]}>
                <Button size="large" onClick={() => history.push("register")}>注册</Button>
                <Button size="large" onClick={() => history.push("signIn")}>登录</Button>
              </Button.Group>
            </div>
          </div>
          <Layout.Header className={styles["main-header"]}>
            <span onClick={() => history.push("/")}>
              <Typography.Title level={3} className={styles.title}>
                CSP 2020 提高组第一轮
              </Typography.Title>
            </span>
          </Layout.Header>
        </div>
      );
}