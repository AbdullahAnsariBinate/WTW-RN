import React, {Component, createRef} from 'react';
import {Text, TouchableOpacity, View, Image, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import * as EmailValidator from 'email-validator';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Toast from 'react-native-toast-message';
import NavService from '../../../helpers/NavService';
import {schema} from '../../../utils/validation';
// import {colors} from '../../../utils';
import {appIcons, appImages, appLogos} from '../../../assets/index';
import {loginUser} from '../../../redux/actions/authAction';
import styles from './styles';
import CustomText from '../../../components/CustomText';
import {log} from 'react-native-reanimated';
import {colors, size, WP} from '../../../utils';

import {navigateToOTP} from '../../../helpers/NavService';
import PhoneInput from 'react-native-phone-number-input';
// import SocialSignin from '../../../components/SocialSignin';
import Logo from '../../../components/Logo';

class PhoneLogin extends Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: '',
      formattedValue: '',
    };
  }
  clearPhoneInputField = () => {
    this.setState({
      phoneNumber: '',
      formattedValue: '',
    });
  };

  onSubmit = async () => {
    const {phoneNumber, formattedValue} = this.state;
    const {role} = this.props?.route?.params;
    console.log(role, 'phonerole');

    if (!phoneNumber) {
      Toast.show({
        text1: 'Please enter phone number',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (formattedValue?.length < 11 || formattedValue?.length > 16) {
      Toast.show({
        text1: 'Invalid phone number',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (formattedValue.includes('.') || formattedValue.includes(',')) {
      Toast.show({
        text1: 'Invalid phone number',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      Keyboard.dismiss();
      NavService.navigate('Otp', {role: role});
    }
  };

  render() {
    const {phoneNumber, formattedValue} = this.state;
    return (
      <CustomBackground
        background={appImages.backgroundImage}
        showLogo={false}
        titleText={'Phone Login'}
        onBack={() => this.props.navigation.goBack()}>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Logo size={200} />
          </View>

          <View style={styles.main}>
            <PhoneInput
              ref={this.phoneInput}
              codeTextStyle={{color: colors.gray}}
              textInputProps={{maxLength: 11, color: 'black'}}
              defaultValue={phoneNumber}
              defaultCode="US"
              disableArrowIcon={false}
              layout="first"
              containerStyle={styles.phoneContainer}
              textContainerStyle={styles.textContainerPhone}
              textInputStyle={{padding: 0, fontSize: size.small}}
              textStyle={{fontSize: 10}}
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
            <CustomButton
              onPress={this.onSubmit}
              title="Next"
              buttonStyle={[styles.pressAble]}
              textStyle={{fontSize: size.small, color: colors.black}}
            />
          </View>
        </View>
      </CustomBackground>
    );
  }
}
const actions = {loginUser};
export default connect(null, actions)(PhoneLogin);
