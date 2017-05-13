import variables from '../globals/variables';
import { StyleSheet } from 'react-sketchapp';


export default {

  option: {
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: variables.colorAccent,
    borderRadius: variables.borderRadiusDefault,
  },

  option_cell_container: {
    flex: 1,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: variables.colorAccent
  },

  option_cell_container__last: {
    flex: 1,
  },

  option_cell: {
    paddingTop: variables.spaceMedium,
    paddingBottom: variables.spaceMedium,
  },

  option_cell__active: {
    backgroundColor: variables.colorAccent,
  },

  option_cell_text: {
    fontSize: 15,
    lineHeight: 15,
    color: variables.colorAccent,
    fontWeight: variables.fontWeightMedium,
    textAlign: 'center'
  },

  option_cell_text__active: {
    color: variables.colorWhite
  }

};
