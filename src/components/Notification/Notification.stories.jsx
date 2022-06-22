import React from 'react';
import Notification from './Notification';

export default {
  title: 'Notification',
  component: Notification,
};

const Template = (args) => <Notification {...args} />;

// funkcijos kopija
export const DangerAlertArgs = Template.bind({});
DangerAlertArgs.args = {
  variant: 'danger',
  children: 'This is danger alert',
};
export const WarningAlertArgs = Template.bind({});
WarningAlertArgs.args = {
  variant: 'warning',
  children: 'This is warning alert',
};
export const InfoAlertArgs = Template.bind({});
InfoAlertArgs.args = {
  variant: 'info',
  children: 'This is info alert',
};
export const SuccessAlertArgs = Template.bind({});
SuccessAlertArgs.args = {
  variant: 'success',
  children: 'This is success alert',
};
