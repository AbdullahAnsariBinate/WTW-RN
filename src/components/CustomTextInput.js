import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { appIcons } from '../assets';
import { colors, size, family } from '../utils';
import appStyles from '../screens/appStyles';
import { shadow } from 'react-native-paper';
import Shadows from '../helpers/Shadows';

export default function CustomTextInput(props) {
  const [hidden, setHidden] = useState(props?.isPassword);
  const {
    containerStyle,
    types,
    placeholder,
    color,
    placeholderColor,
    verify,
    width,
    borderWidth,
    borderColor,
    borderStyles,
    isBorderShow,
    rightImage,
    editable,
  } = props;
  return (
    <View style={{ width: '100%', marginTop: 10, }}>
      <View
        width={props?.width || '90%'}
        style={[
          {
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: isBorderShow ? colors.primary : '',
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderRadius: 30,
            paddingHorizontal: 7,
            paddingVertical: 2,
            height: 55,
            marginVertical: 0,
            borderWidth: isBorderShow ? 1 : 0,
          },
          containerStyle,
        ]}>
        {props?.Line ? (
          <Image
            source={props?.Line}
            style={{
              width: 18,
              height: 18,
              resizeMode: 'contain',
              tintColor: colors.iconcolor,
              marginHorizontal: 10,
            }}
          />
        ) : null}

        {props?.leftIcon ? (
          <Image
            source={props?.leftIcon}
            style={{
              width: 18,
              height: 18,
              resizeMode: 'contain',
              tintColor: colors.iconcolor,
              marginHorizontal: 10,
            }}
          />
        ) : null}

        <View
          style={[
            {
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              borderLeftWidth: 0,
              borderLeftColor: colors.border,
            },
            borderStyles,
          ]}>
          <TextInput
            placeholderTextColor={props?.placeholderColor || colors.gray}
            style={{
              flex: 1,
              color: colors.gray,
              paddingLeft: 10,
              fontFamily: family.Montserrat_Medium,
            }}
            secureTextEntry={hidden}
            autoCapitalize="none"
            editable={editable}
            {...props}
          />
          {props?.rightphone ? (
            <Image
              source={props?.rightphone}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
                tintColor: colors.iconcolor,
                marginHorizontal: 10,
              }}
            />
          ) : null}
          {props?.rightIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setHidden(!hidden)}>
              <Image
                source={!hidden ? appIcons.eye : appIcons.eyeNot}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
          {props?.rightImage && (
            <View>
              <Image
                source={rightImage}
                style={{
                  height: 32,
                  width: 32,
                  resizeMode: 'contain',
                  marginRight: 5
                }}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
export function ProfileTextInput(props) {
  const { icon, color, isBorderShow, placeholderColor, borderWidth, width } = props;
  return (
    <View
      style={{
        width: width,
        borderWidth: isBorderShow ? 1 : 0,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.primary,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
      }}>
      <Image
        source={icon}
        style={{ width: 15, height: 15, resizeMode: 'contain' }}
      />

      <TextInput
        onChange={props?.onchange}
        editable={props?.Editable}
        style={[styles.textInput2, props?.TextInputStyling]}
        value={props?.Value}
        keyboardType={props?.type}
        color={color}
        label={props.label}
        placeholderTextColor={props?.placeholderColor || colors.gray}
        inputPadding={10}
        inputStyle={{ fontSize: 16 }}
        labelStyle={{ color: colors.grey }}
        onSubmitEditing={props.onSubmitEditing}
        numberOfLines={props?.numberOfLines}
        multiline={props?.multiline}
        textAlignVertical={props?.multiline ? 'top' : 'center'}
        {...props}
      />
    </View>
  );
}
export function CustomPhoneInput(props) {
  const [hidden, setHidden] = useState(props?.isPassword);
  const { containerStyle, types, placeholder, color, placeholderColor, verify } =
    props;
  return (
    <View style={{ width: '100%', marginTop: 18 }}>
      {/* <Text style={{color: 'black', fontWeight: '600', fontSize: 14}}>
        {placeholder}
      </Text> */}
      <View
        style={[
          {
            alignSelf: 'center',
            width: '90%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderRadius: 10,
            paddingHorizontal: 7,
            paddingVertical: 5,
            height: 55,
            marginVertical: 0,
          },
          containerStyle,
        ]}>
        {props?.leftIcon ? (
          <Image
            source={props?.leftIcon}
            style={{
              width: 18,
              height: 18,
              resizeMode: 'contain',
              tintColor: colors.iconcolor,
              marginHorizontal: 10,
              // marginTop: 5,
            }}
          />
        ) : null}
        <View
          style={{
            flex: 1,

            flexDirection: 'row',
            alignItems: 'center',
            borderLeftWidth: 1,
            borderLeftColor: colors.border,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TextInputMask
              type={'cel-phone'}
              style={{
                flex: 1,
                color: colors.black,
                paddingLeft: 10,
                fontSize: size.small,
              }}
              onChangeText={phoneNumberFormat => {
                let phoneNumber = phoneNumberFormat
                  .toString()
                  .replace(/\D+/g, '');
                props?.onChangePhoneInput(phoneNumberFormat, phoneNumber);
              }}
              maxLength={
                props?.formattedPhoneNumber.toString().startsWith('1') ? 18 : 19
              }
              options={
                props?.phoneNumber.startsWith('1')
                  ? {
                    dddMask: '9 (999) 999 - ',
                  }
                  : {
                    dddMask: '(999) 999 - ',
                  }
              }
              {...props}
            />
            {props.verify && (
              <Text
                style={{
                  color: colors.red,
                  alignSelf: 'center',
                  textDecorationLine: 'underline',
                }}>
                Verify
              </Text>
            )}
          </View>
          {props.rightIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setHidden(!hidden)}>
              <Image
                source={!hidden ? appIcons.Visible : appIcons.Unvisible}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  textInput: {
    height: 40,
    width: 250,
  },
  textInput2: {
    height: 50,
    width: '100%',
    color: 'red',
    ...appStyles.family_Jost_Regular,
    ...appStyles.font15,
    color: colors.background,
    marginHorizontal: -20,
  },
  focused: {
    backgroundColor: colors.secondary,
  },
  label: {
    marginTop: 10,
  },
  UnFocused: {
    borderWidth: 2,
    // borderColor: colors.secondary,
  },
});

export function SearchBar(props) {
  const [hidden, setHidden] = useState(props?.isPassword);
  const {
    containerStyle,
    types,
    placeholder,
    color,
    placeholderColor,
    verify,
    borderStyles,
    iconcolor,
    searchCustom,
    numberOfLines,
    multiline,
    editable,
    searchStyle,
    onChangeText,
    placeholderTextColor


  } = props;
  return (
    <View style={[{ width: '100%' }, searchStyle]}>
      <View
        style={[
          {
            alignSelf: 'center',
            width: '100%',
            flexDirection: 'row',
            borderRadius: 10,
            paddingVertical: 2,
            height: 55,
            paddingHorizontal: 15,
            borderRadius: 30,
            backgroundColor: colors.white,
            borderColor: colors.skyBlue,
            borderWidth: 2,
          },
          containerStyle,
        ]}>
        {props?.leftIcon ? (
          <Image
            source={props?.leftIcon}
            style={{
              width: 18,
              height: 18,
              resizeMode: 'contain',
              tintColor: props?.iconcolor,
              marginHorizontal: 10,
            }}
          />
        ) : null}
        <View
          style={[
            {
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              borderLeftWidth: 0,
              borderLeftColor: colors.border,


            },
            borderStyles,
          ]}>
          <TextInput
            placeholderTextColor={placeholderTextColor ? placeholderTextColor : colors.skyBlue}
            style={[{
              flex: 1,
              color: colors.black,
              fontSize: size.small,
              fontFamily: family.Montserrat_Regular,
              textAlignVertical: 'center',
            }, searchCustom]}
            // secureTextEntry={hidden}
            autoCapitalize='words'
            numberOfLines={numberOfLines}
            onChangeText={onChangeText}
            multiline={multiline}
            editable={editable}
            {...props}
          />
          {props?.rightIcon && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setHidden(!hidden)}>
              <Image
                source={props.rightIcon}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: 'contain',
                }}
                tintColor={colors.skyBlue}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
