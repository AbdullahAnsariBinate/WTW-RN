import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import Map from '../../../containers/Map';
import AppBackground from '../../../components/AppBackground';
import {appIcons} from '../../../assets';
import {Marker} from 'react-native-maps';
import CustomButton from '../../../components/CustomButton';
import { colors } from '../../../utils';
import styles from './styles';
import Img from '../../../components/Img';
import ModalPopup from '../../../containers/Popup/modalPopup/ModalPopup';
import NavService from '../../../helpers/NavService';

export default class Home extends Component {
  handleMarkerPress = (latitude, longitude) => {
    console.log(
      'Marker presdddddtude:',
      latitude,
      'Longitude:',
      longitude,
    );
  };
  render() {
    return (
      <AppBackground
        title={'Home'}
        menu
        leftIcon={appIcons.drawer}
        rightIcon={appIcons.userNotification}
        notification>
          <View style={styles.searchContainer}>
          <CustomButton
            title={'Search'}
            buttonStyle={styles.search}
            color={colors.lightGray}
            textStyle={styles.title}
            onPress={()=> NavService.navigate('Search')}
          />
        
        </View>
        <Map mark onMarkerPress={this.handleMarkerPress} />
        <ModalPopup 
         businessProfile
          isVisible={false}
          // handleClose={handleClose}
          // togglePopup={togglePopup}
          // data={profileData}
          // listData={modalLikeList}
          // onBackButtonPress={handleClose}
          // onBackdropPress={handleClose}
          // socialIcons={socialIcons} 
        />
      </AppBackground>
    );
  }
}

