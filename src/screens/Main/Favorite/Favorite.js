import React, { useCallback, Component } from 'react';
import { Dimensions, FlatList } from 'react-native';
import AppBackground from '../../../components/AppBackground';
import { event, homeData } from '../../../utils/dummyData';
import { appIcons } from '../../../assets';
import CustomList from '../../../components/CustomList';
import NavService from '../../../helpers/NavService';

const { width } = Dimensions.get('screen');



export class Favorite extends Component {
  render() {
    return (
      <AppBackground menu title={'My Favorite'} notification marginHorizontal={false} rightIcon={appIcons.userNotification} leftIcon={appIcons.drawer}>
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: width * 0.265 + 10, paddingHorizontal:2 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={event}
          renderItem={({ item }) => <CustomList item={item} product isRating onPress={() => NavService.navigate('BusinessProfile')} />}
        />
      </AppBackground>
    )
  }
}

export default Favorite