import React from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const AppsScreen = () => {
const navigation = useNavigation();
const handleNavigation = (screen) => {
navigation.navigate(screen);
};
return (
<ScrollView style={styles.container}>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
  <View style={styles.header}>
    <Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />
    <View style={styles.headerText}>
      <Text style={styles.headerTitle}>Sign in to earn daily points</Text>
      <Text style={styles.headerSubtitle}>0/30</Text>
    </View>
  </View>

  <Text style={styles.rewardsText}>Join Microsoft Rewards to redeem free gifts!</Text>

  <View style={styles.quickAccessRow}>
    <Pressable style={styles.quickAccessItem} onPress={() => handleNavigation('Interests')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Interests</Text>
    </Pressable>
    <Pressable style={styles.quickAccessItem} onPress={() => handleNavigation('Bookmarks')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Bookmarks</Text>
    </Pressable>
    <Pressable style={styles.quickAccessItem} onPress={() => handleNavigation('History')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>History</Text>
    </Pressable>
    <Pressable style={styles.quickAccessItem} onPress={() => handleNavigation('Settings')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Settings</Text>
    </Pressable>
  </View>

  <Text style={styles.sectionTitle}>PINNED</Text>
  <Pressable style={styles.pinButton} onPress={() => {/* Handle pin action */}}>
    <Image source={require('../assets/snack-icon.png')} style={styles.pinIcon} />
    <Text>Pin</Text>
  </Pressable>

  <Text style={styles.sectionTitle}>EXPLORE</Text>
  <View style={styles.exploreGrid}>
    <Pressable style={styles.exploreItem} onPress={() => handleNavigation('Rewards')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Rewards</Text>
    </Pressable>
    <Pressable style={styles.exploreItem} onPress={() => handleNavigation('ExploreAI')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Explore AI</Text>
    </Pressable>
    <Pressable style={styles.exploreItem} onPress={() => handleNavigation('Wallpapers')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Wallpapers</Text>
    </Pressable>
    <Pressable style={styles.exploreItem} onPress={() => handleNavigation('Money')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Money</Text>
    </Pressable>
    <Pressable style={styles.exploreItem} onPress={() => handleNavigation('Watch')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Watch</Text>
    </Pressable>
    <Pressable style={styles.exploreItem} onPress={() => handleNavigation('Games')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Games</Text>
    </Pressable>
    <Pressable style={styles.exploreItem} onPress={() => handleNavigation('News')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>News</Text>
    </Pressable>
    <Pressable style={styles.exploreItem} onPress={() => handleNavigation('Trending')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Trending</Text>
    </Pressable>
    <Pressable style={styles.exploreItem} onPress={() => handleNavigation('Images')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Images</Text>
    </Pressable>
    <Pressable style={styles.exploreItem} onPress={() => handleNavigation('Weather')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Weather</Text>
    </Pressable>
    <Pressable style={styles.exploreItem} onPress={() => handleNavigation('Math')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Math</Text>
    </Pressable>
    <Pressable style={styles.exploreItem} onPress={() => handleNavigation('Nearby')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Nearby</Text>
    </Pressable>
    <Pressable style={styles.exploreItem} onPress={() => handleNavigation('Deals')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Deals</Text>
    </Pressable>
    <Pressable style={styles.exploreItem} onPress={() => handleNavigation('Translator')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Translator</Text>
    </Pressable>
    <Pressable style={styles.exploreItem} onPress={() => handleNavigation('UnitConverter')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Unit Converter</Text>
    </Pressable>
  </View>

  <View style={styles.bottomNav}>
    <Pressable style={styles.bottomNavItem} onPress={() => handleNavigation('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Home</Text>
    </Pressable>
    <Pressable style={styles.bottomNavItem} onPress={() => handleNavigation('Weather')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Weather</Text>
    </Pressable>
    <Pressable style={styles.bottomNavItem} onPress={() => handleNavigation('Chat')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Chat</Text>
    </Pressable>
    <Pressable style={styles.bottomNavItem} onPress={() => handleNavigation('Tabs')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Tabs</Text>
    </Pressable>
    <Pressable style={styles.bottomNavItem} onPress={() => handleNavigation('Apps')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      <Text>Apps</Text>
    </Pressable>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
backButton: {
padding: 10,
},
backIcon: {
width: 24,
height: 24,
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
},
profileIcon: {
width: 40,
height: 40,
borderRadius: 20,
marginRight: 12,
},
headerText: {
flex: 1,
},
headerTitle: {
fontSize: 16,
fontWeight: 'bold',
},
headerSubtitle: {
fontSize: 14,
color: '#666',
},
rewardsText: {
fontSize: 14,
color: '#666',
padding: 16,
},
quickAccessRow: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 16,
},
quickAccessItem: {
alignItems: 'center',
},
sectionTitle: {
fontSize: 16,
fontWeight: 'bold',
padding: 16,
},
pinButton: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
},
pinIcon: {
width: 24,
height: 24,
marginRight: 8,
},
exploreGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
padding: 8,
},
exploreItem: {
width: '20%',
alignItems: 'center',
padding: 8,
},
icon: {
width: 32,
height: 32,
marginBottom: 4,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 8,
},
bottomNavItem: {
alignItems: 'center',
},
});
export default AppsScreen;