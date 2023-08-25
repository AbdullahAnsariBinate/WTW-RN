import React from 'react';
import {Dimensions, Text, Image, TouchableOpacity} from 'react-native';
import {colors} from '../utils';
import Shadows from '../helpers/Shadows';
const {width} = Dimensions.get('screen');
import {appIcons} from '../assets/index';
import appStyles from '../screens/appStyles';
import styles from './style';
import Img from './Img';

export default function CustomButton(props) {
  const {
    color,
    title,
    onPress,
    buttonStyle,
    textStyle,
    disabled,
    nextBtn,
    leftIcon,
    leftIconMap,
    tintColor,
    reply,
    customIconStyle,
  } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.9}
      style={[
        {
          width: width - 44,
          height: 55,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color ? color : colors.primary,
          marginTop: '1%',
          borderRadius: 18,
          ...Shadows.shadow5,
          flexDirection: 'row',
          borderRadius: 30,
        },
        buttonStyle,
      ]}>
      {leftIconMap && (
        <Img
          src={leftIconMap}
          style={[
            {
              height: 12,
              width: 12,
              margin: 5, 
            },
            customIconStyle,
          ]}
          local
          tintColor={tintColor ? tintColor : colors.primary}
        />
      )}
      {leftIcon && (
        <Img
          src={reply ? reply : appIcons.follow}
          style={[{height: 12, width: 12}, customIconStyle]}
          local
          tintColor={tintColor ? tintColor : colors.primary}
        />
      )}
      <Text
        style={[
          {
            fontSize: 18,
            color: color,
            ...appStyles.family_Montserrat_Semi_Bold,
          },
          textStyle,
        ]}>
        {title}
      </Text>
      {nextBtn && (
        <Image
          resizeMode="contain"
          source={nextBtn}
          style={{
            backgroundColor: 'red',
            height: 30,
            width: 50,
            // right: 110,
          }}
        />
      )}
    </TouchableOpacity>
  );
}
