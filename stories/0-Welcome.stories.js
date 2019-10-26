import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Homescreen } from '../app/components/Homescreen/Homescreen';

export default {
  title: 'Homescreen',
};

export const toStorybook = () => <Welcome showApp={linkTo('Button')} />;

toStorybook.story = {
  name: 'to Storybook',
};
