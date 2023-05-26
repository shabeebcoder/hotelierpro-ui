import React from "react";
import { Card } from "antd";
const { Meta } = Card;
export default function AntdCard() {
  return (
    <Card
      hoverable
      style={{ width: 250 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};