import {StyleSheet} from 'react-native';
import {colors, HP, WP, size} from '../../../utils';
import appStyles from '../../appStyles';

const styles = StyleSheet.create({
  lineSeparator: {
    height: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.skyBlue,
  },
  icon: {
    width: 12,
    height: 12,
  },
  editTouch: {
    backgroundColor: '#33A0FA',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    borderWidth: 3,
    borderColor: colors.white,
    position: 'absolute',
    zIndex: 1000,
    // right: 0,
    bottom: 40,

    left: '55%',
    // top: '40%',
  },
  editProfile: {
    width: 20,
    height: 20,
    position: 'absolute',
    zIndex: 1000,
    right: 10,
    top: '80%',
  },
});

export default styles;
