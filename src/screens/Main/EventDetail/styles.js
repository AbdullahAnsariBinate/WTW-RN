import {StyleSheet} from 'react-native';
import {colors, HP, WP, size} from '../../../utils';
import appStyles from '../../appStyles';

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
  subview: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    // right:0
  },
  subimage: {
    height: 70,
    width: 70,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 40,
  },
  posted: {
    alignSelf:'flex-end',
    // backgroundColor:'red',
    position: 'absolute',
    // flexDirection: 'row',
    // alignItems: 'center',
    // left:0,
    bottom:10,
    right:10
  },
  titleimage: {
    height: 180,
    width: 350,
    borderRadius: 10,
  },
  press: {
    backgroundColor: colors.white,
    // marginTop: 1,
    height:45,
    width: '50%',
    gap: 5,
    ...appStyles.borderWidth,
    borderColor: colors.primary,
  },
  btnstext: {
    fontSize: size.xxsmall,
    color: colors.black,
    ...appStyles.family_Montserrat_Medium,
  },
  buttonView: {
    gap: 10,

    flexDirection: 'row',
  },
});

export default styles;
