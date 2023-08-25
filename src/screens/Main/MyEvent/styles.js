import {StyleSheet} from 'react-native';
import {colors, HP, WP, size} from '../../../utils';
import appStyles from '../../appStyles';

const styles = StyleSheet.create({
  selectedDateContainer: {
    alignItems: 'center',
    marginTop: 20,
    // borderTopWidth:3,
    ...appStyles.directionRow,
    ...appStyles.justifySpaceBetween,
  },
  lineSeparator: {
    height: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.skyBlue,
  },
  separator: {
    borderWidth: 1,
    borderColor: colors.skyBlue,
  },
  selectedDateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
