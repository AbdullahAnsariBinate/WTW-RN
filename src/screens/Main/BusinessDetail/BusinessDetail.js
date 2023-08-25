import React, {Component} from 'react';
import {Dimensions, FlatList, ScrollView, View} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import {appIcons, appImages} from '../../../assets';
import CustomText from '../../../components/CustomText';
import ProfileImage from '../../../components/ProfileImage';
import appStyles from '../../appStyles';
import {colors, size} from '../../../utils';
import {event, itemInfo} from '../../../utils/dummyData';
import CustomSingleList from '../../../components/CustomSingleList';
import styles from './styles';
import Img from '../../../components/Img';
const {width} = Dimensions.get('screen');

export class BusinessDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: null,
    };
  }
  render() {
    const {profileImage} = this.state;
    const ItemSeparatorComponent = () => {
      return <View style={styles.lineSeparator} />;
    };
    return (
      <AppBackground
        back
        title={'Business Profile'}
        marginHorizontal={false}
        leftIcon={appIcons.drawer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[
              appStyles.gap_5,
              appStyles.margin1Percent,
              appStyles.directionColumn,
              appStyles.alignCenter,
              appStyles.borderBottom_1,
              appStyles.paddingVertical_2,
              appStyles.borderBottomColor,
            ]}>
            <Img
              local
              src={appImages.pizza}
              style={{height: 130, width: 130, borderRadius: 100}}
            />
            {/* <ProfileImage
              // backgroundColor={colors.black}
              // name={'UserName'}
              borderRadius={100}
              innerAsset
              imageUri={
                profileImage !== null ? profileImage?.path : appImages.pizza
              }
            /> */}
            <CustomText
              text={event[0].heading}
              size={size.normal}
              style={appStyles.family_Montserrat_Semi_Bold}
            />
            <View
              style={[
                appStyles.directionRow,
                appStyles.gap_5,
                appStyles.alignCenter,
                appStyles.justifyCenter,
              ]}>
              <Img src={appIcons.star} local style={styles.star} />

              <CustomText
                text={event[0].rating}
                size={size.tiny}
                style={appStyles.family_Montserrat_Regular}
                textDecorationLine="underline"
              />
            </View>
            <CustomText text={event[0].description} />
          </View>
          <FlatList
            contentContainerStyle={[{flexGrow: 1}]}
            ItemSeparatorComponent={ItemSeparatorComponent}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
            data={itemInfo}
            renderItem={({item}) => <CustomSingleList item={item} />}
          />
        </ScrollView>
      </AppBackground>
    );
  }
}

export default BusinessDetail;
