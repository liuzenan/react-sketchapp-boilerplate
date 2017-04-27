import React from 'react';
import { View, Text } from 'react-sketchapp';

import styles from '../_styles/controls';

const ButtonDefault = ({ label }) => (
    <View style={[styles.button, styles.buttonDefault]} name="Button Primary">
      <Text style={[styles.button_text, styles.buttonDefault_text]}>{ label }</Text>
    </View>
);

export default ButtonDefault;
