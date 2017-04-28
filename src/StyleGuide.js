import React from 'react';
import { Image, View, Text } from 'react-sketchapp';

import styles from './styles';

import { typography } from './components/globals';
import { Button, Switch, TabBar } from './components/controls';
import { Card, List, Section } from './components/containers';
import { Rows, Columns, Grid } from './components/structures';
import { SectionHeader, Flag } from './components/media';
import { InputText } from './components/inputs';

const StyleGuide = () => (
    <View style={styles.container} name="Wrapper">
    <Columns>

      <View style={styles.content} name="Category">
        <SectionHeader title="Controls"/>

        <Section>
          <Rows>
            <Text>Buttons:</Text>
            <Button label="Default Button"/>
            <Button isPrimary={true} label="Primary Button"/>
          </Rows>
        </Section>

        <Section>
          <Rows>
          <Text>Switch:</Text>
          <Switch isOn={false}/>
          </Rows>
        </Section>

        <Section>
          <Rows>
          <Text>TabBar:</Text>
          <TabBar
            tabItems={
                [
                  {
                    iconSrc: 'https://unsplash.it/48',
                    label: 'Tab 1'
                  },
                  {
                    iconSrc: 'https://unsplash.it/48',
                    label: 'Tab 2'
                  },
                  {
                    iconSrc: 'https://unsplash.it/48',
                    label: 'Tab 3'
                  }
                ]
              }
            />
          </Rows>
      </Section>
      </View>

      <View style={styles.content} name="Category">
      <SectionHeader title="Inputs"/>
      <Section>
        <Rows>
          <Text>Text Inputs:</Text>

          <InputText label="Input Label" placeholder="Input Placeholder"></InputText>
          <InputText label="Input Label" value="Input Value" placeholder="Input Placeholder"></InputText>
        </Rows>
      </Section>

      </View>

      <View style={styles.content} name="Category">
        <SectionHeader title="Containers"/>
        <Section>
        <Rows>
        <Text>List:</Text>
        <List headerTitle="Test" listItems={
          [ 'Hello',
            'Nice to meet you',
            'Welcome to StashAway',
            'Hello']
        }/>
        </Rows>
        </Section>

        <Section>
        <Rows>
        <Text>Card:</Text>
        <Card>
          <Flag imageSrc="https://unsplash.it/200" imageWidth={100} imageHeight={100}>
            <Rows>
              <Text style={typography.h3}>Hello World!</Text>
              <Text>Welcome to StashAway</Text>
            </Rows>
          </Flag>
        </Card>
        </Rows>
        </Section>

      </View>
    </Columns>
    </View>
);

export default StyleGuide;