import React from 'react';
import { StyleSheet, View, Text } from 'react-sketchapp';

import styles from './switch-style';

const switchClass = (isOn) => {
  if (isOn) {
    return StyleSheet.flatten([styles.switch, styles.switch__on]);
  }
  return styles.switch;
};

const Switch = (props) => (
    <View style={switchClass(props.hasOwnProperty('on'))} name="Switch">
      <View style={styles.switch_button} name="Switch Button">
      </View>
    </View>
);

export default Switch;
