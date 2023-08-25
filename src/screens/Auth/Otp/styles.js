import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size} from '../../../utils';
import appStyles from '../../appStyles';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 18,
    color: colors.white,
    alignSelf: 'center',
    ...appStyles.family_Montserrat_Medium,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: '8%',
  },
  subtitle2: {
    fontSize: 14,
    color: colors.white,
    fontWeight: '400',
    alignSelf: 'center',
    ...appStyles.family_Montserrat_Medium,
  },
  subtitle1: {
    marginTop: 4,
    fontSize: 14,
    color: colors.white,
    alignSelf: 'center',
    fontWeight: '400',
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  pressAble: {
    marginTop: 15,
    borderRadius: 30,
    backgroundColor: colors.white,
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.22,
    resizeMode: 'contain',
    marginVertical: '12%',
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    margin: 5,
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: colors.white,
    borderColor: '#ffffff',
    borderWidth: 2,
    color: colors.black,
    fontSize: 17,
  },
  clock: {
    backgroundColor: colors.white,
    height:120,
    width:120,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100

  },
  textNormal: {
    fontSize: size.small,
    color: colors.white,
    ...appStyles.family_Montserrat_Medium,
  },
  textNormalWithColor: {
    color: colors.white,
    textDecorationColor: colors.primary,
    fontSize: size.small,
    ...appStyles.family_Montserrat_Bold,
  },

  otpInput: {
    width: '80%',
    height: 20,
    alignSelf: 'center',
    marginVertical: 40,
  },
  timerText: {
    alignSelf: 'flex-end',
    color: '#fff',
    fontSize: 13,
    marginBottom: 10,
    marginRight: 27,
  },
  time: {
    color: colors.time,
    ...appStyles.family_Montserrat_Medium,

  },
});

export default styles;
