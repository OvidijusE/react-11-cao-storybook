import React from 'react';
import Hero from './Hero';

export default {
  title: 'Hero',
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

// funkcijos kopija
export const PrimaryHeroArgs = Template.bind({});
PrimaryHeroArgs.args = {
  type: 'primary',
  title: 'Primary title',
  subtitle: 'Primary subtitle',
  //   variant: 'primary',
};

export const SecondaryHeroArgs = Template.bind({});
SecondaryHeroArgs.args = {
  type: 'secondary',
  title: 'Secondary title',
  subtitle: 'Secondary subtitle',
  //   variant: 'secondary',
};
