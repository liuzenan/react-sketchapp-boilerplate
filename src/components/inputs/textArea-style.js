import variables from '../globals/variables';
import { StyleSheet } from 'react-sketchapp';

export default {
  inputText: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: variables.colorGrayLight,
    backgroundColor: variables.colorWhite,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: variables.borderRadiusDefault
  },
  inputText_value: {
    fontSize: 15,
    lineHeight: 15,
    color: variables.colorPrimary
  },
  inputText_placeholder: {
    fontSize: 15,
    lineHeight: 15,
    color: variables.colorGrayMedium
  }
};
