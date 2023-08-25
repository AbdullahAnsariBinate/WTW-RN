import React, {Component} from 'react';
import {
  Linking,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
  Dimensions,
} from 'react-native';
import AppBackground from '../../../../components/AppBackground';
import ToggleSwitch from 'toggle-switch-react-native';
import {colors} from '../../../../utils';
import styles from './styles';
import {appIcons} from '../../../../assets';
import {connect} from 'react-redux';
import {
  PushNotification,
  geoLocation,
} from '../../../../redux/actions/appAction';
import CustomText from '../../../../components/CustomText';
import Img from '../../../../components/Img';
import Map from '../../../../containers/Map';
import NavService from '../../../../helpers/NavService';
import {
  data,
  event,
  modalLikeList,
  profileData,
} from '../../../../utils/dummyData';
import appStyles from '../../../appStyles';
import style from '../../../Auth/AuthStarter/style';
const {height} = Dimensions.get('screen');
class BusinessSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      set: '',
      geo: '',
      isNotification: '',
      isGeoLocation: '',
    };
  }

  render() {
    const {user} = this?.props;
    console.log(user, 'useruseruser');

    const methods = [
      {
        name: 'My Subscription',
        icon: appIcons.subscription,
        color: colors.primary,
        onPress: () => NavService.navigate('PackageDetail'),
      },
      {
        name: 'Card Details',
        icon: appIcons.card,
        color: colors.primary,
        onPress: () => NavService.navigate('PaymentCard'),
      },
      {
        name: 'Terms & Conditions',
        icon: appIcons.terms,
        onPress: () => Linking.openURL('https://google.com'),
        color: colors.primary,
      },
      {
        name: 'Privacy Policy',
        icon: appIcons.privacy,
        onPress: () => Linking.openURL('https://google.com'),
        color: colors.primary,
      },
      {
        name: 'About App',
        icon: appIcons.about,
        color: colors.primary,
        onPress: () => NavService.navigate('AboutApp'),
      },

      {
        name: 'Help & Feedback',
        icon: appIcons.about,
        color: colors.primary,
        onPress: () => NavService.navigate('Feedvback'),
      },
      // {
      //   name: 'Card Details',
      //   icon: appIcons.card,
      //   color: colors.primary,
      //   onPress: () => NavService.navigate('PaymentCard'),
      // },
    ];
    const {navigation} = this.props;

    const {isGeoLocation, isNotification} = this.state;

    return (
      <AppBackground
        title={'Settings'}
        marginHorizontal={false}
        menu
        notification
        rightIcon={appIcons.userNotification}
        leftIcon={appIcons.drawer}>
        <ScrollView
        showsVerticalScrollIndicator={false}
          style={{
            // marginBottom: 10,
          }}
          contentContainerStyle={{
            // gap: 5,
            height: height * 0.88,
          }}>
          <View>
            <TouchableOpacity onPress={() => NavService.navigate('Profile')}>
              <View style={styles.profileview}>
                <Img
                  local
                  src={profileData[0].image}
                  style={styles.profileImg}
                />
                <View style={styles.imageView}>
                  <CustomText text={profileData[0].name} style={styles.name} />
                  <CustomText
                    text={modalLikeList[0].state}
                    style={styles.state}
                  />
                  <CustomText text={user.email} style={styles.state} />
                  <CustomText text={event[0].phone} style={styles.state} />
                </View>
                <Img local src={appIcons.forward} style={styles.forwardimg} />
              </View>
            </TouchableOpacity>

            <View style={styles.viewStyle1}>
              <CustomText text="Push Notification" style={styles.textStyle1} />

              <Switch
                style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
                trackColor={{false: 'white', true: 'white'}}
                thumbColor={isNotification ? colors.primary : '#497dff'}
                ios_backgroundColor={isNotification ? colors.red : colors.white}
                value={isNotification}
                onValueChange={newValue =>
                  this.setState({isNotification: newValue})
                }
              />
            </View>

            <View style={styles.viewStyle2}>
              <View style={styles.space}>
                {methods.map((method, i) => {
                  const {color, name, icon, onPress} = method;
                  return (
                    <TouchableOpacity
                      onPress={onPress}
                      key={i}
                      activeOpacity={0.8}
                      style={[
                        styles.buttonContainer,
                        {backgroundColor: color},
                      ]}>
                      <Img
                        tintColor={colors.white}
                        local
                        src={icon}
                        style={styles.buttonInnerImage}
                      />
                      <CustomText text={name} style={styles.buttonInnerText} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
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
const actions = {PushNotification, geoLocation};
export default connect(mapStateToProps, actions)(BusinessSettings);
