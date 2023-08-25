import { StyleSheet, View } from 'react-native'
import React from 'react'
import Img from './Img'
const CustomIcon = ({ src, local, resizeMode, tintColor, size }) => {
    return (
        <View style={{ height: size, width: size }}>
            <Img style={styles.img} src={src} local={local} resizeMode={resizeMode} tintColor={tintColor} />
        </View>
    )
}

export default CustomIcon

const styles = StyleSheet.create({
    img: {
        height: '100%',
        width: '100%'
    }
})