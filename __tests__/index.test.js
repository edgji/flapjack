'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Button from '../src/index';

describe('Button Component', () => {
  it('should render correctly', () => {
    // Render the Button component
    const component = TestUtils.renderIntoDocument(
      <Button title="Hello World"/>
    );

    const titleNode = ReactDOM.findDOMNode(component);
    expect(titleNode.textContent).toEqual('Hello World');
  });
});
