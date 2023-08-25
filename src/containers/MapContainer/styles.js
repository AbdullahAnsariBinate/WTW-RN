import {Dimensions, StyleSheet} from 'react-native';
import Shadows from '../../helpers/Shadows';
import appStyles from '../../screens/appStyles';
const makeStyles = colors => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
    },
    mapView: {
      height: 300,
      borderRadius: 10,
      ...appStyles.w100,
    },
    markerPin: {
      width: 30,
      height: 30,
    },
    startingPointmarkerPin: {
      width: 40,
      height: 40,
    },
    currentPositionView: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 30,
      height: 30,
    },
    markerPin1: {
      width: 30,
      height: 30,
      alignItems: 'center',
      paddingTop: 7,
      tintColor: colors.primary,
      resizeMode: 'contain',
    },
    currentPositionView_LocationMarker: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
      ...Shadows.shadow5,
      borderRadius: 100,
    },
    //IMAGE
    bgImage: {
      width: 200,
      height: 250,
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bgImage1: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      textAlign: 'center',
      color: colors.background,
      ...appStyles.family_Jost_SemiBold,
      ...appStyles.font15,
      marginVertical: 10,
      height: 30,
    },
    locationText: {
      color: colors.background,
      textAlign: 'center',
      ...appStyles.family_Jost_SemiBold,
      ...appStyles.font15,
      width: '60%',
      marginVertical: 10,
    },

    //Start Hunt page Styling
    pentagon: {
      height: 500,
      width: 300,
    },
    viewhunt: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    userIconImage: {
      borderWidth: 2,
      width: 40,
      height: 40,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    markerPinImage: {
      width: 30,
      height: 30,
    },
    line: {
      width: 0,
      height: 15,
      borderWidth: 1,
      alignSelf: 'center',
    },
    title: {
      ...appStyles.background,
      ...appStyles.family_Jost_Regular,
      ...appStyles.font14,
    },
  });
};
export default makeStyles;
