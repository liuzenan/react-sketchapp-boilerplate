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
    borderTopColor: variables.colorGrayLight
  },
  list_item: {
    padding: variables.spaceMedium,
    borderBottomWidth: 1,
    borderBottomColor: variables.colorGrayLight
  },
  list_header: {
    backgroundColor: variables.colorPrimary,
    padding: variables.spaceMedium
  },
  list_header_title: {
    color: variables.colorWhite
  }
};
