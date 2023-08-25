import React, { Component } from 'react';
import { Dimensions, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AppBackground from '../../../components/AppBackground';
import { event, homeData } from '../../../utils/dummyData';
import { appIcons } from '../../../assets';
import Product from '../../../components/CustomList';
import CustomText from '../../../components/CustomText';
import CustomList from '../../../components/CustomList';
import CustomBackground from '../../../components/CustomBackground';

const { width } = Dimensions.get('screen');




export class Notification extends Component {
  render() {
    return (
      <AppBackground menu title={'Notification'} marginHorizontal={false} leftIcon={appIcons.back} newBack>
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: width * 0.265 + 10 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={event}
          renderItem={({ item }) => <CustomList item={item} notification />}
        />
      </AppBackground>
    )
  }
}

export default Notification



