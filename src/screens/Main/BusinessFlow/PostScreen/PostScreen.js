import {FlatList, Text, TextInput, View} from 'react-native';
import React, {Component} from 'react';
import AppBackground from '../../../../components/AppBackground';
import CustomCard from '../../../../components/CustomCard';
import Card from '../../../../components/Card';
// import SocialSheet from '../../../../containers/Popup/socialSheetPopup/SocialSheet';
import {data, modalLikeList, profileData} from '../../../../utils/dummyData';
import CustomList from '../../../../components/CustomList';
import appStyles from '../../../appStyles';
import {styles} from './styles';
import {Image} from 'react-native';
import CustomText from '../../../../components/CustomText';
import {colors, size} from '../../../../utils';
import Img from '../../../../components/Img';
import {appIcons, appImages} from '../../../../assets';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: '',
      replyName: '', // Track the name to reply to
      comments: {},
      currentReply: [],
      activeIndex: null,
      userComment: modalLikeList,
      // searchStates: states,
    };
  }
  textInputRef = React.createRef();
  handleReplyButtonPress = (name, index) => {
    console.log('name, id', index, name);
    this.setState({currentReply: {name: name, id: index}});
    this.setState(prevState => ({
      activeIndex: index === prevState.activeIndex ? null : index,
    }));
    this.setState({replyName: name});
    this.textInputRef.current.focus();
  };
  handleSendButtonPress = () => {
    const {replyName, reply, activeIndex} = this.state;
    const item = modalLikeList.find(item => item.id === activeIndex);
    if (item && item.replies) {
      item.replies.push({
        profile: appImages.pizzaTwo, // replace 'someImage' with the correct image reference
        name: replyName,
        time: '1 min ago',
        description: reply,
      });
    }
    this.setState({userComment: item});
  };

  render() {
    const {reply, replyName, comments, currentReply, activeIndex, userComment} =
      this.state;
    console.log('currentReply ', currentReply);
    const ItemSeparatorComponent = () => {
      return <View style={styles.lineSeparator} />;
    };
    const renderItem = ({item, index}) => {
      console.log('index----07', index);
      return (
        <View>
          <CustomList
            isComment={true}
            item={item}
            handleReplyButtonPress={name =>
              this.handleReplyButtonPress(name, index)
            }
            comments={this.state.comments}
          />
          {/* {index === this.state.activeIndex &&
            <View>
              <CustomList
                isComment={true}
                item={item}
                handleReplyButtonPress={(name) => this.handleReplyButtonPress(name, index)}
                comments={this.state.comments}
                isReply
              />
            </View>
          } */}
        </View>
      );
    };
    const renderItem1 = ({item}) => {
      return <Card item={item} />;
    };
    return (
      <AppBackground title={'Comment'} marginHorizontal={false} back>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            style={styles.FlatList}
            data={profileData}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparatorComponent}
            renderItem={renderItem1}
          />
          <FlatList
            style={styles.FlatList}
            data={modalLikeList}
            extraData={userComment}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorComponent}
            renderItem={renderItem}
          />
        </ScrollView>
        <View style={styles.mainBottomView}>
          <Img src={appImages.userFive} style={styles.user} local />
          <TextInput
            style={styles.textInput}
            placeholder={'Write your comment here'}
            placeholderTextColor={colors.font}
            ref={this.textInputRef}
            value={reply}
            onChangeText={text => {
              this.setState({reply: text});
            }}
          />
          <TouchableOpacity
          activeOpacity={1}
            style={styles.button}
            onPress={this.handleSendButtonPress}
            // onPress={() => sendComment()}
          >
            <Img
              tintColor={colors.primary}
              local
              src={appIcons.send}
              style={styles.sendimg}
            />
          </TouchableOpacity>
        </View>
        {/* Display comments below the corresponding reply buttons */}
        {/* {Object.keys(comments).map(name => (
          <View key={name} style={styles.replyContainer}>
            <Text
              style={
                styles.replyText
              }>{`Reply to ${name}: ${comments[name]}`}</Text>
          </View>
        ))} */}
      </AppBackground>
    );
  }
}
export default PostScreen;
