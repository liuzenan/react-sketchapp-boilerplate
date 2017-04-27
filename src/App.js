import React from 'react';
import { View, Text } from 'react-sketchapp';

import styles from './styles';

import { typography } from './components/globals';
import { Button, Switch } from './components/controls';
import { Card, List } from './components/containers';


const App = () => (
    <View style={styles.container} name="Wrapper">
      <List>
        <Card>
          <Text style={typography.h1}>Hello World!</Text>
          <Button label="Default Button"/>
          <Button isPrimary={true} label="Primary Button"/>
          <Switch isOn={false}/>
        </Card>
        <View style={styles.card2}>
          <Card>
            <Text style={typography.h2}>I'm a 35-year-old male who is not married and has no children</Text>
            <Text style={typography.h2}>My annual income from all sources is SGD 100,000</Text>
          </Card>
        </View>
      </List>
    </View>
);

export default App;
