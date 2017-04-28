import React from 'react';
import {View, Artboard, render } from 'react-sketchapp';
import {Columns} from './components/structures';

import StyleGuide from './StyleGuide';

const Document = props => (
  <Artboard name="UI Kit Library">
    <StyleGuide />
  </Artboard>
);

export default (context) => {
  render(<Document />, context.document.currentPage());
};
