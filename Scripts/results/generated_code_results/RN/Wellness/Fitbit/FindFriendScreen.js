import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const FindFriendScreen = () => {
const navigation = useNavigation();
const [activeTab, setActiveTab] = useState('contacts');
const handleTabPress = (tab) => {
setActiveTab(tab);
};
const handleConnectContacts = () => {
// Implement contact connection logic here
console.log('Connecting to contacts...');
// After successful connection or operation
navigation.navigate('Friends');
};
const handleComplete = () => {
navigation.navigate('Friends');
};
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>寻找朋友</Text>
<TouchableOpacity onPress={handleComplete}>
<Text style={styles.completeButton}>完成</Text>
</TouchableOpacity>
</View>
  <View style={styles.tabContainer}>
    <TouchableOpacity
      style={[styles.tab, activeTab === 'contacts' && styles.activeTab]}
      onPress={() => handleTabPress('contacts')}
    >
      <Text style={styles.tabIcon}>📇</Text>
      <Text style={styles.tabText}>通讯录</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.tab, activeTab === 'email' && styles.activeTab]}
      onPress={() => handleTabPress('email')}
    >
      <Text style={styles.tabIcon}>✉️</Text>
      <Text style={styles.tabText}>电子邮箱</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.tab, activeTab === 'username' && styles.activeTab]}
      onPress={() => handleTabPress('username')}
    >
      <Text style={styles.tabIcon}>👤</Text>
      <Text style={styles.tabText}>Username</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.content}>
    <Text style={styles.instructionTitle}>利用您的电话号码查找好友！</Text>
    <Text style={styles.instructionText}>
      输入您的电话号码，从您的联系人列表中添加好友。
    </Text>
  </View>

  <TouchableOpacity style={styles.connectButton} onPress={handleConnectContacts}>
    <Text style={styles.connectButtonText}>连接通讯录</Text>
  </TouchableOpacity>
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
padding: 16,
},
headerTitle: {
fontSize: 20,
fontWeight: 'bold',
},
completeButton: {
color: '#4CAF50',
fontSize: 16,
},
tabContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
tab: {
flex: 1,
alignItems: 'center',
paddingVertical: 16,
},
activeTab: {
borderBottomWidth: 2,
borderBottomColor: '#4CAF50',
},
tabIcon: {
fontSize: 24,
marginBottom: 4,
},
tabText: {
fontSize: 12,
},
content: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
paddingHorizontal: 32,
},
instructionTitle: {
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center',
marginBottom: 16,
},
instructionText: {
fontSize: 14,
textAlign: 'center',
color: '#666',
},
connectButton: {
backgroundColor: '#FF4081',
paddingVertical: 16,
marginHorizontal: 16,
marginBottom: 32,
borderRadius: 8,
},
connectButtonText: {
color: '#fff',
textAlign: 'center',
fontSize: 16,
fontWeight: 'bold',
},
});
export default FindFriendScreen;