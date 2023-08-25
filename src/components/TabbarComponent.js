import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  Alert,
} from 'react-native';
import Modal from 'react-native-modal';
import NavService from '../helpers/NavService';
import CustomButton from './CustomButton';
import Shadows from '../helpers/Shadows';
import { colors, size } from '../utils';
import { loginUser, setUserType } from '../redux/actions/authAction';
import SocialSheet from '../containers/Popup/socialSheetPopup/SocialSheet';
import { modalLikeList, profileData } from '../utils/dummyData';
import { appIcons, appImages } from '../assets';
import { connect } from 'react-redux';
import Img from './Img';
import CustomText from './CustomText';

const { width } = Dimensions.get('screen');
class TabBar extends React.Component {
  state = {
    isVisible: false,
    alertBar: false
  };
  render() {
    const { user, } = this.props;
    const isGuest = user?.role === 'Guest';

    console.log(user.role, 'user.roleuser.role');
    const { isVisible, alertBar } = this.state;
    const { state, navigation } = this.props;
    const togglePopUp = () => {
      this.setState({ isVisible: true });
    };
    const navigateFromPopUp = nav => {
      togglePopUp();
      NavService.navigate(nav);
    };
    const handleClose = () => {
      this.setState({ isVisible: false });
    };
    const handleguest = () => {
      this.setState({ alertBar: true })
    }
    return (
      <ImageBackground
        source={appImages}
        style={{
          width: width,
          height: width * 0.265,
          position: 'absolute',
          bottom: 0,
          justifyContent: 'flex-end',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          elevation: 5,
        }}
        imageStyle={{
          width: width,
          height: width * 0.265,
        }}>

        <SocialSheet
          value={'Create'}
          btnFirst={'Create Post'}
          btnSecond={'Create Event'}
          handleCreate={() => NavService.navigate('CreatePost')}
          handleEvent={() => NavService.navigate('CreateEvent')}
          isVisible={isVisible}
          handleClose={handleClose}
          // togglePopup={togglePopup}
          data={profileData}
          listData={modalLikeList}
          onBackButtonPress={handleClose}
          onBackdropPress={handleClose}
        />
        <View
          style={{
            flexDirection: 'row',
            overflow: 'hidden',
            justifyContent: 'space-around',
            backgroundColor: colors.white,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}>
          {user.role == 'User'
            ? state.routes.map((route, index) => {
              const isFocused = state.index === index;
              const onPress = () => {
                if (route.name === 'Home')
                  navigation.navigate('BottomTabs', { screen: 'Home' });
                if (route.name === 'Favorite')
                  navigation.navigate('BottomTabs', { screen: 'Favorite' });
                if (route.name === 'CategoryStack')
                  navigation.navigate('CategoryStack', { screen: 'Category' });
                if (route.name === 'Notifications')
                  navigation.navigate('BottomTabs', {
                    screen: 'Notifications',
                  });
                if (route.name === 'Events')
                  navigation.navigate('BottomTabs', {
                    screen: 'Events',
                  });
                if (route.name === 'MyEvents')
                  navigation.navigate('BottomTabs', {
                    screen: 'MyEvents',
                  });
              };
              // MyEvents

              let imageSrc = appIcons.homeUnSelected;
              if (route.name === 'Favorite') imageSrc = appIcons.userHeart;
              if (route.name === 'MyEvents') imageSrc = appIcons.event;
              if (route.name === 'Notifications')
                imageSrc = appIcons.userNotification;
              if (route.name === 'Events') imageSrc = appIcons.userEvent;

              if (route.name === 'tabBar4') {
                return <View key={index + 1} style={styles.tabs} />;
              }
              return (
                <TouchableOpacity
                  key={index + 1}
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityRole="button"
                  activeOpacity={0.8}
                  onPress={onPress}
                  style={styles.tabs}>
                  <Image
                    source={imageSrc}
                    style={{
                      height: 30,
                      width: 30,
                      tintColor: isFocused ? colors.primary : colors.gray,
                    }}
                    resizeMode="contain"
                  />
                  <Text
                    style={[
                      styles.bottomtext,
                      { color: isFocused ? colors.primary : colors.gray },
                    ]}>
                    {route?.name}
                  </Text>
                </TouchableOpacity>
              );
            })
            : state.routes.map((route, index) => {
              console.log(route, 'routerouteroute');
              const isFocused = state.index === index;
              const onPress = () => {
                if (route.name === 'Home')
                  navigation.navigate('BottomTabs', { screen: 'Home' });
                if (route.name === 'BusinessProfile')
                  navigation.navigate('BottomTabs', {
                    screen: 'BusinessProfile',
                  });
                if (route.name === 'BusinessSettings')
                  navigation.navigate('BottomTabs', {
                    screen: 'BusinessSettings',
                  });

                if (route.name === 'BusinessEvents')
                  navigation.navigate('BottomTabs', {
                    screen: 'BusinessEvents',
                  });
              };
              // MyEvents

              let imageSrc = appIcons.home;
              if (route.name === 'BusinessSettings')
                imageSrc = appIcons.setting;
              if (route.name === 'BusinessEvents') imageSrc = appIcons.event;
              if (route.name === 'BusinessProfile')
                imageSrc = appIcons.userProfile;
              if (route.name === 'Events') imageSrc = appIcons.userEvent;

              if (route.name === 'tabBar4') {
                return <View key={index + 1} style={styles.tabs} />;
              }
              return (
                <TouchableOpacity
                  key={index + 1}
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityRole="button"
                  activeOpacity={0.8}
                  onPress={user.role == 'Guest' ? handleguest : onPress}
                  style={styles.tabs}>
                  <Image
                    source={imageSrc}
                    style={{
                      height: 22,
                      width: 22,
                      margin: 5,
                      tintColor: isFocused ? colors.primary : colors.gray,
                    }}
                    resizeMode="contain"
                  />
                  <Text
                    style={[
                      styles.bottomtext,
                      { color: isFocused ? colors.primary : colors.gray },
                    ]}>
                    {route?.name}
                  </Text>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={alertBar}
                    onBackdropPress={() => this.setState({ alertBar: false })}
                    onRequestClose={() => this.setState({ alertBar: false })}>
                    <View
                      style={{
                        height: '200%',
                        width: 395,
                        right: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.10)',
                      }}>

                      <View
                        style={{
                          backgroundColor: 'white',
                          width: 350,
                          padding: 10,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 10,
                        }}>
                        <TouchableOpacity onPress={() => this.setState({ alertBar: false })} style={{ position: 'absolute', right: 8, top: 10 }}>
                          <Img src={appIcons.cross} tintColor={colors.primary} local style={{ height: 22, width: 22 }} />
                        </TouchableOpacity>
                        <Img src={appIcons.warning} local style={{ height: 100, width: 100 }} />
                        <CustomText style={{ fontSize: 18, marginBottom: 10 }}
                          text='Youre not allowed to press this. Please log in.'
                        />
                        <CustomButton
                          title="Login"
                          onPress={() => this.props.logoutUser()}
                          buttonStyle={styles.press}
                          textStyle={styles.btnstext}
                        />
                      </View>
                    </View>
                  </Modal>
                </TouchableOpacity>
              );
            })}
        </View>

        {user?.role == 'Business' && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={togglePopUp}
            style={{
              position: 'absolute',
              width: 70,
              height: 70,
              borderRadius: 40,
              backgroundColor: colors.primary,
              alignSelf: 'center',
              bottom: 45,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: colors.primary,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.32,
              shadowRadius: 5.46,

              elevation: 9,
            }}>
            <Image
              source={appIcons.plus}
              style={{
                height: 25,
                width: 25,
                tintColor: colors.white,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </ImageBackground>
    );
  }
}
function mapStateToProps({ authReducer }) {
  return {
    user: authReducer?.user,
  };
}

const actions = { loginUser };
export default connect(mapStateToProps, actions)(TabBar);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 0.14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: width * 0.4,
    borderRadius: 10,
  },
  buttonPerfectionNext: {
    backgroundColor: colors.secondary,
    marginLeft: 15,
  },
  tabs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 5,
    height: 65,
  },
  bottomtext: {
    fontSize: size.tiny,
    color: colors.gray,
  },
});
