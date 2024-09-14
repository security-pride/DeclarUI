import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Explore = () => {
const navigation = useNavigation();
const handleCategoryPress = (category) => {
if (category === 'Move') {
navigation.navigate('Move');
}
};
const handleCalmingAnxietyPress = () => {
navigation.navigate('CalmMethods');
};
const handleTodayPress = () => {
navigation.navigate('Home');
};
const handleProfilePress = () => {
navigation.navigate('Profile');
};
return (
<View style={styles.container}>
<TextInput style={styles.searchBar} placeholder="Search exercises" placeholderTextColor="#8E9AB2" />
  <View style={styles.categoriesContainer}>
    <TouchableOpacity style={[styles.categoryButton, styles.meditateButton]}>
      <Text style={styles.categoryText}>Meditate</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.categoryButton, styles.sleepButton]}>
      <Text style={styles.categoryText}>Sleep</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={[styles.categoryButton, styles.moveButton]}
      onPress={() => handleCategoryPress('Move')}
    >
      <Text style={styles.categoryText}>Move</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.categoryButton, styles.musicButton]}>
      <Text style={styles.categoryText}>Music</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.categoryButton, styles.podcastsButton]}>
      <Text style={styles.categoryText}>Podcasts</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.podcastIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.promoSection}>
    <Text style={styles.promoTitle}>Unlock the Headspace Library</Text>
    <TouchableOpacity style={styles.startTrialButton}>
      <Text style={styles.startTrialText}>Start My Free Trial</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.featuredContent}>
    <TouchableOpacity style={[styles.featuredItem, styles.politicsItem]}>
      <Text style={styles.featuredItemText}>Politics Without Panic</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.featuredItemIcon} />
    </TouchableOpacity>
    <TouchableOpacity 
      style={[styles.featuredItem, styles.anxietyItem]}
      onPress={handleCalmingAnxietyPress}
    >
      <Text style={styles.featuredItemText}>Calming Everyday Anxiety</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.featuredItemIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNavBar}>
    <TouchableOpacity style={styles.navItem} onPress={handleTodayPress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Today</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Explore</Text>
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
padding: 16,
},
searchBar: {
backgroundColor: '#1E2746',
borderRadius: 20,
padding: 10,
color: 'white',
marginBottom: 20,
},
categoriesContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
marginBottom: 20,
},
categoryButton: {
width: '48%',
borderRadius: 10,
padding: 15,
marginBottom: 10,
alignItems: 'center',
},
categoryText: {
color: 'white',
fontWeight: 'bold',
},
meditateButton: { backgroundColor: '#E67D3A' },
sleepButton: { backgroundColor: '#7E5DE3' },
moveButton: { backgroundColor: '#E85B81' },
musicButton: { backgroundColor: '#3A8AE0' },
podcastsButton: {
backgroundColor: '#F7CE46',
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
width: '100%',
},
podcastIcon: {
width: 24,
height: 24,
},
promoSection: {
backgroundColor: '#1E2746',
borderRadius: 10,
padding: 20,
alignItems: 'center',
marginBottom: 20,
},
promoTitle: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
},
startTrialButton: {
backgroundColor: '#3A8AE0',
borderRadius: 20,
paddingVertical: 10,
paddingHorizontal: 20,
},
startTrialText: {
color: 'white',
fontWeight: 'bold',
},
featuredContent: {
marginBottom: 20,
},
featuredItem: {
borderRadius: 10,
padding: 15,
marginBottom: 10,
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
},
featuredItemText: {
color: 'white',
fontWeight: 'bold',
},
featuredItemIcon: {
width: 24,
height: 24,
},
politicsItem: { backgroundColor: '#E85B81' },
anxietyItem: { backgroundColor: '#3A8AE0' },
bottomNavBar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#1E2746',
paddingTop: 10,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 5,
},
navText: {
color: '#8E9AB2',
},
activeNavText: {
color: 'white',
},
});
export default Explore;