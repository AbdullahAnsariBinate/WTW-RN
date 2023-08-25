import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size} from '../../../../utils';
import appStyles from '../../../appStyles';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  Goldpackage: {
    backgroundColor: '#E4F3FE',
    alignSelf: 'center',
    justifyContent: 'center',
    ...appStyles.margin2Percent,
    paddingVertical: 20,
    width: '90%',
    borderRadius: 10,
    gap: 5,
  },
  containerStyle: {
    ...appStyles.margin3Percent,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginHorizontal: 15,

    shadowColor: colors.gray,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,

    shadowRadius: 5,
    // height: 1,
    elevation: 5,
  },

  press: {
    backgroundColor: colors.primary,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',

    ...appStyles.borderWidth,
    borderColor: colors.primary,
  },
  btnstext: {
    fontSize: size.small,
    color: colors.white,
    ...appStyles.family_Montserrat_Medium,
  },
  lineSeparator: {
    height: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  goldtext: {
    ...appStyles.family_Montserrat_Semi_Bold,
    fontSize: size.large,
    marginHorizontal: 10,
  },
  description: {
    marginHorizontal: 10,
    ...appStyles.font14,
  },
});

export default styles;
