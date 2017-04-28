import React from 'react';
import { View } from 'react-sketchapp';

import styles from './section-style';

const Section = (props) => (
    <View style={styles.section} name="Section">
      {props.children}
    </View>
);

export default Section;
