import React from 'react';
import { StyleSheet, View, Text } from 'react-sketchapp';

import styles from './inputText-style';

const inputTextClass = (hasValue) => {
  if (hasValue) {
    return StyleSheet.flatten([styles.inputText, styles.inputText__withLabel]);
  }
  return styles.inputText;
};


const InputText = (props) => (
    <View style={inputTextClass(props.value)} name="Input Text">
      {props.value &&
        <View name="Input Text Content">
          <Text style={styles.inputText_label}>{props.label}</Text>
          <Text style={styles.inputText_value}>{props.value}</Text>
        </View>
      }
      {!props.value &&
        <Text style={styles.inputText_placeholder}>{props.placeholder}</Text>
      }
    </View>
);

export default InputText;
