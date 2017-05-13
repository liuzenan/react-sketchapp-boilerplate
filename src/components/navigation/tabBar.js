import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-sketchapp';
import shortid from 'shortid';

import styles from './tabBar-style';

const TabBarCell = (props) => (
  <View style={styles.tabBar_cell} name="TabBar Cell">
    <Image style={styles.tabBar_cell_icon} resizeMode="contain" source={props.iconSrc}/>
    <Text style={styles.tabBar_cell_text}>{props.label}</Text>
  </View>
);

const TabBar = (props) => (
    <View style={styles.tabBar} name="TabBar">
      {
        props.items.map(tabItem =>
          <TabBarCell
            key={shortid.generate()}
            iconSrc={tabItem.iconSrc}
            label={tabItem.label} >
          </TabBarCell>)
      }
    </View>
);

export default TabBar;
