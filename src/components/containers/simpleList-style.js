import variables from '../globals/variables';
import { StyleSheet } from 'react-sketchapp';

export default {
  list: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: variables.colorWhite,
    shadowColor: variables.colorCardShadow,
    shadowOffset: { width: 0, height: 1},
    shadowRadius: 3,
    borderRadius: variables.borderRadiusDefault,
    overflow: 'hidden'
  },
  list_item: {
    padding: variables.spaceMedium,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: variables.colorGrayLight
  },
  list_header: {
    backgroundColor: variables.colorPrimary,
    padding: variables.spaceMedium
  },
  list_header_title: {
    color: variables.colorWhite,
    fontWeight: variables.fontWeightMedium
  }
};
