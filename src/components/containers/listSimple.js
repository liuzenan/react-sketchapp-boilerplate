import React from 'react';
import { StyleSheet, View, Text } from 'react-sketchapp';
import shortid from 'shortid';

import styles from './listSimple-style';

const ListItem = (props) => (
  <Text style={styles.list_item}>{props.title}</Text>
);

const ListHeader = (props) => (
  <View style={styles.list_header} name="List Header">
    <Text style={styles.list_header_title} name="Header Title">{props.title}</Text>
  </View>
);

const SimpleList = (props) => (
  <View style={styles.list} name="List">
    <ListHeader title={props.header}></ListHeader>
    {
      props.items.map(title =>
        <ListItem key={shortid.generate()} title={title} />
      )
    }
  </View>

);

export default SimpleList;
