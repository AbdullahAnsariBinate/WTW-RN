import {StyleSheet} from 'react-native';
import appStyles from '../../../appStyles';
import {WP, colors, size} from '../../../../utils';

const styles = StyleSheet.create({
  lineSeparator: {
    height: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.skyBlue,
  },
  pamel: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  phone: {
    marginBottom: -5,
  },
  titless: {
    // alignSelf: 'flex-start',
    ...appStyles.margin1Percent,
    gap: 5,
    marginTop: 10,
  },
  calendarrow: {
    ...appStyles.directionRow,
    marginHorizontal: 90,
    marginBottom: -5,
  },
  placeHolderText: {
    ...appStyles.font14,
    color: colors.black,
  },
  titleimage: {
    height: 150,
    width: 350,
    borderRadius: 10,
  },
  trashimg: {
    height: 25,
    width: 25,
    position: 'absolute',
    right: 5,
    top: 5,
  },
  calenderIcon: {
    height: 15,
    width: 15,
  },
  dateBtn: {
    borderRadius: 30,
    marginTop: 10,
    borderWidth: 1,
    margin: 10,
    ...appStyles.directionRow,
    alignItems: 'center',
    borderColor: colors.primary,
    justifyContent: 'space-between',
    width: WP('42%') * 0.98,
    height: 55,
    paddingHorizontal: 15,
  },
  press: {
    backgroundColor: colors.primary,
    marginTop: 30,
    width: '100%',
    ...appStyles.borderWidth,
    borderColor: colors.primary,
  },
  description: {
    ...appStyles.font13,
    gap: 5,
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
