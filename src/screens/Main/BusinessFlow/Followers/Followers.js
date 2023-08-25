// import {FlatList, Text, View} from 'react-native';
// import React, {Component} from 'react';
// import AppBackground from '../../../../components/AppBackground';
// import styles from './styles';
// import CustomButton from '../../../../components/CustomButton';
// import {colors} from '../../../../utils';
// import NavService from '../../../../helpers/NavService';
// import Img from '../../../../components/Img';
// import {appIcons} from '../../../../assets';
// import CustomTextInput from '../../../../components/CustomTextInput';
// import {modalLikeList} from '../../../../utils/dummyData';
// import CustomList from '../../../../components/CustomList';
// class Followers extends Component {
//   render() {
//     const renderItem1 = ({item}) => {
//       return <CustomList isProfile={true} item={item} />;
//     };
//     const ItemSeparatorComponent = () => {
//       return <View style={styles.lineSeparator} />;
//     };

//     return (
//       <AppBackground title={'Followers'} back>
//         <View style={styles.searchContainer}>
//           {/* <CustomTextInput
//             width={'88%'}
//             maxLength={30}
//             placeholder={'Search'}
//             // value={BusinessName}
//             placeholderColor={colors.gray}
//             borderRadius={20}
//             isBorderShow
//             borderColor={colors.primary}
//             keyboardType={'email-address'}
//             containerStyle={{
//               bottom: 14,
//             }}
//             // onChangeText={value => this.setState({BusinessName: value})}
//           /> */}
//           <FlatList
//             style={styles.FlatList}
//             data={modalLikeList}
//             showsVerticalScrollIndicator={false}
//             ItemSeparatorComponent={ItemSeparatorComponent}
//             renderItem={renderItem1}
//           />

          {/* <CustomButton
            title={'Search'}
            buttonStyle={styles.search}
            color={colors.red}
            textStyle={styles.title}
            onPress={() => NavService.navigate('Search')}
          />
         */}
//         </View>
//       </AppBackground>
//     );
//   }
// }
// export default Followers;

import {FlatList, Text, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import {modalLikeList, profileData} from '../../../../utils/dummyData';
import Card from '../../../../components/Card';
import CustomList from '../../../../components/CustomList';
import styles from './styles';
class Followers extends Component {
  render() {
    const renderItem1 = ({item}) => {
      return <CustomList isProfile={true} item={item} removebutton />;
    };
    return (
      <AppBackground title={'Followers'} back>
        <FlatList
          style={styles.FlatList}
          data={modalLikeList}
          contentContainerStyle={{paddingHorizontal:20}}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem1}
        />
      </AppBackground>
    );
  }
}
export default Followers;
