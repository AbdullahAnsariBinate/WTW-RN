import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerComp from '../../components/Drawer';
import { BottomTabs, Usertab } from '../tabs/Usertab/Usertab';
import { Businesstab } from '../tabs/Businesstab/Businesstab';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();

const UserAppStack = () => {
  const loggedInUser = useSelector(({ authReducer }) => authReducer?.user)
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          width: '80%',
          backgroundColor: 'transparent',
        },
      }}
      drawerContent={props => <DrawerComp {...props} />}
      initialRouteName={'Home'}>
      <Drawer.Screen
        options={{ headerShown: false }}
        name="BottomTabs"
        component={loggedInUser?.role == 'User' ? Usertab : Businesstab}
      />
    </Drawer.Navigator>
  );
};

export default UserAppStack;
