import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const HomeScreen = ({ navigation }) => {
const [currentTime, setCurrentTime] = useState('9:41 AM');
return (
<View style={styles.container}>
<View style={styles.statusBar}>
<Text style={styles.timeText}>{currentTime}</Text>
<View style={styles.batteryIndicator} />
</View>
  <ScrollView>
    <Text style={styles.sectionHeader}>Hots now</Text>

    <View style={styles.hotSection}>
      <TouchableOpacity onPress={() => {/* Navigate to Summer Vibes playlist */}}>
        <ImageBackground
          source={require('../assets/snack-icon.png')}
          style={styles.playlistImage}
        >
          <Text style={styles.playlistTitle}>Summer Vibes</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {/* Navigate to Rap Zone playlist */}}>
        <ImageBackground
          source={require('../assets/snack-icon.png')}
          style={styles.playlistImage}
        >
          <Text style={styles.playlistTitle}>Rap Zone</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>

    <Text style={styles.sectionHeader}>Mood</Text>

    <View style={styles.moodSection}>
      <TouchableOpacity onPress={() => {/* Navigate to Shower Time playlist */}}>
        <ImageBackground
          source={require('../assets/snack-icon.png')}
          style={styles.playlistImage}
        >
          <Text style={styles.playlistTitle}>Shower Time</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {/* Navigate to Old School playlist */}}>
        <ImageBackground
          source={require('../assets/snack-icon.png')}
          style={styles.playlistImage}
        >
          <Text style={styles.playlistTitle}>Old School</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>

    <Text style={styles.sectionHeader}>Popular artists</Text>

    <ScrollView horizontal style={styles.artistsSection}>
      {['Ed Sheeran', 'Rita Ora', 'Eminem', 'Dua Lipa'].map((artist, index) => (
        <TouchableOpacity key={index} onPress={() => {/* Navigate to artist page */}}>
          <View style={styles.artistItem}>
            <Image
              source={require('../assets/snack-icon.png')}
              style={styles.artistImage}
            />
            <Text style={styles.artistName}>{artist}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </ScrollView>

  <TouchableOpacity
    style={styles.nowPlayingBar}
    onPress={() => navigation.navigate('Player')}
  >
    <Image
      source={require('../assets/snack-icon.png')}
      style={styles.nowPlayingImage}
    />
    <View style={styles.nowPlayingInfo}>
      <Text style={styles.nowPlayingTitle}>All Mine</Text>
      <Text style={styles.nowPlayingArtist}>Kanye West</Text>
    </View>
    <TouchableOpacity style={styles.playButton}>
      <Image
        source={require('../assets/snack-icon.png')}
        style={styles.playIcon}
      />
    </TouchableOpacity>
  </TouchableOpacity>
</View>
);
};
const ListenScreen = () => (
<View style={styles.screenContainer}>
<Text>Listen Screen</Text>
</View>
);
const SearchScreen = () => (
<View style={styles.screenContainer}>
<Text>Search Screen</Text>
</View>
);
const ProfileScreen = () => (
<View style={styles.screenContainer}>
<Text>Profile Screen</Text>
</View>
);
const PlayerScreen = () => (
<View style={styles.screenContainer}>
<Text>Player Screen</Text>
</View>
);
const App = () => {
return (
<NavigationContainer>
<Tab.Navigator>
<Tab.Screen
name="Home"
component={HomeScreen}
options={{
tabBarIcon: ({ color, size }) => (
<Image
source={require('../assets/snack-icon.png')}
style={{ width: size, height: size, tintColor: color }}
/>
),
}}
/>
<Tab.Screen
name="Listen"
component={ListenScreen}
options={{
tabBarIcon: ({ color, size }) => (
<Image
source={require('../assets/snack-icon.png')}
style={{ width: size, height: size, tintColor: color }}
/>
),
}}
/>
<Tab.Screen
name="Search"
component={SearchScreen}
options={{
tabBarIcon: ({ color, size }) => (
<Image
source={require('../assets/snack-icon.png')}
style={{ width: size, height: size, tintColor: color }}
/>
),
}}
/>
<Tab.Screen
name="Profile"
component={ProfileScreen}
options={{
tabBarIcon: ({ color, size }) => (
<Image
source={require('../assets/snack-icon.png')}
style={{ width: size, height: size, tintColor: color }}
/>
),
}}
/>
</Tab.Navigator>
</NavigationContainer>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
statusBar: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 10,
height: 40,
},
timeText: {
fontSize: 14,
},
batteryIndicator: {
width: 25,
height: 12,
borderWidth: 1,
borderColor: '#000',
borderRadius: 3,
},
sectionHeader: {
fontSize: 20,
fontWeight: 'bold',
marginTop: 20,
marginLeft: 10,
},
hotSection: {
flexDirection: 'row',
justifyContent: 'space-around',
marginTop: 10,
},
moodSection: {
flexDirection: 'row',
justifyContent: 'space-around',
marginTop: 10,
},
playlistImage: {
width: 170,
height: 170,
justifyContent: 'flex-end',
},
playlistTitle: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
padding: 10,
},
artistsSection: {
marginTop: 10,
},
artistItem: {
alignItems: 'center',
marginHorizontal: 10,
},
artistImage: {
width: 80,
height: 80,
borderRadius: 40,
},
artistName: {
marginTop: 5,
fontSize: 12,
},
nowPlayingBar: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#f0f0f0',
},
nowPlayingImage: {
width: 50,
height: 50,
borderRadius: 25,
},
nowPlayingInfo: {
flex: 1,
marginLeft: 10,
},
nowPlayingTitle: {
fontSize: 16,
fontWeight: 'bold',
},
nowPlayingArtist: {
fontSize: 14,
color: '#666',
},
playButton: {
padding: 10,
},
playIcon: {
width: 30,
height: 30,
},
screenContainer: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
});
export default App;