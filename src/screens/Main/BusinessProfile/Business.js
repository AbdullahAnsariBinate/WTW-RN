import React, { Component } from 'react';
import { Alert, Dimensions, FlatList, ScrollView, View, Share } from 'react-native';
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
import { appIcons } from '../../../assets';
import CustomCard from '../../../components/CustomCard';
import CustomButton from '../../../components/CustomButton';
import styles from './styles';
import TabsHandle from './TabsHandle';
import Card from '../../../components/Card';
import appStyles from '../../appStyles';
import CustomList from '../../../components/CustomList';
import NavService from '../../../helpers/NavService';
import SocialSheet from '../../../containers/Popup/socialSheetPopup/SocialSheet';
import CustomIcon from '../../../components/CustomIcon';
import { loginUser, setUserType } from '../../../redux/actions/authAction';
import { connect } from 'react-redux';
import ModalPopup from '../../../containers/Popup/modalPopup/ModalPopup';

const { width } = Dimensions.get('screen');

export class Business extends Component {
  state = {
    isData: { id: 1, title: 'Post' },
    isActive: false,
    isSocial: '',
    showModal: false,
    userComment: modalLikeList,
  };

  render() {
    const user = this.props.user;
    console.log(user, 'businoos');
    const { isData, isActive, isSocial, showModal, userComment } = this.state;
    console.log(isSocial, 'isSocialisSocialisSocial');
    const ItemSeparatorComponent = () => {
      return <View style={styles.lineSeparator} />;
    };
    const handleDot = () => {
      this.setState({ isSocial: 'Options' });
      this.setState({ isActive: true });
    };
    const onShare = () => {
      Share.share({
        title: 'Check out this content!',
        message: 'I wanted to share this with you: https://www.example.com',
        url: 'https://www.example.com',
      })
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
    };
    const handleClose = () => {
      this.setState({ isActive: false });
    };
    const handleClosed = () => {
      this.setState({ showModal: false })
    }
    const handleLongLike = () => {

    }
    handleDelete = () => {
      this.setState({ isActive: false });
      this.setState({ showModal: true });
    };
    const handleSocial = val => {
      this.setState({ isSocial: val });
      this.setState({ isActive: true });
    };

    const renderItem = ({ item }) => {
      if (isData.id == 1) {
        return <Card item={item} businessprofile dot onPress={handleSocial} handleDot={handleDot} />;
      } else if (isData.id == 2) {
        return <CustomCard item={item} event businessEvent />;
      } else if (isData.id == 3) {
        return (
          <CustomList
            item={item}
            product
            isDate
            customStyle={{ backgroundColor: '#F2F7FB' }}
          />
        );
      }
    };

    return (
      <AppBackground
        notification
        // newBack
        // menu
        back
        title={
          user.role == 'Business' ? 'My Business Profile' : 'Business Profile'
        }
        marginHorizontal={false}
        leftIcon={appIcons.heart}
        rightIcon={appIcons.userNotification}>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <FlatList
              contentContainerStyle={{ flexGrow: 1 }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              data={business}
              renderItem={({ item }) => (
                <CustomCard
                  item={item}
                  businessprofile
                  ViewProfile
                  handleViewDetail={() => NavService.navigate('BusinessDetail')}
                />
              )}
            />
          </View>
          <View>
            <TabsHandle
              item={buttonTitles}
              isActive
              handleClick={item => this.setState({ isData: item })}
            />
            <FlatList
              contentContainerStyle={[{ flexGrow: 1 }]}
              // showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={ItemSeparatorComponent}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={false}
              data={
                isData.id == 1 ? homeData : isData?.id == 2 ? event : preEvents
              }
              renderItem={renderItem}
            />
          </View>

          {/* modal */}

          <SocialSheet
            btnFirst={'Edit Post'}
            btnSecond={'Delete Post'}
            handleCreate={() => NavService.navigate('CreatePost')}
            handleEvent={handleDelete}
            value={isSocial}
            isVisible={isActive}
            handleClose={handleClose}
            data={profileData}
            extraData={userComment}
            keyExtractor={(item, index) => index.toString()}
            listData={modalLikeList}
            onBackButtonPress={handleClose}
            onBackdropPress={handleClose}
            socialIcons={socialIcons}
          />

          <ModalPopup
            confirmation
            isVisible={showModal}
            desc="Are you sure you want to delete this events"
            sucessText="Yes, Delete"
            unsuccessText="No"
            title={'Delete'}
            handleClose={handleClosed}
            onBackButtonPress={handleClosed}
            onBackdropPress={handleClosed}
            onYesPress={handleClosed}
            onNoPress={handleClosed}
          />
        </ScrollView>
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
export default connect(mapStateToProps, actions)(Business);
