import React from 'react';
import { StyleSheet, View } from 'react-sketchapp';
import shortid from 'shortid';


import styles from './rows-style';

const rowsClass = (gutterSize) => {
  switch(gutterSize) {
    case "small":
      return styles.rows__gutterSmall;
      break;
    case "large":
      return styles.rows__gutterLarge;
      break;
    default:
      return styles.rows;
  }
};

const rowClass = (gutterSize) => {
  switch(gutterSize) {
    case "small":
      return styles.row__gutterSmall;
      break;
    case "large":
      return styles.row__gutterLarge;
      break;
    default:
      return styles.row;
  }
};

const Row = (props) => (
  <View style={rowClass(props.gutterSize)} name="Row">{props.children}</View>
);

const Rows = (props) => (
  <View style={rowsClass(props.gutterSize)} name="Rows">
    {
      props.children.map(row => <Row key={shortid.generate()} gutterSize={props.gutterSize}>{row}</Row>)
    }
  </View>
);

export default Rows;
