import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {colors, size} from '../utils';
import appStyles from '../screens/appStyles';
import ProfileImage from './ProfileImage';
import {appIcons, appImages} from '../assets';
import Img from './Img';
import CustomButton from './CustomButton';
import NavService from '../helpers/NavService';
import {TouchableOpacity} from 'react-native';

const CustomSingleList = ({item, Details}) => {
  console.log(item, 'itemaaaa');
  return (
    <>
      <View
        style={[
          appStyles.directionRow,
          appStyles.justifySpaceBetween,
          appStyles.alignCenter,
          appStyles.paddingVertical_2,
        ]}>
        <View style={{flex: 3}}>
          <CustomText
            text={item?.heading}
            size={size.small}
            style={appStyles.family_Montserrat_Semi_Bold}
          />
        </View>
        <View style={styles.rightContainer}>
          {item?.verify == true ? (
            <View>
              <Img
                tintColor={colors.primary}
                local
                src={appIcons.verify}
                style={styles.icon}
              />
            </View>
          ) : null}

          <CustomText
            text={item?.subHeading}
            size={size.tiny}
            style={[appStyles.family_Montserrat_Regular]}
            numberOfLines={3}
          />

          {/* <View>
            {item?.map == false ? (
              <CustomButton
                leftIconMap={appIcons.map}
                // customIconStyle={{alignSelf:'center'}}
                customIconStyle={{right: 5, height: 18, width: 20}}
                onPress={() => NavService.navigate('EventLocation')}
                title="View Map"
                buttonStyle={styles.buttonStyles}
                textStyle={styles.buttonText}
              />
            ) : null}
          </View> */}
        </View>
      </View>
      <View>
        {item?.map == false ? (
          <TouchableOpacity
            onPress={() => NavService.navigate('EventLocation')}
            style={styles.map}>
            <Img
              tintColor={colors.primary}
              src={appIcons.map}
              style={styles.follow}
              local
              resizeMode={'contain'}
            />
            <CustomText text={'View Map'} style={styles.btntext} />
            {/* <Text style={{alignSelf: 'flex-end'}}>Follow</Text> */}
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};

export default CustomSingleList;

const styles = StyleSheet.create({
  map: {
    borderRadius: 30,
    paddingVertical: 6,
    ...appStyles.w_22,
    top: -5,
    marginTop: -10,
    alignSelf: 'flex-end',
    // alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    // paddingHorizontal: 10,
    ...Shadows.shadow3,
  },
  rightContainer: {
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    ...appStyles.directionRow,
    ...appStyles.gap_10,
  },
  icon: {
    height: 20,
    width: 20,
  },
  buttonStyles: {
    height: 45,
    backgroundColor: colors.white,
    // borderWidth: 1,
    ...appStyles.w_22,
    borderColor: colors.primary,
  },
  buttonText: {
    fontSize: size.tiny,
    color: colors.primary,
  },
  follow: {
    height: 12,
    width: 12,
  },
  btntext: {
    color: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    left: 3,
    ...appStyles.marginLeft,
    ...appStyles.font11,
    ...appStyles.family_Montserrat_Medium,
  },
});
