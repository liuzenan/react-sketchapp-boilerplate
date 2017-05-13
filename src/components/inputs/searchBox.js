import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-sketchapp';

import styles from './searchBox-style';

const SearchBox = (props) => (
    <View style={styles.searchBox} name="Search Box">
      <View style={styles.searchBox_icon}>
        <Image style={styles.searchBox_icon_image} source="https://image.ibb.co/nktX1Q/icon_search.png" resizeMode="contain"></Image>
      </View>
      <View style={styles.searchBox_content}>
        {props.value &&
          <Text style={styles.searchBox_value}>{props.value}</Text>
        }
        {!props.value &&
          <Text style={styles.searchBox_placeholder}>{props.placeholder}</Text>
        }
      </View>
    </View>
);

export default SearchBox;
