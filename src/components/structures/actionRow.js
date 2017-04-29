import React from 'react';
import { View, Text } from 'react-sketchapp';

import { Button } from '../controls';

import styles from './actionRow-style';

const ActionRow = (props) => (
    <View style={styles.actionRow} name="Action Row">
      <View style={styles.actionRow_content} name="Action Row Content">
        {props.children}
      </View>
      <View style={styles.actionRow_action} name="Action Row Action">
        <Button primary>{props.action}</Button>
      </View>
    </View>
);

export default ActionRow;
