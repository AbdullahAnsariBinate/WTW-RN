import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Map from '../../../containers/Map';
import AppBackground from '../../../components/AppBackground';
import {appIcons} from '../../../assets';
import {Marker} from 'react-native-maps';
import CustomButton from '../../../components/CustomButton';
import {colors} from '../../../utils';
import styles from './styles';
import Img from '../../../components/Img';
// import ModalPopup from '../../../containers/Popup/modalPopup/ModalPopup';
// import SocialSheet from '../../../containers/Popup/socialSheetPopup/SocialSheet';
import SocialSheet from '../../../containers/Popup/socialSheetPopup/SocialSheet';

import {states} from '../../../utils/dummyData';
import { shadow } from 'react-native-paper';
import Shadows from '../../../helpers/Shadows';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  render() {
    const {showModal} = this.state;
    const handleClose = () => {
      this.setState({showModal: false});
    };
    return (
      <AppBackground title={'Search'} rightIcon={appIcons.cross} leftIcon={appIcons.back} back>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.filterview}
          onPress={() => this.setState({showModal: true})}>
          <CustomButton
            title={'Search'}
            buttonStyle={styles.search}
            color={colors.lightGray}
            textStyle={styles.title}
          />
          <View style={{backgroundColor:'white',height:55,width:55,alignItems:'center',justifyContent:'center',borderRadius:30,...Shadows.shadow3,marginLeft:5}}>
            <Img local src={appIcons.filter} style={styles.filter} />
          </View>
        </TouchableOpacity>
        <SocialSheet
          value={'Search Filter'}
          isVisible={showModal}
          states={states}
          // handleSearchByValue={handleSearchByValue}
          handleClose={handleClose}
          onBackButtonPress={handleClose}
          onBackdropPress={handleClose}
          handleApply={() => this.setState({showModal: false})}
        />
      </AppBackground>
    );
  }
}
