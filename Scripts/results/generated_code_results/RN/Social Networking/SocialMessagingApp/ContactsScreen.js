import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ContactsScreen = () => {
const navigation = useNavigation();
const contacts = [
{ id: '1', name: 'Antonio Banderas', status: 'Online', initials: 'AB' },
{ id: '2', name: 'Billie Eilish', status: 'Online', initials: 'BE' },
{ id: '3', name: 'Chris Evans', status: 'Last seen today at 8:40', initials: 'CE' },
{ id: '4', name: 'Dasha Taran', initials: 'DT' },
{ id: '5', name: 'Dwayne Johnson', status: 'Last seen today at 6:02', initials: 'DJ' },
{ id: '6', name: 'Emily Blunt', status: 'Last seen today at 8:33', initials: 'EB' },
];
const renderContact = ({ item }) => (
<TouchableOpacity style={styles.contactItem} onPress={() => navigation.navigate('Chat', { contactName: item.name })}>
<View style={styles.avatar}>
<Text style={styles.initials}>{item.initials}</Text>
</View>
<View style={styles.contactInfo}>
<Text style={styles.contactName}>{item.name}</Text>
<Text style={styles.contactStatus}>{item.status}</Text>
</View>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<Text style={styles.header}>Contacts</Text>
<TouchableOpacity style={styles.actionItem}>
<Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
<Text style={styles.actionText}>Invite friends</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.actionItem}>
<Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
<Text style={styles.actionText}>Find people nearby</Text>
</TouchableOpacity>
<FlatList
data={contacts}
renderItem={renderContact}
keyExtractor={(item) => item.id}
/>
<View style={styles.bottomNav}>
<TouchableOpacity onPress={() => navigation.navigate('Messages')}>
<Text style={styles.navItem}>Messages</Text>
</TouchableOpacity>
<Text style={[styles.navItem, styles.activeNavItem]}>Contacts</Text>
<TouchableOpacity>
<Text style={styles.navItem}>Calls</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
<Text style={styles.navItem}>Profile</Text>
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
fontSize: 24,
fontWeight: 'bold',
padding: 16,
},
actionItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
actionIcon: {
width: 24,
height: 24,
marginRight: 16,
},
actionText: {
fontSize: 16,
},
contactItem: {
flexDirection: 'row',
alignItems: 'center',
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
contactInfo: {
flex: 1,
},
contactName: {
fontSize: 16,
fontWeight: 'bold',
},
contactStatus: {
fontSize: 14,
color: '#888',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 8,
},
navItem: {
fontSize: 14,
color: '#888',
},
activeNavItem: {
color: '#000',
fontWeight: 'bold',
},
});
export default ContactsScreen;