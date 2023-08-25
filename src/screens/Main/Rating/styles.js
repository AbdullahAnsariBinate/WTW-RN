import {StyleSheet} from 'react-native';
import {colors, HP, WP, size} from '../../../utils';
import appStyles from '../../appStyles';

const styles = StyleSheet.create({
  img: {
    height: 20,
    width: 130,
    // backgroundColor:'red'
  },
  ratingContainer: {
    marginTop: 20,
    // borderWidth: 1,
    gap: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    width: 350,
    // height: 230,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    ...appStyles.family_Montserrat_Semi_Bold,
    color: colors.lightGray,
  },
  MainView: {
    // marginTop:20,
    top: 20,
    // borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  head1: {
    backgroundColor: '#B9D9F3',
    width: 238,
    height: 10,
    borderRadius: 10,
  },
  subhead1: {
    backgroundColor: '#33A0FA',
    width: 202,
    height: 10,
    borderRadius: 10,
  },
  head2: {
    backgroundColor: '#B9D9F3',
    width: 238,
    height: 10,
    borderRadius: 10,
  },
  subhead2: {
    backgroundColor: '#33A0FA',
    width: 175,
    height: 10,
    borderRadius: 10,
  },
  head3: {
    backgroundColor: '#B9D9F3',
    width: 238,
    height: 10,
    borderRadius: 10,
  },
  subhead3: {
    backgroundColor: '#33A0FA',
    width: 145,
    height: 10,
    borderRadius: 10,
  },
  head4: {
    backgroundColor: '#B9D9F3',
    width: 238,
    height: 10,
    borderRadius: 10,
  },
  subhead4: {
    backgroundColor: '#33A0FA',
    width: 116,
    height: 10,
    borderRadius: 10,
  },
  head5: {
    backgroundColor: '#B9D9F3',
    width: 238,
    height: 10,
    borderRadius: 10,
  },
  subhead5: {
    backgroundColor: '#33A0FA',
    width: 89,
    height: 10,
    borderRadius: 10,
  },
  rate: {
    color: 'black',
    // backgroundColor:'pink',
    ...appStyles.family_Montserrat_Semi_Bold,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default styles;
