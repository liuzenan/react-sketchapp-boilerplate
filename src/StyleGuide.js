import React from 'react';
import { Image, View, Text } from 'react-sketchapp';

import styles from './styles';

import { typography } from './components/globals';
import { Button, Switch } from './components/controls';
import { Card, ListSimple, Section } from './components/containers';
import { Rows, Columns, Grid, Flag, ActionRow } from './components/structures';
import { SectionHeader } from './components/media';
import { InputText } from './components/inputs';
import { TabBar, NavBarFeatured } from "./components/navigation";

const StyleGuide = () => (
    <View style={styles.container} name="Wrapper">
    <Columns>

      <View style={styles.content} name="Category">
        <SectionHeader title="Controls"/>

        <Section>
          <Rows>
            <Text>Buttons:</Text>
            <Button>Default Button</Button>
            <Button primary>Primary Button</Button>
          </Rows>
        </Section>

        <Section>
          <Rows>
          <Text>Switch:</Text>
          <Switch on/>
          </Rows>
        </Section>
      </View>

      <View style={styles.content} name="Category">
        <SectionHeader title="Navigation"/>
        <Section>
          <Rows>
            <Text>TabBar:</Text>
            <TabBar
              items={
                  [
                    {
                      iconSrc: 'https://image.ibb.co/iCJX1Q/icon_portfolio.png',
                      label: 'Portfolios'
                    },
                    {
                      iconSrc: 'https://image.ibb.co/cRhEFk/icon_assets.png',
                      label: 'Assets'
                    },
                    {
                      iconSrc: 'https://image.ibb.co/dy7gvk/icon_transactions.png',
                      label: 'Transactions'
                    }
                  ]
                }
              />
          </Rows>
        </Section>
        <Section>
          <Rows>
            <Text>NavBar (Featured):</Text>
            <NavBarFeatured title="Portfolios"/>
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
        <ListSimple header="List Header" items={
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
            <Rows gutterSize="small">
              <Text style={typography.h3}>Hello World!</Text>
              <Text>Welcome to StashAway</Text>
            </Rows>
          </Flag>
        </Card>
        <Card>
          <ActionRow action="Review">
            <Rows gutterSize="small">
              <Text style={typography.h3}>Hello World!</Text>
              <Text>Welcome to StashAway</Text>
            </Rows>
          </ActionRow>
        </Card>
        </Rows>
        </Section>

      </View>
    </Columns>
    </View>
);

export default StyleGuide;
