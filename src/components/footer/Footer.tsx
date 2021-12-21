import React from "react";
import { Layout, Typography } from "antd";

export const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <Typography.Title level={3} style={{ textAlign: "center" }}>
        Developed by AC 编程 Dev Team , © AC 编程
      </Typography.Title>
    </Layout.Footer>
  );
};
