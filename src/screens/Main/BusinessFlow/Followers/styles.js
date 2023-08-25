import {StyleSheet} from 'react-native';
import {colors, HP, WP, size} from '../../../../utils';
import appStyles from '../../../appStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  FlatList: {
    flex: 1,
    marginTop:10
  },
  searchContainer: {
    position: 'absolute',
    top: -20,
    flexDirection: 'row',
    alignSelf: 'center',
    ...appStyles.gap_5,
    zIndex: 999,
  },
  lineSeparator: {
    height: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  search: {
    width: 270,
    backgroundColor: colors.white,
  },
  filter: {
    height: 25,
    width: 25,
  },
  filterview: {
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  title: {
    right: 90,
    ...appStyles.font16,
  },
});

export default styles;
