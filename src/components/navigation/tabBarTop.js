import React from 'react';
import { StyleSheet, View, Text } from 'react-sketchapp';
import shortid from 'shortid';

import styles from './tabBarTop-style';

const tabBarCellTextClass = (isActive) => {
  if (isActive) {
    return StyleSheet.flatten([styles.tabBar_cell_text, styles.tabBar_cell_text__active]);
  }
  return styles.tabBar_cell_text;
};

const tabBarCellClass = (isActive) => {
  if (isActive) {
    return StyleSheet.flatten([styles.tabBar_cell, styles.tabBar_cell__active]);
  }
  return styles.tabBar_cell;
};

const TabBarCell = (props) => (
  <View style={tabBarCellClass(props.isActive)} name="TabBar Cell">
    <Text style={tabBarCellTextClass(props.isActive)}>{props.label}</Text>
  </View>
);

const TabBarTop = (props) => (
    <View style={styles.tabBar} name="TabBar">
      {
        props.items.map(tabItem =>
          <TabBarCell
            key={shortid.generate()}
            iconSrc={tabItem.iconSrc}
            iconActiveSrc={tabItem.iconActiveSrc}
            isActive={tabItem.isActive}
            label={tabItem.label} >
          </TabBarCell>)
      }
    </View>
);

export default TabBarTop;
