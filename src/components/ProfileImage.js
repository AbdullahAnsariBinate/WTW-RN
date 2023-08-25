import React from 'react';
import {Image, Text, View} from 'react-native';
import {colors} from '../utils';
import Shadows from '../helpers/Shadows';

const ProfileImage = ({
  size = 140,
  imageUri,
  innerAsset = false,
  name = ' ',
  style,
  resizeMode,
  backgroundColor,
  borderColor,
  borderWWidth,
  height,
  backheight,
  backwidth,
  borderRadiii,
  borderStyle,
}) => {
  if (imageUri)
    return (
      <View
        style={{
          marginTop: -20,
          backgroundColor: backgroundColor || colors.primary,
          height: backheight ? 200 : 130,
          // borderStyle: borderStyle && 'dashed' ,
          width: backwidth ? 320 : 130,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: borderRadiii ? 20 : 72.5,
          borderColor: borderColor,
          borderWidth: borderWWidth,
        }}>
        <Image
          source={innerAsset ? imageUri : {uri: imageUri}}
          style={[
            {
              width: backheight ? 320 : 130,
              height: backwidth ? 200 : 130,
              resizeMode: resizeMode,
              borderRadius: borderRadiii ? 20 : 60,
            },
            style,
          ]}
        />
      </View>
    );
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: size / 50,
          borderColor: colors.primary,
          backgroundColor: colors.secondary,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}>
      <Text
        numberOfLines={1}
        style={{
          color: colors.primary,
          fontSize: size * 0.75,
          fontWeight: '800',
          width: '100%',
          textAlign: 'center',
        }}>
        {name[0].toUpperCase()}
      </Text>
    </View>
  );
};

export default ProfileImage;
