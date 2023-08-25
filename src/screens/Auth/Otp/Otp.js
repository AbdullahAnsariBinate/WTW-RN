import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, Image, Keyboard} from 'react-native';
import Toast from 'react-native-toast-message';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import NavService from '../../../helpers/NavService';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {appImages, appLogos} from '../../../assets/index';
import styles from './styles';
import {colors, size} from '../../../utils';
import Logo from '../../../components/Logo';
import CustomText from '../../../components/CustomText';

const Otp = ({navigation, route}) => {
  const {screenName} = route.params;
  let timer;
  const [code, setCode] = useState();
  const [isFocused, setIsFocused] = useState(false);
  const [timerCode, setTimerCode] = useState(30);
  const [resend, setResend] = useState(false);
  const [key, setKey] = useState(0);
  const [resendOtpActive, setResendOtpActive] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const onSubmit = () => {
    const {role} = route?.params;
    console.log(role, 'ueeeeoooooo');
    if (code?.length == 6 && code == 123456) {
      if (screenName == 'signup') {
        navigation.navigate('CompleteProfile', {role: role});
      } else {
        navigation.navigate('CompleteProfile', {role: role});
      }
    } else {
      Toast.show({
        text1: 'OTP code is required',
        type: 'error',
        visibilityTime: 3000,
      });
    }
  };
  const startInterval = () => {
    clearInterval(timer);
    timer = setInterval(() => {
      setTimerCode(timerCode => {
        if (timerCode > 0) {
          return timerCode - 1;
        } else {
          setResend(true);
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);
  };
  const handleReset = () => {
    if (resend) {
      Keyboard.dismiss();
      setTimerCode(59);
      setResend(false);
      setCode('');
      setKey(prevKey => prevKey + 1); // Update the key value to trigger re-render
      startInterval();
    } else {
      Toast.show({
        text1: 'Please wait untill timer finishes!',
        type: 'error',
        visibilityTime: 3000,
      });
    }
  };

  useEffect(() => {
    startInterval();
    return () => {
      clearInterval(timer);
    };
  }, []);

  const onCompleteTimer = () => {
    setResendOtpActive(true);
  };
  return (
    <CustomBackground
      background={appImages.backgroundImage}
      showLogo={false}
      titleText={'Verification'}
      onBack={() => navigation.goBack()}>
      <View style={styles.container}>
        <View style={[styles.container, {marginTop: 20}]}>
          <View style={styles.logoStyle}>
            <Logo style={styles.applogo} source={appLogos.appLogo} />
          </View>
          <View>
            <CustomText
              style={styles.title}
              text="Please Verify Your Account"
            />
            <Text style={styles.subtitle1}>
              We Send you a six-digit verification code
            </Text>
          </View>
          <Text style={styles.subtitle2}>to verify your account</Text>
          <OTPInputView
            onFocus={handleFocus}
            onBlur={handleBlur}
            keyboardType="numeric"
            style={styles.otpInput}
            pinCount={6}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeChanged={c => {
              const cleanNumber = c.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '');
              setCode(cleanNumber);
            }}
            onCodeFilled={c => {
              const cleanNumber = c.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '');
              setCode(cleanNumber);
            }}
            code={code}
          />

          <View style={styles.clock}>
            <CountdownCircleTimer
              isPlaying
              rotation={'counterclockwise'}
              key={key}
              duration={30}
              colors={['#2C67FF', '#FD79A8']}
              colorsTime={[6, 4]}
              size={100}
              onComplete={onCompleteTimer}>
              {({remainingTime}) => {
                const minutes = Math.floor((remainingTime % 3600) / 60);
                const seconds = remainingTime % 60;
                return (
                  <CustomText
                    text={`00:${timerCode < 10 ? '0' + timerCode : timerCode}`}
                    style={styles.time}
                  />
                  // <Text style={styles.timerText}>{`00:${
                  //   timerCode < 10 ? '0' + timerCode : timerCode
                  // }`}</Text>
                );
              }}
            </CountdownCircleTimer>
          </View>
          <CustomButton
            title="Submit"
            onPress={onSubmit}
            buttonStyle={[styles.pressAble]}
            textStyle={{fontSize: size.small, color: colors.black}}
          />
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.textNormal}> Didn't Receive Code? </Text>
          <TouchableOpacity onPress={() => handleReset()}>
            <Text style={styles.textNormalWithColor}>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomBackground>
  );
};

export default Otp;
