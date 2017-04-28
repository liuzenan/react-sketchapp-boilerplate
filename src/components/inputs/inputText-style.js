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
  inputText__withLabel: {
    paddingTop: 7,
    paddingBottom: 9
  },
  inputText_label: {
    fontSize: 12,
    lineHeight: 12,
    color: variables.colorGrayMedium,
    marginBottom: 4
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
