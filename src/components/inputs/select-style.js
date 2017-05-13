import variables from '../globals/variables';
import { StyleSheet } from 'react-sketchapp';

export default {
  select: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: variables.colorGrayLight,
    backgroundColor: variables.colorWhite,
    paddingVertical: 16,
    paddingLeft: 8,
    paddingRight: 16,
    borderRadius: variables.borderRadiusDefault,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  select__withLabel: {
    paddingTop: 7,
    paddingBottom: 9
  },
  select_content: {
    flex: 1,
    marginRight: 8
  },
  select_dropdownIcon: {
    flex: 0,
  },
  select_dropdownIcon_image: {
    width: 10,
    height: 6
  },
  select_label: {
    fontSize: 12,
    lineHeight: 12,
    color: variables.colorGrayMedium,
    marginBottom: 4
  },
  select_value: {
    fontSize: 15,
    lineHeight: 15,
    color: variables.colorPrimary
  },
  select_placeholder: {
    fontSize: 15,
    lineHeight: 15,
    color: variables.colorGrayMedium
  }
};
