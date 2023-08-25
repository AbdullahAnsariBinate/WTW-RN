import React, { useCallback, Component } from 'react';
import { Dimensions, FlatList } from 'react-native';
import AppBackground from '../../../components/AppBackground';
import { event, homeData, foll } from '../../../utils/dummyData';
import { appIcons } from '../../../assets';
import CustomList from '../../../components/CustomList';
import NavService from '../../../helpers/NavService';
import { View } from 'react-native';

const { width } = Dimensions.get('screen');

export class Following extends Component {
  render() {
    return (
      <AppBackground back title={'Following'} marginHorizontal={false}>
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: width * 0.265 + 10,
            paddingHorizontal: 5
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={foll}
          renderItem={({ item }) => (
            <CustomList
              item={item}
              product
              isRating
              showFollowButton={true}
            />
          )}
        />

      </AppBackground>
    );
  }
}

export default Following;
