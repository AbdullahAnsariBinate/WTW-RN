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
  phoneContainer: {
    padding: 1,
    height: 60,
    marginTop: 20,
    width: WP('85%'),
    borderRadius: 30,
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  icon: {
    width: 17,
    height: 17,
  },
  editTouch: {
    backgroundColor: '#33A0FA',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    borderWidth: 3,
    borderColor: colors.white,
    position: 'absolute',
    zIndex: 1000,
    // right: 0,
    bottom: 0,

    left: '70%',
    // top: '40%',
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
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 10,
    gap: 5,
  },
  press: {
    backgroundColor: colors.primary,
    marginTop: 15,
  },
  subview: {
    ...appStyles.directionRow,
    alignSelf: 'center',
    marginHorizontal: 110,
  },
  btnstext: {
    fontSize: size.small,
    color: colors.white,
    ...appStyles.family_Montserrat_Semi_Bold,
  },
  contain: {alignItems: 'center', alignSelf: 'center', marginTop: 50},
  dateBtn: {
    borderRadius: 21,
    // marginTop: 10,
    borderWidth: 1,
    borderRadius: 30,
    ...appStyles.directionRow,
    alignItems: 'center',
    borderColor: colors.primary,
    justifyContent: 'space-between',
    width: WP('90%') * 0.98,
    height: 60,
    marginBottom: 5,

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
    // marginTop: 10,
    ...appStyles.margin2Percent,
    color: colors.white,
    ...appStyles.family_Montserrat_Medium,
  },
});

export default styles;
