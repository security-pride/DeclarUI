import React, { useState } from 'react';
import { View, Text, Image, Switch, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ProfileScreen = () => {
const navigation = useNavigation();
const [muteNotifications, setMuteNotifications] = useState(true);
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.optionsIcon} />
</TouchableOpacity>
</View>
  <View style={styles.profileSection}>
    <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
    <View style={styles.profileInfo}>
      <Text style={styles.name}>Antonio Banderas</Text>
      <Text style={styles.status}>Online</Text>
    </View>
  </View>

  <View style={styles.settingsSection}>
    <View style={styles.settingItem}>
      <Text style={styles.settingLabel}>Mute notifications</Text>
      <Switch
        value={muteNotifications}
        onValueChange={setMuteNotifications}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={muteNotifications ? "#f5dd4b" : "#f4f3f4"}
      />
    </View>
    <TouchableOpacity style={styles.settingItem}>
      <Text style={styles.settingLabel}>Custom notifications</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.bioSection}>
    <Text style={styles.sectionHeader}>Bio and phone number</Text>
    <Text style={styles.bio}>UI Design enthusiast</Text>
    <Text style={styles.date}>June 24, 2020</Text>
    <Text style={styles.phoneNumber}>+62 009 1212 3131</Text>
    <Text style={styles.phoneLabel}>Mobile</Text>
  </View>

  <View style={styles.actionButtons}>
    <TouchableOpacity style={styles.actionButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.mediaCategories}>
    <Text style={styles.categoryLabel}>Media</Text>
    <Text style={styles.categoryLabel}>Documents</Text>
    <Text style={styles.categoryLabel}>Links</Text>
    <Text style={styles.categoryLabel}>Groups</Text>
  </View>

  <View style={styles.mediaGrid}>
    <View style={styles.mediaItem} />
    <View style={styles.mediaItem} />
    <View style={styles.mediaItem} />
    <View style={styles.mediaItem} />
  </View>
</ScrollView>
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
},
backIcon: {
width: 24,
height: 24,
},
optionsIcon: {
width: 24,
height: 24,
},
profileSection: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
avatar: {
width: 80,
height: 80,
borderRadius: 40,
marginRight: 16,
},
profileInfo: {
flex: 1,
},
name: {
fontSize: 24,
fontWeight: 'bold',
},
status: {
fontSize: 16,
color: 'green',
},
settingsSection: {
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
settingItem: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 16,
},
settingLabel: {
fontSize: 16,
},
bioSection: {
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
sectionHeader: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 8,
},
bio: {
fontSize: 16,
marginBottom: 4,
},
date: {
fontSize: 14,
color: '#888',
marginBottom: 8,
},
phoneNumber: {
fontSize: 16,
marginBottom: 4,
},
phoneLabel: {
fontSize: 14,
color: '#888',
},
actionButtons: {
flexDirection: 'row',
justifyContent: 'center',
padding: 16,
},
actionButton: {
marginHorizontal: 16,
},
actionIcon: {
width: 48,
height: 48,
},
mediaCategories: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
categoryLabel: {
fontSize: 16,
},
mediaGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
padding: 8,
},
mediaItem: {
width: '50%',
aspectRatio: 1,
padding: 4,
},
});
export default ProfileScreen;