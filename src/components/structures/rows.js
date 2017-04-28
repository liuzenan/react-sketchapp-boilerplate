import React from 'react';
import { StyleSheet, View } from 'react-sketchapp';
import shortid from 'shortid';


import styles from './rows-style';

const Row = (props) => (
  <View style={styles.row} name="Row">{props.children}</View>
);

const Rows = (props) => (
  <View style={styles.rows} name="Rows">
    {
      props.children.map(row => <Row key={shortid.generate()}>{row}</Row>)
    }
  </View>
);

export default Rows;
