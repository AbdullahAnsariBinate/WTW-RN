import {
  Dimensions,
  Image,
  Linking,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import Toast from 'react-native-toast-message';
import CustomBackground from '../../../components/CustomBackground';
import {appIcons, appImages, appLogos} from '../../../assets/index';
import Logo from '../../../components/Logo';
import {colors} from '../../../utils';
import styles from './style';
import {connect} from 'react-redux';

import CustomButton from '../../../components/CustomButton';
import {loginUser, setUserType} from '../../../redux/actions/authAction';

const {width} = Dimensions.get('window');
class AuthStarter extends Component {
  state = {
    agreementModal: false,
    terms: false,
    policy: false,
    navigator: '',
  };
  onSubmit = type => {
    const {role} = this.props?.route?.params;
    console.log(type, 'guessst');
    // setting user type here
    // this.props.setUserType();

    let payload = {
      role: type ? type : role,
      
      
      email: 'abc@gmail.com',
      password: '123456',
    };
    console.log(payload, 'asdfdgf');
    this.props.loginUser(payload);
    Toast.show({
      text1: 'Guest Login successful',
      type: 'success',
      visibilityTime: 3000,
    });
  };

  render() {
    const {agreementModal, terms, policy, navigator} = this.state;
    const {role} = this.props?.route?.params;
    console.log('rolerolerolessss');

    const methods = [
      {
        name: 'Email Address',
        icon: appIcons.email,
        iconColor: '#2C67FF',
        textcolor: colors.black,
        onPress: () => navigation.navigate('Login', {role: role}),
        color: colors.white,
      },
      {
        name: 'Phone Number',
        icon: appIcons.phone,
        iconColor: '#2C67FF',
        textcolor: colors.black,

        onPress: () => navigation.navigate('PhoneLogin', {role: role}),
        color: colors.white,
      },
      {
        name: 'Apple',
        icon: appIcons.apple,
        iconColor: colors.white,
        textcolor: colors.white,
        color: colors.black,
        onPress: () =>
          Toast.show({
            text1: 'Apple login for app is not setup',
            type: 'error',
            visibilityTime: 3000,
          }),
        // onPress: SocialSignin.Apple,
      },
      {
        name: 'Google',
        icon: appIcons.googlePlus,
        iconColor: colors.white,
        color: colors.google,
        textcolor: colors.white,

        onPress: () =>
          Toast.show({
            text1: 'Google login for app is not setup',
            type: 'error',
            visibilityTime: 3000,
          }),
        // onPress: SocialSignin.Google(role),,
      },
    ];
    const {navigation} = this.props;

    return (
      <CustomBackground
        back
        onBack={() => this.props.navigation.goBack()}
        background={appImages.backgroundImage}
        showLogo={false}
        isHeader={true}
        titleText={'Pre-Login'}>
        <View style={[styles.container]}>
          <View>
            <Logo size={170} />
          </View>
          <View style={styles.space}>
            {methods.map((method, i) => {
              const {color, name, icon, onPress, iconColor, textcolor} = method;
              if (Platform.OS !== 'ios' && name === 'Apple') return null;

              return (
                <TouchableOpacity
                  onPress={onPress}
                  key={i}
                  activeOpacity={0.8}
                  style={[styles.buttonContainer, {backgroundColor: color}]}>
                  <Image
                    source={icon}
                    style={[styles.buttonInnerImage, {tintColor: iconColor}]}
                  />

                  <Text style={[styles.buttonInnerText, {color: textcolor}]}>
                    Sign-in with {name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          {role == 'User' ? (
            <View style={{paddingBottom:35}}>
              <CustomButton
                leftIconMap={appIcons.guest}
                tintColor={colors.gray}
                title="Sign-in with Guest"
                onPress={() => {
                  this.onSubmit('Guest');
                }}
                customIconStyle={{
                  position: 'absolute',
                  left: 40,
                  height: 28,
                  width: 28,
                }}
                buttonStyle={styles.press}
                textStyle={styles.btnstext}
              />
            </View>
          ) : (
            ''
          )}

          <View style={styles.bottomView}>
            <Text style={styles.siogn}>By sign-in, you agree to our </Text>
            <View style={styles.terms}>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://google.com/')}>
                <Text style={styles.condition}>Terms & Conditions </Text>
              </TouchableOpacity>
              <Text style={styles.and}>and</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://google.com/')}>
                <Text style={styles.privacy}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </CustomBackground>
    );
  }
}

const mapStateToProps = state => ({
  userType: state, // depending on the structure of your Redux state
});

const actions = {loginUser, setUserType};

export default connect(mapStateToProps, actions)(AuthStarter);
