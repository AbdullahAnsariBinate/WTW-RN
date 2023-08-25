import React, {Component, createRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Keyboard,
  Pressable,
} from 'react-native';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import ImagePicker from '../../../components/ImagePicker';
import ProfileImage from '../../../components/ProfileImage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {colors, size, WP} from '../../../utils';
import {appImages, appIcons} from '../../../assets/index';
import styles from './styles';
import {ProfileTextInput} from '../../../components/CustomTextInput';
import Img from '../../../components/Img';
import {completeProfile} from '../../../redux/actions/authAction';
import PhoneInput from 'react-native-phone-number-input';
import NavService from '../../../helpers/NavService';
import CustomText from '../../../components/CustomText';
// import {BottomTabs} from '../../../routes/tabs/BottomTabs';
import {loginUser} from '../../../redux/actions/authAction';
import {Alert} from 'react-native';
// import SocialSheet from '../../../containers/Popup/socialSheetPopup/SocialSheet';
import SocialSheet from '../../../containers/Popup/socialSheetPopup/SocialSheet';

import {
  cities,
  modalLikeList,
  profileData,
  states,
} from '../../../utils/dummyData';
import GooglePlaceAutocomplete from '../../../components/GooglePlaceAutocomplete';

class CompleteProfile extends Component {
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
      city: '',
      isDatePickerVisible: false,
      formattedValue: '',
      selectedDate: '',
      showModal: false,
      showCityModal: false,
      latitude: '',
      longitude: '',
      location: '',
    };
  }
  phoneInput = createRef(null);

  callback = (address, geometry) => {
    this.setState({latitude: geometry?.location.lat});
    this.setState({longitude: geometry?.location.lng});
    this.setState({location: address});
  };

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
        this.setState({isDatePickerVisible: false, date: formattedDate});
      }
    } else {
      const time = moment(date).format('LT');
      this.setState({isDatePickerVisible: false, time: time});
    }
  };
  onSubmit = () => {
    const {role} = this.props?.route?.params;
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
    } else if (!statew) {
      Toast.show({
        text1: 'State field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!phoneNumber) {
      Toast.show({
        text1: 'Phone Number field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!email) {
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
          ? NavService.navigate('Preference', {role: role})
          : NavService.navigate('BusinessSub', {role: role});
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
      showModal,
      showCityModal,
    } = this.state;

    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };
    const handleClose = () => {
      this.setState({showModal: false});
    };
    const handleCloseCity = () => {
      this.setState({showCityModal: false});
    };
    const handleSearchByValue = item => {
      this.setState({showModal: false});
      this.setState({statew: item});
    };

    const handleSearchByValueCity = item => {
      this.setState({showCityModal: false});
      this.setState({city: item});
    };
    return (
      <CustomBackground
        background={appImages.backgroundImage}
        showLogo={false}
        titleText={'Complete Profile'}
        back={true}
        onBack={() => this.props.navigation.replace('Login')}>
        <View style={styles.contain}>
          <View>
            <ImagePicker
              onImageChange={(path, mime, type) => {
                updateImageInGallery(path, mime, type);
              }}>
              <ProfileImage
                backgroundColor={colors.white}
                name={'UserName'}
                innerAsset={profileImage == null ? true : false}
                imageUri={
                  profileImage !== null ? profileImage?.path : appIcons.camera
                }
              />
            </ImagePicker>
          </View>
          <CustomText text="Upload Your Image" style={styles.titles} />
          <View style={styles.customtextview}>
            <View style={styles.subview}>
              <CustomTextInput
                width={165}
                maxLength={30}
                placeholder={'First Name'}
                value={name}
                placeholderColor={colors.lightGray}
                borderRadius={20}
                isBorderShow
                borderColor={colors.primary}
                keyboardType={'email-address'}
                onChangeText={value => this.setState({name: value})}
              />
              <CustomTextInput
                width={165}
                maxLength={30}
                placeholder={'Last Name'}
                value={lastName}
                placeholderColor={colors.lightGray}
                borderRadius={20}
                isBorderShow
                borderColor={colors.primary}
                keyboardType={'email-address'}
                onChangeText={value => this.setState({lastName: value})}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                this.setState({selectFormat: 0});
                this.setState({isDatePickerVisible: true});
              }}
              style={[styles.dateBtn, {backgroundColor: 'white'}]}>
              <Text
                style={[
                  styles.placeHolderText,
                  date === selectedDate && {color: colors.lightGray},
                ]}>
                {date ? date : 'Date of Birth'}
              </Text>
              <Img
                tintColor={'#2F66F9'}
                local
                style={styles.calenderIcon}
                src={appIcons.calendar}
              />
            </TouchableOpacity>
     

            <GooglePlaceAutocomplete
              addressText={location}
              handleAddressText={location => this.setState({location})}
              // iconColor={true}
              rightIcon={appIcons.location}
              CheckIn={true}
              val={location}
              isBorderShow
              callback={this.callback}
            />
            <View style={styles.subview}>
              <Pressable
                style={{marginHorizontal: 90, backgroundColor: 'red'}}
                onPress={() => this.setState({showCityModal: true})}>
                <CustomTextInput
                  width={160}
                  maxLength={30}
                  placeholder={'City'}
                  editable={false}
                  rightphone={appIcons.down}
                  value={city}
                  placeholderColor={colors.lightGray}
                  borderRadius={20}
                  isBorderShow
                  borderColor={colors.primary}
                  keyboardType={'email-address'}
                  onChangeText={value => this.setState({city: value})}
                />
              </Pressable>
              <Pressable
                style={{marginHorizontal: 90}}
                onPress={() => this.setState({showModal: true})}>
                <CustomTextInput
                  width={160}
                  maxLength={30}
                  placeholder={'State'}
                  value={statew}
                  rightphone={appIcons.down}
                  placeholderColor={colors.lightGray}
                  editable={false}
                  borderRadius={20}
                  isBorderShow
                  borderColor={colors.primary}
                  keyboardType={'email-address'}
                  onChangeText={value => this.setState({statew: value})}
                />
              </Pressable>
            </View>
            <PhoneInput
              ref={this.phoneInput}
              codeTextStyle={{color: colors.gray}}
              textInputProps={{maxLength: 16, color: 'black'}}
              defaultValue={phoneNumber}
              defaultCode="US"
              disableArrowIcon={false}
              layout="first"
              containerStyle={styles.phoneContainer}
              textContainerStyle={styles.textContainerPhone}
              textInputStyle={{
                padding: 0,
                fontSize: size.small,
              }}
              textStyle={{fontSize: 10, color: colors.lightGray}}
              countryPickerButtonStyle={styles.countryPickerButtonStyle}
              onChangeText={text => {
                this.setState({phoneNumber: text});
              }}
              onChangeFormattedText={text => {
                this.setState({formattedValue: text});
              }}
              withDarkTheme
              autoFocus
            />
            <CustomTextInput
              width={'88%'}
              maxLength={30}
              placeholder={'email'}
              value={email}
              placeholderColor={colors.lightGray}
              borderRadius={20}
              isBorderShow
              borderColor={colors.primary}
              keyboardType={'email-address'}
              onChangeText={value => this.setState({email: value})}
            />
            <SocialSheet
              value={'States'}
              isVisible={showModal}
              states={states}
              handleSearchByValue={handleSearchByValue}
              handleClose={handleClose}
              data={profileData}
              onBackButtonPress={handleClose}
              onBackdropPress={handleClose}
            />
            <SocialSheet
              value={'City'}
              isVisible={showCityModal}
              states={cities}
              handleSearchByValueCity={handleSearchByValueCity}
              handleClose={handleCloseCity}
              data={profileData}
              onBackButtonPress={handleCloseCity}
              onBackdropPress={handleCloseCity}
            />
            <View style={styles.buttonContainer}>
              <CustomButton
                title="Continue"
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
              onCancel={() => this.setState({isDatePickerVisible: false})}
            />
          </View>
        </View>
      </CustomBackground>
    );
  }
}

const actions = {completeProfile, loginUser};
export default connect(null, actions)(CompleteProfile);
