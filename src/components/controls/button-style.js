import variables from '../globals/variables';

export default {
  button: {
    padding: 12,
    borderRadius: 3
  },
  button_text: {
    fontFamily: variables.fontFamilyDefault,
    fontSize: variables.fontSizeDefault,
    fontWeight: 600,
    lineHeight: variables.fontSizeDefault,
    textAlign: 'center'
  },
  buttonDefault: {
    backgroundColor: variables.colorLightGray
  },
  buttonDefault_text: {
    color: variables.colorPrimary
  },
  buttonPrimary: {
    backgroundColor: variables.colorAccent
  },
  buttonPrimary_text: {
    color: variables.colorWhite
  }
};
