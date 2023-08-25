import React, {Component} from 'react';
import {View, Pressable, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import CustomModal from '../../../components/CustomModal';
import CustomText from '../../../components/CustomText';
import CustomCard from '../../../components/CustomCard';
import CustomButton from '../../../components/CustomButton';
import CustomIcon from '../../../components/CustomIcon';
import {appIcons, appImages} from '../../../assets';
import {colors, size} from '../../../utils';
import {business, foll, homeData, modalData} from '../../../utils/dummyData';
import appStyles from '../../../screens/appStyles';
import {styles} from './styles';

class ModalPopup extends Component {
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
      businessProfile,
      confirmation,
      title,
      onYesPress,
      onNoPress,
      desc,
      sucessText,
      unsuccessText,
      feed,
      onPress,
      sucess,
    } = this.props;
    return (
      <CustomModal
        onBackdropPress={onBackdropPress}
        onBackButtonPress={onBackButtonPress}
        visible={isVisible}
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        togglePopup={togglePopup}>
        <View style={styles.mainContainer}>
          <View
            style={[
              styles.main,
              {
                borderWidth: feed || sucess ? 1.5 : 0,
                borderColor: colors.blue_1,
              },
            ]}>
            <View
              style={[
                styles.modalChild,
                feed || (sucess && styles.customStyle),
              ]}>
              <CustomText
                style={styles.modalTitle}
                text={title ? title : 'Business Profile'}
              />
              <Pressable style={styles.close} onPress={handleClose}>
                <Image
                  source={appIcons.cross}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: feed ? colors.blue_1 : colors.white,
                  }}
                  resizeMode="contain"
                />
              </Pressable>
            </View>
            {businessProfile && (
              <View
                style={[
                  appStyles.directionColumn,
                  {flex: 1, paddingHorizontal: 10},
                ]}>
                {business.map(item => (
                  <CustomCard
                    item={item}
                    button
                    businessprofile
                    handleViewDetail={() =>
                      NavService.navigate('BusinessDetail')
                    }
                  />
                ))}
                <View style={[appStyles.directionRow, appStyles.gap_5]}>
                  <CustomButton
                    onPress={() => NavService.navigate('EventDetail')}
                    title="Upcoming Event"
                    buttonStyle={[
                      styles.press,
                      {backgroundColor: colors.white},
                    ]}
                    textStyle={[styles.btnstext, {color: colors.primary}]}
                  />
                  <CustomButton
                    onPress={() => NavService.navigate('EventDetail')}
                    title="View Business Page"
                    buttonStyle={[
                      styles.press2,
                      {backgroundColor: colors.primary},
                    ]}
                    textStyle={[styles.btnstext2, {color: colors.white}]}
                  />
                </View>
              </View>
            )}
            {confirmation && (
              <View
                style={[
                  appStyles.gap_10,
                  appStyles.alignCenter,
                  appStyles.paddingVertical_3,
                ]}>
                <CustomText style={styles.desc} text={desc} />
                <View style={[appStyles.directionRow]}>
                  <CustomButton
                    onPress={onYesPress}
                    title={sucessText}
                    buttonStyle={[
                      styles.press,
                      {backgroundColor: colors.white},
                    ]}
                    textStyle={[styles.btnstext, {color: colors.primary}]}
                  />
                  <CustomButton
                    onPress={onNoPress}
                    title={unsuccessText}
                    buttonStyle={[
                      styles.press2,
                      {backgroundColor: colors.primary},
                    ]}
                    textStyle={[styles.btnstext2, {color: colors.white}]}
                  />
                </View>
              </View>
            )}
            {feed && (
              <View
                style={[
                  appStyles.gap_10,
                  appStyles.alignCenter,
                  appStyles.paddingVertical_3,
                ]}>
                <CustomIcon src={appImages.smile} size={150} local />
                <CustomText style={styles.titleFeed} text={title} />
                <CustomText style={styles.des} text={desc} />
                <View style={[appStyles.directionRow]}>
                  <CustomButton
                    onPress={onPress}
                    title={'Go Back'}
                    buttonStyle={[
                      styles.press2,
                      {backgroundColor: colors.primary},
                    ]}
                    textStyle={[styles.btnstext2, {color: colors.white}]}
                  />
                </View>
              </View>
            )}
            {sucess && (
              <View
                style={[
                  appStyles.gap_10,
                  appStyles.alignCenter,
                  appStyles.paddingVertical_3,
                ]}>
                <View style={styles.lottieContainer}>
                  <LottieView
                    // ref={animationRef}
                    source={require('../modalPopup/animation.json')}
                    autoPlay
                    loop
                    style={{height: 100, width: 100}}
                  />
                  <CustomText style={styles.title} text={title} />
                </View>
              </View>
            )}
          </View>
        </View>
      </CustomModal>
    );
  }
}

export default ModalPopup;
