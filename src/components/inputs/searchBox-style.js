import variables from '../globals/variables';
import { StyleSheet } from 'react-sketchapp';

export default {
  searchBox: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: variables.colorGrayLight,
    backgroundColor: variables.colorWhite,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: variables.borderRadiusDefault,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBox_value: {
    fontSize: 15,
    lineHeight: 15,
    color: variables.colorPrimary
  },
  searchBox_placeholder: {
    fontSize: 15,
    lineHeight: 15,
    color: variables.colorGrayMedium
  },
  searchBox_icon: {
    flex: 0,
    height: 15
  },
  searchBox_icon_image: {
    width: 14,
    height: 15,
    marginTop: 1
  },
  searchBox_content: {
    flex: 1,
    marginLeft: 8
  }
};
