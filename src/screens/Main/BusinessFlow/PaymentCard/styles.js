

import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../../utils'
import appStyles from '../../../appStyles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        ...appStyles.gap_10,
        ...appStyles.justifySpaceBetween
    },
    radioButton: {
        height: 24,
        width: 24,
        borderRadius: 50,
        borderColor: colors.primary,
        borderWidth: 2,
        padding: 2
    },
    selectedInnerCircle: {
        height: 16,
        width: 16,
        borderRadius: 10,
        backgroundColor: colors.primary,
    },
    maincontainer: { flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: 10, },
    cancelbutton: { width: '100%', backgroundColor: colors.primary, },
    containerheight: {
        height: 180,
        backgroundColor: colors.cgray,
        width: '100%',
        borderRadius: 21,
        paddingHorizontal: 7,
        paddingVertical: 2,
        marginTop: 20,
        borderColor: 'transparent',
        paddingTop: 10
    },
    searchcontainerheight: {
        height: 180,
    },
    tbnText: {
        ...appStyles.family_Montserrat_Semi_Bold,
        color: colors.white,
        ...appStyles.font14
    },
    name: {
        ...appStyles.family_Montserrat_Regular,
        color: colors.black,
        ...appStyles.font14
    },


})