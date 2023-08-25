import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {appIcons, appImages} from '../assets';
import NavService from '../helpers/NavService';
import Logo from './Logo';
import appStyles from '../screens/appStyles';
import {colors} from '../utils';
import {transparent} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export default ({ children, showLogo = true, back = true, title = true, titleText, onBack = null, background, isHeader = false, backgroundColor }) => {
  return (
    <ImageBackground source={background} style={{flex: 1}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{
          backgroundColor: backgroundColor,
          alignItems: 'center',
          flexGrow: 1,
        }}>
        <View style={[isHeader == true && styles.custom]}>
          {back && (
            <TouchableOpacity
              onPress={() => {
                if (onBack != null) {
                  onBack();
                } else {
                  NavService.goBack();
                }
              }}
              style={{
                position: 'absolute',
                zIndex: 99,
                left: 20,
              }}>
              <Image
                source={appIcons.back}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          )}
          {title && (
            <View style={{marginTop: 15}}>
              <Text style={styles.headerSignInText}>{titleText}</Text>
            </View>
          )}
        </View>
        {showLogo && (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Logo size={220} />
          </View>
        )}
        <View style={{flex: 3}}>{children}</View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerSignInText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    ...appStyles.family_Montserrat_Semi_Bold,
  },
  headerContainer: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backButtonContainer: {
    position: 'absolute',
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {width: 25, height: 25, tintColor: '#9c9c9c'},
  custom: {
    marginTop: getStatusBarHeight() * 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.blue,
    paddingVertical: 15,
    paddingBottom: 30,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  }

})
