import variables from '../globals/variables';

export default {
  button: {
    paddingTop: 16,
    paddingBottom: 17,
    paddingHorizontal: 12,
    borderRadius: 3,
    shadowColor: variables.colorButtonShadow,
    shadowOffset: { width: 0, height: 1},
    shadowRadius: 3
  },
  button_text: {
    fontFamily: variables.fontFamilyDefault,
    fontSize: variables.fontSizeDefault,
    fontWeight: variables.fontWeightMedium,
    lineHeight: variables.fontSizeDefault,
    textAlign: 'center'
  },
  buttonDefault: {
    backgroundColor: variables.colorWhite,
    borderWidth: 1,
    borderColor: variables.colorGrayLight
  },
  buttonDefault_text: {
    color: variables.colorGrayMedium
  },
  buttonPrimary: {
    backgroundColor: variables.colorAccent,
    borderWidth: 1,
    borderColor: variables.colorAccent
  },
  buttonPrimary_text: {
    color: variables.colorWhite
  }
};
