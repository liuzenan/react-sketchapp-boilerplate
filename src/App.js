import React from 'react';
import { View, Text } from 'react-sketchapp';

import styles from './styles';
import { ButtonDefault, ButtonPrimary, Switch } from './components/main.js';

const App = () => (
    <View style={styles.container} name="Wrapper">
      <Text style={styles.text}>Hello World!</Text>
      <ButtonDefault label="Default Button"/>
      <ButtonPrimary label="Primary Button"/>
      <Switch isOn={true}/>
    </View>
);

export default App;
