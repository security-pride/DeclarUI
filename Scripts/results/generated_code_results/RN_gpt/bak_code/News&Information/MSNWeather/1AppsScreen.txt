import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const AppsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>Sign in to earn daily points</Text>
          <Text style={styles.redeemText}>Join Microsoft Rewards to redeem free gifts!</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('Interests')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Interests</Text>
        </Pressable>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('Bookmarks')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Bookmarks</Text>
        </Pressable>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('History')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>History</Text>
        </Pressable>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('Settings')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Settings</Text>
        </Pressable>
      </View>
      <Text style={styles.sectionLabel}>PINNED</Text>
      <View style={styles.pinnedContainer}>
        <Pressable style={styles.iconContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Pin</Text>
        </Pressable>
      </View>
      <Text style={styles.sectionLabel}>EXPLORE</Text>
      <View style={styles.rowContainer}>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('Rewards')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Rewards</Text>
        </Pressable>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('ExploreAI')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Explore AI</Text>
        </Pressable>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('Wallpapers')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Wallpapers</Text>
        </Pressable>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('Money')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Money</Text>
        </Pressable>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('Watch')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Watch</Text>
        </Pressable>
      </View>
      <View style={styles.rowContainer}>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('Games')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Games</Text>
        </Pressable>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('News')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>News</Text>
        </Pressable>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('Trending')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Trending</Text>
        </Pressable>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('Images')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Images</Text>
        </Pressable>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('Weather')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Weather</Text>
        </Pressable>
      </View>
      <View style={styles.rowContainer}>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('Math')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Math</Text>
        </Pressable>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('Nearby')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Nearby</Text>
        </Pressable>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('Deals')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Deals</Text>
        </Pressable>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('Translator')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Translator</Text>
        </Pressable>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('UnitConverter')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Unit Converter</Text>
        </Pressable>
      </View>
      <View style={styles.rowContainer}>
        <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('PersonalCentral')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>Personal Central</Text>
        </Pressable>
      </View>
      <View style={styles.bottomNav}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomIcon} />
          <Text style={styles.bottomLabel}>Home</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Weather')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomIcon} />
          <Text style={styles.bottomLabel}>Weather</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Chat')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomIcon} />
          <Text style={styles.bottomLabel}>Chat</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Tabs')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomIcon} />
          <Text style={styles.bottomLabel}>Tabs</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Apps')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomIcon} />
          <Text style={styles.bottomLabel}>Apps</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  pointsContainer: {
    flex: 1,
  },
  pointsText: {
    fontWeight: 'bold',
    color: '#333333',
  },
  redeemText: {
    marginTop: 4,
    color: '#777777',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  iconContainer: {
    alignItems: 'center',
    width: 60,
    paddingVertical: 4,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  iconLabel: {
    fontSize: 12,
    color: '#333333',
    textAlign: 'center',
  },
  sectionLabel: {
    marginHorizontal: 16,
    marginVertical: 4,
    fontWeight: 'bold',
    color: '#777777',
  },
  pinnedContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  bottomIcon: {
    width: 24,
    height: 24,
  },
  bottomLabel: {
    fontSize: 10,
    textAlign: 'center',
    color: '#333333',
  },
});

export default AppsScreen;