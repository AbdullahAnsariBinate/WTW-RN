import {Text, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import Map from '../../../../containers/Map';
import styles from './styles';
import CustomText from '../../../../components/CustomText';
import {event} from '../../../../utils/dummyData';
import Img from '../../../../components/Img';
import {appIcons, appImages} from '../../../../assets';
import appStyles from '../../../appStyles';
import {colors} from '../../../../utils';

class EventLocation extends Component {
  handleMarkerPress = (latitude, longitude) => {
    console.log('Marker presdddddtude:', latitude, 'Longitude:', longitude);
  };
  render() {
    return (
      <AppBackground title={'Event Location'} back EditBus rightIcon={appIcons.fileedit}>
        <View style={styles.MainContainer}>
          <Map mark onMarkerPress={this.handleMarkerPress} />
          <View style={styles.innerView}>
            <Img local src={appImages.pizza} style={styles.appimage} />
            <View style={{width: '75%'}}>
              <CustomText text={event[0].heading} style={styles.textHeader} />
              <View
                style={[
                  appStyles.directionRow,
                  appStyles.justifyCenter,
                  appStyles.alignCenter,
                  {justifyContent: 'flex-start'},
                ]}>
                <Img local src={appIcons.rating} style={styles.rating} />
                <CustomText text={event[0].rate} style={styles.rateno} />
              </View>
              <CustomText text={'Open: 9:00AM'} style={styles.time} />

              <View
                style={[
                  appStyles.directionRow,
                  {justifyContent: 'space-between'},
                ]}>
                <CustomText text={'Resturant'} style={styles.Resturant} />
                <CustomText text={'|'} style={styles.Resturant} />
                <CustomText text={'4.6 Miles'} style={styles.Resturant} />
                <View>
                  <CustomText text={'Closed: 10:00AM'} style={styles.time} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </AppBackground>
    );
  }
}
export default EventLocation;
