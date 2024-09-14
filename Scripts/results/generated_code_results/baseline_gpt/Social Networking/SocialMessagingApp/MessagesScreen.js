import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const messages = [
  {
    id: 1,
    initials: 'AB',
    name: 'Antonio Banderas',
    message: 'You’re welcome',
    time: '9:39',
    read: true,
    online: true,
  },
  {
    id: 2,
    initials: 'CE',
    name: 'Chris Evans',
    message: 'Hello there?',
    time: '8:45',
    read: false,
    online: false,
  },
  {
    id: 3,
    initials: 'AB',
    name: 'Scarlett Johansson',
    message: 'Thanks ray!',
    time: '8:30',
    read: true,
    online: true,
    badgeCount: 2,
  },
  {
    id: 4,
    initials: 'AB',
    name: 'Billie Eillish',
    message: 'Okay thank you billie',
    time: '7:55',
    read: true,
    online: true,
  },
  {
    id: 5,
    initials: 'DT',
    name: 'Dasha Taran',
    message: 'Photo',
    time: '6:00',
    read: true,
    badgeCount: 2,
  },
  {
    id: 6,
    initials: 'IS',
    name: 'Ilay Serah',
    message: 'Video',
    time: 'Yesterday',
    read: true,
    badgeCount: 2,
  },
  {
    id: 7,
    initials: 'EB',
    name: 'Emily Blunt',
    message: 'Audio',
    time: 'Yesterday',
    read: false,
  },
  {
    id: 8,
    initials: 'JD',
    name: 'Johnny Deep',
    message: 'Call',
    time: '',
    read: true,
  },
];

const MessagesScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.avatar}>
          <Text style={styles.initials}>{item.initials}</Text>
          {item.online && <View style={styles.onlineIndicator} />}
        </View>
        <View style={styles.messageDetails}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.messagePreview}>
            {!item.read && (
              <Icon name="check" size={12} color="gray" style={styles.checkIcon} />
            )}
            <Text
              style={[styles.message, { fontWeight: item.read ? 'normal' : 'bold' }]}
            >
              {item.message}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.time}>{item.time}</Text>
        {item.badgeCount && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.badgeCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={messages}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  initials: {
    fontWeight: 'bold',
    color: '#000',
  },
  onlineIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  messageDetails: {},
  name: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  messagePreview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkIcon: {
    marginRight: 5,
  },
  message: {
    color: 'gray',
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  time: {
    color: 'gray',
    fontSize: 12,
  },
  badge: {
    marginTop: 5,
    backgroundColor: '#333',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
});

export default MessagesScreen;