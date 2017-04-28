import React from 'react';
import { StyleSheet, View, Text } from 'react-sketchapp';
import shortid from 'shortid';

import styles from './list-style';

const listClass = (hasHeader) => {
  if (hasHeader) {
    return styles.list;
  }
  return StyleSheet.flatten([styles.list, styles.list__withTopBorder]);
};

const ListItem = (props) => (
  <Text style={styles.list_item}>{props.title}</Text>
);

const ListHeader = (props) => (
  <View style={styles.list_header} name="List Header">
    <Text style={styles.list_header_title} name="Header Title">{props.title}</Text>
  </View>
);

const List = (props) => (
  <View name="List">
    {props.headerTitle &&
      <ListHeader title={props.headerTitle}></ListHeader>
    }
    <View style={listClass(props.headerTitle)} name="List Body">
      {
        props.listItems.map(title =>
          <ListItem key={shortid.generate()} title={title} />
        )
      }
    </View>
  </View>

);

export default List;
