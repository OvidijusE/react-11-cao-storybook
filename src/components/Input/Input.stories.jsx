import React from 'react';
import Input from './Input';

export default {
  title: 'Form/Input',
  component: Input,
};

const Wrapper = ({ children }) => (
  <div
    style={{
      backgroundColor: 'lightcyan',
      height: '200px',
      display: 'flex',

      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
);

const Template = (args) => (
  <Wrapper>
    <Input {...args} />
  </Wrapper>
);

export const MainInput = Template.bind({});
MainInput.args = {
  placeholder: 'Enter text here',
  color: 'light',
};

export const DarkInput = Template.bind({});
DarkInput.args = {
  ...MainInput.args,
  color: 'dark',
};

export const TextArea = Template.bind({});
TextArea.args = {
  ...MainInput.args,
  type: 'textarea',
};

export const DarkTextArea = Template.bind({});
DarkTextArea.args = {
  ...TextArea.args,
  type: 'textarea',
  color: 'dark',
};

export const InputwithError = Template.bind({});
InputwithError.args = {
  value: 'JamesBond.lt',
  errorMsg: 'must be valid email!',
};
