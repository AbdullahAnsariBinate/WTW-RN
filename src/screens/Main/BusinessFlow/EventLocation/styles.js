import {StyleSheet} from 'react-native';
import {colors, HP, WP, size} from '../../../../utils';
import appStyles from '../../../appStyles';
import Shadows from '../../../../helpers/Shadows';

const styles = StyleSheet.create({
  MainContainer: {
    position: 'relative',
    flex: 1,
  },
  time: {
    alignSelf: 'flex-end',
    ...appStyles.font13,
    color: colors.gray,
  },
  BottomView: {
    marginLeft: 20,
    bottom: 20,
  },
  innerView: {
    backgroundColor: 'white',
    height: '15%',
    // top:20,
    // justifyContent: 'center',
    alignItems: 'center',
    // left: 10,
    alignSelf: 'flex-start',
    ...appStyles.directionRow,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    position: 'absolute',
    bottom: -10,
    ...Shadows.shadow3,
  },
  rating: {
    width: 100,
    height: 15,
  },
  Resturant: {
    alignSelf: 'center',
    // marginLeft: 10,
    ...appStyles.font12,
  },
  openTime: {
    left: '40%',
    alignSelf: 'center',
    ...appStyles.font12,
  },
  rateno: {
    color: colors.gray,
    ...appStyles.family_Montserrat_Semi_Bold,
    ...appStyles.font13,
    marginLeft: 5,
  },
  textHeader: {
    color: colors.gray,
    ...appStyles.family_Montserrat_Semi_Bold,
  },
  appimage: {
    marginHorizontal: 10,
    height: 50,
    borderRadius: 100,
    width: 50,
  },
});

export default styles;
