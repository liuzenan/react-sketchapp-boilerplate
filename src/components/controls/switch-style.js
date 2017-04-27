import variables from '../globals/variables';


export default {
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
    backgroundColor: variables.colorAccent
  }
};
