import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import NavService from '../helpers/NavService';
import Shadows from '../helpers/Shadows';
import { colors } from '../utils';
import { appIcons, appImages, appVideo } from '../assets';
import appStyles from '../screens/appStyles';
import Img from './Img';
import CustomText from './CustomText';
import { useSelector } from 'react-redux';
import Tooltip from 'react-native-walkthrough-tooltip';
import CustomIcon from './CustomIcon';
import VideoPlayer from '../containers/VideoPlayer/videoPlayer';
import FullScreenVideo from '../containers/VideoPlayer/fullScreenVideo';
const { width } = Dimensions.get('screen');

const Card = ({ onPress = () => { }, item, dot, PostDetail, handleDot }) => {
  console.log("wqrr:", item?.Video)
  const loggedInUser = useSelector(({ authReducer }) => authReducer?.user);
  console.log(loggedInUser, 'loggedInUseraaaa');
  const [like, setLike] = useState(false);
  const [isIcon, setIsIcon] = useState(appIcons.outlineHeart);
  const [likeCount, setLikeCount] = useState(10)

  const handleLongLike = () => {
    setLike(true)
    setTimeout(() => {
      setLike(false)
    }, 1200);
  }




  const handleLike = () => {
    if (isIcon == appIcons.heart) {
      setIsIcon(appIcons.outlineHeart)
    } else if (isIcon == appIcons.thumb) {
      setIsIcon(appIcons.outlineHeart)
    }
    else {
      setIsIcon(appIcons.heart)
    }
  }
  return (
    <View style={styles.card}>
      <View style={[styles.header]}>
        <TouchableOpacity
          // onPress={() => NavService.navigate('OtherProfile', { user: item })}
          style={{ width: '90%' }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={item?.image} style={styles.profileImage} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item?.name}</Text>
              <Text style={styles.time}>{item?.time}</Text>
            </View>
          </View>
        </TouchableOpacity>

        {dot && loggedInUser.role == 'Business' && (
          <TouchableOpacity activeOpacity={0.8} onPress={handleDot}>
            <Image source={appIcons.dots} style={styles.dot} />
          </TouchableOpacity>
        )}
      </View>

      <View style={appStyles.seperator}>

        <View style={styles.businessImg}>
          {item?.image ?
            (
              <Img
                src={item?.image}
                style={styles.img}
                local
                resizeMode={'cover'}
              />
            ) : (
              <FullScreenVideo
                defaultVideoStyle={{ backgroundColor: 'red' }}
                source={item?.Video}
                style={styles.videoStyle}
                resizeMode="contain"
                controls={true}
              />
            )
          }


        </View>

      </View>
      <View style={{ alignItems: 'flex-start' }}>
        <Tooltip
          isVisible={like}
          content={
            <View style={{ flexDirection: 'row', gap: 10, paddingHorizontal: 10 }}>
              <TouchableOpacity style={{ padding: 5 }} onPress={() => { setIsIcon(appIcons.thumb) }}>
                <CustomIcon src={appIcons.thumb} size={22} local resizeMode={'contain'} />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 5 }} onPress={() => { setIsIcon(appIcons.heart) }}>
                <CustomIcon src={appIcons.heart} size={22} local resizeMode={'contain'} />
              </TouchableOpacity>
            </View>
          }
          contentStyle={{ backgroundColor: colors.white, ...Shadows.shadow3, bottom: 15, borderRadius: 30, borderWidth: 0.5, borderColor: colors.blue_1 }}
          arrowStyle={{ top: 0 }}
          placement="top"
          onClose={() => { setLike(false) }}
          showChildInTooltip={false}
          backgroundColor={'transparent'}
          backgroundStyle={{}}

        >
          <View>
            <Text style={{ fontSize: 0.001 }}>ss</Text>
          </View>
        </Tooltip>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={handleLike}
          onLongPress={handleLongLike}
          activeOpacity={0.8}
          style={[appStyles.directionRow, appStyles.gap_8]}>
          <Image
            source={isIcon}
            resizeMode={'contain'}
            style={styles.smallIcon}
          />

          <Pressable
            onPress={() =>
              loggedInUser.role == 'Business'
                ? NavService.navigate('Like')
                : onPress('Like')
            }>
            <Text style={styles.likes}>
              {isIcon == appIcons.outlineHeart ? 10 : 11} Likes
            </Text>
          </Pressable>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[appStyles.directionRow, appStyles.gap_8]}
          onPress={() => NavService.navigate('Comments')}>
          <Image
            source={appIcons.outlineComment}
            resizeMode={'contain'}
            style={{
              width: 18,
              height: 18,
            }}
          />
          <Pressable
            // {
            //   loggedInUser.role =='Business' ?
            // }
            onPress={() =>
              loggedInUser.role == 'Business'
                ? NavService.navigate('PostScreen')
                : onPress('Comment')
            }>
            <Text style={[styles.likes]}>{item?.commentCount} Comments</Text>
          </Pressable>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[appStyles.directionRow, appStyles.gap_8]}
          onPress={() => NavService.navigate('Comments')}>
          <Image
            source={appIcons.outlineShare}
            resizeMode={'contain'}
            style={{
              width: 18,
              height: 18,
            }}
          />
          <Pressable onPress={() => onPress('Share')}>
            <Text style={[styles.likes]}>{item?.commentCount} Share</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, marginTop: 10 }}>
        <CustomText
          text={item?.description}
          style={styles.post}
          expandable={true}
        />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    // ...Shadows.shadow3,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: colors.white,
    // paddingHorizontal: 20,
    // marginTop: 20,
    position: 'relative',
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
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  time: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.gray,
    marginTop: 2,
  },
  name: { fontSize: 15, fontWeight: '600', color: colors.black },
  dot: {
    width: 15,
    height: 20,
    resizeMode: 'contain',
    tint: colors.black,

  },
  footer: {
    flexDirection: 'row',
    // backgroundColor:'red',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 0.4,
    borderColor: 'lightgrey',
    paddingTop: 10,
  },
  videoStyle: {
    height: '100%',
    ...appStyles.w100,
    borderRadius: 10,
  },
  likes: {
    fontSize: 13,

    color: colors.gray,
    textDecorationLine: 'underline',
    ...appStyles.family_Montserrat_Regular,
  },
  post: {
    flex: 1,
    fontSize: 14,
    fontWeight: '300',
    color: colors.black,
    justifyContent: 'center',
  },
  menu: {
    backgroundColor: colors.gray,
    width: width * 0.25,
    padding: 5,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    position: 'absolute',
    right: 11,
    top: 15,
    alignItems: 'center',
    zIndex: 1000,
  },
  menuText: {
    fontSize: 13,
    color: colors.black,
    fontWeight: '300',
    lineHeight: 20,
  },
  smallIcon: {
    width: 20,
    height: 20,
  },
  businessImg: {
    height: 180,
    ...appStyles.w100,
  },
  imageContainer: {
    ...appStyles.directionRow,
    ...appStyles.alignCenter,
    // marginLeft:10
  },
  img: {
    height: '110%',
    ...appStyles.w100,
    borderRadius: 10,
  },
});
