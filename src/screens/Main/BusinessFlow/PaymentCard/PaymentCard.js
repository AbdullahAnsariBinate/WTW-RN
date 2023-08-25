import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { colors } from '../../../../utils';
import { styles } from './styles';
import CustomText from '../../../../components/CustomText';
import CustomButton from '../../../../components/CustomButton';
import NavService from '../../../../helpers/NavService';
import AppBackground from '../../../../components/AppBackground'
import { appIcons } from '../../../../assets';
import CustomIcon from '../../../../components/CustomIcon';
import appStyles from '../../../appStyles';
import CustomTextInput from '../../../../components/CustomTextInput';
import ModalPopup from '../../../../containers/Popup/modalPopup/ModalPopup';

export class PaymentCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 1,
            reason: '',
            showModal: false
        };
    }
    handleOptionSelect = (option) => {
        this.setState({ selectedOption: option });
    };
    renderCustomRadioButton = (option, text, icon) => {
        const { selectedOption } = this.state;
        const isSelected = selectedOption === option;
        return (
            <TouchableOpacity
                style={[styles.radioButtonContainer, isSelected && styles.selectedRadioButton]}
                onPress={() => this.handleOptionSelect(option)}
                activeOpacity={0.9}
            >
                <View style={[appStyles.directionRow, appStyles.gap_10, appStyles.alignCenter]}>
                    <CustomIcon src={icon} local size={48} resizeMode={'contain'} />
                    <CustomText
                        text={text}
                        numberOfLines={1}
                        style={styles.name}
                    />
                </View>
                {/* <View style={styles.radioButton}>
                    <View style={[isSelected && styles.selectedInnerCircle]} />
                </View> */}
            </TouchableOpacity>
        );
    };
    render() {
        const { reason, selectedOption, showModal } = this.state;
        const handleGoBack = () => {
            this.setState({ showModal: false })
            NavService.goBack()
        }
        const handleClose = () => {
            this.setState({ showModal: false })

        }
        return (
            <AppBackground title={'Card Details'} marginHorizontal={false} back>
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    {this.renderCustomRadioButton(1, 'Credit / Debit Card', appIcons.creditCard)}
                    {this.renderCustomRadioButton(2, 'Apple Pay', appIcons.applePay)}
                    {this.renderCustomRadioButton(3, 'Amazon Pay', appIcons.amazonPay)}
                    {this.renderCustomRadioButton(4, 'Pay Pal', appIcons.paypal)}
                    {this.renderCustomRadioButton(5, 'Google Pay', appIcons.googlePay)}

                    <View style={appStyles.gap_10}>
                        <CustomTextInput
                            width={'100%'}
                            maxLength={30}
                            placeholder={'**** **** **** 1234'}
                            // value={BusinessName}
                            placeholderColor={colors.gray}
                            borderRadius={20}
                            isBorderShow
                            borderColor={colors.primary}
                            keyboardType={'numeric'}
                            rightImage={appIcons.visa}
                        // onChangeText={value => this.setState({ BusinessName: value })}
                        />
                        <CustomTextInput
                            width={'100%'}
                            maxLength={30}
                            placeholder={'**** **** **** 1234'}
                            // value={BusinessName}
                            placeholderColor={colors.gray}
                            borderRadius={20}
                            isBorderShow
                            borderColor={colors.primary}
                            keyboardType={'numeric'}
                            rightImage={appIcons.masterCard}
                        // onChangeText={value => this.setState({ BusinessName: value })}
                        />
                        <CustomButton
                            title="Add New Card"
                            onPress={NavService.goBack}
                            buttonStyle={styles.cancelbutton}
                            textStyle={styles.tbnText}
                        />
                    </View>

                    <View style={{ marginTop: 30, paddingBottom: 8 }}>

                        <CustomButton
                            title="Pay Now"
                            onPress={() => this.setState({ showModal: true })}
                            buttonStyle={styles.cancelbutton}
                            textStyle={styles.tbnText}
                        />
                        <ModalPopup
                            feed
                            isVisible={showModal}
                            desc='You have subscribe Gold Package Plan'
                            title={'Congratulation'}
                            onPress={handleGoBack}
                            handleClose={handleClose}
                            onBackButtonPress={handleClose}
                            onBackdropPress={handleClose}
                            onYesPress={handleClose}
                            onNoPress={handleClose}
                        />
                    </View>

                </ScrollView>


            </AppBackground>
        );
    }
}
export default PaymentCard;