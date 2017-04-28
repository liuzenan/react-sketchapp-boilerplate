import variables from '../globals/variables';
import { StyleSheet } from 'react-sketchapp';

export default {
  list: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: variables.colorWhite,
  },
  list__withTopBorder: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: variables.colorGrayLight
  },
  list_item: {
    padding: variables.spaceMedium,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: variables.colorGrayLight
  },
  list_header: {
    backgroundColor: variables.colorPrimary,
    padding: variables.spaceMedium
  },
  list_header_title: {
    color: variables.colorWhite
  }
};
