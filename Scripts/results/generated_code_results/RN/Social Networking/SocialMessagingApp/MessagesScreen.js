import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const MessagesScreen = () => {
const navigation = useNavigation();
const messages = [
{ id: '1', name: 'Antonio Banderas', lastMessage: "You're welcome", time: '9:39', status: 'Online', initials: 'AB' },
{ id: '2', name: 'Chris Evans', lastMessage: 'Hello there?', time: '8:45', initials: 'CE' },
{ id: '3', name: 'Scarlett Johansson', lastMessage: 'Thanks ray!', time: '8:30', unreadCount: 2, status: 'Online', initials: 'AB' },
{ id: '4', name: 'Billie Eilish', lastMessage: 'Okay thank you billie', time: '7:55', status: 'Online', initials: 'AB' },
{ id: '5', name: 'Dasha Taran', lastMessage: 'Photo', time: '6:00', unreadCount: 2, initials: 'DT' },
{ id: '6', name: 'Ilay Serah', lastMessage: 'Video', time: 'Yesterday', unreadCount: 2, initials: 'IS' },
{ id: '7', name: 'Emily Blunt', lastMessage: 'Audio', time: 'Yesterday', initials: 'EB' },
{ id: '8', name: 'Johnny Deep', lastMessage: 'Cool!', time: 'Yesterday', initials: 'JD' },
];
const renderMessageItem = ({ item }) => (
<TouchableOpacity style={styles.messageItem} onPress={() => navigation.navigate('Chat', { contactName: item.name })}>
<View style={styles.avatar}>
<Text style={styles.initials}>{item.initials}</Text>
{item.status === 'Online' && <View style={styles.onlineStatus} />}
</View>
<View style={styles.messageContent}>
<Text style={styles.contactName}>{item.name}</Text>
<Text style={styles.lastMessage}>{item.lastMessage}</Text>
</View>
<View style={styles.messageInfo}>
<Text style={styles.messageTime}>{item.time}</Text>
{item.unreadCount && (
<View style={styles.unreadBadge}>
<Text style={styles.unreadCount}>{item.unreadCount}</Text>
</View>
)}
</View>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>Messages</Text>
<TouchableOpacity onPress={() => navigation.navigate('Search')}>
<Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
</TouchableOpacity>
</View>
<FlatList
data={messages}
renderItem={renderMessageItem}
keyExtractor={(item) => item.id}
/>
<View style={styles.bottomNav}>
<TouchableOpacity style={styles.navItem}>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
<Text style={[styles.navText, styles.activeNavText]}>Messages</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Contacts')}>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
<Text style={styles.navText}>Contacts</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.navItem}>
<Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
<Text style={styles.navText}>Calls</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
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
backgroundColor: '#fff',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
headerTitle: {
fontSize: 24,
fontWeight: 'bold',
},
searchIcon: {
width: 24,
height: 24,
},
messageItem: {
flexDirection: 'row',
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
avatar: {
width: 50,
height: 50,
borderRadius: 25,
backgroundColor: '#e0e0e0',
justifyContent: 'center',
alignItems: 'center',
marginRight: 16,
},
initials: {
fontSize: 18,
fontWeight: 'bold',
},
onlineStatus: {
position: 'absolute',
bottom: 0,
right: 0,
width: 12,
height: 12,
borderRadius: 6,
backgroundColor: 'green',
borderWidth: 2,
borderColor: '#fff',
},
messageContent: {
flex: 1,
},
contactName: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 4,
},
lastMessage: {
fontSize: 14,
color: '#888',
},
messageInfo: {
alignItems: 'flex-end',
},
messageTime: {
fontSize: 12,
color: '#888',
marginBottom: 4,
},
unreadBadge: {
backgroundColor: '#007AFF',
borderRadius: 10,
paddingHorizontal: 6,
paddingVertical: 2,
},
unreadCount: {
color: '#fff',
fontSize: 12,
fontWeight: 'bold',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 8,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 4,
},
navText: {
fontSize: 12,
color: '#888',
},
activeNavText: {
color: '#007AFF',
fontWeight: 'bold',
},
});
export default MessagesScreen;