import React from 'react';
import { View, Text } from 'react-sketchapp';

import styles from '../_styles/controls';

const ButtonPrimary = ({ label }) => (
    <View style={[styles.button, styles.buttonPrimary]} name="Button Primary">
      <Text style={[styles.button_text, styles.buttonPrimary_text]}>{ label }</Text>
    </View>
);

export default ButtonPrimary;
