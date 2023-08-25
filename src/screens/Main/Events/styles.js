import {StyleSheet} from 'react-native';
import {colors, HP, WP, size} from '../../../utils';
import appStyles from '../../appStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  search: {
    backgroundColor: colors.white,
  },
  text: {
    color: 'red',
  },
  title:{
    right:120,
    ...appStyles.font16
},
  buttonStyles: {
    color: colors.red,
  },
  searchContainer: {
    position: 'absolute',
    top: -20,
    // zIndex:999,
  },
});

export default styles;
