import React from 'react';
import { StyleSheet, View } from 'react-sketchapp';
import shortid from 'shortid';


import styles from './columns-style';

const Column = (props) => (
  <View style={styles.column} name="Column">{props.children}</View>
);

const Columns = (props) => (
  <View style={styles.columns} name="Columns">
    {
      props.children.map(column => <Column key={shortid.generate()}>{column}</Column>)
    }
  </View>
);

export default Columns;
