import {Dimensions, StyleSheet} from 'react-native';

import appStyles from '../../appStyles';
import { colors } from '../../../utils';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    mainContainer: {
      ...appStyles.mainContainer,
    },
    heading: {
      color: colors.primary,
      ...appStyles.font16,
      ...appStyles.family_Jost_Bold,
      marginBottom: 10,
    },
    para: {
        ...appStyles.family_Montserrat_Semi_Bold,
        ...appStyles.margin1Percent,
      color: colors.darkGray,
      lineHeight: 20,
      width: '95%',
      alignSelf: 'center',
      textAlign: 'justify',
      ...appStyles.family_Jost_Medium,
    },
  });
export default styles;
