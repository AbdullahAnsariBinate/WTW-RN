// @app
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// drawerComponentt
import UserAppStack from '../../drawer/appDrawer';
// @stack screens
// import HomeStack from '.././stacks/HomeStack';
// import GroupStack from '.././stacks/GroupStack';
// import CategoryStack from '.././stacks/CategoryStack';
// import CheckOutfitStack from './CheckOutfitStack';
// screens
import Home from '../../../screens/Main/Home';
import Notification from '../../../screens/Main/Notification';
import Events from '../../../screens/Main/Events';
import Favorite from '../../../screens/Main/Favorite';
import { Screen } from 'react-native-screens';
import Business from '../../../screens/Main/BusinessProfile';
import BusinessDetail from '../../../screens/Main/BusinessDetail';
import Feedback from '../../../screens/Main/Feedback/Feedback';
import Settings from '../../../screens/Main/Settings/Settings';
import Following from '../../../screens/Main/Following/Following';
import Profile from '../../../screens/Main/Profile/Profile';
import AboutApp from '../../../screens/Main/AboutApp/AboutApp';
import EventDetail from '../../../screens/Main/EventDetail/EventDetail';
import Rating from '../../../screens/Main/Rating/Rating';
import EditProfile from '../../../screens/Main/EditProfile/EditProfile';
import Search from '../../../screens/Main/Search/Search';
import Followers from '../../../screens/Main/BusinessFlow/Followers/Followers';

const Stack = createNativeStackNavigator();

const UserStack = ({ initialRoute }) => {
  return (
    <Stack.Navigator
      initialRouteName="UserAppStack"
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleAllowFontScaling: true,
        gestureDirection: 'horizontal',
        gestureEnabled: true,
      }}>
      <Stack.Screen name="UserAppStack" component={UserAppStack} />
      <Stack.Screen name="AboutApp" component={AboutApp} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Rating" component={Rating} />
      <Stack.Screen name="EventDetail" component={EventDetail} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="BusinessProfile" component={Business} />
      <Stack.Screen name="BusinessDetail" component={BusinessDetail} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Following" component={Following} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Followers" component={Followers} />



    </Stack.Navigator>
  );
};

export default UserStack;
