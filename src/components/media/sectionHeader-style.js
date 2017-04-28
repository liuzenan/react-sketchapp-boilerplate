import variables from '../globals/variables';
import { StyleSheet } from 'react-sketchapp';

export default {
  sectionHeader: {
    paddingTop: variables.spaceSmall,
    paddingBottom: variables.spaceSmall,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: variables.colorGrayLight
  },
  sectionHeader_text: {
    fontSize: variables.fontSizeH3,
    color: variables.colorPrimary
  }
};
