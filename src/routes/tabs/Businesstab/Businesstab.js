import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../../../components/TabbarComponent';
import Notification from '../../../screens/Main/Notification';
import {HP, colors, platform} from '../../../utils';
import Events from '../../../screens/Main/Events';
import Favorite from '../../../screens/Main/Favorite';
import MyEvents from '../../../screens/Main/MyEvent/MyEvents';
import Settings from '../../../screens/Main/Settings/Settings';
import Home from '../../../screens/Main/Home/Home';
import Business from '../../../screens/Main/BusinessProfile/Business';
import BusinessSettings from '../../../screens/Main/BusinessFlow/BSettings/BusinessSettings';
import BusinessEvents from '../../../screens/Main/BusinessFlow/BusinessEvents/BusinessEvents';

const Tab = createBottomTabNavigator();

export const Businesstab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: colors.gray},
        animation: 'simple_push',
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}
      initialRouteName={'Settings'}>
      {/* <Tab.Screen name="Home" component={Notification} /> */}
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="BusinessEvents" component={BusinessEvents} />
      <Tab.Screen name="BusinessProfile" component={Business} />
      <Tab.Screen name="BusinessSettings" component={BusinessSettings} />
    </Tab.Navigator>
  );
};
