import variables from '../globals/variables';

export default {
  list: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: variables.colorWhite,
  },
  list__withTopBorder: {
    borderTopWidth: 1,
    borderTopColor: variables.colorLightGray
  },
  list_item: {
    padding: variables.spaceMedium,
    borderBottomWidth: 1,
    borderBottomColor: variables.colorLightGray
  },
  list_header: {
    backgroundColor: variables.colorPrimary,
    padding: variables.spaceMedium
  },
  list_header_title: {
    color: variables.colorWhite
  }
};
