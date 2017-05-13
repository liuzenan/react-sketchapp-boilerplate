import React from 'react';
import { StyleSheet, View, Text } from 'react-sketchapp';

import styles from './textArea-style';

const TextArea = (props) => (
    <View style={inputTextClass(props.value)} name="Text Area">
      {props.value &&
        <Text style={styles.inputText_value}>{props.value}</Text>
      }
      {!props.value &&
        <Text style={styles.inputText_placeholder}>{props.placeholder}</Text>
      }
    </View>
);

export default TextArea;
