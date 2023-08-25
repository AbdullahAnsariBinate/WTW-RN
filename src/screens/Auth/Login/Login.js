import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {connect} from 'react-redux';
import * as EmailValidator from 'email-validator';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Toast from 'react-native-toast-message';
import NavService from '../../../helpers/NavService';
import {schema} from '../../../utils/validation';
import {colors} from '../../../utils';
import {appIcons, appImages, appLogos} from '../../../assets/index';
import {loginUser, setUserType} from '../../../redux/actions/authAction';

import styles from './styles';
import OutlineInput from '../../../components/OutlineInput';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onSubmit = () => {
    const {email, password} = this.state;
    const {role} = this.props?.route?.params;
    console.log(role, 'roleroleroleaaaa');
    // setting user type here
    this.props.setUserType();

    if (!email && !password) {
      Toast.show({
        text1: 'Please enter all fields',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!email) {
      Toast.show({
        text1: 'Please enter email address',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!EmailValidator.validate(email)) {
      Toast.show({
        text1: 'Please enter a valid email address',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      let payload = {
        role: role,
        email: email,
        password: '123456',
      };
      console.log(role, 'rolerrrrrsssssss');
      this.props.loginUser(payload);
      Toast.show({
        text1:
          role == 'User'
            ? ' User Login successful'
            : 'Business Profile Login Successfully',
        type: 'success',
        visibilityTime: 3000,
      });
    }
  };

  render() {
    const {email, password} = this.state;

    return (
      <CustomBackground
        isHeader
        showLogo={false}
        background={appImages.backgroundImage}
        titleText={'Login'}
        onBack={() => this.props.navigation.goBack()}>
        <View style={styles.container}>
          <View style={[styles.container, {marginTop: 20}]}>
            <View style={styles.logoStyle}>
              <Image style={styles.applogo} source={appLogos.appLogo} />
            </View>
            <CustomTextInput
              leftIcon={appIcons.email}
              placeholder={'Email'}
              value={email}
              keyboardType={'email-address'}
              onChangeText={value => this.setState({email: value})}
            />
            {/* <OutlineInput
              label="Email"
              placeholder={'Email'}
              leftIcon={appIcons.email}
              // value={values?.email}
              // onChangeText={handleChange('email')}
              // error={errors?.email}
              keyboardType={'email-address'}
              
              maxLength={35}
              
            /> */}

            <CustomButton
              title="Login"
              onPress={this.onSubmit}
              buttonStyle={styles.press}
              textStyle={styles.btnstext}
            />
          </View>

          {/* <View style={styles.bottomView}>
            <Text style={styles.textNormal}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={styles.textNormalWithColor}>Signup</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </CustomBackground>
    );
  }
}

const mapStateToProps = state => ({
  userType: state, // depending on the structure of your Redux state
});

const actions = {loginUser, setUserType};

export default connect(mapStateToProps, actions)(Login);
