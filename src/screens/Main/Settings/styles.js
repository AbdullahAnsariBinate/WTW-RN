import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
import appStyles from '../../appStyles';

const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  btnStyle: {
    borderRadius: 30,
    marginVertical: 10,
  },

  textStyle1: {
    color: colors.white,
    ...appStyles.font15,
    ...appStyles.family_Montserrat_Medium,
    ...appStyles.alignSelf,
    ...appStyles.alignItems,
    left: width / 5,
  },

  buttonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    width: width - 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonInnerImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    position: 'absolute',
    left: width / 8,
  },
  space: {
    // paddingVertical: 20,
    paddingHorizontal: 20,
  },
  buttonInnerText: {
    // fontWeight: '700',
    ...appStyles.family_Montserrat_Medium,

    // fontSize: ...appStyles.font15,
    // ...appStyles.font15,
    fontSize: size.small,
    color: colors.white,
    position: 'absolute',
    alignSelf: 'center',
    left: width / 4,
  },
  viewStyle1: {
    // borderWidth: 1,
    // borderColor: colors.black,
    borderRadius: 30,
    margin: 10,
    ...appStyles.directionRow,
    ...appStyles.justifySpaceBetween,
    paddingVertical: 15,
    backgroundColor: colors.blue,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  textStyle2: {
    fontSize: size.medium,
    fontWeight: '400',
    color: colors.white,
  },
  viewStyle2: {
    marginTop: -5,
  },
  trackonstyle: {
    width: 42,
    height: 24,
    backgroundColor: colors.darkGray,
  },
  thumb: {
    height: 18,
    width: 18,
    marginLeft: 0,
  },
  trackoff: {
    width: 42,
    height: 24,
    backgroundColor: colors.primary,
  },
  thumboff: {
    height: 18,
    width: 18,
    marginLeft: 3,
  },
  label: {
    color: colors.black,
    ...appStyles.fontBold,
  },
});

export default styles;
