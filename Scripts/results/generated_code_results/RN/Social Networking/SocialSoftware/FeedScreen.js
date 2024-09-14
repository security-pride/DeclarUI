import React from 'react';
import { View, Text, Image, Pressable, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const FeedScreen = () => {
const navigation = useNavigation();
const posts = [
{
id: 1,
user: 'arochinski',
content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',
image: true,
stats: { answers: 7, likes: 59 },
timeAgo: '2 min'
},
{
id: 2,
user: 'arochinski',
content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',
stats: { answers: 7, likes: 59 },
timeAgo: '2 min'
},
{
id: 3,
user: 'aura',
content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',
timeAgo: '1min'
}
];
const renderPost = (post) => (
<View key={post.id} style={styles.postContainer}>
<TouchableOpacity onPress={() => navigation.navigate('UserProfile', { username: post.user })}>
<Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
</TouchableOpacity>
<View style={styles.postContent}>
<TouchableOpacity onPress={() => navigation.navigate('UserProfile', { username: post.user })}>
<Text style={styles.username}>{post.user}</Text>
</TouchableOpacity>
<Text style={styles.timeAgo}>{post.timeAgo}</Text>
<Text style={styles.postText}>{post.content}</Text>
{post.image && (
<Image source={require('../assets/snack-icon.png')} style={styles.postImage} />
)}
<View style={styles.postActions}>
<Pressable style={styles.actionButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
</Pressable>
<Pressable style={styles.actionButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
</Pressable>
<Pressable style={styles.actionButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
</Pressable>
<Pressable style={styles.actionButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
</Pressable>
</View>
<Text style={styles.stats}>
{post.stats?.answers} answers · {post.stats?.likes} likes
</Text>
</View>
</View>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<Image source={require('../assets/snack-icon.png')} style={styles.logo} />
<TouchableOpacity onPress={() => {/* Handle menu button press */}}>
<Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
</TouchableOpacity>
</View>
<ScrollView>
{posts.map(renderPost)}
</ScrollView>
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
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
},
logo: {
width: 30,
height: 30,
},
menuIcon: {
width: 24,
height: 24,
},
postContainer: {
flexDirection: 'row',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#333',
},
profileImage: {
width: 40,
height: 40,
borderRadius: 20,
marginRight: 10,
},
postContent: {
flex: 1,
},
username: {
color: '#fff',
fontWeight: 'bold',
},
timeAgo: {
color: '#777',
fontSize: 12,
},
postText: {
color: '#fff',
marginTop: 5,
},
postImage: {
width: '100%',
height: 200,
borderRadius: 10,
marginTop: 10,
},
postActions: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 10,
},
actionButton: {
padding: 5,
},
actionIcon: {
width: 20,
height: 20,
},
stats: {
color: '#777',
fontSize: 12,
marginTop: 5,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
borderTopWidth: 1,
borderTopColor: '#333',
paddingVertical: 10,
},
navIcon: {
width: 24,
height: 24,
},
});
export default FeedScreen;