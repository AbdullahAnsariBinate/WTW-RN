import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size} from '../../utils';
import appStyles from '../appStyles';

const {width,height} = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: '8%',
  },
  buttonContainer: {
    backgroundColor: 'red',
    borderRadius: 30,
    width: width - 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
    height: 60,
    justifyContent: 'center',
  },
  buttonInnerImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#2C67FF',
    position: 'absolute',
    left: width / 8,
  },
  buttonInnerText: {
    fontSize: 14,
    ...appStyles.family_SofiaPro_Ultra_Light_Italic,
    color: '#3E3F40',
    position: 'absolute',
    left: width / 4,
  },
  applogo:{
    width:width*0.91,
    height:height*0.22,
    resizeMode:"contain",
    marginVertical:"12%"
  },
  space:{
    paddingVertical:20
  }
});

export default style;
