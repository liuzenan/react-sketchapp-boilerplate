import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-sketchapp';
import shortid from 'shortid';

import styles from './navBarFeatured-style';

const NavBarFeatured = (props) => (
    <View style={styles.navBar} resizeMode="contain" name="NavBar">
      <Image style={styles.statusBar} source="https://preview.ibb.co/bHUi85/status_Bar_ios_white.png"/>
      <View style={styles.navBar_controls} name="NavBar Controls">
        <View style={styles.navBar_controls_left}>
          <Image style={styles.navBar_control_iconMenu} resizeMode="contain" source="https://image.ibb.co/c4ty85/icon_menu.png" />
        </View>
        <View style={styles.navBar_controls_right}>
          <Image style={styles.navBar_control_iconPlus} resizeMode="contain" source="https://image.ibb.co/gw89Fk/icon_plus.png" />
        </View>
      </View>
      <View style={styles.navBar_title}>
        <Text style={styles.navBar_title_text} name="NavBar Title">{props.title}</Text>
      </View>
    </View>
);

export default NavBarFeatured;
