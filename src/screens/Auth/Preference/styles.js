import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size} from '../../../utils';
import appStyles from '../../appStyles';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderColor: 'gray',
    borderRadius: 30,
    width: 100,
    marginHorizontal: 5,

    // width: '100%',
  },
  btnstext: {
    fontSize: size.small,
    color: colors.black,
    ...appStyles.family_Montserrat_Medium,
  },
  press: {
    backgroundColor: colors.white,
    marginTop: 15,
  },
  selectedButton: {
    backgroundColor: colors.preference,
    // borderColor: 'red',
  },
  buttonText: {
    color: colors.lightGray,
    textAlign: 'center',
    fontSize: size.xsmall,
    ...appStyles.family_Montserrat_Semi_Bold,
  },
  selectedButtonText: {
    color: 'white',
    ...appStyles.family_Montserrat_Semi_Bold,
  },
});

export default styles;
