import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchPage = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const [activeCategory, setActiveCategory] = useState('Sentence');
const handleCategoryPress = (category) => {
setActiveCategory(category);
};
const handleChannelPress = (channel) => {
// Navigate to channel page (not implemented in this PTG)
};
const handleNavPress = (screen) => {
navigation.navigate(screen);
};
const handleLessonSelect = () => {
navigation.navigate('LessonDetail');
};
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<Text style={styles.time}>9:41</Text>
<View style={styles.statusIcons}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</View>
</View>
  <ScrollView style={styles.content}>
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
    </View>

    <Text style={styles.sectionTitle}>Choose a category</Text>
    <View style={styles.categorySelector}>
      <TouchableOpacity
        style={[styles.categoryButton, activeCategory === 'Sentence' && styles.activeCategoryButton]}
        onPress={() => handleCategoryPress('Sentence')}
      >
        <Text style={[styles.categoryButtonText, activeCategory === 'Sentence' && styles.activeCategoryButtonText]}>Sentence</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.categoryButton, activeCategory === 'Speak' && styles.activeCategoryButton]}
        onPress={() => handleCategoryPress('Speak')}
      >
        <Text style={[styles.categoryButtonText, activeCategory === 'Speak' && styles.activeCategoryButtonText]}>Speak</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.categoriesGrid}>
      <TouchableOpacity style={styles.categoryCard} onPress={handleLessonSelect}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.categoryImage}>
          <Text style={styles.categoryName}>Movie</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryCard} onPress={handleLessonSelect}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.categoryImage}>
          <Text style={styles.categoryName}>Travel</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryCard} onPress={handleLessonSelect}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.categoryImage}>
          <Text style={styles.categoryName}>Music</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>

    <View style={styles.channelsSection}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Channel</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>view all</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.channelItem} onPress={() => handleChannelPress('Cornelia Gordon')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.channelImage} />
        <View style={styles.channelInfo}>
          <Text style={styles.channelName}>Cornelia Gordon</Text>
          <Text style={styles.subscriberCount}>129k subscribers</Text>
        </View>
        <TouchableOpacity style={styles.arrowButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.channelItem} onPress={() => handleChannelPress('Chase Bailey')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.channelImage} />
        <View style={styles.channelInfo}>
          <Text style={styles.channelName}>Chase Bailey</Text>
          <Text style={styles.subscriberCount}>129k subscribers</Text>
        </View>
        <TouchableOpacity style={styles.arrowButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('Search')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Search</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('Speak')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Speak</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('Vocabulary')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Vocabulary</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('Profile')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Profile</Text>
    </TouchableOpacity>
  </View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
paddingTop: 10,
},
time: {
fontSize: 16,
fontWeight: 'bold',
},
statusIcons: {
flexDirection: 'row',
},
icon: {
width: 20,
height: 20,
marginLeft: 5,
},
content: {
flex: 1,
paddingHorizontal: 20,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginTop: 20,
},
subtitle: {
fontSize: 14,
color: '#888',
marginTop: 5,
},
searchContainer: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#F0F0F0',
borderRadius: 10,
paddingHorizontal: 10,
marginTop: 20,
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
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginTop: 20,
marginBottom: 10,
},
categorySelector: {
flexDirection: 'row',
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
backgroundColor: '#007AFF',
},
categoryButtonText: {
color: '#333',
},
activeCategoryButtonText: {
color: '#FFFFFF',
},
categoriesGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
},
categoryCard: {
width: '31%',
aspectRatio: 1,
marginBottom: 10,
borderRadius: 10,
overflow: 'hidden',
},
categoryImage: {
flex: 1,
justifyContent: 'flex-end',
},
categoryName: {
color: '#FFFFFF',
fontSize: 16,
fontWeight: 'bold',
padding: 10,
backgroundColor: 'rgba(0,0,0,0.3)',
},
channelsSection: {
marginTop: 20,
},
sectionHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 10,
},
viewAllText: {
color: '#007AFF',
},
channelItem: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 15,
},
channelImage: {
width: 50,
height: 50,
borderRadius: 25,
marginRight: 10,
},
channelInfo: {
flex: 1,
},
channelName: {
fontSize: 16,
fontWeight: 'bold',
},
subscriberCount: {
fontSize: 14,
color: '#888',
},
arrowButton: {
padding: 5,
},
arrowIcon: {
width: 20,
height: 20,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
paddingVertical: 10,
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
fontSize: 12,
color: '#888',
},
activeNavText: {
color: '#007AFF',
},
});
export default SearchPage;