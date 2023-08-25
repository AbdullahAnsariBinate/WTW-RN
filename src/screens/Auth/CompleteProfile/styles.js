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
  phoneContainer: {
    padding: 1,
    height: 60,
    marginTop: 10,
    width: WP('85%'),
    borderRadius: 30,
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  buttonContainer: {
    marginVertical: 20,
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
  calenderIcon: {
    height: 20,
    width: 20,
  },
  customtextview: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginTop: 10,
  },
  press: {
    backgroundColor: colors.white,
    marginTop: 15,
    ...appStyles.family_Montserrat_Semi_Bold,
  },
  subview: {
    ...appStyles.directionRow,
    alignSelf: 'center',
    marginHorizontal: 110,
  },
  btnstext: {
    fontSize: size.small,
    color: colors.black,
    ...appStyles.family_Montserrat_Semi_Bold,
  },
  contain: {alignItems: 'center', alignSelf: 'center', marginTop: 50},
  dateBtn: {
    borderRadius: 30,
    marginTop: 10,
    borderWidth: 1.5,
    // borderRadius: 20,
    ...appStyles.directionRow,
    alignItems: 'center',
    borderColor: colors.primary,
    justifyContent: 'space-between',
    width: WP('89%') * 0.98,
    height: 55,
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
  titles: {
    fontSize: size.small,
    marginTop: 10,
    color: colors.white,
    ...appStyles.family_Montserrat_Medium,
  },
});

export default styles;
