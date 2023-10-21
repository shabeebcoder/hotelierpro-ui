import React from "react";
import { Alert as Alerts } from "antd";

const Alert: React.FC = (props: any) => (
  <Alerts message={props.message} type={props.type} />
);

export default Alert;
