import React, {Component} from 'react';
import {Dimensions, FlatList, ScrollView, View} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import {appIcons, appImages} from '../../../assets';
import CustomText from '../../../components/CustomText';
import ProfileImage from '../../../components/ProfileImage';
import appStyles from '../../appStyles';
import {colors, size} from '../../../utils';
import {EventDetailinfo, event, itemInfo} from '../../../utils/dummyData';
import CustomSingleList from '../../../components/CustomSingleList';
import styles from './styles';
import CustomButton from '../../../components/CustomButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Img from '../../../components/Img';
import {loginUser, setUserType} from '../../../redux/actions/authAction';
import {connect} from 'react-redux';
// import ConfirmationModal from '../../../containers/Modal/ConfirmationPopup';
import NavService from '../../../helpers/NavService';
import ModalPopup from '../../../containers/Popup/modalPopup/ModalPopup';
const {width} = Dimensions.get('screen');

export class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      keyboardStatus: false,
    };
  }
  render() {
    const {showModal} = this.state;

    const handleClose = () => {
      this.setState({showModal: false});
    };

    const ItemSeparatorComponent = () => {
      return <View style={styles.lineSeparator} />;
    };
    const user = this.props.user;
    return (
      <AppBackground
        back
        title={'Event Detail'}
        // notification
        marginHorizontal={false}
        // rightIcon={appIcons.recktangle}
        leftIcon={appIcons.drawer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[
              appStyles.alignCenter,
              appStyles.borderBottom_1,
              appStyles.paddingVertical_2,
              appStyles.borderBottomColor,
            ]}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Img src={appImages.Panel} local style={styles.titleimage} />
              <View style={styles.subview}>
                <Img
                  local
                  src={appImages.pizzaFour}
                  style={styles.subimage}
                  // tintColor={colors.white}
                />
                <View>
                  <CustomText
                    text="Yummy Pizza"
                    style={{
                      color: colors.white,
                      ...appStyles.family_Montserrat_Bold,
                    }}
                  />
                  <CustomText
                    text="New York"
                    style={{
                      color: colors.white,
                    }}
                  />
                </View>
              </View>
              <View style={styles.posted}>
                <CustomText
                  text="Posted"
                  style={{
                    color: colors.white,
                    alignSelf: 'flex-end',
                    ...appStyles.font12,
                    ...appStyles.family_Montserrat_Regular,
                  }}
                />
                <CustomText
                  text="June 20.2023"
                  style={{
                    ...appStyles.font12,
                    color: colors.white,
                    ...appStyles.family_Montserrat_Regular,
                  }}
                />
              </View>
            </View>
            <View style={styles.titless}>
              <CustomText
                text={event[0].title}
                size={size.normal}
                style={appStyles.family_Montserrat_Semi_Bold}
              />

              <CustomText size={size.tiny} text={event[0].description} />
              {EventDetailinfo[0].heading === 'location' && (
                <CustomButton
                  title="Location Button"
                  onPress={this.onLocationButtonPress}
                  buttonStyle={[
                    styles.locationButton,
                    {backgroundColor: 'red'},
                  ]}
                  textStyle={styles.locationButtonText}
                />
              )}
            </View>
          </View>
          <FlatList
            contentContainerStyle={[{flexGrow: 1}]}
            ItemSeparatorComponent={ItemSeparatorComponent}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
            data={EventDetailinfo}
            renderItem={({item}) => <CustomSingleList item={item} Details />}
          />
        </ScrollView>
        {user.role == 'Business' ? (
          <View style={styles.buttonView}>
            <CustomButton
              title="Delete Event"
              onPress={() => this.setState({showModal: true})}
              buttonStyle={[styles.press, {backgroundColor: colors.white}]}
              textStyle={[styles.btnstext, {color: colors.primary}]}
            />
            <CustomButton
              title="Edit Event"
              onPress={() => NavService.navigate('EditEvent')}
              buttonStyle={[styles.press, {backgroundColor: colors.primary}]}
              textStyle={[styles.btnstext, {color: colors.white}]}
            />
          </View>
        ) : (
          <View style={styles.buttonView}>
            <CustomButton
              title="Shares"
              onPress={this.onSubmit}
              buttonStyle={[styles.press, {backgroundColor: colors.white}]}
              textStyle={[styles.btnstext, {color: colors.primary}]}
            />
            <CustomButton
              title="Interested"
              onPress={this.onSubmit}
              buttonStyle={[styles.press, {backgroundColor: colors.primary}]}
              textStyle={[styles.btnstext, {color: colors.white}]}
            />
          </View>
        )}
        <ModalPopup
          confirmation
          isVisible={showModal}
          desc="Are you sure you want to delete this events"
          sucessText="Yes, Delete"
          unsuccessText="No"
          title={'Delete'}
          handleClose={handleClose}
          onBackButtonPress={handleClose}
          onBackdropPress={handleClose}
          onYesPress={handleClose}
          onNoPress={handleClose}
        />
      </AppBackground>
    );
  }
}

function mapStateToProps({authReducer}) {
  return {
    user: authReducer?.user,
  };
}

const actions = {loginUser};
export default connect(mapStateToProps, actions)(EventDetail);
