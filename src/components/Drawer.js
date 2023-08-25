import React, { Component } from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import { connect } from 'react-redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors } from '../utils';
import NavService from '../helpers/NavService';
import { appIcons, appLogos } from '../assets';
import ProfileImage from '../components/ProfileImage';
import { logoutUser } from '../redux/actions/authAction';
import Img from './Img';
import styles from './style';
import appStyles from '../screens/appStyles';
import CustomText from './CustomText';
import Modal from 'react-native-modal';
import CustomButton from './CustomButton';
import ModalPopup from '../containers/Popup/modalPopup/ModalPopup';

const menuItems = [
  {
    icon: appIcons.homeSelected,
    title: 'Home',
    nav: 'Home',
  },
  {
    icon: appIcons.userProfile,
    title: 'Profile',
    nav: 'Profile',
  },
  {
    icon: appIcons.follow,
    title: 'Following',
    nav: 'Following',
  },
  {
    icon: appIcons.setting,
    title: 'Settings',
    nav: 'Settings',
  },
  {
    icon: appIcons.info,
    title: 'Help & Feedback ',
    nav: 'Feedback',
  },
  {
    icon: appIcons.logout,
    title: 'Logout',
    nav: 'BottomTabs', // You can replace this with your desired logout action
    isLogoutButton: true,
  },
];

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false, // State to control the visibility of the modal
      isVisible: false,
    };
  }

  render() {
    const { user } = this.props;
    const { showModal, isVisible } = this.state; // Get the modal visibility state

    const isGuest = user?.role === 'Guest';

    const handleSuccess = () => {
      this.setState({ isVisible: false });
      this.props.logoutUser();
    };
    const handleClosed = () => {
      this.setState({ isVisible: false });
    };
    const RenderItem = ({ item, index }) => {
      const { title, icon, nav, isLogoutButton } = item;
      const containerStyle = {
        // ... (existing container style)
        marginTop: isLogoutButton ? '20%' : '',
        // Add or modify styles for the logout button
        backgroundColor: isLogoutButton ? colors.profile : colors.drawer,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
      };
      const titleStyle = {
        // ... (existing title style)
        color: isLogoutButton ? colors.white : colors.black,
      };
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            if (isGuest && !isLogoutButton) {
              this.setState({ showModal: true }); // Show the modal for guests
            } else if (title === 'Logout') {
              NavService.closeDrawer();

              // this.props.logoutUser();
              this.setState({ isVisible: true });
            } else if (item?.browser) {
              Linking.openURL(item?.browser);
            } else {
              this.props.navigation.navigate(nav);
            }
            // if (title === 'Logout') {
            //   this.props.logoutUser();
            // } else if (item?.browser) {
            //   Linking.openURL(item?.browser);
            // } else {
            //   this.props.navigation.navigate(nav);
            // }
          }}
          style={{
            ...containerStyle,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            bottom: 10,
            borderBottomWidth: index == menuItems.length - 1 ? 0 : 0.5,
            borderColor: colors.white,
            marginLeft: isLogoutButton ? 0 : 20,
            paddingHorizontal: isLogoutButton ? 20 : 0,
          }}>
          <View
            style={{
              paddingVertical: 10,
              borderRadius: 7,
              marginBottom: 5,
            }}>
            <Image
              source={icon}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: colors.white,
              }}
            />
          </View>
          <CustomText style={styles.titlesss} text={title} />
        </TouchableOpacity>
      );
    };
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: colors.drawer,
          alignItems: 'center',
          paddingTop: getStatusBarHeight(),
          borderTopRightRadius: 60,
          borderBottomRightRadius: 60,
        }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onBackdropPress={() => this.setState({ showModal: false })}
          onRequestClose={() => this.setState({ showModal: false })}>
          <View
            style={{
              height: '200%',
              width: 395,
              right: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
              <TouchableOpacity onPress={() => this.setState({ showModal: false })} style={{ position: 'absolute', right: 8, top: 10 }}>
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

        <View
          style={{
            marginTop: 50,
            width: '100%',
            alignItems: 'center',
            paddingBottom: 40,
            paddingHorizontal: 20,
            position: 'relative',
          }}>
          {/* <TouchableOpacity
            style={{position: 'absolute', top: -20, right: 20, marginTop: 5}}
            onPress={() => NavService.navigate('EditProfile')}
            activeOpacity={0.9}>
            <Image style={{width: 35, height: 30}} source={appIcons.edit} />
          </TouchableOpacity> */}

          <ProfileImage
            borderWWidth={3}
            borderColor={colors.white}
            innerAsset
            imageUri={appIcons.userProfile}
            name={'test'}
            backgroundColor={colors.profile}
            style={styles.profileimage}
          />
          <View style={styles.userView}>
            <CustomText
              numberOfLines={1}
              style={styles.username}
              text={user?.name != null ? user.name : 'username'}
            />
            <CustomText
              numberOfLines={1}
              style={styles.username}
              text={user?.email != null ? user.email : 'username'}
            />
          </View>
        </View>

        <View style={{ flex: 1, marginTop: 10, width: '100%' }}>
          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            data={menuItems}
            style={{
              height: '100%',
              // paddingHorizontal: 20,
            }}
            renderItem={props => <RenderItem {...props} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        {/* Confirmation Modal*/}
        <ModalPopup
          confirmation
          isVisible={isVisible}
          desc="Are you sure you want to logout?"
          sucessText="Yes, Logout"
          unsuccessText="No"
          title={'Logout'}
          handleClose={handleClosed}
          onBackButtonPress={handleClosed}
          onBackdropPress={handleClosed}
          onYesPress={handleSuccess}
          onNoPress={handleClosed}
        />
      </View>
    );
  }
}

function mapStateToProps({ authReducer }) {
  return {
    user: authReducer?.user,
  };
}

const actions = { logoutUser };
export default connect(mapStateToProps, actions)(Drawer);
