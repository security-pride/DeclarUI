import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
const Menu = ({ navigation }) => {
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
<View style={styles.headerRight}>
<View style={styles.profileBadge}>
<Image source={require('../assets/snack-icon.png')} style={styles.smallProfileImage} />
<View style={styles.notificationBadge} />
</View>
<Image source={require('../assets/snack-icon.png')} style={styles.smallProfileImage} />
<TouchableOpacity>
<Feather name="more-horizontal" size={24} color="#1DA1F2" />
</TouchableOpacity>
</View>
</View>
  <ScrollView>
    <View style={styles.profileInfo}>
      <Text style={styles.username}>Pixsellz</Text>
      <Text style={styles.handle}>@pixsellz</Text>
    </View>
    
    <View style={styles.followInfo}>
      <Text style={styles.followText}><Text style={styles.followCount}>216</Text> Following</Text>
      <Text style={styles.followText}><Text style={styles.followCount}>117</Text> Followers</Text>
    </View>
    
    <View style={styles.menuItems}>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
        <Feather name="user" size={24} color="#14171A" />
        <Text style={styles.menuItemText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Feather name="list" size={24} color="#14171A" />
        <Text style={styles.menuItemText}>Lists</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Feather name="message-circle" size={24} color="#14171A" />
        <Text style={styles.menuItemText}>Topics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Feather name="bookmark" size={24} color="#14171A" />
        <Text style={styles.menuItemText}>Bookmarks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Feather name="zap" size={24} color="#14171A" />
        <Text style={styles.menuItemText}>Moments</Text>
      </TouchableOpacity>
    </View>
    
    <View style={styles.separator} />
    
    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuItemText}>Settings and privacy</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuItemText}>Help Center</Text>
    </TouchableOpacity>
  </ScrollView>
  
  <View style={styles.footer}>
    <TouchableOpacity>
      <Feather name="bulb" size={24} color="#1DA1F2" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Feather name="qr" size={24} color="#1DA1F2" />
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
padding: 15,
},
profileImage: {
width: 40,
height: 40,
borderRadius: 20,
},
headerRight: {
flexDirection: 'row',
alignItems: 'center',
},
smallProfileImage: {
width: 32,
height: 32,
borderRadius: 16,
marginHorizontal: 5,
},
profileBadge: {
position: 'relative',
},
notificationBadge: {
position: 'absolute',
top: 0,
right: 0,
width: 10,
height: 10,
borderRadius: 5,
backgroundColor: '#1DA1F2',
},
profileInfo: {
padding: 15,
},
username: {
fontSize: 20,
fontWeight: 'bold',
},
handle: {
fontSize: 15,
color: '#657786',
},
followInfo: {
flexDirection: 'row',
padding: 15,
},
followText: {
marginRight: 20,
fontSize: 15,
},
followCount: {
fontWeight: 'bold',
},
menuItems: {
marginTop: 20,
},
menuItem: {
flexDirection: 'row',
alignItems: 'center',
paddingVertical: 15,
paddingHorizontal: 20,
},
menuItemText: {
fontSize: 18,
marginLeft: 20,
},
separator: {
height: 1,
backgroundColor: '#E1E8ED',
marginVertical: 15,
},
footer: {
flexDirection: 'row',
justifyContent: 'space-between',
padding: 15,
borderTopWidth: 1,
borderTopColor: '#E1E8ED',
},
});
export default Menu;