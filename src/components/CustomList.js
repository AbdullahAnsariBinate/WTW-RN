import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import Img from './Img';
import {appIcons, appImages} from '../assets';
import {colors, family, size} from '../utils';
import CustomText from './CustomText';
import {data, rating} from '../utils/dummyData';
import appStyles from '../screens/appStyles';
import CustomButton from './CustomButton';
import CustomIcon from './CustomIcon';
import {useSelector} from 'react-redux';
import {shadow} from 'react-native-paper';
import Shadows from '../helpers/Shadows';
const {width} = Dimensions.get('screen');
const CustomList = ({
  item,
  product,
  notification,
  onPress,
  isRating,
  isDate,
  customStyle,
  isProfile,
  comments,
  showFollowButton,
  isComment,
  isPaymentCard,
  removebutton,
  handleReplyButtonPress,
  isReply,
}) => {
  // console.log('item-dd36-Cl', item?.replies)
  const replyyyy = item?.replies;
  // console.log("🚀 ~ file: CustomList.js:38 ~ replyyyy:", replyyyy)
  //
  const [selectedIndex, setIndex] = React.useState(0);
  const loggedInUser = useSelector(({authReducer}) => authReducer?.user);
  // console.log(comments, '===== Posted comments========');
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false); // Initialize as per your data
  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing); // Toggle follow status
  };
  // console.log(item?.name, 'iremssss');
  return (
    <TouchableOpacity
      style={[
        styles.container,
        notification ? styles.notification : null,

        isProfile || isComment ? styles.isProfile : null,
        customStyle,
      ]}
      activeOpacity={0.9}
      onPress={onPress}>
      {product && (
        <Fragment>
          <View style={styles.leftContainer}>
            <View style={styles.imgContainer}>
              <Img src={appImages.pizza} style={styles.img} local />
            </View>
          </View>
          <View style={styles.rightContainer}>
            <View
              style={{
                ...appStyles.directionRow,
                justifyContent: 'space-between',
              }}>
              {showFollowButton ? (
                <CustomText
                  text={item?.heading}
                  style={appStyles.family_Montserrat_Bold}
                  size={size.normal}
                />
              ) : (
                <CustomText
                  text={item?.title}
                  style={appStyles.family_Montserrat_Semi_Bold}
                  size={size.normal}
                />
              )}
              {showFollowButton && (
                <TouchableOpacity
                  style={{
                    borderRadius: 30,
                    paddingVertical: 6,
                    // alignSelf: 'center',
                    justifyContent: 'center',
                    backgroundColor: colors.white,
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    ...Shadows.shadow3,
                  }}>
                  <Img
                    tintColor={colors.primary}
                    src={appIcons.follow}
                    style={styles.follow}
                    local
                    resizeMode={'contain'}
                  />
                  <CustomText
                    text={isFollowing ? 'Following' : 'Follow'}
                    style={styles.btntext}
                  />
                  {/* <Text style={{alignSelf: 'flex-end'}}>Follow</Text> */}
                </TouchableOpacity>
              )}
            </View>
            {isRating && (
              <View style={[appStyles.directionRow, {gap: 2, width: 100}]}>
                {rating.map((_item, index) => (
                  <View key={index} style={styles.starContainer}>
                    <Img
                      src={appIcons.star}
                      style={styles.starImg}
                      local
                      resizeMode={'contain'}
                    />
                  </View>
                ))}
                <CustomText
                  text={item?.rate}
                  style={appStyles.family_Montserrat_Regular}
                  size={size.tiny}
                />
              </View>
            )}
            {isDate && (
              <CustomText
                text={item?.day}
                size={size.xxtiny}
                style={[appStyles.family_Montserrat_Regular]}
              />
            )}
            <View style={{gap: 5}}>
              <CustomText
                text={item?.description}
                size={size.tiny}
                style={appStyles.family_Montserrat_Medium}
                numberOfLines={3}
                // expandable={true}
                // intialLength={70}
              />
              <CustomText
                text={item?.subHeading}
                size={size.xxtiny}
                style={[appStyles.family_Montserrat_Regular]}
              />
            </View>
          </View>
        </Fragment>
      )}
      {notification && (
        <Fragment>
          <View style={styles.mainContainer}>
            <CustomText
              text={item?.title}
              style={appStyles.family_Montserrat_Medium}
              size={size.xsmall}
            />
            <CustomText
              text={item?.time}
              style={appStyles.family_Montserrat_Regular}
              size={size.xxtiny}
            />
          </View>
          <View>
            <CustomText
              text={item?.description}
              style={appStyles.family_Montserrat_Regular}
              size={size.tiny}
            />
          </View>
        </Fragment>
      )}

      {isProfile && (
        <View style={styles.listContainer}>
          <View style={styles.profileDetail}>
            <Img src={item?.profile} style={styles.profileImage} local />
            <View style={styles.textContainer}>
              <CustomText
                text={item?.name}
                style={appStyles.family_Montserrat_Semi_Bold}
                size={size.small}
              />
              <CustomText
                text={item?.state}
                size={size.xtiny}
                style={styles.text}
              />
            </View>
          </View>
          <View style={styles.iconWapper}>
            {removebutton ? (
              <CustomButton
                leftIconMap={appIcons.cross}
                title="Remove"
                buttonStyle={[styles.buttonStyles]}
                textStyle={styles.buttonText}
              />
            ) : (
              <CustomIcon
                local
                size={22}
                src={item?.like == true ? appIcons.thumb : appIcons.heart}
                resizeMode={'contain'}
              />
            )}
          </View>
        </View>
      )}
      {isComment && (
        <View style={styles.listContainer}>
          <View style={styles.profileDetail}>
            <Img src={item?.profile} style={styles.profileImage} local />
            <View style={[styles.textContainer, {width: '85%'}]}>
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
              <CustomText
                text={item?.description}
                size={size.tiny}
                style={appStyles.family_Montserrat_Regular}
                numberOfLines={3}
              />
              <View
                style={[
                  {flexDirection: loggedInUser == 'Business' ? 'row' : ''},
                ]}>
                <CustomButton
                  title="Reply"
                  buttonStyle={styles.followButton}
                  leftIcon
                  onPress={() => handleReplyButtonPress(item?.name)}
                  reply={appIcons.reply}
                  textStyle={styles.btnText}
                  tintColor={colors.black}
                />

                <View style={styles.mainReplyCon}>
                  {replyyyy?.map(val => {
                    return (
                      <View style={styles.replyContainer}>
                        <View>
                          <Img
                            src={val?.profile}
                            style={styles.profileImage}
                            local
                          />
                        </View>
                        <View style={styles.textCon}>
                          <CustomText
                            text={val?.name}
                            style={appStyles.family_Montserrat_Semi_Bold}
                            size={size.small}
                          />
                          <CustomText
                            text={val?.time}
                            size={size.xtiny}
                            style={styles.text}
                          />
                          <CustomText
                            text={val?.description}
                            size={size.tiny}
                            style={appStyles.family_Montserrat_Regular}
                            numberOfLines={3}
                            expandable={true}
                            intialLength={70}
                          />
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomList;

const styles = StyleSheet.create({
  press: {
    width: 50,
    height: 20,
    backgroundColor: colors.white,
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  btnstext: {
    fontSize: size.tiny,
    color: colors.black,
    ...appStyles.family_Montserrat_Medium,
  },
  followButtonContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  followButton: {
    backgroundColor: colors.white,
    paddingHorizontal: 1,
    paddingVertical: 4,
    flexDirection: 'row',
    marginLeft: 50,
    borderRadius: 30,
    // paddingVertical:3,
    // top: 8,

    borderWidth: 0.5,
  },

  container: {
    padding: 12,
    borderRadius: 15,
    backgroundColor: colors.white,
    ...Shadows.shadow3,
    ...appStyles.directionRow,
    ...appStyles.seperator,
    // backgroundColor:'green',
    gap: Platform.OS == 'ios' ? 10 : 4,
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 2,
    // backgroundColor:'pink'
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 15,
    color: colors.black,
    backgroundColor: '#F2F2F2',
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 30,
    left: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  sendimg: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  mainBottomView: {
    height: 55,
    // width: width,
    paddingHorizontal: 16,
    ...appStyles.directionRow,
    borderTopWidth: 1,
    // backgroundColor:'red',
    borderTopColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 30,
    marginBottom: Platform.OS == 'ios' ? 10 : 10,
    shadowColor: 'rgba(0, 0, 0, 0.3)', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1, // Shadow opacity (0 to 1)
    shadowRadius: 4, // Shadow radius
    elevation: 4,
  },
  btntext: {
    color: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    left: 3,
    ...appStyles.marginLeft,
    ...appStyles.font11,
    ...appStyles.family_Montserrat_Medium,
  },
  imgContainer: {
    flex: 1,
    width: 100,
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  buttonStyles: {
    backgroundColor: colors.white,
    borderWidth: 1,
    height: 30,
    borderColor: colors.primary,
    ...appStyles.w_25,
  },
  buttonText: {
    fontSize: size.tiny,
    color: colors.primary,
  },

  starContainer: {
    height: 15,
    width: 15,
  },
  starImg: {
    height: '100%',
    width: '100%',
  },
  follow: {
    height: 12,
    width: 12,
  },
  commentText: {
    color: 'black',

    // backgroundColor: 'red',
  },
  commentText: {
    color: 'black',

    backgroundColor: 'red',
  },
  mainContainer: {
    ...appStyles.directionRow,
    ...appStyles.alignCenter,
    ...appStyles.justifySpaceBetween,
  },
  notification: {
    backgroundColor: colors.skyBlue,
    paddingBottom: 25,
    borderColor: colors.primary,
    borderWidth: 1,
    ...appStyles.directionColumn,
    gap: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.blue_1,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  time: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.gray,
    marginTop: 2,
  },
  name: {fontSize: 15, fontWeight: '600'},
  dot: {
    width: 15,
    height: 20,
    resizeMode: 'contain',
    tint: colors.black,
  },
  profileDetail: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  iconContainer: {
    height: 22,
    width: 22,
  },
  iconWapper: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red'
  },
  listContainer: {
    ...appStyles.directionRow,
    ...appStyles.justifySpaceBetween,
    flex: 1,
  },
  isProfile: {
    borderWidth: 0,
    padding: 0,
    borderRadius: 10,
    borderColor: colors.white,
    ...appStyles.directionRow,
    paddingHorizontal: 20,
  },
  followButton: {
    ...appStyles.w_25,
    height: 38,
    borderRadius: 10,
    backgroundColor: colors.white,
    ...appStyles.gap_5,
    marginRight: 5,
    marginTop: '4%',
  },
  btnText: {
    ...appStyles.family_Montserrat_Semi_Bold,
    color: colors.black,
    ...appStyles.font12,
  },
  replyContainer: {
    backgroundColor: colors.lightGray1,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    ...appStyles.gap_8,
    ...Shadows.shadow3,
    marginRight: 5,
  },
  mainReplyCon: {
    marginLeft: -45,
    ...appStyles.gap_8,
    marginTop: 10,
  },
  textCon: {width: width * 0.57},
});
