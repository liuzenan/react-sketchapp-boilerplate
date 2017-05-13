import variables from '../globals/variables';
import { StyleSheet } from 'react-sketchapp';

export default {

  checkBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  checkBox_box: {
    width: 18,
    height: 18,
    backgroundColor: variables.colorWhite,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: variables.colorGrayLight,
    borderRadius: variables.borderRadiusDefault,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkBox_box__checked: {
    backgroundColor: variables.colorAccent,
    borderColor: variables.colorAccent,
  },

  checkBox_icon: {
    width: 9.31,
    height: 7.43
  },

  checkBox_label: {
    fontSize: 14,
    lineHeight: 18,
    color: variables.colorPrimary,
    marginLeft: variables.spaceSmall,
    flex: 1
  }




}
