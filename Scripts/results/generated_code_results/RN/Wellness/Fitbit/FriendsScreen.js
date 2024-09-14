import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const FriendsScreen = () => {
const navigation = useNavigation();
const handleAddFriend = () => {
navigation.navigate('FindFriend');
};
const handleTabPress = (tabName) => {
navigation.navigate(tabName);
};
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>好友</Text>
<TouchableOpacity onPress={handleAddFriend} style={styles.addFriendIcon}>
<Text style={styles.addFriendIconText}>+👤</Text>
</TouchableOpacity>
</View>
  <View style={styles.content}>
    <Image
      source={require('../assets/snack-icon.png')}
      style={styles.illustration}
    />
    <Text style={styles.emptyStateText}>和朋友一起继续向前！</Text>
    <Text style={styles.emptyStateDescription}>
      记录进度、发送鼓励，并通过友好竞赛让自己更有活力。
    </Text>
  </View>

  <TouchableOpacity style={styles.addFriendButton} onPress={handleAddFriend}>
    <Text style={styles.addFriendButtonText}>+ 添加好友</Text>
  </TouchableOpacity>

  <View style={styles.tabBar}>
    <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Discovery')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabText}>发现</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabText}>今天</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={[styles.tabText, styles.activeTabText]}>好友</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Premium')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
      <Text style={styles.tabText}>Premium</Text>
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
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
headerTitle: {
fontSize: 20,
fontWeight: 'bold',
},
addFriendIcon: {
padding: 8,
},
addFriendIconText: {
fontSize: 24,
},
content: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
paddingHorizontal: 32,
},
illustration: {
width: 200,
height: 200,
marginBottom: 24,
},
emptyStateText: {
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center',
marginBottom: 8,
},
emptyStateDescription: {
fontSize: 14,
textAlign: 'center',
color: '#666',
marginBottom: 24,
},
addFriendButton: {
backgroundColor: '#FF4081',
paddingVertical: 16,
marginHorizontal: 16,
marginBottom: 32,
borderRadius: 8,
},
addFriendButtonText: {
color: '#fff',
textAlign: 'center',
fontSize: 16,
fontWeight: 'bold',
},
tabBar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 8,
},
tabItem: {
alignItems: 'center',
},
tabIcon: {
width: 24,
height: 24,
marginBottom: 4,
},
tabText: {
fontSize: 12,
},
activeTab: {
borderTopWidth: 2,
borderTopColor: '#FF4081',
},
activeTabText: {
color: '#FF4081',
},
});
export default FriendsScreen;