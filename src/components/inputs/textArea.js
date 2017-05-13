import React from 'react';
import { StyleSheet, View, Text } from 'react-sketchapp';

import styles from './textArea-style';

const textAreaStyle = (height) => {
  if (height) {
    return StyleSheet.flatten([
      styles.textArea,
      {
        height: height
      }]);
  }
  return styles.textArea;
};

const TextArea = (props) => (
    <View style={textAreaStyle(props.height)} name="Text Area">
      {props.value &&
        <Text style={styles.textArea_value}>{props.value}</Text>
      }
      {!props.value &&
        <Text style={styles.textArea_placeholder}>{props.placeholder}</Text>
      }
    </View>
);

export default TextArea;
