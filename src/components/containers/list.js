import React from 'react';
import { StyleSheet, View, Text } from 'react-sketchapp';

import styles from './list-style';

const ListItem = (listItem) => (
  <View style={styles.listItem} name="List Item">
    {listItem}
  </View>
);

const List = (props) => (
    <View style={styles.list} name="List">
      {
        props.children.map(listItem => ListItem(listItem))
      }
    </View>
);

export default List;
