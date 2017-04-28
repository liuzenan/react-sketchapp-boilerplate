import React from 'react';
import { View, Text } from 'react-sketchapp';

import styles from './styles';

import { typography } from './components/globals';
import { Button, Switch } from './components/controls';
import { Card, List } from './components/containers';
import { Rows } from './components/structures';
import { SectionHeader } from './components/media';
import { InputText } from './components/inputs';

const App = () => (
    <View style={styles.container} name="Wrapper">
      <View style={styles.content} name="Content">
      <Rows>
        <SectionHeader title="Section Header"/>
        <Card>
          <Rows>
            <Text style={typography.h4}>Hello World!</Text>
            <Button label="Default Button"/>
            <Button isPrimary={true} label="Primary Button"/>
            <Switch isOn={false}/>
          </Rows>
        </Card>
        <SectionHeader title="Section Header"/>
        <Card>
          <Rows>
            <Text style={typography.h4}>I'm a 35-year-old male who is not married and has no children</Text>
            <Text style={typography.h4}>My annual income from all sources is SGD 100,000</Text>
            <InputText label="Input Label" value="Input Value" placeholder="Input Placeholder"></InputText>
          </Rows>
        </Card>
        <List headerTitle="Test" listArray={
          [ 'Hello',
            'Nice to meet you',
            'Welcome to StashAway',
            'Hello']
        }/>
      </Rows>
      </View>
    </View>
);

export default App;
