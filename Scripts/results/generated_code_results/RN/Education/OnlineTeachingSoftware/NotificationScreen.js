import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, StatusBar, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Notifications = () => {
const navigation = useNavigation();
const notificationData = [
{
type: 'Purchase',
title: 'Purchase Completed!',
description: 'You already bought a class from Jerremy Mamika. Enjoy the class! 👋',
time: '2 m ago',
icon: require('../assets/snack-icon.png'),
},
{
type: 'Message',
title: 'Jerremy Send You a Message',
description: "Hi Magdalena, I've seen your challenge...",
action: 'Reply the message',
time: '2 m ago',
icon: require('../assets/snack-icon.png'),
},
{
type: 'Promotion',
title: 'Ramadhan Flash Sale!',
description: 'Get 20% discount for first transaction in this month!😍😍',
time: '2 m ago',
icon: require('../assets/snack-icon.png'),
},
{
type: 'Achievement',
title: 'Challange Completed',
description: 'Congratulation! you have completed course by Jerremy Mamika',
time: '10 m ago',
icon: require('../assets/snack-icon.png'),
},
];
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</Pressable>
<Text style={styles.headerTitle}>Notification</Text>
<TouchableOpacity style={styles.settingsButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.settingsIcon} />
</TouchableOpacity>
</View>
  <ScrollView style={styles.notificationList}>
    <Text style={styles.sectionTitle}>Recent</Text>
    {notificationData.map((notification, index) => (
      <View key={index} style={styles.notificationItem}>
        <Image source={notification.icon} style={styles.notificationIcon} />
        <View style={styles.notificationContent}>
          <Text style={styles.notificationTitle}>{notification.title}</Text>
          <Text style={styles.notificationDescription}>{notification.description}</Text>
          {notification.action && (
            <TouchableOpacity>
              <Text style={styles.actionText}>{notification.action}</Text>
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.notificationTime}>{notification.time}</Text>
      </View>
    ))}
  </ScrollView>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
paddingTop: 50,
paddingBottom: 20,
},
backButton: {
padding: 5,
},
backIcon: {
width: 24,
height: 24,
},
headerTitle: {
fontSize: 20,
fontWeight: 'bold',
},
settingsButton: {
padding: 5,
},
settingsIcon: {
width: 24,
height: 24,
},
notificationList: {
flex: 1,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginLeft: 20,
marginBottom: 10,
},
notificationItem: {
flexDirection: 'row',
padding: 20,
borderBottomWidth: 1,
borderBottomColor: '#F0F0F0',
},
notificationIcon: {
width: 40,
height: 40,
borderRadius: 20,
marginRight: 15,
},
notificationContent: {
flex: 1,
},
notificationTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
notificationDescription: {
fontSize: 14,
color: '#666666',
marginBottom: 5,
},
actionText: {
color: '#6B4EFF',
fontSize: 14,
},
notificationTime: {
fontSize: 12,
color: '#999999',
},
});
export default Notifications;