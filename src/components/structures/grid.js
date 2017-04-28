import React from 'react';
import { StyleSheet, View } from 'react-sketchapp';
import shortid from 'shortid';

import styles from './grid-style';

const GridCell = (props) => (
  <View style={styles.grid_cell} name="Grid Cell">{props.children}</View>
);

const Grid = (props) => (
  <View style={styles.grid} name="Grid">
    {
      props.children.map(gridCell => <GridCell key={shortid.generate()}>{gridCell}</GridCell>)
    }
  </View>
);

export default Grid;
