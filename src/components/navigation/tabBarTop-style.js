import variables from '../globals/variables';
import { StyleSheet } from 'react-sketchapp';


export default {

  tabBar: {
    flexDirection: 'row',
    backgroundColor: variables.colorGrayLight,
  },

  tabBar_cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: variables.spaceMedium,
    paddingBottom: variables.spaceMedium,
  },

  tabBar_cell__active: {
    backgroundColor: variables.colorWhite,
    borderBottomWidth: 3,
    borderBottomColor: variables.colorAccent,
  },

  tabBar_cell_text: {
    fontSize: 14,
    lineHeight: 14,
    color: variables.colorGrayMedium,
    fontWeight: variables.fontWeightMedium
  },

  tabBar_cell_text__active: {
    color: variables.colorAccent
  }

};
