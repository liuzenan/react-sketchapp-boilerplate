import React from 'react';
import { StyleSheet, View, Text } from 'react-sketchapp';

import styles from './card-style';

const Card = (props) => (
    <View style={styles.card} name="Card">
      {props.children}
    </View>
);

export default Card;
