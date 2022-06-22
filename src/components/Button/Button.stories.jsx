import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

// funkcijos kopija
export const PrimaryButtonArgs = Template.bind({});
PrimaryButtonArgs.args = {
  variant: 'primary',
  children: 'Primary',
};
export const SecondaryButtonArgs = Template.bind({});
SecondaryButtonArgs.args = {
  variant: 'secondary',
  children: 'Secondary',
};
