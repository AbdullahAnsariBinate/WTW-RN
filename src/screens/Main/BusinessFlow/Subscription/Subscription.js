import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  Platform,
  StyleSheet,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';
import AppBackground from '../../../../components/AppBackground';
import CustomButton from '../../../../components/CustomButton';
import {colors, size} from '../../../../utils';
import {appIcons, appImages} from '../../../../assets';
import appStyles from '../../../appStyles';
import CustomText from '../../../../components/CustomText';
import Img from '../../../../components/Img';
import NavService from '../../../../helpers/NavService';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Data = [
    {
      title: 'Gold Package',
      desciption: [
        {
          point:
            ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        },
        {
          point:
            ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        },
        {
          point:
            ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        },
      ],
      price: '$120',
      Icon: appIcons.verify,
    },
    {
      title: 'Bronze Package',
      desciption: [
        {
          point:
            ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        },
        {
          point:
            ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        },
        {
          point:
            ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        },
      ],

      price: '$120',
      Icon: appIcons.verify,
    },
    {
      title: 'Silver Package',
      desciption: [
        {
          point:
            ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        },
        {
          point:
            ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        },
        {
          point:
            ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        },
      ],
      price: '$50',
      Icon: appIcons.verify,
    },
  ];
  render() {
    const carouselRef = React.createRef(null);
    const renderItem = item => {
      console.log('check', item);
      const data = item?.item;
      // // console.log(item, 'urwsss');
      return (
        <View style={styles.mainView}>
          <View style={styles.mainCont}>
            <View style={styles.subscriptionBgImg}>
              <View style={styles.TopTextView}>
                <CustomText style={styles.packageHeading} text={data?.title} />
              </View>

              {data.desciption.map(value => (
                <View style={styles.descrip}>
                  <Img
                    tintColor={colors.primary}
                    local
                    src={data.Icon}
                    style={{height: 20, width: 20, bottom: 10}}
                  />
                  <CustomText style={styles.desciption} text={value?.point} />
                </View>
              ))}
            </View>
            <View
              style={{
                marginBottom: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CustomText style={styles.priceHeading} text={data?.price} />
              <CustomText style={styles.Yearly} text={'Yearly'} />
            </View>
          </View>
          <CustomButton
            onPress={() => NavService.navigate('Checkout')}
            title="Subscribe"
            buttonStyle={styles.buyBtn}
            textStyle={styles.btnTitle}
          />
        </View>
      );
    };
    const ListFooterComponent = () => {
      return (
        <CustomButton
          title="Subscribe"
          buttonStyle={styles.buyBtn}
          textStyle={styles.btnTitle}
        />
      );
    };
    return (
      <AppBackground
        whiteBg
        title={'Subscription'}
        back
        notification={false}
        marginHorizontal={false}>
        <View style={styles.container}>
          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 110}
            data={this.Data}
            renderItem={item => renderItem(item)}
            // ListFooterComponent={<ListFooterComponent />}
            hasParallaxImages={true}
          />
        </View>
      </AppBackground>
    );
  }
}

export default Subscription;
