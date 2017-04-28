import React from 'react';
import {View, Artboard, render } from 'react-sketchapp';
import {Columns} from './components/structures';

import App from './App';

const Document = props => (
  <Columns>
    <View style={{width:375}}>
      <App />
    </View>
    <View style={{width:640}}>
      <App />
    </View>
    <View style={{width:1024}}>
      <App />
    </View>
  </Columns>
);

export default (context) => {
  render(<Document />, context.document.currentPage());
};
