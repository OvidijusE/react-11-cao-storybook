import React from 'react';
import Hero from './Hero';

export default {
  title: 'Hero',
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

// funkcijos kopija
export const TitleArgs = Template.bind({});
TitleArgs.args = {
  variant: 'title',
  children: 'Primary hero',
};
export const SubtitleArgs = Template.bind({});
TitleArgs.args = {
  variant: 'subtitle',
  children: 'Primary subtitle',
};
