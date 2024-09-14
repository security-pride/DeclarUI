import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
const Home = ({ navigation }) => {
const [tweets, setTweets] = useState([
{
id: '1',
user: 'Martha Craig',
handle: '@craig_love',
content: 'UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou',
likes: 21,
retweets: 5,
comments: 28,
time: '12h',
},
{
id: '2',
user: 'Maximmilian',
handle: '@maxjacobson',
content: "Y' all ready for this next post?",
likes: 363,
retweets: 18,
comments: 46,
time: '3h',
},
{
id: '3',
user: 'Tabitha Potter',
handle: '@mis_potter',
content: "Kobe's passing is really sticking w/ me in a way I didn't expect. He was an icon, the kind of person who wouldn't die this way. My wife compared it to Princess Di's accident. But the end can happen for anyone at any time, & I can't help but think of anything else lately.",
likes: 11,
retweets: 1,
comments: 7,
time: '14h',
},
{
id: '4',
user: 'karennne',
handle: '@karennne',
content: "Name a show where the lead character is the worst character on the show I'll go Sabrina Spellman",
likes: 7461,
retweets: 1249,
comments: 1906,
time: '10h',
},
]);
const renderTweet = ({ item }) => (
<TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.tweetContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
<View style={styles.tweetContent}>
<View style={styles.tweetHeader}>
<Text style={styles.userName}>{item.user}</Text>
<Text style={styles.userHandle}>{item.handle}</Text>
<Text style={styles.tweetTime}>{item.time}</Text>
</View>
<Text style={styles.tweetText}>{item.content}</Text>
<View style={styles.tweetActions}>
<TouchableOpacity style={styles.actionButton}>
<Feather name="message-circle" size={16} color="#657786" />
<Text style={styles.actionText}>{item.comments}</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.actionButton}>
<Feather name="repeat" size={16} color="#657786" />
<Text style={styles.actionText}>{item.retweets}</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.actionButton}>
<Feather name="heart" size={16} color="#657786" />
<Text style={styles.actionText}>{item.likes}</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.actionButton}>
<Feather name="share" size={16} color="#657786" />
</TouchableOpacity>
</View>
</View>
</TouchableOpacity>
);
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.navigate('Menu')}>
<Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
</TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.logo} />
<TouchableOpacity onPress={() => {}}>
<Feather name="star" size={24} color="#1DA1F2" />
</TouchableOpacity>
</View>
<FlatList
data={tweets}
renderItem={renderTweet}
keyExtractor={(item) => item.id}
showsVerticalScrollIndicator={false}
/>
<TouchableOpacity style={styles.newTweetButton} onPress={() => {}}>
<Feather name="plus" size={24} color="white" />
</TouchableOpacity>
<View style={styles.bottomNav}>
<TouchableOpacity onPress={() => {}}>
<Feather name="home" size={24} color="#1DA1F2" />
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Trends')}>
<Feather name="search" size={24} color="#657786" />
</TouchableOpacity>
<TouchableOpacity onPress={() => {}}>
<Feather name="bell" size={24} color="#657786" />
</TouchableOpacity>
<TouchableOpacity onPress={() => {}}>
<Feather name="mail" size={24} color="#657786" />
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
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#E1E8ED',
},
profileImage: {
width: 32,
height: 32,
borderRadius: 16,
},
logo: {
width: 30,
height: 30,
},
tweetContainer: {
flexDirection: 'row',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#E1E8ED',
},
tweetContent: {
flex: 1,
marginLeft: 10,
},
tweetHeader: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 5,
},
userName: {
fontWeight: 'bold',
marginRight: 5,
},
userHandle: {
color: '#657786',
marginRight: 5,
},
tweetTime: {
color: '#657786',
},
tweetText: {
marginBottom: 10,
},
tweetActions: {
flexDirection: 'row',
justifyContent: 'space-between',
},
actionButton: {
flexDirection: 'row',
alignItems: 'center',
},
actionText: {
marginLeft: 5,
color: '#657786',
},
newTweetButton: {
position: 'absolute',
right: 20,
bottom: 70,
width: 56,
height: 56,
borderRadius: 28,
backgroundColor: '#1DA1F2',
justifyContent: 'center',
alignItems: 'center',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
height: 50,
borderTopWidth: 1,
borderTopColor: '#E1E8ED',
},
});
export default Home;