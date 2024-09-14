import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBarBackground}>
        <Text style={styles.clockTime}>9:41</Text>
        <Icon name="ios-signal" size={14} color="black" style={styles.networkIcon} />
        <Icon name="ios-wifi" size={14} color="black" />
      </View>
      
      <View style={styles.profileSection}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.username}>Pixsellz</Text>
          <Text style={styles.handle}>@pixsellz</Text>
        </View>
        <Text style={styles.followCounts}>216 Following 117 Followers</Text>
        <View style={styles.smallProfileImages}>
          <Image source={require('../assets/snack-icon.png')} style={styles.smallProfileImage} />
          <Image source={require('../assets/snack-icon.png')} style={styles.smallProfileImage} />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>1</Text>
          </View>
          <TouchableOpacity style={styles.moreOptionsButton}>
            <Icon name="ellipsis-horizontal" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
        <Icon name="person-outline" size={24} color="black" />
        <Text style={styles.menuText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Lists')}>
        <Icon name="list-outline" size={24} color="black" />
        <Text style={styles.menuText}>Lists</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Topics')}>
        <Icon name="chatbubble-outline" size={24} color="black" />
        <Text style={styles.menuText}>Topics</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Bookmarks')}>
        <Icon name="bookmark-outline" size={24} color="black" />
        <Text style={styles.menuText}>Bookmarks</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Moments')}>
        <Icon name="flash-outline" size={24} color="black" />
        <Text style={styles.menuText}>Moments</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuSettingsPrivacy}>
        <Text style={styles.menuSettingsPrivacyText}>Settings and privacy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuHelpCenter}>
        <Text style={styles.menuHelpCenterText}>Help Center</Text>
      </TouchableOpacity>

      <View style={styles.bottomIcons}>
        <TouchableOpacity>
          <Icon name="bulb-outline" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="qr-code-outline" size={24} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  statusBarBackground: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
  },
  clockTime: {
    fontSize: 12,
  },
  networkIcon: {
    alignSelf: 'center',
  },
  profileSection: {
    alignItems: 'flex-start',
    marginTop: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileTextContainer: {
    marginTop: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  handle: {
    fontSize: 14,
    color: 'gray',
  },
  followCounts: {
    fontSize: 14,
    color: 'gray',
    marginTop: 8,
  },
  smallProfileImages: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  smallProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 4,
  },
  notificationBadge: {
    position: 'absolute',
    right: 48,
    top: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 4,
  },
  notificationText: {
    color: 'white',
    fontSize: 12,
  },
  moreOptionsButton: {
    marginLeft: 'auto',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 8,
  },
  menuSettingsPrivacy: {
    marginTop: 20,
  },
  menuSettingsPrivacyText: {
    fontSize: 16,
  },
  menuHelpCenter: {
    marginTop: 12,
  },
  menuHelpCenterText: {
    fontSize: 16,
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default MenuScreen;