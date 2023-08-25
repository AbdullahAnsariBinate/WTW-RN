import React, { Component, createRef } from 'react';
import { Text, TouchableOpacity, View, Image, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import Toast from 'react-native-toast-message';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import ImagePicker from '../../../components/ImagePicker';
import ProfileImage from '../../../components/ProfileImage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { colors, size, WP } from '../../../utils';
import { appImages, appIcons } from '../../../assets/index';
import styles from './styles';
import { ProfileTextInput } from '../../../components/CustomTextInput';
import Img from '../../../components/Img';
import { completeProfile } from '../../../redux/actions/authAction';
import PhoneInput from 'react-native-phone-number-input';
import NavService from '../../../helpers/NavService';
import CustomText from '../../../components/CustomText';
// import { BottomTabs } from '../../../routes/tabs/BottomTabs';
import { loginUser } from '../../../redux/actions/authAction';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      profileImage: null,
      date: '',
      statew: '',
      Occup: '',
      phoneNumber: this?.props?.route?.params?.email,
      message: '',
      email: this?.props?.route?.params?.email,
      selectFormat: 0,
      latitude: '',
      city: '',
      longitude: '',
      location: '',
      isDatePickerVisible: false,
      formattedValue: '',
      selectedDate: '',
    };
  }
  phoneInput = createRef(null);

  handleConfirm = date => {
    if (this.state.selectFormat === 0) {
      const currentDate = moment();
      const selectedDate = moment(date);
      if (selectedDate.isAfter(currentDate)) {
        // Selected date is in the future
        Toast.show({
          text1: 'Please select a valid date',
          type: 'error',
          visibilityTime: 3000,
        });
      } else {
        const formattedDate = selectedDate.format('YYYY-MM-DD');
        this.setState({ isDatePickerVisible: false, date: formattedDate });
      }
    } else {
      const time = moment(date).format('LT');
      this.setState({ isDatePickerVisible: false, time: time });
    }
  };

  onSubmit = () => {
    const { role } = this.props?.route?.params;
    console.log(role, 'rolecomplete');

    const {
      name,
      lastName,
      date,
      Occup,
      message,
      phoneNumber,
      profileImage,
      email,
      city,
      latitude,
      statew,
      longitude,
      location,
    } = this.state;
    if (name == '') {
      Toast.show({
        text1: 'First name field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!lastName) {
      Toast.show({
        text1: 'Last name field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!date) {
      Toast.show({
        text1: 'DOB field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!city) {
      Toast.show({
        text1: 'City field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    }
    else if (!phoneNumber) {
      Toast.show({
        text1: 'PhoneNumber field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    }
    else if (!email) {
      Toast.show({
        text1: 'State field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      let payload = {
        // role: role,
        email: 'abc@gmail.com',
        password: '123456',
      };
      Keyboard.dismiss();

      {
        role == 'User'
          ? NavService.navigate('Preference', { role: role })
          : NavService.navigate('BusinessSub', { role: role });
      }
      // this.props.loginUser(payload);

      // NavService.navigate('BottomTabs' , {screen: 'Home'})
    }
  };

  //BACK HANDLER
  handleBackButtonClick() {
    NavService?.navigate('Login');
  }
  componentWillUnmount() {
    this?.handleBackButtonClick();
  }

  render() {
    const {
      name,
      lastName,
      profileImage,
      date,
      selectFormat,
      email,
      Occup,
      message,
      phoneNumber,
      isDatePickerVisible,
      latitude,
      longitude,
      location,
      city,
      statew,
      Address,
      selectedDate,
    } = this.state;

    const updateImageInGallery = (path, mime, type) => {
      this.setState({ profileImage: { path, mime, type } });
    };

    return (
      <CustomBackground
        isHeader
        // background={appImages.backgroundImage}
        showLogo={false}
        titleText={'My Profile'}
        back={true}
        onBack={() => this.props.navigation.replace('Login')}>
        <View style={styles.contain}>
          <View style={{ bottom: 20 }}>
            <ImagePicker
              onImageChange={(path, mime, type) => {
                updateImageInGallery(path, mime, type);
              }}>

              <ProfileImage
                size={100}
                // tintColor={'white'}
                name={'UserName'}
                innerAsset={profileImage == null ? true : false}
                imageUri={
                  profileImage !== null ? profileImage?.path : appIcons.userProfile
                }
              />
              <TouchableOpacity
                style={styles.editTouch}
                onPress={() => NavService.navigate('EditProfile')}>
                <Img
                  tintColor={colors.white}
                  local
                  src={appIcons.editProfile}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </ImagePicker>
          </View>
          <View style={styles.customtextview}>
            <View style={styles.subview}>
              <CustomTextInput
                width={165}
                maxLength={30}
                placeholder={'First Name'}
                value={name}
                placeholderColor={colors.gray}
                borderRadius={20}
                isBorderShow
                borderColor={colors.primary}
                keyboardType={'email-address'}
                onChangeText={value => this.setState({ name: value })}
                containerStyle={styles.border}
              />
              <CustomTextInput
                width={165}
                maxLength={30}
                placeholder={'Last Name'}
                value={lastName}
                placeholderColor={colors.gray}
                borderRadius={20}
                isBorderShow
                borderColor={colors.primary}
                keyboardType={'email-address'}
                onChangeText={value => this.setState({ lastName: value })}
                containerStyle={styles.border}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                this.setState({ selectFormat: 0 });
                this.setState({ isDatePickerVisible: true });
              }}
              style={[styles.dateBtn, { backgroundColor: 'white' }]}>
              <Text
                style={[
                  styles.placeHolderText,
                  date === selectedDate && { color: colors.gray },
                ]}>
                {date ? date : 'Date of Birth'}
              </Text>
              <Img
                tintColor={'#2F66F9'}
                local
                style={[styles.calenderIcon]}
                src={appIcons.calendar}
              />
            </TouchableOpacity>

            <View style={styles.subview}>
              <CustomTextInput
                width={165}
                maxLength={30}
                placeholder={'city'}
                value={city}
                placeholderColor={colors.gray}
                borderRadius={20}
                isBorderShow
                borderColor={colors.primary}
                keyboardType={'email-address'}
                onChangeText={value => this.setState({ city: value })}
                containerStyle={styles.border}

              />
              <CustomTextInput
                width={165}
                maxLength={30}
                placeholder={'State'}
                value={statew}
                placeholderColor={colors.gray}
                borderRadius={20}
                isBorderShow
                borderColor={colors.primary}
                keyboardType={'email-address'}
                onChangeText={value => this.setState({ statew: value })}
                containerStyle={styles.border}

              />
            </View>
            <PhoneInput
              ref={this.phoneInput}
              codeTextStyle={{ color: colors.gray }}
              textInputProps={{ maxLength: 16, color: 'black' }}
              defaultValue={phoneNumber}
              defaultCode="US"
              disableArrowIcon={false}
              layout="first"
              containerStyle={[styles.phoneContainer]}
              textContainerStyle={styles.textContainerPhone}
              textInputStyle={{ padding: 0, fontSize: size.small }}
              textStyle={{ fontSize: 10 }}
              countryPickerButtonStyle={styles.countryPickerButtonStyle}
              onChangeText={text => {
                this.setState({ phoneNumber: text });
              }}
              onChangeFormattedText={text => {
                this.setState({ formattedValue: text });
              }}
              withDarkTheme
              autoFocus
            />
            <CustomTextInput
              width={'88%'}
              maxLength={30}
              placeholder={'email'}
              value={email}
              placeholderColor={colors.gray}
              borderRadius={20}
              isBorderShow
              borderColor={colors.primary}
              keyboardType={'email-address'}
              onChangeText={value => this.setState({ email: value })}
              containerStyle={styles.border}

            />
            <View style={styles.buttonContainer}>
              <CustomButton
                title="Save"
                onPress={this.onSubmit}
                buttonStyle={styles.press}
                textStyle={styles.btnstext}
              />
            </View>
            <DateTimePickerModal
              maximumDate={new Date()}
              themeVariant="light"
              isDarkModeEnabled={false}
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={date => {
                const confirmDate = moment(date).format('YYYY-MM-DD');
                this.setState({
                  isDatePickerVisible: false,
                  date: confirmDate,
                });
              }}
              onCancel={() => this.setState({ isDatePickerVisible: false })}
            />
          </View>
        </View>
      </CustomBackground>
    );
  }
}

const actions = { EditProfile, loginUser };
export default connect(null, actions)(EditProfile);
