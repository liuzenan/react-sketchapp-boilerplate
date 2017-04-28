import React from 'react';
import {View, Artboard, render } from 'react-sketchapp';
import {Columns} from './components/structures';

import App from './App';

const Document = props => (
  <Columns>
    <Artboard style={{width:375}}>
      <App />
    </Artboard>
    <Artboard style={{width:480}}>
      <App />
    </Artboard>
    <Artboard style={{width:640}}>
      <App />
    </Artboard>
  </Columns>
);

export default (context) => {
  render(<Document />, context.document.currentPage());
};
