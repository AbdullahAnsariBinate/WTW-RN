import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../utils";
import { fontSize, size } from "../../../utils/sizes";
import appStyles from "../../../screens/appStyles";
import { create } from "react-test-renderer";
import Shadows from "../../../helpers/Shadows";
const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: colors.clightgreen,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -20,
    left: 0,
    right: 0,
  },
  buttonWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20
  },
  buttonStyle: {
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.gray,
    borderRadius: 30,
    justifyContent: 'flex-start'
  },
  buttonPerfectionNext: {
    backgroundColor: colors.gray,
    paddingHorizontal: 10,
  },
  tabs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 5,
    height: 78,
  },
  active: {
    height: 4, width: 4,
    borderRadius: 30, marginBottom: 4
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  close: {
    position: 'absolute',
    top: 15,
    right: 20
  },
  modalChild: {
    ...appStyles.wD100,
    backgroundColor: colors.blue_1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    ...appStyles.alignCenter,
    ...appStyles.justifyCenter,
    ...appStyles.paddingVertical_3,
  },
  buttonStyle3: {
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.green,
    borderRadius: 30
  },
  buttonStyle2: {
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.green,
    borderRadius: 30
  },
  modalTitle: {
    ...appStyles.family_Montserrat_Semi_Bold,
    ...appStyles.font18,
    color: colors.white,
  },
  mainBottomView: {
    height: 80,
    paddingHorizontal: 16,
    ...appStyles.directionRow,
    borderTopWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopColor: colors.lightGray,
    alignItems: 'center',
    backgroundColor: '#33A0FA',
    marginBottom: Platform.OS == 'ios' ? 10 : 10,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  sendimg: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  button: {
    height: 40,
    width: 40,
    position: 'absolute',
    right: 20,
    backgroundColor:colors.white,
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    alignSelf: 'center',
    flex:1,
    paddingLeft: 10,
    marginLeft: 10,
    fontSize: 15,
    color: colors.black,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius: 100,
    borderColor: colors.blue_1,
    borderWidth: 2,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  time: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.gray,
    marginTop: 2,
  },
  name: { fontSize: 15, fontWeight: '600' },
  dot: {
    width: 15,
    height: 20,
    resizeMode: 'contain',
    tint: colors.black,
  },
  profileDetail: {
    flexDirection: 'row',
  },
  listContainer: {
    flexDirection: 'row',
  },
  profileData: {
    backgroundColor: colors.blue_02,
    paddingHorizontal: 20,
    ...appStyles.paddingVertical_2,
  },
  contentContainer: {
    backgroundColor: colors.white,
  },
  ScrollView: {},
  lineSeparator: {
    height: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.skyBlue,
  },
  FlatList: {
    maxHeight: height * 0.45,
  },
  iconWrapper: {
    width: 50,
    height: 50,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  user: {
    height: 40,
    width: 40,
    borderRadius: 30
  },

  socialContainer: {
    ...appStyles.justifySpaceBetween,
    ...appStyles.alignCenter,
    flex: 1,
    ...appStyles.paddingVertical_2,
    backgroundColor: colors.white
  },
  cross: {
    height: 22,
    width: 22,
    tintColor: colors.white,
  },
  font: {
    color: colors.black,
    ...appStyles.family_Montserrat_Semi_Bold,
    ...appStyles.font18
  },
  buttonStyless: {
    backgroundColor: colors.white,
    borderRadius: 0,
    paddingTop: 0,
    marginTop: 0,
    justifyContent: 'left',
    paddingHorizontal: 25,
    ...appStyles.wD100,
    ...appStyles.gap_10
  },
  iconn: { height: 18, width: 18 },
  country: {
    ...appStyles.family_Montserrat_Regular,
    color: colors.black,
  },
  lineSeparator2: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.skyBlue,
  },

  searchContainer: { borderBottomWidth: 1, borderBottomColor: colors.skyBlue, paddingBottom: 10 },
  actionContainer: { height: height * 0.28, backgroundColor: colors.white, paddingHorizontal: 10, paddingVertical: 10 },
  actionStateStyles: { backgroundColor: 'white', paddingVertical: 20, paddingHorizontal: 20, justifyContent: 'center', },
  searchFilter: {
    ...Shadows.shadow3,
    borderWidth: 0,
    height: 45
  },
  checkcontainer: {
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'flex-start',
    // backgroundColor:'red',

    marginTop: 20,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: 20,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    // backgroundColor:'pink',

    marginRight: 10,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: 10,
  },
  checkboxWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  dayText: {
    marginLeft: 5,
    color: colors.white
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
  selectedInnerCircle: {
    height: 24,
    width: 24,
    borderRadius: 8,
    backgroundColor: colors.primary,
    borderWidth: 1.5,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'

  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 8,
    borderColor: colors.skyBlue,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Checkbox: {
    flexDirection: 'row',
    ...appStyles.gap_10,
    paddingVertical: 5,

  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  btnText: {
    color: colors.white,
    fontSize: size.small,
    ...appStyles.family_Montserrat_Regular
  },
  selectCat: {
    ...appStyles.family_Montserrat_Semi_Bold,
    ...appStyles.font16,
    marginBottom: 5
  },
  checkText: {
    ...appStyles.family_Montserrat_Regular,
    ...appStyles.font14
  }

});


