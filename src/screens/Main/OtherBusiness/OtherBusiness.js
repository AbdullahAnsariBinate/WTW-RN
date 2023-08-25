import React, {Component} from 'react';
import {Alert, Dimensions, FlatList, ScrollView, View} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import {
  UpcomingEvent,
  business,
  buttonTitles,
  event,
  homeData,
  modalLikeList,
  preEvents,
  profileData,
  socialIcons,
} from '../../../utils/dummyData';
import {appIcons} from '../../../assets';
import CustomCard from '../../../components/CustomCard';
import CustomButton from '../../../components/CustomButton';
import styles from './styles';
import TabsHandle from './TabsHandle';
import Card from '../../../components/Card';
import appStyles from '../../appStyles';
import CustomList from '../../../components/CustomList';
import NavService from '../../../helpers/NavService';
// import SocialSheet from '../../../containers/Popup/socialSheetPopup/SocialSheet';
// import SocialSheet from '../../../containers/PopUp/socialSheetPopup/SocialSheet';

import CustomIcon from '../../../components/CustomIcon';
import {loginUser, setUserType} from '../../../redux/actions/authAction';
import {connect} from 'react-redux';
import SocialSheet from '../../../containers/Popup/socialSheetPopup/SocialSheet';

const {width} = Dimensions.get('screen');

export class OtherBusiness extends Component {
  state = {
    isData: {id: 1, title: 'Post'},
    isActive: false,
    isSocial: '',
  };

  render() {
    const user = this.props.user;
    console.log(user, 'businoos');
    const {isData, isActive, isSocial} = this.state;
    console.log(isSocial, 'isSocialisSocialisSocial');
    const ItemSeparatorComponent = () => {
      return <View style={styles.lineSeparator} />;
    };
    const handleDot = () => {
      this.setState({isSocial: 'Options'});
      this.setState({isActive: true});
    };

    const handleClose = () => {
      this.setState({isActive: false});
    };

    const handleSocial = val => {
      console.log(val, 'VALTTT');
      this.setState({isSocial: val});
      this.setState({isActive: true});
    };
    const renderItem = ({item}) => {
      if (isData.id == 1) {
        return (
          <Card
            item={item}
            businessprofile
          />
        );
      } else if (isData.id == 2) {
        return <CustomCard item={item} notification event />;
      } else if (isData.id == 3) {
        return (
          <CustomList
            item={item}
            product
            isDate
            customStyle={{backgroundColor: '#F2F7FB'}}
          />
        );
      }
    };

    return (
      <AppBackground
        notification
        menu
        title={'Other Business Profile'}
        marginHorizontal={false}
        leftIcon={appIcons.drawer}
        rightIcon={appIcons.userNotification}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <FlatList
              contentContainerStyle={{flexGrow: 1}}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              data={business}
              renderItem={({item}) => (
                <CustomCard
                  item={item}
                  businessprofile
                  handleViewDetail={() => NavService.navigate('BusinessDetail')}
                />
              )}
            />
          </View>
          <View>
            <TabsHandle
              item={buttonTitles}
              isActive
              handleClick={item => this.setState({isData: item})}
            />
            <FlatList
              contentContainerStyle={[{flexGrow: 1}]}
              // showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={ItemSeparatorComponent}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={false}
              data={
                isData.id == 1
                  ? homeData
                  : isData?.id == 2
                  ? UpcomingEvent
                  : preEvents
              }
              renderItem={renderItem}
            />
          </View>
        </ScrollView>
      </AppBackground>
    );
  }
}

function mapStateToProps({authReducer}) {
  return {
    user: authReducer?.user,
  };
}

const actions = {loginUser};
export default connect(mapStateToProps, actions)(OtherBusiness);
