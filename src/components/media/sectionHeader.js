import React from 'react';
import { StyleSheet, View, Text } from 'react-sketchapp';

import styles from './sectionHeader-style';

const SectionHeader = (props) => (
    <View style={styles.sectionHeader} name="Section Header">
      <Text style={styles.sectionHeader_text}>{props.title}</Text>
    </View>
);

export default SectionHeader;
