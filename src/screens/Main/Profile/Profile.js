import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import {appIcons, appImages} from '../../../assets';
import CustomText from '../../../components/CustomText';
import ProfileImage from '../../../components/ProfileImage';
import appStyles from '../../appStyles';
import {colors, size} from '../../../utils';
import {ProfileInfo, event, itemInfo} from '../../../utils/dummyData';
import CustomSingleList from '../../../components/CustomSingleList';
import styles from './styles';
import Img from '../../../components/Img';
import NavService from '../../../helpers/NavService';
const {width} = Dimensions.get('screen');

export class Profile extends Component {
  render() {
    const ItemSeparatorComponent = () => {
      return <View style={styles.lineSeparator} />;
    };
    return (
      <AppBackground
        back
        title={'My Profile'}
        // notification
        marginHorizontal={false}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[
              appStyles.margin2Percent,
              appStyles.directionColumn,
              appStyles.alignCenter,
              appStyles.gap_5,
              appStyles.borderBottom_1,
              appStyles.paddingVertical_2,
              appStyles.borderBottomColor,
            ]}>
            {/* <ProfileImage
              backgroundColor={colors.primary}
              imageUri={appImages.pizzaTwo}
              innerAsset
              size={120}
            /> */}
            <View
              style={{
                backgroundColor: colors.primary,
                height: 100,
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
              }}>
              <Img
                src={appIcons.userProfile}
                tintColor={colors.white}
                local
                style={{height: 60, width: 50}}
              />
            </View>
            <TouchableOpacity
              style={styles.editTouch}
              onPress={() => NavService.navigate('EditProfile')}>
              <Img
                tintColor={colors.white}
                local
                src={appIcons.editProfile}
                style={styles.icon}
              />
            </TouchableOpacity>
            <CustomText
              text={'William Roy'}
              size={size.normal}
              style={appStyles.family_Montserrat_Semi_Bold}
            />
          </View>
          <FlatList
            contentContainerStyle={[{flexGrow: 1, ...appStyles.margin1Percent}]}
            ItemSeparatorComponent={ItemSeparatorComponent}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
            data={ProfileInfo}
            renderItem={({item}) => <CustomSingleList item={item} />}
          />
        </ScrollView>
      </AppBackground>
    );
  }
}

export default Profile;
