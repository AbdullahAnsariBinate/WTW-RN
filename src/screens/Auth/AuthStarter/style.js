import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size} from '../../../utils';
import appStyles from '../../appStyles';

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
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
  buttonContainer: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    width: width - 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
    height: 60,
    justifyContent: 'center',
  },
  buttonInnerImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: colors.white,
    position: 'absolute',
    left: width / 8,
  },
  btnstext: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.black,
    position: 'absolute',
    left: width / 4,
    ...appStyles.family_Montserrat_Medium,
  },
  press: {
    backgroundColor: colors.guest,
    borderRadius: 30,
    width: width - 50,
    flexDirection: 'row',
    marginVertical: 7,
    height: 60,
    bottom: 15,
  },
  buttonInnerText: {
    fontSize: 14,
    position: 'absolute',
    left: width / 4,
    ...appStyles.family_Montserrat_Medium,
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.22,
    resizeMode: 'contain',
    marginVertical: '12%',
  },
  space: {
    marginBottom:20
  },
  and: {
    marginLeft: 1,
    ...appStyles.family_Montserrat_Medium,
    color: colors.white,
  },
  siogn: {
    alignSelf: 'center',
    color: colors.white,
    ...appStyles.family_Montserrat_Medium,
  },
  privacy: {
    ...appStyles.family_Montserrat_Bold,
    color: colors.white,
    marginLeft: 3,
  },
  terms: {
    flexDirection: 'row',
    marginVertical: 5,
    ...appStyles.family_Montserrat_Medium,
  },
  condition: {
    ...appStyles.family_Montserrat_Bold,
    color: colors.white,
  },
  bottomView: {
    position: 'absolute',
    bottom: 4,

  },
});

export default style;
