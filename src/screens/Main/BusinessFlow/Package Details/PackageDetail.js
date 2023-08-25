import React, {Component} from 'react';
import {Dimensions, FlatList, ScrollView, View, Platform} from 'react-native';
import AppBackground from '../../../../components/AppBackground';
import {appIcons, appImages} from '../../../../assets';
import CustomText from '../../../../components/CustomText';
// import ProfileImage from '../../../components/ProfileImage';
import appStyles from '../../../appStyles';
import {colors, size} from '../../../../utils';
import {
  EventDetailinfo,
  Packageinfo,
  event,
  itemInfo,
} from '../../../../utils/dummyData';
import CustomSingleList from '../../../../components/CustomSingleList';
import styles from './styles';
import CustomButton from '../../../../components/CustomButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Img from '../../../../components/Img';
import {loginUser, setUserType} from '../../../../redux/actions/authAction';
import {connect} from 'react-redux';
// import ConfirmationModal from '../../../containers/Modal/ConfirmationPopup';
import NavService from '../../../../helpers/NavService';
import {shadow} from 'react-native-paper';
import Shadows from '../../../../helpers/Shadows';

const {width} = Dimensions.get('screen');

export class PackageDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showModal1: false,
      keyboardStatus: false,
    };
  }
  render() {
    const {showModal, showModal1} = this.state;

    const ItemSeparatorComponent = () => {
      return <View style={styles.lineSeparator} />;
    };
    const user = this.props.user;
    return (
      <AppBackground back title={'Subscription'} marginHorizontal={false}>
        <FlatList
          contentContainerStyle={[
            {
              ...appStyles.margin3Percent,
              backgroundColor: colors.white,
              borderRadius: 10,
              paddingHorizontal: 12,
              marginHorizontal: 5,

              shadowColor: colors.gray,
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 1,

              shadowRadius: 5,
              height: 370,
              elevation: 5,
            },
          ]}
          ItemSeparatorComponent={ItemSeparatorComponent}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
          data={Packageinfo}
          renderItem={({item}) => <CustomSingleList item={item} Details />}
        />
        <CustomButton
          title="Update Package"
          onPress={() => NavService.navigate('Subscription')}
          buttonStyle={styles.press}
          textStyle={styles.btnstext}
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
export default connect(mapStateToProps, actions)(PackageDetail);
