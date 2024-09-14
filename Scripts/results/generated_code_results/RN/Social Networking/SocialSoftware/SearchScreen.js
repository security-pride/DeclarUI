import React, { useState } from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchScreen = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const users = [
{ name: 'aura', fullName: 'Aura Brown', followers: '500 mil' },
{ name: 'rick', fullName: 'Rick Wright', followers: '500 mil' },
{ name: 'mike', fullName: 'Mike Torello', followers: '500 mil' },
{ name: 'theodore', fullName: 'Theodore T.C. Calvin', followers: '500 mil' },
{ name: 'kate', fullName: 'Kate Tanner', followers: '500 mil' },
{ name: 'thomas', fullName: 'Thomas Magnum', followers: '500 mil' },
{ name: 'april', fullName: 'April Curtis', followers: '500 mil' },
];
const renderUser = ({ item }) => (
<TouchableOpacity
style={styles.userItem}
onPress={() => navigation.navigate('UserProfile', { username: item.name })}
>
<View style={styles.userInfo}>
<Text style={styles.username}>{item.name}</Text>
<Text style={styles.fullName}>{item.fullName}</Text>
<Text style={styles.followers}>{item.followers} followers</Text>
</View>
<TouchableOpacity style={styles.followButton}>
<Text style={styles.followButtonText}>Follow</Text>
</TouchableOpacity>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<Text style={styles.header}>Search</Text>
<TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#666" value={searchQuery} onChangeText={setSearchQuery} />
<FlatList
data={users}
renderItem={renderUser}
keyExtractor={(item) => item.name}
/>
<View style={styles.bottomNav}>
<TouchableOpacity onPress={() => navigation.navigate('Feed')}>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Search')}>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Activity')}>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
</TouchableOpacity>
</View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#000',
paddingTop: 50,
},
header: {
fontSize: 28,
fontWeight: 'bold',
color: '#fff',
marginLeft: 15,
marginBottom: 15,
},
searchInput: {
backgroundColor: '#222',
color: '#fff',
padding: 10,
borderRadius: 8,
marginHorizontal: 15,
marginBottom: 15,
},
userItem: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingVertical: 15,
paddingHorizontal: 15,
borderBottomWidth: 1,
borderBottomColor: '#222',
},
userInfo: {
flex: 1,
},
username: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
},
fullName: {
color: '#888',
fontSize: 14,
},
followers: {
color: '#888',
fontSize: 12,
marginTop: 2,
},
followButton: {
backgroundColor: '#333',
paddingHorizontal: 15,
paddingVertical: 8,
borderRadius: 20,
},
followButtonText: {
color: '#fff',
fontWeight: 'bold',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
borderTopWidth: 1,
borderTopColor: '#222',
paddingVertical: 10,
},
navIcon: {
width: 24,
height: 24,
},
});
export default SearchScreen;