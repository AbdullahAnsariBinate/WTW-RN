import {Dimensions, FlatList, Text, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import {modalLikeList, profileData} from '../../../../utils/dummyData';
import {styles} from './styles';
import Card from '../../../../components/Card';
import CustomList from '../../../../components/CustomList';

const {width} = Dimensions.get('screen');

class Like extends Component {
  render() {
    const renderItem1 = ({item}) => {
      return <CustomList isProfile={true} item={item} />;
    };

    return (
      <AppBackground title={'Likes'} back>
        <FlatList
          style={styles.FlatList}
          data={modalLikeList}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: width * 0.265 + 10,
            paddingHorizontal: 15,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem1}
        />
      </AppBackground>
    );
  }
}
export default Like;
