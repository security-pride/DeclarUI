import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
const SearchPage = ({ navigation }) => {
const [searchQuery, setSearchQuery] = useState('');
const [activeCategory, setActiveCategory] = useState('Sentence');
const categories = [
{ name: 'Movie', icon: 'chat-bubble-outline' },
{ name: 'Travel', icon: 'airplane' },
{ name: 'Music', icon: 'headphones' },
];
const channels = [
{ name: 'Cornelia Gordon', subscribers: '129k subscribers', image: '../assets/snack-icon.png' },
{ name: 'Chase Bailey', subscribers: '129k subscribers', image: '../assets/snack-icon.png' },
];
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.time}>9:41</Text>
<Image source={require('../assets/snack-icon.png')} style={styles.signalIcon} />
<Image source={require('../assets/snack-icon.png')} style={styles.wifiIcon} />
<Image source={require('../assets/snack-icon.png')} style={styles.batteryIcon} />
</View>
  <Text style={styles.title}>Find anything!</Text>
  <Text style={styles.subtitle}>Searching anything you want to learn here.</Text>

  <View style={styles.searchContainer}>
    <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
    <TextInput
      style={styles.searchInput}
      placeholder="Search"
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
    <TouchableOpacity style={styles.micButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.micIcon} />
    </TouchableOpacity>
  </View>

  <Text style={styles.sectionTitle}>Choose a category</Text>
  <View style={styles.categoryButtons}>
    <TouchableOpacity
      style={[styles.categoryButton, activeCategory === 'Sentence' && styles.activeCategoryButton]}
      onPress={() => setActiveCategory('Sentence')}
    >
      <Text style={[styles.categoryButtonText, activeCategory === 'Sentence' && styles.activeCategoryButtonText]}>Sentence</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.categoryButton, activeCategory === 'Speak' && styles.activeCategoryButton]}
      onPress={() => setActiveCategory('Speak')}
    >
      <Text style={[styles.categoryButtonText, activeCategory === 'Speak' && styles.activeCategoryButtonText]}>Speak</Text>
    </TouchableOpacity>
  </View>

  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
    {categories.map((category, index) => (
      <TouchableOpacity key={index} style={styles.categoryCard}>
        <ImageBackground
          source={require('../assets/snack-icon.png')}
          style={styles.categoryBackground}
          imageStyle={styles.categoryBackgroundImage}
        >
          <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
          <Text style={styles.categoryName}>{category.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    ))}
  </ScrollView>

  <View style={styles.channelSection}>
    <Text style={styles.sectionTitle}>Channel</Text>
    <TouchableOpacity>
      <Text style={styles.viewAllText}>view all</Text>
    </TouchableOpacity>
  </View>

  {channels.map((channel, index) => (
    <View key={index} style={styles.channelItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.channelImage} />
      <View style={styles.channelInfo}>
        <Text style={styles.channelName}>{channel.name}</Text>
        <Text style={styles.subscriberCount}>{channel.subscribers}</Text>
      </View>
      <TouchableOpacity style={styles.arrowButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  ))}

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
      <Image source={require('../assets/snack-icon.png')} style={[styles.navIcon, styles.activeNavIcon]} />
      <Text style={[styles.navText, styles.activeNavText]}>Search</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Speak')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Speak</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Vocabulary</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Profile</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
header: {
flexDirection: 'row',
justifyContent: 'flex-end',
alignItems: 'center',
paddingTop: 10,
paddingRight: 10,
},
time: {
position: 'absolute',
left: 20,
top: 10,
fontWeight: 'bold',
},
signalIcon: {
width: 15,
height: 15,
marginRight: 5,
},
wifiIcon: {
width: 15,
height: 15,
marginRight: 5,
},
batteryIcon: {
width: 20,
height: 15,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginTop: 20,
marginLeft: 20,
},
subtitle: {
fontSize: 14,
color: '#888',
marginLeft: 20,
marginBottom: 20,
},
searchContainer: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#F0F0F0',
borderRadius: 25,
marginHorizontal: 20,
paddingHorizontal: 15,
marginBottom: 20,
},
searchIcon: {
width: 20,
height: 20,
marginRight: 10,
},
searchInput: {
flex: 1,
height: 40,
},
micButton: {
padding: 5,
},
micIcon: {
width: 20,
height: 20,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginLeft: 20,
marginBottom: 10,
},
categoryButtons: {
flexDirection: 'row',
marginHorizontal: 20,
marginBottom: 20,
},
categoryButton: {
paddingHorizontal: 20,
paddingVertical: 10,
borderRadius: 20,
marginRight: 10,
backgroundColor: '#F0F0F0',
},
activeCategoryButton: {
backgroundColor: '#4A90E2',
},
categoryButtonText: {
color: '#888',
},
activeCategoryButtonText: {
color: '#FFFFFF',
},
categoriesContainer: {
paddingLeft: 20,
marginBottom: 20,
},
categoryCard: {
width: 120,
height: 160,
marginRight: 15,
borderRadius: 10,
overflow: 'hidden',
},
categoryBackground: {
flex: 1,
justifyContent: 'flex-end',
padding: 10,
},
categoryBackgroundImage: {
borderRadius: 10,
},
categoryIcon: {
width: 30,
height: 30,
tintColor: '#FFFFFF',
marginBottom: 5,
},
categoryName: {
color: '#FFFFFF',
fontWeight: 'bold',
},
channelSection: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginHorizontal: 20,
marginBottom: 10,
},
viewAllText: {
color: '#4A90E2',
},
channelItem: {
flexDirection: 'row',
alignItems: 'center',
marginHorizontal: 20,
marginBottom: 15,
},
channelImage: {
width: 50,
height: 50,
borderRadius: 25,
marginRight: 15,
},
channelInfo: {
flex: 1,
},
channelName: {
fontWeight: 'bold',
marginBottom: 5,
},
subscriberCount: {
color: '#888',
fontSize: 12,
},
arrowButton: {
padding: 5,
},
arrowIcon: {
width: 15,
height: 15,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
paddingVertical: 10,
},
navItem: {
alignItems: 'center',
},
activeNavItem: {
borderTopWidth: 2,
borderTopColor: '#4A90E2',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 5,
},
activeNavIcon: {
tintColor: '#4A90E2',
},
navText: {
fontSize: 12,
color: '#888',
},
activeNavText: {
color: '#4A90E2',
},
});
export default SearchPage;