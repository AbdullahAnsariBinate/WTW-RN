import React, { Component } from 'react';
import {
  Linking,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import ToggleSwitch from 'toggle-switch-react-native';
import { colors } from '../../../utils';
import styles from './styles';
import { appIcons } from '../../../assets';
import { connect } from 'react-redux';
import { PushNotification, geoLocation } from '../../../redux/actions/appAction';
import CustomText from '../../../components/CustomText';
import Img from '../../../components/Img';
import Map from '../../../containers/Map';

class Settings extends Component {
  constructor(props) {
    super(props);
    const { user } = this?.props;
    this.state = {
      index: 0,
      set: '',
      geo: '',
      isNotification: '',
      isGeoLocation: ''
    };
  }


  render() {
    const methods = [
      {
        name: 'Terms & Conditions',
        icon: appIcons.terms,
        onPress: () => Linking.openURL('https://google.com'),
        color: colors.primary,
      },
      {
        name: 'Privacy Policy',
        icon: appIcons.privacy,
        color: colors.primary,
        onPress: () => Linking.openURL('https://google.com'),
      },
      {
        name: 'About App',
        icon: appIcons.about,
        color: colors.primary,
        onPress: () => navigation.navigate('AboutApp'),
      },
    ];
    const { navigation } = this.props;

    const { isGeoLocation, isNotification } = this.state;

    return (
      <AppBackground newBack leftIcon={appIcons.back} title={'Settings'} marginHorizontal={false} menu>
        <View>
          <View style={styles.viewStyle1}>
            <CustomText text="Push Notification" style={styles.textStyle1} />
            <Switch
              style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
              trackColor={{ false: 'white', true: 'white' }}
              thumbColor={isNotification ? colors.primary : "#497dff"}
              ios_backgroundColor={isNotification ? colors.red : colors.white}
              value={isNotification}
              onValueChange={(newValue) =>
                this.setState({ isNotification: newValue })
              }
            />
          </View>

          <View style={styles.viewStyle2}>
            <View style={styles.space}>
              {methods.map((method, i) => {
                const { color, name, icon, onPress } = method;
                return (
                  <TouchableOpacity
                    onPress={onPress}
                    key={i}
                    activeOpacity={0.8}
                    style={[styles.buttonContainer, { backgroundColor: color }]}>
                    <Img tintColor={colors.white} local src={icon} style={styles.buttonInnerImage} />
                    <CustomText text={name} style={styles.buttonInnerText} />

                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </AppBackground>
    );
  }
}
function mapStateToProps({ authReducer }) {
  return {
    user: authReducer?.user,
  };
}
const actions = { PushNotification, geoLocation };
export default connect(mapStateToProps, actions)(Settings);
