import React, {Component} from 'react';
import {connect} from 'react-redux';
// @navigations

import {_AppLayout} from '../redux/actions';
import AuthNavigation from './stacks/authNavigation';
import UserStack from './tabs/Usertab/UserStack';
import BusinessStack from './tabs/Businesstab/BusinessStack';
import {loginUser, setUserType} from '../redux/actions/authAction';

class RoleSelection extends Component {
  render() {
    const loggedInUser = this.props?.user;
    return (
      <>
        {loggedInUser &&
        (loggedInUser?.role == 'User' || loggedInUser.role == 'Guest') ? (
          <UserStack initialRoute={undefined} />
        ) : loggedInUser && loggedInUser?.role == 'Business' ? (
          <BusinessStack />
        ) : (
          <AuthNavigation initialRoute={undefined} />
        )}
      </>
    );
  }
}

function mapStateToProps({authReducer: {user, userType}}) {
  return {
    user,
    userType,
  };
}
const actions = {loginUser, setUserType};

export default connect(mapStateToProps, actions)(RoleSelection);
