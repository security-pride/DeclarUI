import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ActivityScreen = () => {
const navigation = useNavigation();
const [activeTab, setActiveTab] = useState('All');
const tabs = ['All', 'Answers', 'Mentions', 'Verifi'];
const activityData = [
{ name: 'thomas', action: 'Started following you' },
{ name: 'mike', action: 'Started following you' },
{ name: 'michael', action: 'Started following you' },
{ name: 'willie', action: 'Started following you' },
{ name: 'peter', action: 'Started following you' },
{ name: 'angela', action: 'Started following you' },
{ name: 'devon', action: 'Started following you' },
{ name: 'col', action: 'Started following you' },
{ name: 'templeton', action: 'Started following you' },
{ name: 'willie', action: 'Started following you' },
{ name: 'dori', action: 'Started following you' },
];
const renderActivityItem = ({ item }) => (
<View style={styles.activityItem}>
<TouchableOpacity onPress={() => navigation.navigate('UserProfile', { username: item.name })}>
<Image
source={require('../assets/snack-icon.png')}
style={styles.profileIcon}
/>
</TouchableOpacity>
<View style={styles.activityContent}>
<TouchableOpacity onPress={() => navigation.navigate('UserProfile', { username: item.name })}>
<Text style={styles.username}>{item.name}</Text>
</TouchableOpacity>
<Text style={styles.actionText}>{item.action}</Text>
</View>
<TouchableOpacity style={styles.followButton}>
<Text style={styles.followButtonText}>Follow</Text>
</TouchableOpacity>
</View>
);
return (
<View style={styles.container}>
<Text style={styles.header}>Activity</Text>
<View style={styles.tabContainer}>
{tabs.map((tab) => (
<TouchableOpacity
key={tab}
style={[styles.tab, activeTab === tab && styles.activeTab]}
onPress={() => setActiveTab(tab)}
>
<Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
</TouchableOpacity>
))}
</View>
<FlatList
data={activityData}
renderItem={renderActivityItem}
keyExtractor={(item, index) => index.toString()}
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
},
header: {
fontSize: 24,
fontWeight: 'bold',
color: '#fff',
padding: 16,
},
tabContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
borderBottomWidth: 1,
borderBottomColor: '#333',
},
tab: {
paddingVertical: 12,
paddingHorizontal: 16,
},
activeTab: {
borderBottomWidth: 2,
borderBottomColor: '#fff',
},
tabText: {
color: '#888',
fontSize: 16,
},
activeTabText: {
color: '#fff',
},
activityItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#333',
},
profileIcon: {
width: 40,
height: 40,
borderRadius: 20,
marginRight: 12,
},
activityContent: {
flex: 1,
},
username: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
},
actionText: {
color: '#888',
fontSize: 14,
},
followButton: {
backgroundColor: '#333',
paddingHorizontal: 16,
paddingVertical: 8,
borderRadius: 20,
},
followButtonText: {
color: '#fff',
fontSize: 14,
fontWeight: 'bold',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
borderTopWidth: 1,
borderTopColor: '#333',
paddingVertical: 8,
},
navIcon: {
width: 24,
height: 24,
},
});
export default ActivityScreen;