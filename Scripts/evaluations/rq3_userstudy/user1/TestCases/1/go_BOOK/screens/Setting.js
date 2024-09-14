import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Switch, StyleSheet, ScrollView } from 'react-native';
const Setting = ({ navigation }) => {
const [notificationsEnabled, setNotificationsEnabled] = useState(true);
const handleLogout = () => {
// Implement logout logic here
navigation.navigate('Login');
};
const renderSettingItem = (icon, label, hasToggle = false, onPress = () => {}) => (
<TouchableOpacity style={styles.settingItem} onPress={onPress}>
<View style={styles.settingItemLeft}>
<Image source={require('../assets/snack-icon.png')} style={styles.settingIcon} />
<Text style={styles.settingLabel}>{label}</Text>
</View>
{hasToggle ? (
<Switch value={notificationsEnabled} onValueChange={setNotificationsEnabled} />
) : (
<Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
)}
</TouchableOpacity>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>Notification</Text>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.settingsIcon} />
</TouchableOpacity>
</View>
  <ScrollView>
    <View style={styles.profileSection}>
      <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>Mosarraf Hossain</Text>
        <Text style={styles.profileRole}>Product Designer</Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.editIcon} />
      </TouchableOpacity>
    </View>

    {renderSettingItem('key', 'Change Password')}
    {renderSettingItem('bell', 'Notification', true)}
    {renderSettingItem('card', 'Payment Method')}
    {renderSettingItem('shield', 'Security')}
    {renderSettingItem('user-plus', 'Invite Friend')}
    {renderSettingItem('file-text', 'Terms & Condition')}
    {renderSettingItem('lock', 'Privacy Policy')}

    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
      <Text style={styles.logoutButtonText}>Logout</Text>
    </TouchableOpacity>
  </ScrollView>
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
headerTitle: {
fontSize: 18,
fontWeight: 'bold',
},
settingsIcon: {
width: 24,
height: 24,
},
profileSection: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#FFFFFF',
padding: 16,
marginBottom: 16,
},
profileImage: {
width: 60,
height: 60,
borderRadius: 30,
},
profileInfo: {
marginLeft: 16,
flex: 1,
},
profileName: {
fontSize: 18,
fontWeight: 'bold',
},
profileRole: {
color: '#666',
},
editButton: {
backgroundColor: '#007AFF',
borderRadius: 15,
width: 30,
height: 30,
justifyContent: 'center',
alignItems: 'center',
},
editIcon: {
width: 16,
height: 16,
tintColor: '#FFFFFF',
},
settingItem: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
backgroundColor: '#FFFFFF',
padding: 16,
marginBottom: 1,
},
settingItemLeft: {
flexDirection: 'row',
alignItems: 'center',
},
settingIcon: {
width: 24,
height: 24,
marginRight: 16,
},
settingLabel: {
fontSize: 16,
},
arrowIcon: {
width: 16,
height: 16,
},
logoutButton: {
backgroundColor: '#007AFF',
margin: 16,
padding: 16,
borderRadius: 8,
alignItems: 'center',
},
logoutButtonText: {
color: '#FFFFFF',
fontSize: 16,
fontWeight: 'bold',
},
});
export default Setting;