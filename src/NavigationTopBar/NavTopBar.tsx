import React from "react";

import { Menu } from "antd";

const App: React.FC = (props: any) => {
  return (
    <Menu
      onClick={props.onClick}
      selectedKeys={[props.current]}
      mode={props.mode} //horizontal
      items={props.items}
    />
  );
};

export default App;
