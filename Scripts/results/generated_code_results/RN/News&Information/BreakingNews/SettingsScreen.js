import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Switch, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Settings = () => {
const navigation = useNavigation();
const [notificationSound, setNotificationSound] = useState(true);
const [vibrationAlert, setVibrationAlert] = useState(true);
const [messageImage, setMessageImage] = useState(true);
const navigateToLogin = () => {
navigation.navigate('LogIn');
};
const navigateBack = () => {
navigation.navigate('MoreDetails');
};
const renderSettingItem = (icon, label, hasSwitch = false, switchValue = false, onSwitchChange = null, hasArrow = true) => (
<View style={styles.settingItem}>
<Image source={{ uri: ../assets/${icon}.png }} style={styles.settingIcon} />
<Text style={styles.settingLabel}>{label}</Text>
{hasSwitch && (
<Switch
value={switchValue}
onValueChange={onSwitchChange}
trackColor={{ false: "#767577", true: "#81b0ff" }}
thumbColor={switchValue ? "#f5dd4b" : "#f4f3f4"}
/>
)}
{hasArrow && (
<TouchableOpacity>
<Image source={{ uri: '../assets/arrow-right.png' }} style={styles.arrowIcon} />
</TouchableOpacity>
)}
</View>
);
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<TouchableOpacity onPress={navigateBack}>
<Image source={{ uri: '../assets/arrow-left.png' }} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>设置</Text>
<Text style={styles.headerTime}>8:36</Text>
</View>
  <ScrollView>
    <View style={styles.profileSection}>
      <Image source={{ uri: '../assets/profile-placeholder.png' }} style={styles.profileImage} />
      <TouchableOpacity style={styles.registerButton} onPress={navigateToLogin}>
        <Text style={styles.registerButtonText}>注册</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>登录并加入入该社群</Text>
    </View>

    <View style={styles.sectionTitle}>
      <Text style={styles.sectionTitleText}>内容</Text>
    </View>

    {renderSettingItem('country-icon', '改变国家')}
    {renderSettingItem('topic-icon', '话题')}
    {renderSettingItem('source-icon', '来源管理')}

    <View style={styles.sectionTitle}>
      <Text style={styles.sectionTitleText}>消息</Text>
    </View>

    {renderSettingItem('notification-sound', '通知声音', true, notificationSound, setNotificationSound, false)}
    {renderSettingItem('vibration', '震动提醒', true, vibrationAlert, setVibrationAlert, false)}
    {renderSettingItem('message-image', '消息带图', true, messageImage, setMessageImage, false)}
    {renderSettingItem('notification-management', '通知管理')}
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
alignItems: 'center',
padding: 10,
backgroundColor: '#FFFFFF',
},
backIcon: {
width: 24,
height: 24,
},
headerTitle: {
flex: 1,
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center',
},
headerTime: {
fontSize: 16,
},
profileSection: {
alignItems: 'center',
padding: 20,
backgroundColor: '#FFFFFF',
},
profileImage: {
width: 80,
height: 80,
borderRadius: 40,
marginBottom: 10,
},
registerButton: {
backgroundColor: '#FF4500',
paddingVertical: 8,
paddingHorizontal: 20,
borderRadius: 20,
marginBottom: 10,
},
registerButtonText: {
color: '#FFFFFF',
fontWeight: 'bold',
},
loginText: {
color: '#666666',
},
sectionTitle: {
backgroundColor: '#EEEEEE',
padding: 10,
},
sectionTitleText: {
fontSize: 16,
color: '#666666',
},
settingItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
backgroundColor: '#FFFFFF',
borderBottomWidth: 1,
borderBottomColor: '#EEEEEE',
},
settingIcon: {
width: 24,
height: 24,
marginRight: 10,
},
settingLabel: {
flex: 1,
fontSize: 16,
},
arrowIcon: {
width: 20,
height: 20,
},
});
export default Settings;