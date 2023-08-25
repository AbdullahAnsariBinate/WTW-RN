import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size} from '../../../../utils';
import appStyles from '../../../appStyles';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
  },
  mainView: {
    width: '100%',
    alignSelf: 'center',
    overflow: 'hidden',
    padding:10,
    paddingVertical:10
  },
  mainCont: {
    ...Shadows.shadow5,
    width: Platform.OS == 'android' ? screenWidth - 110 : screenWidth - 110,
    height: '70%',
    backgroundColor: colors.white,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 50,
    overflow: 'hidden',
  },
  packageHeading: {
    color: colors.white,
    ...appStyles.family_Montserrat_Bold
    // color: colors.DarkGrey,
    // backgroundColor: 'red',
  },
  subscriptionBgImg: {
    width: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
    // paddingTop: 40,
    flex: 1,
  },
  TopTextView: {
    marginHorizontal: 20,
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
    backgroundColor: colors.primary,
  },
  desciption: {
    ...appStyles.family_Montserrat_Regular,
    ...appStyles.font14,
    textAlign: 'left',
    textTransform: 'capitalize',
    marginVertical: 10,
    marginHorizontal:20,
    margin: 15,
    // color: colors.black,
  },
  priceHeading: {
    color: colors.primary,
    ...appStyles.font34,
    marginTop: 5,
    ...appStyles.family_Montserrat_Semi_Bold,
  },
  descrip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    marginHorizontal: 10,
  },
  Yearly: {
    color: colors.black,
    ...appStyles.font20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    ...appStyles.family_Montserrat_Semi_Bold,
  },
  cardView: {
    width: '40%',
    flexDirection: 'row',
    top: 150,
    paddingHorizontal: screenWidth / 10,
    paddingVertical: 12,
    alignSelf: 'center',
  },
  priceBg: {
    width: '100%',
    height: 220,
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  btnTitle: {
    color: colors.white,
    fontSize: size.medium,
    fontWeight: '700',
  },
  textView: {
    // position: 'absolute',
    // bottom: 50,
    // zIndex: 100,
  },
  buyBtn: {
    width: '98%',
    position: 'absolute',
    bottom: 0,
    // alignSelf: 'center',
  },
});

export default styles;
