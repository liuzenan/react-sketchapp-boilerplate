import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-sketchapp';
import shortid from 'shortid';

import styles from './tabBarBottom-style';

const tabBarCellTextClass = (isActive) => {
  if (isActive) {
    return StyleSheet.flatten([styles.tabBar_cell_text, styles.tabBar_cell_text__active]);
  }
  return styles.tabBar_cell_text;
};

const TabBarCell = (props) => (
  <View style={styles.tabBar_cell} name="TabBar Cell">
    {!props.isActive &&
      <Image style={styles.tabBar_cell_icon} resizeMode="contain" source={props.iconSrc}/>
    }
    {props.isActive &&
      <Image style={styles.tabBar_cell_icon} resizeMode="contain" source={props.iconActiveSrc}/>
    }
    <Text style={tabBarCellTextClass(props.isActive)}>{props.label}</Text>
  </View>
);

const TabBarBottom = (props) => (
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

export default TabBarBottom;
