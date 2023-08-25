import React, {Component} from 'react';
import {
  Dimensions,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  Pressable,
} from 'react-native';
// import {EventDetailinfo, event, } from '../../../utils/dummyData';
import styles from './styles';
// import {loginUser, setUserType} from '../../../redux/actions/authAction';
import {loginUser} from '../../../../redux/actions/authAction';
import {connect} from 'react-redux';
import AppBackground from '../../../../components/AppBackground';
import CustomText from '../../../../components/CustomText';
import appStyles from '../../../appStyles';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CustomSingleList from '../../../../components/CustomSingleList';
import CustomButton from '../../../../components/CustomButton';
import Img from '../../../../components/Img';
import NavService from '../../../../helpers/NavService';
import {appIcons, appImages} from '../../../../assets';
import {colors, size, WP} from '../../../../utils';
import {
  EventDetailinfo,
  cities,
  event,
  homeData,
  profileData,
  states,
} from '../../../../utils/dummyData';
import CustomTextInput, {
  ProfileTextInput,
} from '../../../../components/CustomTextInput';
import GooglePlaceAutocomplete from '../../../../components/GooglePlaceAutocomplete';
import ProfileImage from '../../../../components/ProfileImage';
import ImagePicker from '../../../../components/ImagePicker';
import SocialSheet from '../../../../containers/Popup/socialSheetPopup/SocialSheet';

const {width} = Dimensions.get('screen');

export class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showModal1: false,
      keyboardStatus: false,
      selectFormat: 0,
      date: '',
      city: '',
      statew: '',
      isDatePickerVisible: false,
      formattedValue: '',
      selectedDate: '',
      showCityModal: false,

      profileImage: null,
    };
  }
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
    } else if (!profileImage) {
      Toast.show({
        text1: 'profileImage field can`t be empty',
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

  render() {
    const {
      showModal,
      showModal1,
      date,
      showCityModal,
      city,
      statew,
      profileImage,
      selectFormat,
      isDatePickerVisible,
      selectedDate,
    } = this.state;

    const handleSearchByValue = item => {
      this.setState({showModal: false});
      this.setState({statew: item});
    };
    const handleClose = () => {
      this.setState({showModal: false});
    };
    const handleCloseCity = () => {
      this.setState({showCityModal: false});
    };
    const handleSearchByValueCity = item => {
      this.setState({showCityModal: false});
      this.setState({city: item});
    };
    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };

    const user = this.props.user;
    console.log(user, 'asghgggg');
    return (
      <AppBackground
        back
        title={'Create Event '}
        // notification
        marginHorizontal={false}
        // rightIcon={appIcons.recktangle}
        leftIcon={appIcons.drawer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[
              appStyles.alignCenter,
              appStyles.paddingVertical_2,
              appStyles.ga,
            ]}>
            <View style={{marginTop: 20}}>
              <ImagePicker
                onImageChange={(path, mime, type) => {
                  updateImageInGallery(path, mime, type);
                }}>
                <ProfileImage
                  // height={200}
                  // Text
                  borderRadiii
                  tintColor={colors.red}
                  backheight
                  borderWWidth={1}
                  backwidth
                  backgroundColor={colors.white}
                  borderWidth
                  name={'UserName'}
                  borderRadius={10}
                  innerAsset={profileImage == null ? true : false}
                  imageUri={
                    profileImage !== null ? profileImage?.path : appIcons.upload
                  }
                />
              </ImagePicker>
            </View>

            <View style={[appStyles.gap_5, {marginTop: 10}]}>
              <CustomTextInput
                isBorderShow
                width={'95%'}
                placeholder={'Event Name'}
                //   value={email}
                keyboardType={'email-address'}
                //   onChangeText={value => this.setState({email: value})}
                containerStyle={{
                  // backgroundColor:'red',
                  marginHorizontal: 20,
                }}
              />
              <CustomTextInput
                isBorderShow
                // rightphone={appIcons.phone}
                placeholder={'Event Name'}
                //   value={email}
                height={120}
                borderRadius={5}
                keyboardType={'email-address'}
                //   onChangeText={value => this.setState({email: value})}
                // textAlignVertical="top"
                textAlignVertical={'top'}
                containerStyle={{
                  height: 150,
                  borderRadius: 15,
                  width: '95%',
                  marginHorizontal: 20,
                }}
              />

              <GooglePlaceAutocomplete
                wrapperStyles={{width: 350, marginHorizontal: 10}}
                rightIcon={appIcons.location}
                isBorderShow
                callback={this.callback}
              />
            </View>
            <View style={styles.calendarrow}>
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
                  {date ? date : 'Start Date'}
                </Text>
                <Img
                  tintColor={'#2F66F9'}
                  local
                  style={[styles.calenderIcon]}
                  src={appIcons.calendar}
                />
              </TouchableOpacity>
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
                  {date ? date : 'End Date'}
                </Text>
                <Img
                  tintColor={'#2F66F9'}
                  local
                  style={[styles.calenderIcon]}
                  src={appIcons.calendar}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.calendarrow}>
              <Pressable
                style={{marginHorizontal: 10}}
                onPress={() => this.setState({showCityModal: true})}>
                <CustomTextInput
                  width={160}
                  maxLength={30}
                  placeholder={'City'}
                  value={city}
                  rightphone={appIcons.down}
                  placeholderColor={colors.lightGray}
                  editable={false}
                  borderRadius={20}
                  isBorderShow
                  borderColor={colors.primary}
                  keyboardType={'email-address'}
                  onChangeText={value => this.setState({city: value})}
                />
              </Pressable>
              <Pressable
                style={{marginHorizontal: 10}}
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
            <CustomButton
              title="Create"
              onPress={() => this.props.logoutUser()}
              buttonStyle={styles.press}
              textStyle={styles.btnstext}
            />
          </View>
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
        </ScrollView>
      </AppBackground>
    );
  }
}

function mapStateToProps({authReducer}) {
  return {
    user: authReducer?.user,
  };
}

const actions = {loginUser};
export default connect(mapStateToProps, actions)(CreateEvent);
