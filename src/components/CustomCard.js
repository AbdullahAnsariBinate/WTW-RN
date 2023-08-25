import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Fragment } from 'react';
import appStyles from '../screens/appStyles';
import { colors, size } from '../utils';
import CustomText from './CustomText';
import Img from './Img';
import { appIcons, appImages } from '../assets';
import CustomButton from './CustomButton';
import Shadows from '../helpers/Shadows';
import { rating } from '../utils/dummyData';
import NavService from '../helpers/NavService';
import { useSelector } from 'react-redux';

const CustomCard = ({
  item,
  button,
  event,
  businessprofile,
  handleViewDetail,
  ViewProfile,
  HandleEventDetail,
  title,
  businessEvent,
  handlePress
}) => {
  console.log('item', item)
  const loggedInUser = useSelector(({ authReducer }) => authReducer?.user);
  console.log(loggedInUser.role, 'loggedInUserloggedInUser');
  return (
    <View style={[businessprofile ? styles.customContainer : styles.container, businessEvent ? { backgroundColor: colors.lightGray1 } : null]}>
      {event && (
        <Fragment>
          {!businessEvent && <CustomText
            text={item?.title}
            style={appStyles.family_Montserrat_Semi_Bold}
            size={size.medium}
          />}
          <View style={styles.middleContainer}>
            <View style={styles.leftContainer}>
              <View style={styles.imgContainer}>
                <Img src={item?.image} style={styles.img} local />
              </View>
            </View>
            <View style={styles.rightContainer}>
              <CustomText
                text={item?.title}
                style={styles.title}
                size={size.normal}
              />
              <CustomText
                text={item?.weekday}
                size={size.xtiny}
                style={styles.weekday}
              />
              <View style={{ gap: 3 }}>
                <CustomText
                  text={item?.description}
                  size={size.tiny}
                  style={styles.description}
                  expandable={true}
                  intialLength={70}
                />
                {
                  item.postBy &&

                  <View style={[appStyles.directionRow, { gap: 5 }]}>
                    <CustomText
                      text="Posted by"
                      size={size.xxtiny}
                      style={styles.weekday}
                    />
                    <TouchableOpacity onPress={() => NavService.navigate('OtherBusiness')}>
                      <CustomText
                        text={item.postBy}
                        style={styles.linkText}
                      />
                    </TouchableOpacity>
                  </View>
                }

                <CustomText
                  text={`${item?.count} peoples interested `}
                  size={size.xtiny}
                  style={styles.weekday}
                />
              </View>
            </View>
          </View>
          {button ? (
            <View style={[styles.buttonContainer, {}]}>
              <CustomButton
                onPress={() => NavService.navigate('EventDetail')}
                title="View Details"
                buttonStyle={[
                  styles.buttonStyles,
                  { backgroundColor: colors.white },
                ]}
                textStyle={[styles.buttonText, { color: colors.primary }]}
              />

              <CustomButton
                onPress={handlePress}
                title="Interested"
                buttonStyle={styles.buttonStyles}
                textStyle={styles.buttonText}
              />
            </View>
          ) : (
            <View style={[appStyles.alignSelf]}>
              <CustomButton
                onPress={() => NavService.navigate('EventDetail')}
                title="View Details"
                buttonStyle={[styles.buttonStyles, appStyles.w_80]}
                textStyle={styles.buttonText}
              />
            </View>
          )}
        </Fragment>
      )}
      {businessprofile && (
        <Fragment>
          <View style={styles.businessImg}>
            <Img
              src={item?.image}
              style={styles.img}
              local
              resizeMode={'cover'}
            />
          </View>
          <View style={styles.middleDataContainer}>
            <View style={styles.leftContainer}>
              <View style={styles.imgContainer}>
                <Img src={item?.imageTwo} style={styles.img} local />
              </View>
            </View>
            <View style={styles.rightContainer}>
              <View
                style={[appStyles.directionRow, appStyles.justifySpaceBetween]}>
                <View>
                  <CustomText
                    text={item?.heading}
                    style={styles.title}
                    size={size.normal}
                  />
                  <TouchableOpacity
                    onPress={() => NavService.navigate('Rating')}>
                    <View style={[appStyles.directionRow, { gap: 5, paddingTop: 1 }]}>
                      <View style={styles.starContainer}>
                        <Img
                          src={appIcons.star}
                          style={styles.allImages}
                          local
                        />
                      </View>
                      <CustomText
                        text={item?.rating}
                        style={styles.linkText2}
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => NavService.navigate('Followers')}>
                    <View style={[appStyles.directionRow, { gap: 5, paddingTop: 2 }]}>
                      <View style={styles.starContainer}>
                        <Img
                          src={appIcons.user}
                          style={styles.allImages}
                          local
                        />
                      </View>
                      <CustomText
                        text={'Followers'}
                        style={styles.linkText2}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
                <CustomButton
                  title="Follow"
                  buttonStyle={styles.follow}
                  leftIcon
                  textStyle={styles.btnText}
                />
              </View>
              <View style={styles.descContainer}>
                <CustomText
                  text={item?.description}
                  size={size.tiny}
                  style={styles.description}
                  expandable={true}
                  intialLength={80}
                />
              </View>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.phoneDataContainer}>
              <View style={styles.starContainer}>
                <Img src={appIcons.call} style={styles.allImages} local />
              </View>
              <CustomText
                text={item?.phone}
                style={appStyles.family_Montserrat_Regular}
                size={size.tiny}
              />
            </View>
            <View style={styles.phoneDataContainer}>
              <View style={styles.starContainer}>
                <Img src={appIcons.email} style={styles.allImages} local />
              </View>
              <CustomText
                text={item?.email}
                style={appStyles.family_Montserrat_Regular}
                size={size.tiny}
              />
            </View>
          </View>
          <View style={styles.viewDetails}>

            {ViewProfile && (
              <TouchableOpacity onPress={handleViewDetail}>
                <CustomText
                  text="View Item"
                  size={size.tiny}
                  style={styles.viewItemTxt}
                  textDecorationLine="underline"
                />
              </TouchableOpacity>
            )}
          </View>
        </Fragment>
      )}
    </View>
  );
};
export default CustomCard;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 15,
    backgroundColor: colors.white,
    ...Shadows.shadow3,

    marginHorizontal: 5,
    gap: 10,
    ...appStyles.directionColumn,
    ...appStyles.seperator,
  },
  customContainer: {
    gap: 10,
    ...appStyles.seperator,
  },
  middleContainer: {
    ...appStyles.directionRow,
    gap: 10,
  },
  text: {
    ...appStyles.family_Montserrat_Medium,
  },
  leftContainer: {
    // flex: 1
  },
  title: {
    ...appStyles.family_Montserrat_Semi_Bold,
    color: colors.black
  },
  imgContainer: {
    // flex: 1,
    height: 100,
    width: 100,
  },
  rightContainer: {
    flex: 2,
    gap: 4,
  },
  img: {
    height: '100%',
    ...appStyles.w100,
    borderRadius: 10,
  },
  buttonContainer: {
    ...appStyles.alignSelf,
    ...appStyles.directionRow,
    gap: 10,
  },
  buttonStyles: {
    backgroundColor: colors.primary,
    borderWidth: 1,
    height: 45,
    borderColor: colors.primary,
    ...appStyles.w_40,
  },
  buttonText: {
    fontSize: size.xxsmall,
    color: colors.white,
    ...appStyles.family_Montserrat_Medium
  },
  underLine: {
    textDecorationLine: 'underline',
  },
  businessImg: {
    height: 160,
    ...appStyles.w100,
  },
  middleDataContainer: {
    ...appStyles.directionRow,
    gap: 10,
    paddingLeft: 10,
  },
  starContainer: {
    height: 15,
    width: 15,
  },
  allImages: {
    height: '100%',
    ...appStyles.w100,
  },
  phoneDataContainer: {
    ...appStyles.directionRow,
    gap: 5,
    ...appStyles.alignCenter,
  },
  viewDetails: {
    ...appStyles.w100,
    alignItems: 'flex-end',
  },
  viewItemTxt: {
    ...appStyles.family_Montserrat_Semi_Bold,
    color: colors.primary,
  },
  infoContainer: {
    ...appStyles.directionRow,
    ...appStyles.justifySpaceBetween,
    ...appStyles.alignCenter,
    ...appStyles.margin1Percent,
  },
  follow: {
    ...appStyles.w_22,
    height: 34,
    backgroundColor: colors.white,
    gap: 5,
    marginRight: 5,
  },
  btnText: {
    ...appStyles.family_Montserrat_Bold,
    color: colors.primary,
    ...appStyles.font12,
  },
  descContainer: {
    ...appStyles.gap_5,
  },
  weekday: {
    ...appStyles.family_Montserrat_Regular,
    color: colors.font
  },
  description: {
    ...appStyles.family_Montserrat_Medium,
    color: colors.black
  },
  linkText: {
    color: colors.black,
    textDecorationLine: 'underline',
    ...appStyles.font10,
    ...appStyles.family_Montserrat_Medium
  },
  linkText2: {
    color: colors.font,
    textDecorationLine: 'underline',
    ...appStyles.font12,
    ...appStyles.family_Montserrat_Medium
  }
});
