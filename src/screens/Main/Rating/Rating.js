import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import AppBackground from '../../../components/AppBackground';
import {appIcons, appImages} from '../../../assets';
import CustomText from '../../../components/CustomText';
import ProfileImage from '../../../components/ProfileImage';
import appStyles from '../../appStyles';
import {size} from '../../../utils';
import {event} from '../../../utils/dummyData';
import Img from '../../../components/Img';
import styles from './styles';
import {Rating} from 'react-native-ratings';

class Rate extends Component {
  state = {
    showRating: 0,
  };

  ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
    this.setState({showRating: rating});
  };

  renderRatingItem = (rateValue, count, styleNumber) => (
    <View style={styles.MainView}>
      <CustomText text={rateValue.toString()} style={styles.rate} />
      <Img local src={appIcons.star} style={styles.icon} />

      <View style={styles['head' + styleNumber]}>
        <View style={styles['subhead' + styleNumber]}></View>
      </View>
      <CustomText text={count.toString()} style={styles.rate} />
    </View>
  );

  render() {
    return (
      <AppBackground
        back
        title={'Rating'}
        marginHorizontal={false}
        leftIcon={appIcons.drawer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[
              appStyles.margin2Percent,
              appStyles.directionColumn,
              appStyles.alignCenter,
              appStyles.alignSelf,
              appStyles.gap_5,
              appStyles.paddingVertical_2,
            ]}>
            {/* <ProfileImage imageUri={appImages.pizzaTwo} innerAsset size={120} /> */}
            <CustomText
              text={event[0].heading}
              size={size.normal}
              style={appStyles.family_Montserrat_Semi_Bold}
            />
            <Img local src={appIcons.rating} style={styles.img} />
            <CustomText
              text={event[0].rate}
              size={size.large}
              style={appStyles.family_Montserrat_Semi_Bold}
            />
            <CustomText
              text={event[0].Overall}
              size={size.large}
              color={'red'}
              style={styles.text}
            />

            <View style={styles.ratingContainer}>
              {this.renderRatingItem('5', 965, 1)}
              {this.renderRatingItem('4', 568, 2)}
              {this.renderRatingItem('3', 458, 3)}
              {this.renderRatingItem('2', 421, 4)}
              {this.renderRatingItem('1', 236, 5)}

              <View style={[appStyles.alignCenter, appStyles.margin1Percent]}>
                <CustomText
                  text="Rate Now"
                  style={appStyles.family_Montserrat_Semi_Bold}
                />
                <Rating
                  fractions
                  onFinishRating={this.ratingCompleted}
                  style={{paddingVertical: 5}}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </AppBackground>
    );
  }
}

export default Rate;
