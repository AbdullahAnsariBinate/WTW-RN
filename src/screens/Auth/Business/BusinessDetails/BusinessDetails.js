import React, { Component, createRef } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Keyboard,
  Pressable,
} from 'react-native';
import { connect } from 'react-redux';
import Toast from 'react-native-toast-message';
import RNPickerSelect from 'react-native-picker-select';
import { Picker } from '@react-native-picker/picker';

import CustomBackground from '../../../../components/CustomBackground';
import CustomButton from '../../../../components/CustomButton';
import { ProfileTextInput } from '../../../../components/CustomTextInput';
import CustomTextInput from '../../../../components/CustomTextInput';
import ImagePicker from '../../../../components/ImagePicker';
import ProfileImage from '../../../../components/ProfileImage';
import moment from 'moment';
import { colors, size, WP } from '../../../../utils';
import { appImages, appIcons } from '../../../../assets/index';
import styles from './styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Img from '../../../../components/Img';
import PhoneInput from 'react-native-phone-number-input';
import NavService from '../../../../helpers/NavService';
import CustomText from '../../../../components/CustomText';
// import {BottomTabs} from '../../../routes/tabs/BottomTabs';
import { loginUser } from '../../../../redux/actions/authAction';
import DropDownPicker from '../../../../components/DropDownPicker';
import CheckBox from '@react-native-community/checkbox';
import { cities, data, states, time } from '../../../../utils/dummyData';
import GooglePlaceAutocomplete from '../../../../components/GooglePlaceAutocomplete';
import appStyles from '../../../appStyles';
import SocialSheet from '../../../../containers/Popup/socialSheetPopup/SocialSheet';

class BusinessDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStartTimePickerVisible: false,
      isEndTimePickerVisible: false,
      openTime: '', // To store the selected open time
      closeTime: '',
      BusinessName: '',
      BusinessCat: '',
      profileImage: null,
      date: '',
      web: '',
      statew: '',
      Description: '',
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
      openTimeTitle: 'Select Open Time',
      closeTimeTitle: 'Select Close Time',
      selectedHour: 'Hr',
      selectedMinute: 0,

      daysOfWeek: {
        Always_Open: false,
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false,
      },
      selectedHour: 1,
      selectedMinute: 1,
    };
    this.hours = [...Array(12).keys()];
    this.minutes = [...Array(60).keys()];
  }
  phoneInput = createRef(null);
  callback = (address, geometry) => {
    this.setState({ latitude: geometry?.location.lat });
    this.setState({ longitude: geometry?.location.lng });
    this.setState({ location: address });
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
        this.setState({ isDatePickerVisible: false, date: formattedDate });
      }
    } else {
      const time = moment(date).format('LT');
      this.setState({ isDatePickerVisible: false, time: time });
    }
  };

  onSubmit = () => {
    const { role } = this.props?.route?.params;
    console.log(role, 'BusinessSubsssss');

    const {
      BusinessName,
      BusinessCat,
      date,
      Description,
      web,
      openTime,
      closeTime,
      phoneNumber,
      profileImage,
      email,
      city,
      latitude,
      statew,
      longitude,
      location,
      showModal,
      showCityModal,
    } = this.state;
    if (location == '') {
      Toast.show({
        text1: 'Address field can`t be empty',
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
        text1: 'Business Phone number field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!email) {
      Toast.show({
        text1: 'Business email Address field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    }
    // else if (!openTime || !closeTime) {
    //   Toast.show({
    //     text1: 'Website field can`t be empty',
    //     type: 'error',
    //     visibilityTime: 3000,
    //   });
    // }
    else {
      let payload = {
        role: role,
        email: 'abc@gmail.com',
        password: '123456',
      };
      this.props.loginUser(payload);

      console.log(role, 'rolerrrrrsssssss');
      Toast.show({
        text1: 'Business User Login successful',
        type: 'success',
        visibilityTime: 3000,
      });
      Keyboard.dismiss();

      // this.props.loginUser(payload);

      // NavService.navigate('BottomTabs' , {screen: 'Home'})
    }
  };
  handleStartTimeConfirm = time => {
    const formattedTime = moment(time).format('HH:mm');
    this.setState({ openTime: formattedTime, isStartTimePickerVisible: false });
  };

  handleEndTimeConfirm = time => {
    const formattedTime = moment(time).format('HH:mm');
    this.setState({ closeTime: formattedTime, isEndTimePickerVisible: false });
  };
  //BACK HANDLER
  handleBackButtonClick() {
    NavService?.navigate('Login');
  }
  componentWillUnmount() {
    this?.handleBackButtonClick();
  }
  toggleDay = day => {
    this.setState(prevState => ({
      daysOfWeek: {
        ...prevState.daysOfWeek,
        [day]: !prevState.daysOfWeek[day],
      },
    }));
  };

  toggleAlwaysOpen = () => {
    this.setState(prevState => ({
      alwaysOpen: !prevState.alwaysOpen,
    }));
  };
  render() {
    const {
      openTime,
      closeTime,
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
      web,
      latitude,
      longitude,
      location,
      city,
      statew,
      Address,
      Description,
      BusinessName,
      BusinessCat,
      selectedDate,
      showModal,
      showCityModal,
    } = this.state;

    const updateImageInGallery = (path, mime, type) => {
      this.setState({ profileImage: { path, mime, type } });
    };
    const hoursOptions = Array.from({ length: 24 }, (_, index) => ({
      label: `${index.toString().padStart(2, '0')}:00`,
      value: `${index}`,
    }));
    const daysOfWeek = Object.keys(this.state.daysOfWeek);
    const firstColumnDays = daysOfWeek.slice(
      0,
      Math.ceil(daysOfWeek.length / 2),
    );
    const secondColumnDays = daysOfWeek.slice(Math.ceil(daysOfWeek.length / 2));
    const handleSearchByValue = item => {
      this.setState({ showModal: false });
      this.setState({ statew: item });
    };

    const handleSearchByValueCity = item => {
      this.setState({ showCityModal: false });
      this.setState({ city: item });
    };
    const handleClose = () => {
      this.setState({ showModal: false });
    };
    const handleCloseCity = () => {
      this.setState({ showCityModal: false });
    };
    return (
      <CustomBackground
        background={appImages.backgroundImage}
        showLogo={false}
        titleText={'Business Details'}
        back={true}
        onBack={() => this.props.navigation.replace('Login')}>
        <View style={styles.contain}>
          <CustomText text=" Business Details" style={styles.titles} />
          <View style={styles.customtextview}>
            <GooglePlaceAutocomplete
              addressText={location}
              handleAddressText={location => this.setState({ location })}
              // iconColor={true}
              rightIcon={appIcons.location}
              CheckIn={true}
              val={location}
              isBorderShow
              callback={this.callback}
            />
            <View
              style={{
                flexDirection: 'row',
                width: '88%',
                justifyContent: 'space-evenly',
              }}>
              <Pressable onPress={() => this.setState({ showCityModal: true })}>
                <CustomTextInput
                  width={'96%'}
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
                  onChangeText={value => this.setState({ city: value })}
                />
              </Pressable>
              <Pressable onPress={() => this.setState({ showModal: true })}>
                <CustomTextInput
                  maxLength={30}
                  width={'96%'}
                  placeholder={'State'}
                  value={statew}
                  rightphone={appIcons.down}
                  placeholderColor={colors.lightGray}
                  editable={false}
                  borderRadius={20}
                  isBorderShow
                  borderColor={colors.primary}
                  keyboardType={'email-address'}
                  onChangeText={value => this.setState({ statew: value })}
                />
              </Pressable>
            </View>
            <SocialSheet
              value={'States'}
              isVisible={showModal}
              states={states}
              handleSearchByValue={handleSearchByValue}
              handleClose={handleClose}
              // data={profileData}
              onBackButtonPress={handleClose}
              onBackdropPress={handleClose}
            />
            <SocialSheet
              value={'City'}
              isVisible={showCityModal}
              states={cities}
              handleSearchByValueCity={handleSearchByValueCity}
              handleClose={handleCloseCity}
              // data={profileData}
              onBackButtonPress={handleCloseCity}
              onBackdropPress={handleCloseCity}
            />
            <PhoneInput
              ref={this.phoneInput}
              codeTextStyle={{ color: colors.gray }}
              textInputProps={{ maxLength: 16, color: 'black' }}
              defaultValue={phoneNumber}
              defaultCode="US"
              disableArrowIcon={false}
              layout="first"
              containerStyle={styles.phoneContainer}
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
              placeholder={'Business Email Address'}
              value={email}
              placeholderColor={colors.lightGray}
              borderRadius={20}
              isBorderShow
              borderColor={colors.primary}
              keyboardType={'email-address'}
              onChangeText={value => this.setState({ email: value })}
            />
            <View
              style={[
                appStyles.directionRow,
                appStyles.justifySpaceBetween,
                { width: 350, marginTop: 10 },
              ]}>
              <CustomText text="Open Time" style={{ alignSelf: 'flex-start' }} />
              <CustomText text="Close Time" style={{ alignSelf: 'flex-end' }} />
            </View>

            {/* <View style={[appStyles.directionRow, {marginLeft: 10, backgroundColor:'red'}]}>
              <View
                style={[
                  appStyles.directionRow,
                  {
                    marginTop: 10,
                    // width: '50%',
                    alignSelf: 'flex-start',
                    backgroundColor:'green'
                  },
                ]}>
                <RNPickerSelect
                  placeholder={{label: 'Hr', value: 'Hr', inputLabel:'Hr'}}
                  onValueChange={(itemValue, itemIndex) => {
                    console.log("🚀 ~ file: BusinessDetails.js:414 ~ BusinessDetails ~ render ~ itemValue:", itemValue)
                    // Handle the selected hour here
                    this.setState({selectedHour: itemValue});
                  }}
                  style={{
                    label: {
                      color: 'black',
                    },
                    inputAndroid: {
                      backgroundColor: 'white',
                      width: 90,
                      alignItems:'left',
                      // paddingLeft: 10,
                      color: 'black',
                      marginRight: 10,
                      borderRadius: 10,
                    },
                    placeholder: {
                      color: 'gray', // Color of the placeholder text
                    },
                    inputIOS: {},
                    iconContainer: {
                      top: 5,
                      backgroundColor: 'red',
                      right: 15,
                    },
                  }}
                  textInputProps={{
                    style: {
                      // color: 'red',
                    
                      // Set the label text color to blue
                    },
                  }}
                  items={[
                    {label: '0', value: 0},
                    {label: '1', value: 1},
                  ]}
                />
                <RNPickerSelect
                  placeholder={{label: 'Select Hour', value: null}}
                  onValueChange={(itemValue, itemIndex) => {
                    // Handle the selected hour here
                    this.setState({selectedHour: itemValue});
                  }}
                  style={{
                    label: {
                      color: 'black',
                    },
                    inputAndroid: {
                      backgroundColor: 'white',
                      width: 75,
                      // marginRight: 10,

                      color: 'black',
                      borderRadius: 10,
                    },
                    placeholder: {
                      color: 'gray', // Color of the placeholder text
                    },
                    inputIOS: {},
                    iconContainer: {
                      top: 5,
                      backgroundColor: 'red',
                      right: 15,
                    },
                  }}
                  textInputProps={{
                    style: {
                      color: 'red', // Set the label text color to blue
                    },
                  }}
                  items={[
                    {label: '0', value: 0},
                    {label: '1', value: 1},
                  ]}
                />
                <View>
                  <Text>AM</Text>
                  <Text>PM</Text>
                </View>
              </View>
              <View
                style={[
                  appStyles.directionRow,
                  {
                    marginTop: 10,
                    // width: '50%',
                    alignSelf: 'flex-start',
                    backgroundColor:'yellow'

                  },
                ]}>
                <RNPickerSelect
                  placeholder={{label: 'Select Hour', value: null}}
                  onValueChange={(itemValue, itemIndex) => {
                    // Handle the selected hour here
                    this.setState({selectedHour: itemValue});
                  }}
                  style={{
                    label: {
                      color: 'black',
                    },
                    inputAndroid: {
                      backgroundColor: 'red',
                      width: 75,
                      color: 'black',
                      marginRight: 10,
                      borderRadius: 10,
                    },
                    placeholder: {
                      color: 'gray',
                    },
                    inputIOS: {},
                    iconContainer: {
                      top: 5,
                      backgroundColor: 'red',
                      right: 15,
                    },
                  }}
                  textInputProps={{
                    style: {
                      color: 'red', // Set the label text color to blue
                    },
                  }}
                  items={[
                    {label: '0', value: 0},
                    {label: '1', value: 1},
                  ]}
                />
                <RNPickerSelect
                  placeholder={{label: 'Select Hour', value: null}}
                  onValueChange={(itemValue, itemIndex) => {
                    // Handle the selected hour here
                    this.setState({selectedHour: itemValue});
                  }}
                  style={{
                    label: {
                      color: 'black',
                    },
                    inputAndroid: {
                      backgroundColor: 'white',
                      width: 75,
                      height: 10,
                      color: 'black',
                      borderRadius: 10,
                    },
                    placeholder: {
                      color: 'gray', // Color of the placeholder text
                    },
                    inputIOS: {},
                    iconContainer: {
                      top: 5,
                      backgroundColor: 'red',
                      right: 15,
                    },
                  }}
                  textInputProps={{
                    style: {
                      color: 'red', // Set the label text color to blue
                    },
                  }}
                  items={[
                    {label: '0', value: 0},
                    {label: '1', value: 1},
                  ]}
                />
                <View>
                  <Text>AM</Text>
                  <Text>PM</Text>
                </View>
              </View>
            </View> */}

            {/* Picker */}
            {/* <View style={{ ...appStyles.directionRow, ...appStyles.gap_10 }} >
              <Text>Hours:</Text>

              <View style={{ backgroundColor: 'green', }}>

                <Picker
                  style={{ width: '20%',backgroundColor:'red' }}
                  selectedValue={this.state.selectedHour}
                  onValueChange={(itemValue) => this.setState({ selectedHour: itemValue })}
                >
                  {this.hours.map((hour) => (
                    <Picker.Item key={hour} label={hour.toString()} value={hour} />
                  ))}
                </Picker>

              </View>

              <View style={{ backgroundColor: 'black' }}>
                <Text>Minute:</Text>
                <Picker
                  selectedValue={this.state.selectedMinute}
                  onValueChange={(itemValue) => this.setState({ selectedMinute: itemValue })}
                >
                  {this.minutes.map((minute) => (
                    <Picker.Item key={minute} label={minute.toString()} value={minute} />
                  ))}
                </Picker>
              </View>
            </View> */}

            <View style={styles.container}>
              <Text>Hour:</Text>
              <Picker
              style={{backgroundColor:'red',width:70,height:10,paddingLeft:90}}
                selectedValue={this.state.selectedHour}
                onValueChange={(itemValue) => this.setState({ selectedHour: itemValue })}
              >
                {this.hours.map((hour) => (
                  <Picker.Item key={hour} label={hour.toString()} value={hour} />
                ))}
              </Picker>
              <Text>Minute:</Text>
              <Picker
                selectedValue={this.state.selectedMinute}
                onValueChange={(itemValue) => this.setState({ selectedMinute: itemValue })}
              >
                {this.minutes.map((minute) => (
                  <Picker.Item key={minute} label={minute.toString()} value={minute} />
                ))}
              </Picker>
              <Text>
                Selected Time:
                {this.state.selectedHour === 'hours' && this.state.selectedHour }
                {' '}
                {this.state.selectedMinute === 'minutes' ? this.state.selectedMinute : this.state.selectedMinute + ' minutes'}
              </Text>
            </View>

            <CustomText
              text=" Select Your Working Days "
              style={styles.titles}
            />

            <View style={styles.checkcontainer}>
              <View style={styles.row}>
                <View style={styles.column}>
                  {firstColumnDays.map(day => (
                    <View key={day} style={styles.checkboxWithText}>
                      <CheckBox
                        value={this.state.daysOfWeek[day]}
                        onValueChange={() => this.toggleDay(day)}
                      />
                      <CustomText style={styles.dayText} text={day} />
                    </View>
                  ))}
                </View>
                <View style={styles.column}>
                  {secondColumnDays.map(day => (
                    <View key={day} style={styles.checkboxWithText}>
                      <CheckBox
                        value={this.state.daysOfWeek[day]}
                        onValueChange={() => this.toggleDay(day)}
                      />
                      <CustomText style={styles.dayText} text={day} />
                    </View>
                  ))}
                </View>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                title="Continue"
                onPress={this.onSubmit}
                buttonStyle={styles.press}
                textStyle={styles.btnstext}
              />

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
const mapStateToProps = state => ({
  userType: state,
});
const actions = { loginUser };
export default connect(mapStateToProps, actions)(BusinessDetails);
