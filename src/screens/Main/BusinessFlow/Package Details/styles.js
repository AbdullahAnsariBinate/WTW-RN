import {StyleSheet} from 'react-native';
import {colors, HP, WP, size} from '../../../../utils';
import appStyles from '../../../appStyles';

const styles = StyleSheet.create({
  lineSeparator: {
    height: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.skyBlue,
  },
  titless: {
    alignSelf: 'flex-start',
    ...appStyles.margin1Percent,
    gap: 5,
  },
  titleimage: {
    height: 150,
    width: 350,
    borderRadius: 10,
  },
  press: {
    backgroundColor: colors.primary,
    marginTop: 20,
    width: '100%',
    ...appStyles.borderWidth,
    borderColor: colors.primary,
  },
  btnstext: {
    fontSize: size.small,
    color: colors.white,
    ...appStyles.family_Montserrat_Medium,
  },

  buttonView: {
    gap: 10,

    flexDirection: 'row',
  },
});

export default styles;
