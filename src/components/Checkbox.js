import { Clipboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils'
import Img from './Img'
import { appIcons } from '../assets'

const Checkbox = ({ isCheck, index, handleCheck }) => {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: isCheck == true ? colors.primary : colors.white, borderColor: isCheck == true ? colors.primary : colors.skyBlue }]} key={index} onPress={handleCheck}>
            {isCheck == true && <Img src={appIcons.check} local style={styles.image} resizeMode={'contain'} tintColor={colors.white} />}
        </TouchableOpacity>
    )
}

export default Checkbox

const styles = StyleSheet.create({
    container: {
        height: 24,
        width: 24,
        borderRadius: 5,
        borderWidth: 2,
        backgroundColor: colors.white,
        borderColor: colors.skyBlue,

        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 15,
        width: 15,
        paddingHorizontal: 5,
        paddingVertical: 5
    }
})