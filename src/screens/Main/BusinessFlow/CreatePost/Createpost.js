import React, {Component} from 'react';
import {Keyboard, TouchableOpacity, View,FlatList} from 'react-native';
import CustomBackground from '../../../../components/CustomBackground';
import styles from './styles';
import Img from '../../../../components/Img';
import {appIcons} from '../../../../assets';
import CustomButton from '../../../../components/CustomButton';
import ImagePicker from '../../../../components/ImagePicker';
import CustomTextInput, {
  ProfileTextInput,
} from '../../../../components/CustomTextInput';
import {
  Image as ImageCompressor,
  Video as VideoCompressor,
} from 'react-native-compressor';
import NavService from '../../../../helpers/NavService';
import ImageSelectedView from '../../../../components/ImageSelectedView';
import Toast from 'react-native-toast-message';
import {WP, colors, size} from '../../../../utils';
import {connect} from 'react-redux';
import {HelpFeedBack} from '../../../../redux/actions/appAction';
import CustomText from '../../../../components/CustomText';
import {Text} from 'react-native';
import AppBackground from '../../../../components/AppBackground';
class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      subject: '',
      imageArray: [],
      texttag: '',
      interests: [],
    };
  }

  handleTagDelete = index => {
    const {interests} = this.state;
    interests.splice(index, 1);
    this.setState({interests});
  };
  onSubmit = () => {
    const {subject, message} = this.state;
    const {role} = this.props?.route?.params;
    console.log(role, 'roleroleroleaaaa');
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
      let payload = {
        // role: role,
        // email: email,
        // password: '123456',
      };
      // console.log(role, 'rolerrrrrsssssss');
      // this.props.loginUser(payload);
      Toast.show({
        text1: 'Response submitted',
        type: 'success',
        visibilityTime: 3000,
      });
    }
  };
  render() {
    const {interests, texttag} = this.state;
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
        // isHeader
        showLogo={false}
        back
        iconColor={'black'}
        title={'Create Post'}
        marginHorizontal={false}>
        <View style={styles.container}>
          {imageArray && (
            <FlatList
              style={{flexGrow: 0}}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
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
          <View>
            <CustomText text="Write a Caption" style={styles.caption} />
            <CustomTextInput
              width={'100%'}
              isBorderShow
              placeHolderColor={colors.lightGray}
              placeholderTextColor={colors.lightGray}

              placeholder={'Caption'}
            />
          </View>

          <View>
            <CustomText text="Write a Caption" style={styles.caption} />
            <CustomTextInput
              maxLength={30}
              Value={texttag}
              isBorderShow
              placeholder={'Interest'}
              placeHolderColor={colors.lightGray}
              placeholderTextColor={colors.lightGray}
              // right={30}
              color={colors.black}
              containerStyle={{
                // marginTop: 5,
                backgroundColor: colors.white,
                bottom: 5,
                width: WP('92%') * 0.98,
              }}
              editable={interests?.length === 5 ? false : true}
              onSubmitEditing={() => {
                if (texttag.trim() !== '') {
                  this.setState({
                    interests: [...interests, texttag],
                    texttag: '',
                  });
                }
              }}
              onChangeText={value => {
                this.setState({texttag: value});
              }}
            />
          </View>

          {interests?.length > 0 ? (
            <View style={styles.interest}>
              {interests?.map((item, index) => {
                return (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagtxt}>{item}</Text>
                    <TouchableOpacity
                      onPress={() => this.handleTagDelete(index)}>
                      <Img
                        local
                        style={styles.remove}
                        src={appIcons.cross}
                        resizeMode={'contain'}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          ) : null}
          {interests?.length === 5 && (
            <Text style={styles.note}>Not More than 5</Text>
          )}

          <CustomButton
            onPress={this.onSubmit}
            title=" Post"
            buttonStyle={[styles.pressAble1]}
            textStyle={{fontSize: size.small, color: colors.white}}
          />
        </View>
      </AppBackground>
    );
  }
}

const actions = {HelpFeedBack};
export default connect(null, actions)(CreatePost);
