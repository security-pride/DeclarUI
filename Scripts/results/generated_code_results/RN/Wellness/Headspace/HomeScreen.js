import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
const navigation = useNavigation();
const handleExplorePress = () => {
navigation.navigate('Explore');
};
const handleProfilePress = () => {
navigation.navigate('Profile');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.greeting}>Good Evening, 子骆</Text>
<View style={styles.iconContainer}>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
</View>
  <ScrollView>
    <Text style={styles.sectionTitle}>Start your day</Text>

    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>How to Headspace</Text>
        <View style={styles.cardDetails}>
          <Image source={require('../assets/snack-icon.png')} style={styles.smallIcon} />
          <Text style={styles.cardType}>Video</Text>
          <Text style={styles.cardDuration}>2 min</Text>
        </View>
      </View>
      <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />
      <TouchableOpacity style={styles.moreOptions}>
        <Image source={require('../assets/snack-icon.png')} style={styles.smallIcon} />
      </TouchableOpacity>
    </View>

    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Rooted in the Present</Text>
        <View style={styles.cardDetails}>
          <Image source={require('../assets/snack-icon.png')} style={styles.smallIcon} />
          <Text style={styles.cardType}>Mindful Activity</Text>
          <Text style={styles.cardDuration}>2 min</Text>
        </View>
      </View>
      <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />
      <TouchableOpacity style={styles.moreOptions}>
        <Image source={require('../assets/snack-icon.png')} style={styles.smallIcon} />
      </TouchableOpacity>
    </View>

    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Enjoying the Unknown</Text>
        <View style={styles.cardDetails}>
          <Image source={require('../assets/snack-icon.png')} style={styles.smallIcon} />
          <Text style={styles.cardType}>Today's Meditation</Text>
          <Text style={styles.cardDuration}>3-20 min</Text>
        </View>
      </View>
      <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />
      <View style={styles.meditatingCount}>
        <Text style={styles.countText}>327 meditating</Text>
      </View>
      <TouchableOpacity style={styles.moreOptions}>
        <Image source={require('../assets/snack-icon.png')} style={styles.smallIcon} />
      </TouchableOpacity>
    </View>

    <Text style={styles.sectionTitle}>Your afternoon lift</Text>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Today</Text>
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
justifyContent: 'space-between',
alignItems: 'center',
padding: 20,
},
greeting: {
color: 'white',
fontSize: 24,
fontWeight: 'bold',
},
iconContainer: {
flexDirection: 'row',
},
icon: {
width: 24,
height: 24,
marginLeft: 15,
},
sectionTitle: {
color: 'white',
fontSize: 22,
fontWeight: 'bold',
marginLeft: 20,
marginTop: 20,
marginBottom: 10,
},
card: {
backgroundColor: '#1E2746',
borderRadius: 10,
margin: 10,
padding: 15,
flexDirection: 'row',
alignItems: 'center',
},
cardContent: {
flex: 1,
},
cardTitle: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
marginBottom: 5,
},
cardDetails: {
flexDirection: 'row',
alignItems: 'center',
},
cardType: {
color: '#8E9AB2',
marginRight: 10,
},
cardDuration: {
color: '#8E9AB2',
},
cardImage: {
width: 80,
height: 80,
borderRadius: 10,
},
smallIcon: {
width: 16,
height: 16,
marginRight: 5,
},
moreOptions: {
position: 'absolute',
right: 10,
top: 10,
},
meditatingCount: {
position: 'absolute',
right: 10,
bottom: 10,
backgroundColor: 'rgba(0,0,0,0.5)',
borderRadius: 10,
padding: 5,
},
countText: {
color: 'white',
fontSize: 12,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#2A3456',
paddingVertical: 10,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
navText: {
color: '#8E9AB2',
marginTop: 5,
},
activeNavText: {
color: 'white',
},
});
export default Home;