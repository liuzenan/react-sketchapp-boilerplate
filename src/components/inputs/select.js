import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-sketchapp';

import styles from './select-style';

const selectClass = (hasValue) => {
  if (hasValue) {
    return StyleSheet.flatten([styles.select, styles.select__withLabel]);
  }
  return styles.select;
};

const select = (props) => (
    <View style={selectClass(props.value)} name="Select">
      <View style={styles.select_content} name="Select Content">
        {props.value &&
          <View name="Input Text Content">
            <Text style={styles.select_label}>{props.label}</Text>
            <Text style={styles.select_value}>{props.value}</Text>
          </View>
        }
        {!props.value &&
          <Text style={styles.select_placeholder}>{props.placeholder}</Text>
        }
      </View>
      <View style={styles.select_dropdownIcon} name="Select Dropdown Icon">
        <Image style={styles.select_dropdownIcon_image} resizeMode="contain" source="https://image.ibb.co/gwoh1Q/icon_dropdown.png"></Image>
      </View>
    </View>
);

export default select;
