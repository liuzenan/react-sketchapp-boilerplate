import variables from '../globals/variables';
import { StyleSheet } from 'react-sketchapp';


export default {

  tabBar: {
    flexDirection: 'row',
    padding: variables.spaceSmall,
    backgroundColor: variables.colorWhiteTraslucent,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: variables.colorGrayLight
  },

  tabBar_cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  tabBar_cell_icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginBottom: variables.spaceXS
  },

  tabBar_cell_text: {
    fontSize: 11,
    lineHeight: 11,
    color: variables.colorGrayMedium,
    fontWeight: variables.fontWeightMedium
  },

  tabBar_cell_text__active: {
    color: variables.colorAccent
  }

};
