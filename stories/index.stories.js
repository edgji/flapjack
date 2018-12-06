import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, text, number } from '@storybook/addon-knobs/react';

import Button from '../src/components/Button';

const sizeOptions = {
  large: 'Large',
  medium: 'Medium',
  small: 'Small',
};
const defaultSize = 'medium';

storiesOf('Button', module)
.addDecorator(withKnobs)
.add('main',
  withInfo(``)(() =>
  <Button size={select('Size',sizeOptions,defaultSize)} onClick={action('clicked')} title={text('Label', 'Label')}></Button>
  )
)
.add('sizes',() =>
  <div className='flex'>
    <Button size='small' onClick={action('clicked')} title='Small'></Button>
    <Button size='medium' onClick={action('clicked')} title='Medium'></Button>  
    <Button size='large' onClick={action('clicked')} title='Large'></Button>
  </div>
)
.add('levels',() =>
  <div className='flex'>
    <Button level='primary' onClick={action('clicked')} title='Primary'></Button>
    <Button level='secondary' onClick={action('clicked')} title='Secondary'></Button>
  </div>
)