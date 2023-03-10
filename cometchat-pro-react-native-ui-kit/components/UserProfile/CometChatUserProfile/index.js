import React, {useEffect, useState} from 'react';
import {CometChatManager} from '../../../utils/controller';
import {CometChatAvatar} from '../../Shared';
import styles from './styles';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import theme from '../../../resources/theme';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {logger} from '../../../utils/common';

import {CometChat} from '@cometchat-pro/react-native-chat';
import {useCometChatAuth} from '../../../../src/context/CometChatAuthContext';

const notificationIcon = (
  <Icon color={theme.color.helpText} name="notifications" size={28} />
);
const privacyIcon = (
  <Icon color={theme.color.helpText} name="security" size={28} />
);
const chatIcon = <Icon color={theme.color.helpText} name="chat" size={28} />;
const helpIcon = <Icon color={theme.color.helpText} name="help" size={28} />;
const problemIcon = (
  <Icon color={theme.color.helpText} name="report-problem" size={28} />
);
const closeIcon = <Icon color={theme.color.helpText} name="close" size={28} />;
const homeIcon = <Icon color={theme.color.helpText} name="home" size={28} />;

const CometChatUserProfile = props => {
  const [user, setUser] = useState({});
  const viewTheme = {...theme, ...props.theme};

  const {cometAuth, dispatchCometAction} = useCometChatAuth();

  /**
   * Retrieve logged in user details
   * @param
   */
  const getProfile = () => {
    new CometChatManager()
      .getLoggedInUser()
      .then(loggedInUser => {
        setUser(loggedInUser);
      })
      .catch(error => {
        logger(
          '[CometChatUserProfile] getProfile getLoggedInUser error',
          error,
        );
      });
  };

  useEffect(() => {
    getProfile();
  }, []);
  let avatar = null;
  if (user) {
    avatar = (
      <View style={styles.avatarStyle}>
        <CometChatAvatar
          cornerRadius={18}
          borderColor={viewTheme.color.secondary}
          borderWidth={1}
          image={{uri: user.avatar}}
          name={user.name}
        />
      </View>
    );
  }

  function logOut() {
    CometChat.logout().then(
      () => {
        dispatchCometAction({type: 'COMETCHAT_LOGOUT'});
      },
      error => {
        dispatchCometAction({
          type: 'COMETCHAT_AUTH_FAILED',
          error: error.message,
          isLoggedIn: cometAuth.isLoggedIn,
        });
      },
    );
  }

  return (
    <SafeAreaView style={styles.userInfoScreenStyle}>
      <View style={styles.headingContainer}>
        <Text style={styles.headerTitleStyle}>Opcje</Text>
      </View>
      <View style={styles.userContainer}>
        <View style={styles.avatarContainer}>{avatar}</View>
        {user?.name ? (
          <View style={styles.userDetailsContainer}>
            <View style={styles.userNameWrapper}>
              <Text style={styles.userName}>{user?.name}</Text>
            </View>
            <Text style={styles.status}>Dost??pny</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.infoItemsWrapper}>
        {/* <View style={styles.infoItemHeadingContainer}>
          <Text style={styles.infoItemHeadingText}>Preferences</Text>
        </View>
        <View style={styles.infoItemsContainer}>
          <View style={styles.infoItem}>
            {notificationIcon}
            <Text style={styles.infoItemText}>Notifications</Text>
          </View>
          <View style={styles.infoItem}>
            {privacyIcon}
            <Text style={styles.infoItemText}>Privacy and Security</Text>
          </View>
          <View style={styles.infoItem}>
            {chatIcon}
            <Text style={styles.infoItemText}>Chats</Text>
          </View>
        </View> */}
        <View style={styles.infoItemHeadingContainer}>
          <Text style={styles.infoItemHeadingText}>Opcje</Text>
        </View>
        <View style={styles.infoItemsContainer}>
          {/* <View style={styles.infoItem}>
            {helpIcon}
            <Text style={styles.infoItemText}>Help</Text>
          </View>
          <View style={styles.infoItem}>
            {problemIcon}
            <Text style={styles.infoItemText}>Report a Problem</Text>
          </View> */}
          <View style={styles.infoItem}>
            {closeIcon}
            <TouchableOpacity onPress={() => logOut()}>
              <Text style={styles.infoItemText}>Wyjoguj z czatu</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoItem}>
            {homeIcon}
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
              <Text style={styles.infoItemText}>Strona pocz??tkowa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default CometChatUserProfile;
