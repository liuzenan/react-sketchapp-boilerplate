import variables from '../globals/variables';

export default {
  navBar: {
    backgroundColor: variables.colorPrimary
  },
  statusBar: {
    width: 375,
    height: 20
  },
  navBar_controls: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 14,
    marginTop: 14
  },
  navBar_controls_left: {
    marginLeft: 8
  },
  navBar_controls_right: {
    marginRight: 8
  },
  navBar_control_iconMenu: {
    width: 20,
    height: 12
  },
  navBar_control_iconPlus: {
    width: 18,
    height: 18
  },
  navBar_title: {
    alignItems: 'center',
    paddingBottom: 16
  },
  navBar_title_text: {
    color: variables.colorWhite,
    fontSize: 24
  },
};
