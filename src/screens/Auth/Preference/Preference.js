import React, {Component} from 'react';
import {Text, TouchableOpacity, View, Image, FlatList} from 'react-native';
import {connect} from 'react-redux';
import * as EmailValidator from 'email-validator';
import CustomBackground from '../../../components/CustomBackground';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import Toast from 'react-native-toast-message';
import NavService from '../../../helpers/NavService';
import {schema} from '../../../utils/validation';
import {colors} from '../../../utils';
import {appIcons, appImages, appLogos} from '../../../assets/index';
import {loginUser, setUserType} from '../../../redux/actions/authAction';

import styles from './styles';
import OutlineInput from '../../../components/OutlineInput';
import { data } from '../../../utils/dummyData';

class Preference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButtonIndexes: new Set(),
    };
  }
  handleButtonPress = index => {
    this.setState(prevState => {
      const selectedButtonIndexes = new Set(prevState.selectedButtonIndexes);
      if (selectedButtonIndexes.has(index)) {
        selectedButtonIndexes.delete(index);
      } else {
        selectedButtonIndexes.add(index);
      }
      return {selectedButtonIndexes};
    });
  };

  renderButton = ({item, index}) => {
    const isSelected = this.state.selectedButtonIndexes.has(index);

    return (
      <CustomButton
        title={item.label}
        buttonStyle={[styles.button, isSelected ? styles.selectedButton : null]}
        textStyle={[
          styles.buttonText,
          isSelected ? styles.selectedButtonText : null,
        ]}
        onPress={() => this.handleButtonPress(index)}
      />
      //   <TouchableOpacity
      //     style={[styles.button, isSelected ? styles.selectedButton : null]}
      //     onPress={() => this.handleButtonPress(index)}>
      //     <Text
      //       style={[
      //         styles.buttonText,
      //         isSelected ? styles.selectedButtonText : null,
      //       ]}>
      //       {item.label}
      //     </Text>
      //   </TouchableOpacity>
    );
  };
  onSubmit = () => {
    const {email, password} = this.state;
    const {role} = this.props?.route?.params;
    console.log(role, 'roleroleroleaaaa');
    // setting user type here
    this.props.setUserType();

    
      let payload = {
        role: role,
        email: 'abc@gmail.com',
        password: '123456',
      };
      console.log(role, 'rolerrrrrsssssss');
      this.props.loginUser(payload);


      
      Toast.show({
        text1: role == 'User'? 'User Login successful' :'business login successful',
        type: 'success',
        visibilityTime: 3000,
      });
    
    // if (!email && !password) {
    //   Toast.show({
    //     text1: 'Please enter all fields',
    //     type: 'error',
    //     visibilityTime: 3000,
    //   });
    // } else if (!email) {
    //   Toast.show({
    //     text1: 'Please enter email address',
    //     type: 'error',
    //     visibilityTime: 3000,
    //   });
    // } else if (!EmailValidator.validate(email)) {
    //   Toast.show({
    //     text1: 'Please enter a valid email address',
    //     type: 'error',
    //     visibilityTime: 3000,
    //   });
    // } else {
    //   let payload = {
    //     role: role,
    //     email: 'abc@gmail.com',
    //     password: '123456',
    //   };
    //   console.log(role, 'rolerrrrrsssssss');
    //   this.props.loginUser(payload);
    //   Toast.show({
    //     text1: 'Login successful',
    //     type: 'success',
    //     visibilityTime: 3000,
    //   });
    // }
  };

  render() {
    const {email, password} = this.state;
    return (
      <CustomBackground
        titleText={'Preference'}
        background={appImages.backgroundImage}
        showLogo={false}>
        <View style={styles.container}>
          <FlatList
            data={data}
            numColumns={3}
            renderItem={this.renderButton}
            keyExtractor={(item, index) => index.toString()}
          />
              <CustomButton
              title="Continue"
              onPress={this.onSubmit}
              buttonStyle={styles.press}
              textStyle={styles.btnstext}
            />
        </View>
      </CustomBackground>
    );
  }
}

const mapStateToProps = state => ({
  userType: state, // depending on the structure of your Redux state
});

const actions = {loginUser, setUserType};

export default connect(mapStateToProps, actions)(Preference);
