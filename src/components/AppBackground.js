import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {appIcons} from '../assets/index';
import {appImages} from '../assets';
import {colors} from '../utils';
import NavService from '../helpers/NavService';
import Shadows from '../helpers/Shadows';
// import EditBusiness from '../screens/Main/BusinessFlow/EditBusiness/EditBusiness';

function AppBackground({
  children,
  title,
  back = false,
  menu = false,
  nav = '',
  rightIcon = appIcons.notification,
  marginHorizontal = true,
  newBack,
  EditBus,
  childrenContainerStyle = {},
  leftIcon,
  rightIconNav = () => {
    NavService.navigate('Notification');
  },
  notification = false,
}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <View
        style={{
          marginTop: getStatusBarHeight() * 1,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.blue,
          paddingVertical: 15,
          paddingBottom: 30,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}>
        <>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              nav.length
                ? NavService.navigate(nav)
                : back
                ? NavService.goBack()
                : newBack
                ? NavService.goBack()
                : NavService.openDrawer();
            }}
            style={{
              position: 'absolute',
              alignItems: 'center',
              borderRadius: menu ? 10 : 0,
              left: 20,
              width: 45,
              height: 45,
              justifyContent: 'center',
              // ...Shadows.shadow3,
            }}>
            {back && (
              <Image
                source={appIcons.back}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: 'contain',
                  tintColor: colors.white,
                }}
              />
            )}
            {menu && (
              <Image
                source={leftIcon}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: 'contain',
                  tintColor: colors.white,
                }}
              />
            )}
          </TouchableOpacity>

          {EditBus && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                NavService.navigate('EditBusiness');
              }}
              style={{
                position: 'absolute',
                right: 10,
                width: 45,
                height: 45,

                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
              }}>
              <Image
                source={rightIcon}
                style={{
                  width: 24,
                  height: 24,
                  // borderRadius: 10,
                  resizeMode: 'cover',
                  tintColor: 'white',
                }}
              />
            </TouchableOpacity>
          )}

          <View style={{marginTop: 15}}>
            <Text
              style={{
                color: colors.white,
                fontWeight: '700',
                fontSize: 18,
              }}>
              {title}
            </Text>
          </View>
          {notification && (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                NavService.navigate('Notification');
              }}
              style={{
                position: 'absolute',
                right: 20,
                width: 45,
                height: 45,

                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
              }}>
              <Image
                source={rightIcon}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 10,
                  resizeMode: 'cover',
                  tintColor: 'white',
                }}
              />
            </TouchableOpacity>
          )}
        </>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: !marginHorizontal ? 20 : 0,
          marginBottom: 10,
          overflow: 'visible',
        }}>
        {children}
      </View>
    </View>
  );
}

export default AppBackground;
