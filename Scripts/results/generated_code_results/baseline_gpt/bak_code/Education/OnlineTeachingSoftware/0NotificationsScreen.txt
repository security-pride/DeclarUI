import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const notificationsData = [
  {
    id: '1',
    title: 'Purchase Completed!',
    message: 'You already bought a class from Jerremy Mamika. Enjoy the class! ✨',
    timeAgo: '2 m ago',
    icon: 'cart-outline'
  },
  {
    id: '2',
    title: 'Jerremy Send You a Message',
    message: "Hi Magdalena, I've seen your challange...",
    timeAgo: '2 m ago',
    icon: 'person-outline',
    image: '../assets/snack-icon.png',
    reply: true
  },
  {
    id: '3',
    title: 'Ramadhan Flash Sale!',
    message: 'Get 20% discount for first transaction in this month!😍😍',
    timeAgo: '2 m ago',
    icon: 'pricetag-outline'
  },
  {
    id: '4',
    title: 'Challange Completed',
    message: 'Congratulation! you have completed course by Jerremy Mamika',
    timeAgo: '10 m ago',
    icon: 'medal-outline'
  }
];

const NotificationsScreen = () => {
  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationItem}>
      {item.image ? (
        <Image source={require('../assets/snack-icon.png')} style={styles.notificationImage} />
      ) : (
        <Icon name={item.icon} size={30} color="#555" />
      )}
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        {item.reply && <Text style={styles.replyButton}>Reply the message</Text>}
      </View>
      <Text style={styles.timeAgo}>{item.timeAgo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back-outline" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Notification</Text>
        <TouchableOpacity>
          <Icon name="settings-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Recent</Text>
      <FlatList
        data={notificationsData}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 15
  },
  notificationContent: {
    flex: 1,
    marginLeft: 10
  },
  notificationImage: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  notificationMessage: {
    fontSize: 14,
    color: '#555'
  },
  replyButton: {
    color: '#1E90FF',
    marginTop: 5
  },
  timeAgo: {
    fontSize: 12,
    color: '#888',
    marginLeft: 10
  },
  separator: {
    height: 1,
    backgroundColor: '#eee'
  }
});

export default NotificationsScreen;