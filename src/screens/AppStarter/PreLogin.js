import {
  Dimensions,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import Toast from 'react-native-toast-message';
// import {Colors} from '../../../config';
import {colors} from '../../utils';
import CustomBackground from '../../components/CustomBackground';
// import SocialSignin from '../../../components/SocialSignin';
// import Icons from '../../../assets/Icons';
import {appIcons, appImages, appLogos} from '../../assets/index';
import Logo from '../../components/Logo';
import styles from './styles';
import {setUserType} from '../../redux/actions/authAction';
import appStyles from '../appStyles';
const {width} = Dimensions.get('window');

class App extends Component {
  state = {
    agreementModal: false,
    terms: false,
    policy: false,
    navigator: '',
  };

  render() {
    const {agreementModal, terms, policy, navigator} = this.state;
    const methods = [
      {
        name: 'User',
        icon: appIcons.email,
        onPress: () => {
          navigation.navigate('AuthStarter', {role: 'User'});
        },
        color: colors.white,
      },
      {
        name: 'Business',
        icon: appIcons.bussiness,
        onPress: () => {
          navigation.navigate('AuthStarter', {role: 'Business'});
        },
        color: colors.white,
      },
    ];
    const {navigation} = this.props;
    return (
      <CustomBackground
        background={appImages.backgroundImage}
        back={false}
        isHeader={true}
        showLogo={false}
        titleText={'Role Selection'}>
        <View style={[styles.container, {padding: 20}]}>
          <View style={styles.space}>
            <Logo size={180} />
          </View>
          <View style={styles.space}>
            {methods.map((method, i) => {
              const {color, name, icon, onPress} = method;
              if (Platform.OS !== 'ios' && name === 'Apple') return null;
              return (
                <TouchableOpacity
                  onPress={onPress}
                  key={i}
                  activeOpacity={0.8}
                  style={[styles.buttonContainer, {backgroundColor: color}]}>
                  <Image source={icon} style={styles.buttonInnerImage} />

                  <Text
                    style={[
                      styles.buttonInnerText,
                      {...appStyles.family_Montserrat_Medium},
                    ]}>
                    Sign-in as {name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </CustomBackground>
    );
  }
}

export default App;
