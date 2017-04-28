import variables from '../globals/variables';

export default {
  button: {
    paddingTop: 17,
    paddingBottom: 18,
    paddingHorizontal: 12,
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
    backgroundColor: variables.colorGrayLight
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
