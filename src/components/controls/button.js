import React from 'react';
import { StyleSheet, View, Text } from 'react-sketchapp';

import styles from './button-style';

const buttonClass = (isPrimary) => {
  if (isPrimary) {
    return StyleSheet.flatten([styles.button, styles.buttonPrimary]);
  }
  return StyleSheet.flatten([styles.button, styles.buttonDefault]);
};

const buttonTextClass = (isPrimary) => {
  if (isPrimary) {
    return StyleSheet.flatten([styles.button_text, styles.buttonPrimary_text]);
  }
  return StyleSheet.flatten([styles.button_text, styles.buttonDefault_text]);
};

const Button = ({ label, isPrimary }) => (
    <View style={buttonClass(isPrimary)} name="Button">
      <Text style={buttonTextClass(isPrimary)}>{ label }</Text>
    </View>
);

export default Button;
