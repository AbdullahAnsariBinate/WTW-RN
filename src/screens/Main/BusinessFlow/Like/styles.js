import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../../utils';
import {fontSize, size} from '../../../utils/sizes';
import appStyles from '../../../appStyles';
import {create} from 'react-test-renderer';
const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  lineSeparator: {
    height: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  FlatList: {
    flex: 1,
    // maxHeight: height * 0.61,
  },
});
