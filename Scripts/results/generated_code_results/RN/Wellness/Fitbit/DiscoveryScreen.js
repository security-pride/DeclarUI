import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DiscoveryScreen = () => {
const navigation = useNavigation();
const [favorites, setFavorites] = useState({});
const toggleFavorite = (id) => {
setFavorites(prev => ({...prev, [id]: !prev[id]}));
};
const navigateToEnvironmentSimulation = () => {
navigation.navigate('EnvironmentSimulation');
};
return (
<ScrollView style={styles.container}>
<Text style={styles.header}>发现</Text>
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>特色</Text>
    <View style={styles.featuredItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.featuredImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>Nature rain on leaves</Text>
        <Text style={styles.itemDuration}>45 MIN</Text>
        <TouchableOpacity style={styles.playButton} onPress={navigateToEnvironmentSimulation}>
          <Text style={styles.playButtonText}>播放</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.favoriteButton} onPress={() => toggleFavorite('nature')}>
        <Text style={styles.favoriteIcon}>{favorites['nature'] ? '★' : '☆'}</Text>
      </TouchableOpacity>
      <View style={styles.premiumBadge}>
        <Text style={styles.premiumText}>premium</Text>
      </View>
    </View>
  </View>
  
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>锻炼</Text>
    <Text style={styles.viewAll}>查看全部</Text>
    <View style={styles.workoutItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.workoutImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>Total body barre: bodyweight</Text>
        <Text style={styles.itemSubtitle}>英语</Text>
        <Text style={styles.itemDuration}>27 MIN</Text>
        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.playButtonText}>播放</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.favoriteButton} onPress={() => toggleFavorite('barre')}>
        <Text style={styles.favoriteIcon}>{favorites['barre'] ? '★' : '☆'}</Text>
      </TouchableOpacity>
      <View style={styles.premiumBadge}>
        <Text style={styles.premiumText}>premium</Text>
      </View>
    </View>
    
    <View style={styles.workoutItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.workoutImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>Cardio group dance</Text>
        <Text style={styles.itemSubtitle}>英语</Text>
        <Text style={styles.itemDuration}>16 MIN</Text>
        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.playButtonText}>播放</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  
  <View style={styles.tabBar}>
    <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.tabText}>今天</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>
      <Text style={[styles.tabText, styles.activeTabText]}>发现</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Friends')}>
      <Text style={styles.tabText}>好友</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Text style={styles.tabText}>Premium</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
header: {
fontSize: 24,
fontWeight: 'bold',
padding: 16,
},
section: {
marginBottom: 20,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginLeft: 16,
marginBottom: 10,
},
viewAll: {
fontSize: 14,
color: 'blue',
position: 'absolute',
right: 16,
top: 4,
},
featuredItem: {
margin: 16,
borderRadius: 8,
overflow: 'hidden',
backgroundColor: '#f0f0f0',
},
featuredImage: {
width: '100%',
height: 200,
},
workoutItem: {
flexDirection: 'row',
margin: 16,
borderRadius: 8,
overflow: 'hidden',
backgroundColor: '#f0f0f0',
},
workoutImage: {
width: 100,
height: 100,
},
itemInfo: {
flex: 1,
padding: 10,
},
itemTitle: {
fontSize: 16,
fontWeight: 'bold',
},
itemSubtitle: {
fontSize: 14,
color: 'gray',
},
itemDuration: {
fontSize: 14,
marginTop: 5,
},
playButton: {
backgroundColor: '#4CAF50',
padding: 5,
borderRadius: 5,
marginTop: 5,
alignSelf: 'flex-start',
},
playButtonText: {
color: 'white',
},
favoriteButton: {
position: 'absolute',
top: 10,
right: 10,
},
favoriteIcon: {
fontSize: 24,
color: 'gold',
},
premiumBadge: {
position: 'absolute',
top: 10,
left: 10,
backgroundColor: 'rgba(0,0,0,0.5)',
padding: 5,
borderRadius: 5,
},
premiumText: {
color: 'white',
fontSize: 12,
},
tabBar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 10,
},
tabItem: {
alignItems: 'center',
},
tabText: {
fontSize: 12,
},
activeTab: {
borderTopWidth: 2,
borderTopColor: 'blue',
},
activeTabText: {
color: 'blue',
},
});
export default DiscoveryScreen;