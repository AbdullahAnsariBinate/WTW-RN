import {
  Text,
  View,
  Pressable,
  TouchableOpacity,
  FlatList,
  Alert,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import React, { Component } from 'react';
import { styles } from './styles';
import { Image } from 'react-native';
import { appIcons, appImages } from '../../../assets';
import { colors, size } from '../../../utils';
import CustomModal from '../../../components/CustomModal';
import CustomText from '../../../components/CustomText';
import appStyles from '../../../screens/appStyles';
import { ScrollView } from 'react-native';
import CustomList from '../../../components/CustomList';
import {
  category,
  check,
  cities,
  homeData,
  modalLikeList,
  states,
} from '../../../utils/dummyData';
import { retry } from 'redux-saga/effects';
import Img from '../../../components/Img';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput, { SearchBar } from '../../../components/CustomTextInput';
const { width, height } = Dimensions.get('screen');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomIcon from '../../../components/CustomIcon';
import Checkbox from '../../../components/Checkbox';

class SocialSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: '',
      replyName: '',
      comments: {},
      currentReply: [],
      activeIndex: null,
      userComment: modalLikeList,
      searchStates: states,
      searchCity: cities,
      searchCategory: category,
      isActive: false,
      activeChecks: {},
    };
  }
  handleCheck = index => {
    this.setState(prevState => ({
      activeChecks: {
        ...prevState.activeChecks,
        [index]: !prevState.activeChecks[index],
      },
    }));
  };
  textInputRef = React.createRef();

  handleReplyButtonPress = (name, index) => {
    console.log('name, id', index, name);
    this.setState({ currentReply: { name: name, id: index } });
    this.setState(prevState => ({
      activeIndex: index === prevState.activeIndex ? null : index,
    }));
    this.setState({ replyName: name });
    this.textInputRef.current.focus();
  };
  handleSendButtonPress = () => {
    const { replyName, reply, activeIndex } = this.state;
    const item = modalLikeList.find(item => item.id === activeIndex);
    if (item && item.replies) {
      item.replies.push({
        profile: appImages.pizzaTwo, // replace 'someImage' with the correct image reference
        name: replyName,
        time: '1 min ago',
        description: reply,
      });
    }
    this.setState({ userComment: item });
  };

  render() {
    const {
      togglePopup,
      isVisible,
      handleClose,
      data,
      listData,
      onBackButtonPress,
      value,
      onBackdropPress,
      socialIcons,
      states,
      handleSearchByValue,
      handleCreate,
      handleEvent,
      handleSearchByValueCity,
      handleApply,
      btnFirst,
      btnSecond,
      extraData,
      keyExtractor
    } = this.props;
    const { searchStates, searchCity, searchCategory, replyName, comments, currentReply, activeIndex, userComment } = this.state;
    console.log('value1212', value);

    const ItemSeparatorComponent = () => {
      return <View style={styles.lineSeparator} />;
    };
    const ItemSeparatorComponent2 = () => {
      return <View style={styles.lineSeparator2} />;
    };

    const renderItem = ({ item, index }) => {
      if (value == 'Like') {
        return <CustomList isProfile={true} item={item} />;
      } else {
        return <CustomList
          isComment={true}
          item={item}
          handleReplyButtonPress={name =>
            this.handleReplyButtonPress(name, index)
          }
          comments={this.state.comments}
        />;
      }
    };

    const onChangeText = value => {
      const newArr = states.filter(item => item.startsWith(value));
      this.setState({ searchStates: newArr });
    };

    const onChangeTextCity = value => {
      const newArr = states.filter(item => item.startsWith(value));
      this.setState({ searchCity: newArr });
    };
    const onChangeTextCategory = value => {
      const newArr = states.filter(item => item.startsWith(value));
      this.setState({ searchCategory: newArr });
    };
    const modalFunction = () => {
      console.log('ModalFunc', value);
      if (value == 'Comment' || value == 'Like') {
        return (
          <View style={styles.contentContainer}>
            {data?.map((item, index) => (
              <View style={styles.profileData}>
                <View style={styles.profileDetail}>
                  <Image source={item?.profile} style={styles.profileImage} />
                  <View style={styles.textContainer}>
                    <CustomText
                      text={item?.name}
                      style={appStyles.family_Montserrat_Semi_Bold}
                      size={size.small}
                    />
                    <CustomText
                      text={item?.time}
                      size={size.xtiny}
                      style={styles.text}
                    />
                  </View>
                </View>
                <View>
                  <CustomText
                    text={item?.description}
                    size={size.tiny}
                    style={appStyles.family_Montserrat_Regular}
                    expandable={true}
                    intialLength={90}
                  />
                </View>
              </View>
            ))}

            <FlatList
              style={styles.FlatList}
              data={listData}
              extraData={extraData}
              keyExtractor={keyExtractor}
              ItemSeparatorComponent={ItemSeparatorComponent}
              renderItem={renderItem}
            />
            {value == 'Comment' && (
              <View style={styles.mainBottomView}>
                <Img src={appImages.userFive} style={styles.user} local />
                <TextInput
                  style={styles.textInput}
                  placeholder={'Write your comment here'}
                  placeholderTextColor={colors.font}
                  value={reply}
                  ref={this.textInputRef}
                  onChangeText={text => {
                    this.setState({ reply: text });
                  }}
                />
                <TouchableOpacity
                activeOpacity={1}
                  style={styles.button}
                onPress={this.handleSendButtonPress}
                >
                  <Img
                    tintColor={colors.primary}
                    local
                    src={appIcons.send}
                    style={styles.sendimg}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        );
      } else if (value == 'Share') {
        return (
          <View style={appStyles.directionRow}>
            {socialIcons.map(item => (
              <View style={styles.socialContainer}>
                <View style={styles.iconWrapper}>
                  <Img src={item?.icon} style={styles.icon} local />
                </View>
                <CustomText
                  text={item?.name}
                  style={appStyles.family_Montserrat_Regular}
                  size={size.tiny}
                />
              </View>
            ))}
          </View>
        );
      } else if (value == 'Create' || value == 'Options') {
        return (
          <View style={[appStyles.directionColumn]}>
            <CustomButton
              onPress={handleCreate}
              title={btnFirst}
              leftIcon
              reply={appIcons.edit}
              customIconStyle={styles.iconn}
              buttonStyle={styles.buttonStyless}
              textStyle={styles.font}
            />
            <CustomButton
              onPress={handleEvent}
              title={btnSecond}
              leftIcon
              reply={value == 'Create' ? appIcons.event : appIcons.delete}
              customIconStyle={styles.iconn}
              buttonStyle={styles.buttonStyless}
              textStyle={styles.font}
            />
          </View>
        );
      } else if (value == 'States') {
        return (
          <View style={styles.actionContainer}>
            <View style={styles.searchContainer}>
              <SearchBar
                placeholder="Search"
                searchStyle={{ marginVertical: 10 }}
                rightIcon={appIcons.search}
                onChangeText={onChangeText}
              />
            </View>
            <FlatList
              // style={styles.FlatList}
              data={searchStates}
              ItemSeparatorComponent={ItemSeparatorComponent2}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.actionStateStyles}
                  activeOpacity={0.9}
                  onPress={() => handleSearchByValue(item)}>
                  <CustomText
                    text={item}
                    style={styles.country}
                    size={size.medium}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        );
      } else if (value == 'City') {
        return (
          <View style={styles.actionContainer}>
            <View style={styles.searchContainer}>
              <SearchBar
                placeholder="Search"
                searchStyle={{ marginVertical: 10 }}
                rightIcon={appIcons.search}
                onChangeText={onChangeTextCity}
              />
            </View>
            <FlatList
              // style={styles.FlatList}
              data={searchCity}
              ItemSeparatorComponent={ItemSeparatorComponent2}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.actionStateStyles}
                  activeOpacity={0.9}
                  onPress={() => handleSearchByValueCity(item)}>
                  <CustomText
                    text={item}
                    style={styles.country}
                    size={size.medium}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        );
      } else if (value == 'Select') {
        return (
          <View style={styles.actionContainer}>
            <View style={styles.searchContainer}>
              <SearchBar
                placeholder="Search"
                searchStyle={{ marginVertical: 10 }}
                rightIcon={appIcons.search}
                onChangeText={onChangeTextCategory}
              />
            </View>
            <FlatList
              // style={styles.FlatList}
              data={searchCategory}
              ItemSeparatorComponent={ItemSeparatorComponent2}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.actionStateStyles}
                  activeOpacity={0.9}
                  onPress={() => handleSearchByValue(item)}>
                  <CustomText
                    text={item}
                    style={styles.country}
                    size={size.medium}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        );
      } else if (value == 'Search Filter') {
        return (
          <View
            style={[
              styles.actionContainer,
              { height: height * 0.43, paddingBottom: 10, paddingHorizontal: 30 },
            ]}>
            <SearchBar
              placeholder="Store Name"
              placeholderTextColor={colors.lightGray}
              searchStyle={{ marginVertical: 10 }}
              onChangeText={onChangeTextCategory}
              containerStyle={styles.searchFilter}
            />
            <SearchBar
              placeholder="Location"
              placeholderTextColor={colors.lightGray}
              searchStyle={{ marginVertical: 10 }}
              onChangeText={onChangeTextCategory}
              containerStyle={styles.searchFilter}
            />
            <CustomText text="Select Category" style={styles.selectCat} />
            <View style={styles.checkboxContainer}>
              {check.map((item, index) => (
                <View style={styles.Checkbox}>
                  <Checkbox
                    isCheck={this.state.activeChecks[index] || false}
                    index={index}
                    handleCheck={() => this.handleCheck(index)}
                  />
                  <CustomText text={item} style={styles.checkText} />
                </View>
              ))}
            </View>
            <CustomButton
              title="Apply"
              buttonStyle={{ width: '100%' }}
              textStyle={styles.btnText}
              onPress={handleApply}
            />
          </View>
        );
      }
    };

    const { reply } = this.state;
    console.log('comment', reply);


    return (
      <CustomModal
        onBackdropPress={onBackdropPress}
        onBackButtonPress={onBackButtonPress}
        visible={isVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        togglePopup={togglePopup}>
        <View style={styles.mainContainer}>
          <View>
            <View style={styles.modalChild}>
              <CustomText
                style={styles.modalTitle}
                text={
                  value == 'Create' || 'City'
                    ? value
                    : `${value} (${listData.length}) `
                }
              />
              <Pressable style={styles.close} onPress={handleClose}>
                <Image
                  source={appIcons.cross}
                  style={styles.cross}
                  resizeMode="contain"
                />
              </Pressable>
            </View>
            {/* In this function i use condition wise rendering using value state */}
            {modalFunction()}
          </View>
        </View>
      </CustomModal>
    );
  }
}

export default SocialSheet;
