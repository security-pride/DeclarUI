import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

const messagesData = [
  { id: '1', initials: 'AB', name: 'Antonio Banderas', message: "You're welcome", time: '9:39', status: 'Online' },
  { id: '2', initials: 'CE', name: 'Chris Evans', message: 'Hello there?', time: '8:45' },
  { id: '3', initials: 'AB', name: 'Scarlett Johansson', message: 'Thanks ray!', time: '8:30', unreadCount: 2 },
  { id: '4', initials: 'AB', name: 'Billie Eilish', message: 'Okay thank you billie', time: '7:55', status: 'Online' },
  { id: '5', initials: 'DT', name: 'Dasha Taran', message: 'Photo', time: '6:00', unreadCount: 2 },
  { id: '6', initials: 'IS', name: 'Ilay Serah', message: 'Video', time: 'Yesterday', unreadCount: 2 },
  { id: '7', initials: 'EB', name: 'Emily Blunt', message: 'Audio', time: 'Yesterday' },
  { id: '8', initials: 'JD', name: 'Johnny Deep', message: 'Cool!', time: 'Yesterday' },
];

const MessagesScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.messageItem}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={require('../assets/snack-icon.png')} />
        {item.status === 'Online' && <View style={styles.onlineDot} />}
      </View>
      <View style={styles.messageInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{item.time}</Text>
        {item.unreadCount && <View style={styles.unreadBadge}><Text style={styles.unreadText}>{item.unreadCount}</Text></View>}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <Ionicons name="search" size={24} />
      </View>
      <FlatList
        data={messagesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Ionicons name="chatbubbles" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
          <Ionicons name="people" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Ionicons name="call" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person" size={24} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  messageItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  onlineDot: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    bottom: 0,
    right: 0,
  },
  messageInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  message: {
    color: '#555',
  },
  timeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  unreadBadge: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  unreadText: {
    color: 'white',
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});

export default MessagesScreen;