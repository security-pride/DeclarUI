import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchResults = () => {
const navigation = useNavigation();
const searchResults = [
{
id: '1',
name: 'Klee Gracia',
age: 24,
bio: "Hi there! I'm Gracia ✨, a fun-loving adventurer looking for great connections.",
interests: ['Running', 'Outdoor', 'Anime'],
potentialMatch: true,
image: require('../assets/snack-icon.png'),
},
];
const relatedProfiles = [
{ id: '2', name: 'Mika Gracia', age: 18, location: 'Bali, Indonesia', matchPercentage: 98, image: require('../assets/snack-icon.png') },
{ id: '3', name: 'Gracy Logan', age: 28, location: 'Jakarta, Indonesia', matchPercentage: 98, image: require('../assets/snack-icon.png') },
{ id: '4', name: 'R.O Gracia', age: 17, location: 'Bekasi, Indonesia', matchPercentage: 93, image: require('../assets/snack-icon.png') },
{ id: '5', name: 'Audrey Gracia', age: 17, location: 'Bali, Indonesia', matchPercentage: 93, image: require('../assets/snack-icon.png') },
];
const handleBack = () => {
navigation.goBack();
};
const handleProfilePress = (profile) => {
navigation.navigate('Profile', { profile });
};
const renderSearchResult = ({ item }) => (
<TouchableOpacity style={styles.searchResultCard} onPress={() => handleProfilePress(item)}>
<Image source={item.image} style={styles.profileImage} />
<View style={styles.profileInfo}>
<Text style={styles.name}>{item.name}, {item.age}</Text>
<View style={styles.interestsContainer}>
{item.interests.map((interest, index) => (
<Text key={index} style={styles.interest}>{interest}</Text>
))}
</View>
<Text style={styles.bio} numberOfLines={2}>{item.bio}</Text>
</View>
{item.potentialMatch && (
<View style={styles.potentialMatchBadge}>
<Text style={styles.potentialMatchText}>Potential Match!</Text>
</View>
)}
</TouchableOpacity>
);
const renderRelatedProfile = ({ item }) => (
<TouchableOpacity style={styles.relatedProfileCard} onPress={() => handleProfilePress(item)}>
<Image source={item.image} style={styles.relatedProfileImage} />
<Text style={styles.relatedProfileName}>{item.name}, {item.age}</Text>
<Text style={styles.relatedProfileLocation}>{item.location}</Text>
<Text style={styles.matchPercentage}>{item.matchPercentage}% Match</Text>
</TouchableOpacity>
);
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<TouchableOpacity onPress={handleBack}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<View style={styles.searchBar}>
<Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
<TextInput style={styles.searchInput} placeholder="Gracia" placeholderTextColor="#888" />
</View>
</View>
  <Text style={styles.sectionTitle}>Related Result</Text>
  <FlatList
    data={searchResults}
    renderItem={renderSearchResult}
    keyExtractor={item => item.id}
    horizontal={false}
  />

  <Text style={styles.sectionTitle}>More About Gracia</Text>
  <FlatList
    data={relatedProfiles}
    renderItem={renderRelatedProfile}
    keyExtractor={item => item.id}
    numColumns={2}
    columnWrapperStyle={styles.relatedProfilesRow}
  />
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
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
backIcon: {
width: 24,
height: 24,
marginRight: 10,
},
searchBar: {
flex: 1,
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#f0f0f0',
borderRadius: 20,
paddingHorizontal: 10,
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
margin: 10,
},
searchResultCard: {
flexDirection: 'row',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
profileImage: {
width: 80,
height: 80,
borderRadius: 40,
marginRight: 10,
},
profileInfo: {
flex: 1,
},
name: {
fontSize: 16,
fontWeight: 'bold',
},
interestsContainer: {
flexDirection: 'row',
marginTop: 5,
},
interest: {
backgroundColor: '#e0e0e0',
paddingHorizontal: 8,
paddingVertical: 4,
borderRadius: 10,
marginRight: 5,
fontSize: 12,
},
bio: {
marginTop: 5,
color: '#666',
},
potentialMatchBadge: {
position: 'absolute',
top: 10,
right: 10,
backgroundColor: '#FFD700',
paddingHorizontal: 8,
paddingVertical: 4,
borderRadius: 10,
},
potentialMatchText: {
fontSize: 12,
fontWeight: 'bold',
},
relatedProfilesRow: {
justifyContent: 'space-between',
paddingHorizontal: 10,
},
relatedProfileCard: {
width: '48%',
marginBottom: 10,
borderRadius: 10,
overflow: 'hidden',
backgroundColor: '#f0f0f0',
},
relatedProfileImage: {
width: '100%',
height: 150,
resizeMode: 'cover',
},
relatedProfileName: {
fontSize: 14,
fontWeight: 'bold',
margin: 5,
},
relatedProfileLocation: {
fontSize: 12,
color: '#666',
marginHorizontal: 5,
},
matchPercentage: {
fontSize: 12,
color: '#4CAF50',
fontWeight: 'bold',
margin: 5,
},
});
export default SearchResults;