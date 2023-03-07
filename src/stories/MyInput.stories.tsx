import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MyInput from "../MyInput/MyInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/MyButton",
  component: MyInput,
} as ComponentMeta<typeof MyInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyInput> = (args) => (
  <MyInput {...args} />
);

export const BigRedGreenInput = Template.bind({});
BigRedGreenInput.args = {
  big: false,
  placeholder: "placeholder red big",
  label: "label red big",
};

export const SmalGreenInput = Template.bind({});
SmalGreenInput.args = {
  big: false,
  placeholder: "placeholder green big",
  label: "label green big",
};

export const BigGreenInput = Template.bind({});
BigGreenInput.args = {
  big: true,
  placeholder: "placeholder green big",
  label: "label green big",
};
