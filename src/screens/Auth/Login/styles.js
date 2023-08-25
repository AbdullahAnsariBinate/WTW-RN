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
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: '8%',
  },
  press: {
    backgroundColor: colors.white,
    marginTop: 15,
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  btnstext: {
    fontSize: size.small,
    color: colors.black,
    ...appStyles.family_Montserrat_Medium
  },
  subText: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.white,
    marginVertical: 20,
  },
  textNormal: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.white,
  },
  textNormalWithColor: {
    color: colors.primary,
    textDecorationColor: colors.primary,
    fontSize: 17,
    fontWeight: '700',
  },
  applogo: {
    width: width * 0.95,
    height: height * 0.24 ,
    resizeMode: 'contain',
    marginVertical: '12%',
  },
});

export default styles;
