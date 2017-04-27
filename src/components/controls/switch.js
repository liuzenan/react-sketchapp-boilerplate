import React from 'react';
import { View, Text } from 'react-sketchapp';

import styles from '../_styles/controls';

const switchClass = (isOn) => {
  if (isOn) {
    return [styles.switch, styles.switch__on];
  }
  return styles.switch;
};

const Switch = ({ isOn }) => (
    <View style={switchClass(isOn)} name="Switch">
      <View style={styles.switch_button} name="Switch Button">
      </View>
    </View>
);

export default Switch;
