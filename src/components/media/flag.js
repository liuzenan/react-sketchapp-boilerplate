import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-sketchapp';

import styles from './flag-style';

const flagImageStyle = (props) => {
  return StyleSheet.flatten([
    styles.flag_image,
    {
      width: props.imageWidth,
      height: props.imageHeight
    }
  ]);
};

const Flag = (props) => (
    <View style={styles.flag} name="Flag">
      <Image
        source={props.imageSrc}
        style={flagImageStyle(props)}
        name="Flag Image"
        />
      <View style={styles.flag_content} name="Flag Content">
        {props.children}
      </View>
    </View>
);

export default Flag;
