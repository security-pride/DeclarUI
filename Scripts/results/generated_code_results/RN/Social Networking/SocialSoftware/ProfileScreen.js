import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ProfileScreen = () => {
const navigation = useNavigation();
const [activeTab, setActiveTab] = useState('Chirps');
const userInfo = {
name: 'Alisson Rochinski',
username: 'arochinski',
website: 'threads.net',
bio: "UI Designer | Let's redesign the world",
email: 'alisson.rochinski@gmail.com',
followers: 2957,
};
const posts = [
{
id: 1,
content: 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',
stats: { answers: 7, likes: 59 },
timeAgo: '2 min'
}
];
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" />
<View style={styles.header}>
<TouchableOpacity onPress={() => {/* Handle language selection /}}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => {/ Handle Instagram link /}}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => {/ Handle menu */}}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
  <ScrollView>
    <View style={styles.profileInfo}>
      <Text style={styles.name}>{userInfo.name}</Text>
      <Text style={styles.username}>{userInfo.username}</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.profilePicture} />
      <Text style={styles.bio}>{userInfo.bio}</Text>
      <Text style={styles.email}>{userInfo.email}</Text>
      <View style={styles.followersContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.followersAvatar} />
        <Text style={styles.followersText}>{userInfo.followers} seguidores</Text>
      </View>
    </View>

    <View style={styles.actionButtons}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Compartilhar Perfil</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.tabContainer}>
      <TouchableOpacity onPress={() => setActiveTab('Chirps')} style={[styles.tab, activeTab === 'Chirps' && styles.activeTab]}>
        <Text style={[styles.tabText, activeTab === 'Chirps' && styles.activeTabText]}>Chirps</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActiveTab('Answers')} style={[styles.tab, activeTab === 'Answers' && styles.activeTab]}>
        <Text style={[styles.tabText, activeTab === 'Answers' && styles.activeTabText]}>Answers</Text>
      </TouchableOpacity>
    </View>

    {posts.map(post => (
      <View key={post.id} style={styles.post}>
        <Image source={require('../assets/snack-icon.png')} style={styles.postAvatar} />
        <View style={styles.postContent}>
          <Text style={styles.postUsername}>{userInfo.username}</Text>
          <Text style={styles.postTime}>{post.timeAgo}</Text>
          <Text style={styles.postText}>{post.content}</Text>
          <View style={styles.postActions}>
            <TouchableOpacity>
              <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.postStats}>{post.stats.answers} answers · {post.stats.likes} likes</Text>
        </View>
      </View>
    ))}
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
    <TouchableOpacity>
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
padding: 10,
},
icon: {
width: 24,
height: 24,
},
profileInfo: {
alignItems: 'center',
padding: 20,
},
name: {
fontSize: 24,
fontWeight: 'bold',
color: '#fff',
},
username: {
fontSize: 16,
color: '#888',
},
profilePicture: {
width: 100,
height: 100,
borderRadius: 50,
marginVertical: 10,
},
bio: {
color: '#fff',
textAlign: 'center',
marginVertical: 5,
},
email: {
color: '#888',
},
followersContainer: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 10,
},
followersAvatar: {
width: 20,
height: 20,
borderRadius: 10,
marginRight: 5,
},
followersText: {
color: '#888',
},
actionButtons: {
flexDirection: 'row',
justifyContent: 'space-around',
marginVertical: 20,
},
button: {
borderColor: '#333',
borderWidth: 1,
borderRadius: 20,
paddingVertical: 8,
paddingHorizontal: 20,
},
buttonText: {
color: '#fff',
},
tabContainer: {
flexDirection: 'row',
borderBottomWidth: 1,
borderBottomColor: '#333',
},
tab: {
flex: 1,
alignItems: 'center',
paddingVertical: 10,
},
activeTab: {
borderBottomWidth: 2,
borderBottomColor: '#fff',
},
tabText: {
color: '#888',
},
activeTabText: {
color: '#fff',
},
post: {
flexDirection: 'row',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#333',
},
postAvatar: {
width: 40,
height: 40,
borderRadius: 20,
marginRight: 10,
},
postContent: {
flex: 1,
},
postUsername: {
color: '#fff',
fontWeight: 'bold',
},
postTime: {
color: '#888',
fontSize: 12,
},
postText: {
color: '#fff',
marginTop: 5,
},
postActions: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 10,
},
actionIcon: {
width: 20,
height: 20,
},
postStats: {
color: '#888',
fontSize: 12,
marginTop: 5,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#333',
paddingVertical: 10,
},
navIcon: {
width: 24,
height: 24,
},
});
export default ProfileScreen;