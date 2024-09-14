import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
const NotificationItem = ({ item }) => (
<View style={styles.notificationItem}>
<Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
<View style={styles.notificationContent}>
<Text style={styles.notificationText}>
<Text style={styles.userName}>{item.name}</Text> {item.action}
</Text>
<Text style={styles.timeStamp}>{item.time}</Text>
</View>
<TouchableOpacity style={styles.actionButton}>
{item.actionIcon === 'more' ? (
<Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />
) : (
<Image source={require('../assets/snack-icon.png')} style={styles.lightningIcon} />
)}
</TouchableOpacity>
</View>
);
const Notification = ({ navigation }) => {
const notifications = [
{ id: '1', name: 'Mohammad Reza', action: 'commented on your UI/UX Designer', time: 'about 2 hours ago', actionIcon: 'more' },
{ id: '2', name: 'Sandra Redden', action: 'like your Web UI Design Post', time: 'about 2 hours ago', actionIcon: 'more' },
{ id: '3', name: 'Merry Rose', action: 'joined to Final Presentation 🔥', time: 'about 2 hours ago', actionIcon: 'lightning' },
{ id: '4', name: 'Adan Eslishth', action: 'commented on your New shot', time: 'about 2 hours ago', actionIcon: 'more' },
{ id: '5', name: 'Michael Pinson', action: 'want to follow you.', time: 'about 2 hours ago', actionIcon: 'more' },
{ id: '6', name: 'Merry Rose', action: 'joined to Final Presentation 🔥', time: 'about 2 hours ago', actionIcon: 'lightning' },
];
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.title}>Search</Text>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />
</TouchableOpacity>
</View>
  <FlatList
    data={notifications}
    renderItem={({ item }) => <NotificationItem item={item} />}
    keyExtractor={item => item.id}
    ListHeaderComponent={() => <Text style={styles.sectionHeader}>Today</Text>}
    ListFooterComponent={() => <Text style={styles.sectionHeader}>Yesterday</Text>}
  />

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Notification</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Ticket</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>History</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Setting')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Setting</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#F5F5F5',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
backgroundColor: '#FFFFFF',
},
backIcon: {
width: 24,
height: 24,
},
title: {
fontSize: 18,
fontWeight: 'bold',
},
moreIcon: {
width: 24,
height: 24,
},
sectionHeader: {
fontSize: 16,
fontWeight: 'bold',
padding: 16,
backgroundColor: '#F5F5F5',
},
notificationItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
backgroundColor: '#FFFFFF',
borderBottomWidth: 1,
borderBottomColor: '#E0E0E0',
borderRadius: 30,
margin: 8,
},
avatar: {
width: 40,
height: 40,
borderRadius: 20,
marginRight: 12,
},
notificationContent: {
flex: 1,
},
notificationText: {
fontSize: 14,
},
userName: {
fontWeight: 'bold',
},
timeStamp: {
fontSize: 12,
color: '#888888',
marginTop: 4,
},
actionButton: {
padding: 8,
},
lightningIcon: {
width: 20,
height: 20,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
backgroundColor: '#FFFFFF',
paddingVertical: 8,
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
},
navItem: {
alignItems: 'center',
},
activeNavItem: {
borderTopWidth: 2,
borderTopColor: '#007AFF',
},
navIcon: {
width: 24,
height: 24,
},
navText: {
fontSize: 12,
marginTop: 4,
},
activeNavText: {
color: '#007AFF',
},
});
export default Notification;