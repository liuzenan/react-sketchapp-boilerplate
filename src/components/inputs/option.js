import React from 'react';
import { StyleSheet, View, Text } from 'react-sketchapp';
import shortid from 'shortid';

import styles from './option-style';

const optionCellTextClass = (isActive) => {
  if (isActive) {
    return StyleSheet.flatten([styles.option_cell_text, styles.option_cell_text__active]);
  }
  return styles.option_cell_text;
};

const optionCellClass = (isActive) => {
  if (isActive) {
    return StyleSheet.flatten([styles.option_cell, styles.option_cell__active]);
  }
  return styles.option_cell;
};

const OptionCell = (props) => (
  <View style={optionCellClass(props.isActive)} name="Option Cell">
    <Text style={optionCellTextClass(props.isActive)}>{props.label}</Text>
  </View>
);

const option = (props) => (
    <View style={styles.option} name="Option">
      {
        props.items.map((tabItem, i) =>
        <View style={(i==props.items.length-1) ? styles.option_cell_container__last : styles.option_cell_container} key={shortid.generate()}>
          <OptionCell
            iconSrc={tabItem.iconSrc}
            iconActiveSrc={tabItem.iconActiveSrc}
            isActive={tabItem.isActive}
            label={tabItem.label} >
          </OptionCell>
        </View>
        )
      }
    </View>
);

export default option;
