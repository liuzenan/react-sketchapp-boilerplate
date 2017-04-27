import { StyleSheet } from 'react-sketchapp';
import variables from './variables';


export default {
  // Buttons
  button: {
    padding: 16,
    borderRadius: 6
  },
  button_text: {
    fontFamily: 'Helvetica',
    fontSize: variables.fontSizeDefault,
    lineHeight: 16
  },
  buttonDefault: {
    backgroundColor: variables.colorLightGray
  },
  buttonDefault_text: {
    color: '#333'
  },
  buttonPrimary: {
    backgroundColor: variables.colorGreen
  },
  buttonPrimary_text: {
    color: variables.colorWhite
  },
  switch: {
    width: 40,
    height: 24,
    borderRadius: 12,
    backgroundColor: variables.colorLightGray,
    flexDirection: 'column',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  switch_button: {
    height: 20,
    width: 20,
    backgroundColor: variables.colorWhite,
    borderRadius: 10,
    margin: 2,
    shadowColor: variables.colorControlShadow,
    shadowOffset: { width: 0, height: 1},
    shadowRadius: 3
  },
  switch__on: {
    alignItems: 'flex-end',
    backgroundColor: variables.colorGreen
  }
};
