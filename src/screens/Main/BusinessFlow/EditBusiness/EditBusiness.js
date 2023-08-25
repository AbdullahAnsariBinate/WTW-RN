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
import CustomBackground from '../../../../components/CustomBackground';
import CustomButton from '../../../../components/CustomButton';
import {ProfileTextInput} from '../../../../components/CustomTextInput';
import CustomTextInput from '../../../../components/CustomTextInput';
import ImagePicker from '../../../../components/ImagePicker';
import ProfileImage from '../../../../components/ProfileImage';
import moment from 'moment';
import {colors, size, WP} from '../../../../utils';
import {appImages, appIcons} from '../../../../assets/index';
import styles from './styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Img from '../../../../components/Img';
import PhoneInput from 'react-native-phone-number-input';
import NavService from '../../../../helpers/NavService';
import CustomText from '../../../../components/CustomText';
// import {BottomTabs} from '../../../routes/tabs/BottomTabs';
import {loginUser} from '../../../../redux/actions/authAction';
import {category, states} from '../../../../utils/dummyData';
import SocialSheet from '../../../../containers/Popup/socialSheetPopup/SocialSheet';
import AppBackground from '../../../../components/AppBackground';
// import SocialSheet from '../../../../containers/PopUp/socialSheetPopup/SocialSheet';

class EditBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      showModal: false,
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
        this.setState({isDatePickerVisible: false, date: formattedDate});
      }
    } else {
      const time = moment(date).format('LT');
      this.setState({isDatePickerVisible: false, time: time});
    }
  };

  onSubmit = () => {
    const {role} = this.props?.route?.params;
    console.log(role, 'BusinessSubsssss');

    const {BusinessName, BusinessCat, date, Description, web, profileImage} =
      this.state;
    if (BusinessName == '') {
      Toast.show({
        text1: 'Business Name field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!BusinessCat) {
      Toast.show({
        text1: 'Business Category field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!date) {
      Toast.show({
        text1: 'Year Of Business field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!Description) {
      Toast.show({
        text1: 'Business Description field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!web) {
      Toast.show({
        text1: 'Website field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!web) {
      Toast.show({
        text1: 'Website field can`t be empty',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!profileImage) {
      Toast.show({
        text1: 'Business Logo can`t be empty',
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

      NavService.navigate('BusinessDetails', {role: role});

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
      web,
      Description,
      BusinessName,
      BusinessCat,
      selectedDate,
      showModal,
    } = this.state;

    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };
    const handleClose = () => {
      this.setState({showModal: false});
    };
    const handleSearchByValue = item => {
      this.setState({showModal: false});
      this.setState({BusinessCat: item});
    };

    return (
      <AppBackground
        isHeader
        // background={appImages.backgroundImage}
        showLogo={false}
        title={'Edit Business Profile'}
        back={true}
        onBack={() => this.props.navigation.replace('Login')}>
        <View style={styles.contain}>
          <View style={{bottom: 20}}>
            <ImagePicker
              onImageChange={(path, mime, type) => {
                updateImageInGallery(path, mime, type);
              }}>
              <ProfileImage
                // size={100}
                // tintColor={'white'}
                name={'UserName'}
                innerAsset={profileImage == null ? true : false}
                imageUri={
                  profileImage !== null
                    ? profileImage?.path
                    : appIcons.userProfile
                }
              />
              <TouchableOpacity
                style={styles.editTouch}
                onPress={() => NavService.navigate('EditProfile')}>
                <Img
                  tintColor={colors.white}
                  local
                  src={appIcons.camera}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </ImagePicker>
          </View>
          <View style={styles.customtextview}>
            <CustomTextInput
              width={'88%'}
              maxLength={30}
              placeholder={'Business Name'}
              value={BusinessName}
              placeholderColor={colors.lightGray}
              borderRadius={20}
              isBorderShow
              containerStyle={{marginBottom: -5}}
              borderColor={colors.primary}
              keyboardType={'email-address'}
              onChangeText={value => this.setState({BusinessName: value})}
            />
            <Pressable onPress={() => this.setState({showModal: true})}>
              <CustomTextInput
                width={'100%'}
                maxLength={30}
                placeholder={'Select Business Category'}
                value={BusinessCat}
                placeholderColor={colors.lightGray}
                rightphone={appIcons.down}
                borderRadius={20}
                isBorderShow
                containerStyle={{marginBottom: 5}}
                editable={false}
                borderColor={colors.primary}
                keyboardType={'email-address'}
                onChangeText={value => this.setState({BusinessCat: value})}
              />
            </Pressable>
            <SocialSheet
              value={'Select'}
              isVisible={showModal}
              states={category}
              handleSearchByValue={handleSearchByValue}
              handleClose={handleClose}
              onBackButtonPress={handleClose}
              onBackdropPress={handleClose}
            />
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
                {date ? date : 'Year of Business'}
              </Text>
              <Img
                tintColor={'#2F66F9'}
                local
                style={[styles.calenderIcon]}
                src={appIcons.calendar}
              />
            </TouchableOpacity>

            <ProfileTextInput
              // width={'88%'}
              textAlignVertical="top"
              maxLength={30}
              placeholder={'Business Description'}
              value={Description}
              color={'black'}
              placeholderColor={colors.lightGray}
              borderRadius={20}
              isBorderShow
              borderColor={colors.primary}
              keyboardType={'email-address'}
              onChangeText={value => this.setState({Description: value})}
              TextInputStyling={{height: 150, padding: 15, width: 350}}
            />
            <CustomTextInput
              width={'88%'}
              maxLength={30}
              placeholder={'Business Website'}
              value={web}
              placeholderColor={colors.lightGray}
              borderRadius={20}
              isBorderShow
              borderColor={colors.primary}
              keyboardType={'email-address'}
              onChangeText={value => this.setState({web: value})}
            />
            <CustomButton
              title="Save"
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
              onCancel={() => this.setState({isDatePickerVisible: false})}
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
      </AppBackground>
    );
  }
}

const actions = {loginUser};
export default connect(null, actions)(EditBusiness);
