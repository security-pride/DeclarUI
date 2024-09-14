import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Homepage = () => {
const [searchQuery, setSearchQuery] = useState('');
const navigation = useNavigation();
const stories = [
{ name: 'My Story', add: true },
{ name: 'Hasley' },
{ name: 'Javier' },
{ name: 'Natalie' },
];
const categories = ['All', 'Photography', 'Outdoor', 'Anime'];
const recommendations = [
{
name: 'Klee Gracia',
age: 24,
bio: "Hi there! I'm Gracia ✨, a fun-loving adventurer looking for great connections.",
interests: ['Running', 'Outdoor', 'Anime'],
potentialMatch: true,
},
];
const navigateToProfile = () => {
navigation.navigate('Profile');
};
const navigateToMessages = () => {
navigation.navigate('Messages');
};
const handleSearch = () => {
if (searchQuery.trim() !== '') {
navigation.navigate('SearchResult', { query: searchQuery });
}
};
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
</TouchableOpacity>
<Text style={styles.title}>Forging New Bonds and Friendships</Text>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.notificationIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.filterIcon} />
</TouchableOpacity>
</View>
  <ScrollView>
    <View style={styles.storiesContainer}>
      {stories.map((story, index) => (
        <View key={index} style={styles.storyItem}>
          <Image
            source={story.add ? require('../assets/snack-icon.png') : require('../assets/snack-icon.png')}
            style={styles.storyImage}
          />
          <Text style={styles.storyName}>{story.name}</Text>
        </View>
      ))}
    </View>

    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a friend or partners"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
      </TouchableOpacity>
    </View>

    <View style={styles.categoriesContainer}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.categoryChip}>
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>

    <View style={styles.recommendationsContainer}>
      {recommendations.map((user, index) => (
        <TouchableOpacity key={index} style={styles.userCard} onPress={navigateToProfile}>
          <Image source={require('../assets/snack-icon.png')} style={styles.userImage} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{user.name}, {user.age}</Text>
            <Text style={styles.userBio}>{user.bio}</Text>
            {user.potentialMatch && (
              <View style={styles.potentialMatchBadge}>
                <Text style={styles.potentialMatchText}>Potential Match!</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>Discover</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>Likes</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={navigateToMessages}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>Messages</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={navigateToProfile}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>Profile</Text>
    </TouchableOpacity>
  </View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
header: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
padding: 10,
},
menuIcon: {
width: 24,
height: 24,
},
title: {
fontSize: 18,
fontWeight: 'bold',
},
notificationIcon: {
width: 24,
height: 24,
},
filterIcon: {
width: 24,
height: 24,
},
storiesContainer: {
flexDirection: 'row',
padding: 10,
},
storyItem: {
alignItems: 'center',
marginRight: 15,
},
storyImage: {
width: 60,
height: 60,
borderRadius: 30,
},
storyName: {
marginTop: 5,
fontSize: 12,
},
searchContainer: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
},
searchInput: {
flex: 1,
height: 40,
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 20,
paddingHorizontal: 15,
},
searchIcon: {
width: 20,
height: 20,
marginLeft: 10,
},
categoriesContainer: {
flexDirection: 'row',
padding: 10,
},
categoryChip: {
backgroundColor: '#f0f0f0',
paddingHorizontal: 15,
paddingVertical: 8,
borderRadius: 20,
marginRight: 10,
},
categoryText: {
fontSize: 14,
},
recommendationsContainer: {
padding: 10,
},
userCard: {
flexDirection: 'row',
backgroundColor: '#f9f9f9',
borderRadius: 10,
padding: 15,
marginBottom: 15,
},
userImage: {
width: 80,
height: 80,
borderRadius: 40,
},
userInfo: {
marginLeft: 15,
flex: 1,
},
userName: {
fontSize: 18,
fontWeight: 'bold',
},
userBio: {
fontSize: 14,
color: '#666',
marginTop: 5,
},
potentialMatchBadge: {
backgroundColor: '#FFD700',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 15,
alignSelf: 'flex-start',
marginTop: 10,
},
potentialMatchText: {
fontSize: 12,
fontWeight: 'bold',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
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
});
export default Homepage;