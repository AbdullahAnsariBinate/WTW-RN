import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import appStyles from '../../appStyles';
import { buttonTitles } from '../../../utils/dummyData';
import { colors } from '../../../utils';

const TabsHandle = ({ item, handleClick }) => {
    // Initialize the state to keep track of the selected item
    const [selectedItem, setSelectedItem] = useState(item[0]);

    // Update the state when a button is pressed and call the external handleClick
    const handleButtonPress = (value) => {
        setSelectedItem(value);
        handleClick(value);
    }

    return (
        <ScrollView horizontal={true} contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false} alwaysBounceHorizontal={false} bounces={false} style={styles.mainContainer}>
            {
                item.map((value) => (
                    <CustomButton
                        onPress={() => handleButtonPress(value)}
                        title={value?.title}
                        buttonStyle={value === selectedItem ? styles.active : styles.buttonStyles}
                        textStyle={[
                            styles.textStyle,
                            { color: value === selectedItem ? colors.white : colors.primary }
                        ]}
                    />
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingBottom: 10,
        height: 65,
        borderBottomWidth: 1,
        borderColor: colors.skyBlue
    },
    container: {
        height: 65,
        gap: 5,

    },
    buttonStyles: {
        ...appStyles.w_40,
        height: 45,
        borderWidth: 1,
        backgroundColor: colors.white,
        borderColor: colors.primary
    },
    active: {
        ...appStyles.w_40,
        height: 45,
        backgroundColor: colors.primary,
        borderWidth: 1,
        borderColor: colors.primary
    },
    textStyle: {
        ...appStyles.family_Montserrat_Bold,
        ...appStyles.font13,
    }
});

export default TabsHandle;
