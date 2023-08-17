import React from "react";

import SuccessAlert from "./SuccessAlert";

export default {
  title: "Success Alert",
};

export const Primary = (args: any) => <SuccessAlert {...args} />;
Primary.args = {
  message: "Success Alert",
  type: "success",
  //   style: { backgroundColor: "#3A7jC7C", color: "white" },
};

export const Secondary = (args: any) => <SuccessAlert {...args} />;
Secondary.args = {
  message: "Secondary Alert",
  type: "warning",
};
