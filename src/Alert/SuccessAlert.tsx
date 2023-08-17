import React from "react";
import { Alert } from "antd";

const App: React.FC = (props: any) => (
  <Alert message={props.message} type={props.type} />
);

export default App;
