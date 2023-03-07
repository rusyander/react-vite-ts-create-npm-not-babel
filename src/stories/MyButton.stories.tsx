import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MyButton from "../MyButton/MyButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/MyButton",
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

export const RedBtn = Template.bind({});
RedBtn.args = {
  color: "red",
  children: "red",
};

export const GreenBtn = Template.bind({});
GreenBtn.args = {
  color: "green",
  children: "green",
};

export const SmallBtn = Template.bind({});
SmallBtn.args = {
  big: false,
  color: "green",
  children: "green small",
};

export const BigGreenBtn = Template.bind({});
BigGreenBtn.args = {
  big: true,
  color: "green",
  children: "green big",
};
