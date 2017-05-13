import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-sketchapp';

import styles from './checkBox-style';

const checkBoxClass = (isChecked) => {
  if (isChecked) {
    return StyleSheet.flatten([styles.checkBox_box, styles.checkBox_box__checked]);
  }
  return styles.checkBox_box;
};

const CheckBox = (props) => (
    <View style={styles.checkBox} name="Search Box">
      <View style={checkBoxClass(props.hasOwnProperty('checked'))}>
        {props.hasOwnProperty('checked') &&
          <Image style={styles.checkBox_icon} source="https://image.ibb.co/bzf1BQ/icon_check.png" resizeMode="contain"></Image>
        }
      </View>
      {props.label &&
        <Text style={styles.checkBox_label}>{props.label}</Text>
      }
    </View>
);

export default CheckBox;
