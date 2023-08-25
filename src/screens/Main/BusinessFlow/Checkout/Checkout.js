import {Text, StyleSheet, View, FlatList} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import CustomText from '../../../../components/CustomText';
import {Checkoutinfo, Packageinfo, event} from '../../../../utils/dummyData';
import styles from './styles';
import CustomButton from '../../../../components/CustomButton';
import appStyles from '../../../appStyles';
import {colors} from '../../../../utils';
import CustomSingleList from '../../../../components/CustomSingleList';
import NavService from '../../../../helpers/NavService';

class Checkout extends Component {
  render() {
    const ItemSeparatorComponent = () => {
      return <View style={styles.lineSeparator} />;
    };
    return (
      <AppBackground title={'Checkout'} back>
        <View style={styles.Goldpackage}>
          <CustomText text="Gold Package" style={styles.goldtext} />
          <CustomText text={event[0].description} style={styles.description} />
        </View>
        <FlatList
          contentContainerStyle={styles.containerStyle}
          
          ItemSeparatorComponent={ItemSeparatorComponent}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
          data={Checkoutinfo}
          renderItem={({item}) => <CustomSingleList item={item} Details />}
        />
        <CustomButton
          title="Proceed Payment "
          onPress={() => NavService.navigate('PaymentCard')}
          buttonStyle={styles.press}
          textStyle={styles.btnstext}
        />
      </AppBackground>
    );
  }
}
export default Checkout;
