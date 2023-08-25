import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GEOCODE_API_KEY} from '../config/WebService';
import {colors, WP} from '../utils';

const GooglePlaceAutocomplete = ({
  addressText,
  handleAddressText,
  callback,
  wrapperStyles,
  iconColor,
  rightIcon,
  image,
  EditProfile,
  val,
}) => {
  const renderRightButton = () => {
    if (rightIcon) {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          // onPress={() => onDelete(index)}
          style={styles.rightButton}>
          <Image source={rightIcon} style={styles.rightButtonIcon} />
        </TouchableOpacity>
      );
    }
    return null;
  };
  return (
    <View style={[styles.geoLocationView, wrapperStyles]}>
      {image && <Image source={image} style={styles.image} />}
      <View style={styles.inputContainer}>
        <GooglePlacesAutocomplete
          enableHighAccuracyLocation
          fetchDetails
          disableScroll
          backgroundColor
          rightIcon
          enablePoweredByContainer={false}
          keepResultsAfterBlur={true}
          listViewDisplayed={false}
          placeholder={EditProfile ? val : 'Address'}
          placeholderTextColor={iconColor ? colors.primary : colors.black}
          onPress={(data, details = null) => {
            console.log(data, 'dadadad');
            const {formatted_address, geometry} = details;
            callback(formatted_address, geometry);
          }}
          renderRightButton={renderRightButton}
          styles={{
            textInput: styles.textInput,
            description: styles.description,

            listView: styles.listView,
          }}
          textInputProps={{
            value: addressText,
            onChangeText: handleAddressText,
            placeholderTextColor: colors.lightGray,
          }}
          query={{
            key: GEOCODE_API_KEY,
            language: 'en',
          }}
        />
      </View>
    </View>
  );
};

export default GooglePlaceAutocomplete;

const styles = StyleSheet.create({
  geoLocationView: {
    width: WP('94%'),
    marginTop: 10,
    // backgroundColor: colors.black,
    borderRadius: 10,
    // height: 55,// Dont give height in autoComplete
    paddingHorizontal: 10,
  },
  textInput: {
    borderRadius: 50,
    height: 60,
    borderWidth: 1,
    borderColor: colors.primary,
    color: colors.black,
    // backgroundColor: backgroundColor,
    width: WP('100%'),
    paddingRight: 40, // Add paddingRight to create space for the right icon
  },
  description: {color: colors.black},
  inputContainer: {
    flex: 1,
    // backgroundColor:'red'
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: colors.primary,
    marginRight: 18,
  },
  rightButton: {
    width: 40,
    height: 40,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',

    right: 0,
  },
  rightButtonIcon: {
    width: 20,

    // backgroundColor:'pink',
    height: 20,
    tintColor: colors.primary,
  },
});
