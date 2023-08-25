import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../../../components/TabbarComponent';
import Notification from '../../../screens/Main/Notification';
import { HP, colors, platform } from '../../../utils';
import Events from '../../../screens/Main/Events';
import Favorite from '../../../screens/Main/Favorite';
import MyEvents from '../../../screens/Main/MyEvent/MyEvents';
import Settings from '../../../screens/Main/Settings/Settings';

const Tab = createBottomTabNavigator();

export const Usertab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: colors.gray },
        animation: 'simple_push',
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}
      initialRouteName={'Usertab'}>
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="MyEvents" component={MyEvents} />
      <Tab.Screen name="Notifications" component={Notification} />
      <Tab.Screen name="Events" component={Events} />
    </Tab.Navigator>
  );
};
