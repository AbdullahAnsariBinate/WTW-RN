import { Text, StyleSheet, View, FlatList, ScrollView } from 'react-native';
import React, { Component } from 'react';
import AppBackground from '../../../components/AppBackground';
import { appIcons } from '../../../assets';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import appStyles from '../../appStyles';
import styles from './styles';
import moment from 'moment';
import { business, event, homeData, preEvents } from '../../../utils/dummyData';
import CustomCard from '../../../components/CustomCard';
import NavService from '../../../helpers/NavService';
import CustomList from '../../../components/CustomList';
import ModalPopup from '../../../containers/Popup/modalPopup/ModalPopup';

class MyEvents extends Component {
  constructor(props) {
    super(props);
    const currentDate = new Date().toISOString().split('T')[0];
    this.state = {
      selected: currentDate,
      showModal: false
    };
  }
  handleDayPress = day => {
    this.setState({
      selected: day.dateString,
    });
  };

  render() {
    const { showModal } = this.state
    const ItemSeparatorComponent = () => {
      return <View style={styles.lineSeparator} />;
    };
    const { selected } = this.state;
    const formattedSelectedDate = moment(selected).format('MMMM D  YYYY');
    const handleClosed = () => {
      this.setState({ showModal: false })
    }
    const handleModal = () => {
      this.setState({ showModal: true })
      setTimeout(() => {
        this.setState({ showModal: false })
      }, 2500);
    }
    const renderItem = ({ item }) => {
      return <CustomCard item={item} button event handlePress={handleModal} />;
    };
    const eventCount = event.length; // Count the number of items in the event array

    return (
      <AppBackground
        menu
        title={'My Events'}
        notification
        rightIcon={appIcons.userNotification}
        marginHorizontal={false}
        leftIcon={appIcons.drawer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Calendar
            minDate={new Date()}
            onDayPress={this.handleDayPress}
            markedDates={{
              [selected]: {
                selected: true, // Change this to true to show selected date
                disableTouchEvent: true,
                selectedDotColor: 'orange',
              },
            }}
          />
          <View style={styles.separator}></View>
          <View style={styles.selectedDateContainer}>
            <Text style={styles.selectedDateText}> 0{eventCount} Events </Text>

            <Text style={styles.selectedDateText}>{formattedSelectedDate}</Text>
          </View>

          <View>
            <FlatList
              contentContainerStyle={[{ flexGrow: 1, paddingBottom: 70 }]}
              // showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={ItemSeparatorComponent}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={false}
              data={event}
              renderItem={renderItem}
            />
            <ModalPopup
              sucess
              isVisible={showModal}
              title={"You've Successfully Interested"}
              // handleClose={handleClosed}
              onBackButtonPress={handleClosed}
              onBackdropPress={handleClosed}
            />

          </View>
        </ScrollView>
      </AppBackground>
    );
  }
}
export default MyEvents;
