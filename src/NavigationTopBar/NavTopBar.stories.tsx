import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import NavTopBar from "./NavTopBar";

export default {
  title: "elements/Navigation Topbar",
};


const handleOnClick = (index) => {
  alert(index)
}


export const Primary = (args: any) => <NavTopBar {...args} />;
Primary.args = {
  handleOnClick
}


