import React, {useRef} from 'react';
import {Platform, StyleSheet, TouchableOpacity} from 'react-native';
import ReactNativePickerModule from 'react-native-picker-module';
import IonIcons from 'react-native-vector-icons/Ionicons';
import CustomText from '../components/CustomText';
import {size, colors} from '../utils';

export default function DropDownPicker({
  data = [],
  onSelected = () => null,
  onCancel = () => null,
  value = '',
  title = '',
  showLabel = false,
  stateKey = '',
  arrowcolor = '',
  placeHolderColor = 'black',
  containerStyle = {},
  dropDownLabelAlignment = {},
}) {
  console.log(data, 'velue', value, title, 'ttle');
  const pickerRef = useRef(null);
  return (
    <>
      {showLabel && (
        <CustomText
          text={title}
          style={dropDownLabelAlignment}
          font={'Jost_Black'}
          size={size.normal}
        />
      )}
      <TouchableOpacity
        onPress={() => pickerRef.current?.show()}
        activeOpacity={0.8}
        style={containerStyle}>
        <CustomText
          text={value ? value : title}
          size={15}
          color={placeHolderColor}
        />
        
        {/* <IonIcons
          color={arrowcolor}
          name="chevron-down-outline"
          size={size.large}
          onPress={() => pickerRef.current?.show()}
        /> */}
        <ReactNativePickerModule
          ref={pickerRef}
          value={value}
          title={title}
          items={data}
          titleStyle={{
            color:
              Platform.OS == 'android' ? colors.red : colors.primary,
          }}
          tintColor={
            Platform.OS == 'android' ? colors.background : colors.primary
          }
          itemStyle={{
            color: colors.background,
          }}
          selectedColor={colors.text}
          confirmButtonEnabledTextStyle={{
            color:
              Platform.OS == 'android' ? colors.background : colors.primary,
          }}
          confirmButtonDisabledTextStyle={{
            color: colors.border,
          }}
          cancelButtonTextStyle={{
            color:
              Platform.OS == 'android' ? colors.background : colors.primary,
          }}
          confirmButtonStyle={{
            backgroundColor: colors.background,
          }}
          cancelButtonStyle={{
            backgroundColor: colors.background,
          }}
          contentContainerStyle={{
            backgroundColor: colors.background,
          }}
          onCancel={() => {
            onCancel();
          }}
          onValueChange={value => {
            console.log('belueee', value, 'state', stateKey);
            onSelected(stateKey, value);
          }}
        />
      </TouchableOpacity>
     
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
});
