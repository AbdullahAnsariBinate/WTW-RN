import React, {Component} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import AppBackground from '../../../../components/AppBackground';
import {event, homeData} from '../../../../utils/dummyData';
import {appIcons} from '../../../../assets';
import CustomCard from '../../../../components/CustomCard';
import CustomButton from '../../../../components/CustomButton';
import styles from './styles';
import {colors} from '../../../../utils';
import {loginUser, setUserType} from '../../../../redux/actions/authAction';
import {connect} from 'react-redux';

const {width} = Dimensions.get('screen');

export class Events extends Component {
  render() {
    const user = this.props.user
    console.log(user,'useaaaaasfdaf');

    return (
      <AppBackground
        menu
        title={'Events'}
        notification
        rightIcon={appIcons.userNotification}
        marginHorizontal={false}
        leftIcon={appIcons.drawer}>
        <View style={styles.searchContainer}>
          <CustomButton
            title={'Search'}
            buttonStyle={styles.search}
            color={colors.lightGray}
            textStyle={styles.title}
          />
        </View>
        <FlatList
          style={{flex: 1, marginTop: 50}}
          contentContainerStyle={{flexGrow: 1, paddingBottom: width * 0.265}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={event}
          renderItem={({item}) => <CustomCard item={item} event businessEvent/>}
        />
      </AppBackground>
    );
  }
}

function mapStateToProps({ authReducer }) {
  return {
    user: authReducer?.user,
  };
}

const actions = { loginUser };
export default connect(mapStateToProps, actions)(Events);
