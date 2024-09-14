import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Move = () => {
const navigation = useNavigation();
const [activeTab, setActiveTab] = useState('Featured');
const handleBackPress = () => {
navigation.navigate('Explore');
};
const handleTabPress = (tab) => {
setActiveTab(tab);
};
const handleHomePress = () => {
navigation.navigate('Home');
};
const handleExplorePress = () => {
navigation.navigate('Explore');
};
const handleProfilePress = () => {
navigation.navigate('Profile');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={handleBackPress}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>Move</Text>
</View>
  <ScrollView>
    <ImageBackground
      source={require('../assets/snack-icon.png')}
      style={styles.featuredBackground}
    >
      <View style={styles.featuredContent}>
        <Text style={styles.featuredLabel}>Featured</Text>
        <Text style={styles.featuredTitle}>Easy Evening Stretch</Text>
        <Text style={styles.featuredSubtitle}>Workout • 9 min</Text>
        <TouchableOpacity style={styles.playButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.lockIcon} />
          <Text style={styles.playButtonText}>Play</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>

    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Recent' && styles.activeTab]}
        onPress={() => handleTabPress('Recent')}
      >
        <Text style={[styles.tabText, activeTab === 'Recent' && styles.activeTabText]}>Recent</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Featured' && styles.activeTab]}
        onPress={() => handleTabPress('Featured')}
      >
        <Text style={[styles.tabText, activeTab === 'Featured' && styles.activeTabText]}>Featured</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.workoutList}>
      <TouchableOpacity style={styles.workoutItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.workoutImage} />
        <View style={styles.workoutInfo}>
          <Text style={styles.workoutTitle}>Stress Release</Text>
          <Text style={styles.workoutSubtitle}>Workout • 29 min</Text>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.workoutItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.workoutImage} />
        <View style={styles.workoutInfo}>
          <Text style={styles.workoutTitle}>Day 1</Text>
          <Text style={styles.workoutSubtitle}>Workout • 22 min</Text>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={handleHomePress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Today</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={handleExplorePress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Explore</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={handleProfilePress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>子骆</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#0F1423',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
},
backIcon: {
width: 24,
height: 24,
marginRight: 16,
},
headerTitle: {
color: 'white',
fontSize: 20,
fontWeight: 'bold',
},
featuredBackground: {
height: 300,
justifyContent: 'flex-end',
},
featuredContent: {
padding: 16,
},
featuredLabel: {
color: 'white',
fontSize: 12,
backgroundColor: 'rgba(255,255,255,0.2)',
alignSelf: 'flex-start',
paddingHorizontal: 8,
paddingVertical: 4,
borderRadius: 4,
marginBottom: 8,
},
featuredTitle: {
color: 'white',
fontSize: 24,
fontWeight: 'bold',
marginBottom: 4,
},
featuredSubtitle: {
color: 'white',
fontSize: 14,
marginBottom: 16,
},
playButton: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#3A8AE0',
paddingVertical: 8,
paddingHorizontal: 16,
borderRadius: 20,
alignSelf: 'flex-start',
},
lockIcon: {
width: 16,
height: 16,
marginRight: 8,
},
playButtonText: {
color: 'white',
fontWeight: 'bold',
},
tabContainer: {
flexDirection: 'row',
borderBottomWidth: 1,
borderBottomColor: '#2A3456',
},
tab: {
flex: 1,
paddingVertical: 16,
alignItems: 'center',
},
activeTab: {
borderBottomWidth: 2,
borderBottomColor: 'white',
},
tabText: {
color: '#8E9AB2',
fontSize: 16,
},
activeTabText: {
color: 'white',
fontWeight: 'bold',
},
workoutList: {
padding: 16,
},
workoutItem: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 16,
},
workoutImage: {
width: 80,
height: 80,
borderRadius: 8,
marginRight: 16,
},
workoutInfo: {
flex: 1,
},
workoutTitle: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
marginBottom: 4,
},
workoutSubtitle: {
color: '#8E9AB2',
fontSize: 14,
},
arrowIcon: {
width: 24,
height: 24,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#2A3456',
paddingVertical: 8,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 4,
},
navText: {
color: '#8E9AB2',
fontSize: 12,
},
});
export default Move;