import React, { Component } from 'react';
import { Keyboard, View, Platform,FlatList } from 'react-native';
import CustomBackground from '../../../components/CustomBackground';
import styles from './styles';
import Img from '../../../components/Img';
import {appIcons} from '../../../assets';
import CustomButton from '../../../components/CustomButton';
import ImagePicker from '../../../components/ImagePicker';
import CustomTextInput, {
  ProfileTextInput,
} from '../../../components/CustomTextInput';
import {
  Image as ImageCompressor,
  Video as VideoCompressor,
} from 'react-native-compressor';
import NavService from '../../../helpers/NavService';
import ImageSelectedView from '../../../components/ImageSelectedView';
import Toast from 'react-native-toast-message';
import { colors, size } from '../../../utils';
import { connect } from 'react-redux';
import { HelpFeedBack } from '../../../redux/actions/appAction';
import { ModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import AppBackground from '../../../components/AppBackground';
import ModalPopup from '../../../containers/Popup/modalPopup/ModalPopup';
class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      subject: '',
      imageArray: [],
      showModal: false,
    };
  }
  onSubmit = () => {
    const {subject, message} = this.state;
    // const { role } = this.props?.route?.params;
    // console.log(role, 'roleroleroleaaaa');
    // setting user type here
    // this.props.setUserType();

    if (!subject && !message) {
      Toast.show({
        text1: 'Please enter all fields',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!subject) {
      Toast.show({
        text1: 'Please enter subject',
        type: 'error',
        visibilityTime: 3000,
      });
    } else if (!message) {
      Toast.show({
        text1: 'Please enter subject',
        type: 'error',
        visibilityTime: 3000,
      });
    } else {
      Keyboard.dismiss();
      // let payload = {
      //   // role: role,
      //   // email: email,
      //   password: '123456',
      // };
      // console.log(role, 'rolerrrrrsssssss');
      // this.props.loginUser(payload);
      setTimeout(() => {
        this.setState({showModal: true});
      }, 350);
    }
  };
  render() {
    const {showModal} = this.state;
    const handleGoBack = () => {
      this.setState({showModal: false});
      NavService.goBack();
    };
    const handleClose = () => {
      this.setState({showModal: false});
    };
    const PlusButton = () => {
      return (
        <ImagePicker
          isMultiple={true}
          onImageChange={(path, mime, type) => {
            UploadData(path, mime, type);
          }}>
          <View style={[styles.plusContainer]}>
            <View style={styles.iconPlus}>
              <Img local src={appIcons.add} style={styles.icon} />
            </View>
          </View>
        </ImagePicker>
      );
    };
    // SELECTED DATA FUNCTION
    UploadData = async (path, mime, type) => {
      const {imageArray} = this.state;
      let multipleImages = [];
      if (Array.isArray(path)) {
        const arr = path?.map(async item => {
          let result;
          result = await ImageCompressor.compress(item.path, {
            maxHeight: 400,
            maxWidth: 400,
            quality: 1,
          });
          let imageObject = {
            uri: result,
            name: `image${Date.now()}.${item?.mime.slice(
              item?.mime.lastIndexOf('/') + 1,
            )}`,
            type: item?.mime,
          };
          multipleImages.push(imageObject);
        });
        await Promise.all(arr);
        const mergeImagesWithExistingGalleryAssets = [
          ...imageArray,
          ...multipleImages,
        ];

        this.setState({imageArray: mergeImagesWithExistingGalleryAssets});
      } else {
        const getExistingGalleryAssets = [...imageArray];
        const assetObject = {
          uri: path,
          name: `image${Date.now()}.${mime.slice(mime.lastIndexOf('/') + 1)}`,
          type: mime,
        };
        getExistingGalleryAssets.push(assetObject);
        this.setState({imageArray: getExistingGalleryAssets});
      }
    };
    // REMOVE FROM LIST
    removeSelectedItem = asset => {
      const {imageArray} = this.state;
      const remainingImages = imageArray.filter(item => {
        return item ? item !== asset : item.uri !== asset;
      });
      this.setState({imageArray: remainingImages});
    };
    onSubmit = () => {
      const {subject, message} = this.state;
      if (!subject) {
        Toast.show({
          text1: 'Please enter subject',
          type: 'error',
          visibilityTime: 3000,
        });
      } else if (!message) {
        Toast.show({
          text1: 'Please enter message',
          type: 'error',
          visibilityTime: 3000,
        });
      } else {
        Keyboard.dismiss();
        const params = new FormData();
        params.append('subject', subject);
        params.append('description', message);
        imageArray.map(image => {
          params.append('attachment[[]', image);
        });
        this.props.HelpFeedBack(params, value => {
          if (value?.status === 1) {
            NavService.navigate('Thankyou');
          }
        });
      }
    };
    const {imageArray, subject, message} = this.state;
    return (
      <AppBackground
        showLogo={false}
        back
        iconColor={'black'}
        title={'Help & Feedback'}
        marginHorizontal={false}>
        <ModalPopup
          feed
          isVisible={showModal}
          desc="Your Feedback has been submitted to admin"
          title={'Thank You'}
          onPress={handleGoBack}
          handleClose={handleClose}
          onBackButtonPress={handleClose}
          onBackdropPress={handleClose}
          onYesPress={handleClose}
          onNoPress={handleClose}
        />
        <View style={styles.container}>
          <ProfileTextInput
            width={'100%'}
            textAlignVertical="top"
            maxLength={30}
            placeholder={'Subject'}
            value={subject}
            color={'black'}
            placeholderColor={colors.lightGray}
            borderRadius={20}
            isBorderShow
            borderColor={colors.primary}
            keyboardType={'email-address'}
            onChangeText={value => this.setState({subject: value})}
            TextInputStyling={{padding: 15, width: 350}}
          />
          <ProfileTextInput
            width={'100%'}
            maxLength={350}
            multiline
            top={Platform.OS == 'ios' ? 10 : 0}
            placeholder={'Type your message'}
            value={message}
            color={'black'}
            placeholderColor={colors.lightGray}
            borderRadius={20}
            isBorderShow
            borderColor={colors.primary}
            keyboardType={'email-address'}
            onChangeText={value => this.setState({message: value})}
            TextInputStyling={{height: 150, padding: 15, width: 350}}
          />

          {imageArray && (
            <FlatList
              style={{flexGrow: 0}}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                marginTop: 10,
              }}
              ListFooterComponent={() => {
                return <PlusButton />;
              }}
              keyExtractor={(item, index) => index.toString()}
              data={imageArray}
              renderItem={({item}) => (
                <ImageSelectedView
                  item={item}
                  backgroundColor="white"
                  color={'red'}
                  removeImage={() => removeSelectedItem(item)}
                />
              )}
            />
          )}
          <CustomButton
            onPress={this.onSubmit}
            title=" Submit"
            buttonStyle={[styles.pressAble1]}
            textStyle={{fontSize: size.small, color: colors.white}}
          />
        </View>
      </AppBackground>
    );
  }
}

const actions = {HelpFeedBack};
export default connect(null, actions)(Feedback);
