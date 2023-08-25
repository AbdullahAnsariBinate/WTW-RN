import {StyleSheet} from 'react-native';
import {colors, HP, WP, size} from '../../../utils';
import appStyles from '../../appStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  searchContainer: {
    position: 'absolute',
    top: -20,
    flexDirection: 'row',
    alignSelf: 'center',
    ...appStyles.gap_5,
    zIndex: 999,
    alignItems:'center',
    // backgroundColor:'red'
  },
  search: {
    width: '70%',
    backgroundColor: colors.white,
  },
  filter: {
    height: 25,
    width: 25,
    // backgroundColor:'red'
  },
  filterview: {
    // backgroundColor: colors.white,
    alignItems:'center',
    gap:20,
    justifyContent:'center',
    borderRadius:30,
    flexDirection: 'row',
    alignSelf: 'center',
    ...appStyles.gap_5,
    alignItems:'center',
    top:-20
    // backgroundColor:'red'

  },
  title: {
    right: 90,
    ...appStyles.font16,
  },
});

export default styles;
