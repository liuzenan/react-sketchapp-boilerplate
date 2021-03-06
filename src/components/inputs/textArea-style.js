import variables from '../globals/variables';
import { StyleSheet } from 'react-sketchapp';

export default {
  textArea: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: variables.colorGrayLight,
    backgroundColor: variables.colorWhite,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: variables.borderRadiusDefault,
    height: 120,
    overflow: 'scroll'
  },
  textArea_value: {
    fontSize: 15,
    lineHeight: 15,
    color: variables.colorPrimary
  },
  textArea_placeholder: {
    fontSize: 15,
    lineHeight: 15,
    color: variables.colorGrayMedium
  }
};
