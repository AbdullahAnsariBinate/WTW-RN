import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size} from '../../../../utils';
import appStyles from '../../../appStyles';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  container: {
    padding: 16,
    // backgroundColor:'red'
  },
  hourstimes: {
    backgroundColor: colors.white,
    marginTop: 10,
    height: 30,
  },
  hourss: {
    ...appStyles.alignItems,
    ...appStyles.alignSelf,
    ...appStyles.justifyContent,
    ...appStyles.font14,
  },
  timesetView: {},

  countryPickerButtonStyle: {
    width: 55,
    borderRadius: 30,
    height: 58,
    backgroundColor: colors.white,
  },
  textContainerPhone: {
    marginLeft: 10,
    borderRadius: 30,
    height: 55,
    backgroundColor: colors.white,
    borderColor: colors.primary,
  },
  phoneContainer: {
    padding: 1,
    height: 60,
    marginTop: 10,
    width: WP('88%'),
    borderRadius: 30,
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  timesss: {
    color: colors.white,
  },
  time: {
    ...appStyles.directionRow,
    justifyContent: 'space-between',
    width: '60%',
    ...appStyles.margin2Percent,
    // marginLeft:20
  },
  countryPickerButtonStyle: {
    width: 55,
    borderRadius: 30,
    height: 58,
    backgroundColor: colors.white,
  },
  textContainerPhone: {
    marginLeft: 10,
    borderRadius: 30,
    height: 55,
    backgroundColor: colors.white,
    borderColor: colors.primary,
  },
  customtextview: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    // gap: 10,
  },
  press: {
    backgroundColor: colors.white,
    marginTop: 15,
  },
  subview: {
    ...appStyles.directionRow,
    alignSelf: 'center',
    marginHorizontal: 110,
  },
  btnstext: {
    fontSize: size.small,
    color: colors.black,
    ...appStyles.family_Montserrat_Medium,
  },
  contain: {alignItems: 'center', alignSelf: 'center', marginTop: 20},
  dateBtn: {
    borderRadius: 21,
    // marginTop: 10,
    borderWidth: 1.5,
    borderRadius: 30,
    ...appStyles.directionRow,
    alignItems: 'center',
    borderColor: colors.primary,
    justifyContent: 'space-between',
    width: WP('90%') * 0.98,
    height: 60,
    paddingHorizontal: 15,
  },
  placeHolderText: {
    ...appStyles.font15,
    color: colors.black,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: '8%',
  },
  dayText: {
    marginLeft: 5,
    color: colors.white,
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  textNormal: {
    marginVertical: 20,
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.22,
    resizeMode: 'contain',
    marginVertical: '12%',
  },
  logoStyle: {
    position: 'relative',
  },
  upload: {
    position: 'absolute',
    bottom: '16%',
    zIndex: 20,
    right: '28%',
  },
  calenderIcon: {
    height: 20,
    width: 20,
  },
  titles: {
    fontSize: size.small,
    alignSelf: 'flex-start',
    // marginTop: 10,
    marginLeft: 20,
    ...appStyles.margin3Percent,
    color: colors.white,
    ...appStyles.family_Montserrat_Semi_Bold,
  },

  checkcontainer: {
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: 20,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    // backgroundColor:'pink',

    marginRight: 10,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: 10,
  },
  checkboxWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default styles;
