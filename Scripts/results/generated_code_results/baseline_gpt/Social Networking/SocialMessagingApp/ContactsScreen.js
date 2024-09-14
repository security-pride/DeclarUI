import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatars } from 'react-native-vector-icons/MaterialIcons';

const contacts = [
  { id: '1', name: 'Antonio Banderas', status: 'online', initials: 'AB' },
  { id: '2', name: 'Billie Eillish', status: 'online', initials: 'BE' },
  { id: '3', name: 'Chris Evans', status: 'offline', lastSeen: 'today at 8:40', initials: 'CE' },
  { id: '4', name: 'Dasha Taran', status: 'offline', lastSeen: 'today at 8:40', initials: 'DT' },
  { id: '5', name: 'Dwayne Johnson', status: 'offline', lastSeen: 'today at 6:02', initials: 'DJ' },
  { id: '6', name: 'Emily Blunt', status: 'offline', lastSeen: 'today at 8:33', initials: 'EB' },
];

const ContactsScreen = () => {
  const renderContactItem = ({ item }) => (
    <View style={styles.contactItem}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.initials}</Text>
      </View>
      <View style={styles.contactDetails}>
        <Text style={styles.contactName}>{item.name}</Text>
        {item.status === 'online' ? (
          <Text style={styles.onlineText}>Online</Text>
        ) : (
          <Text style={styles.offlineText}>Last seen {item.lastSeen}</Text>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contacts</Text>
      </View>
      <TouchableOpacity style={styles.optionItem}>
        <Icon name="person-add" size={30} color="#000" />
        <Text style={styles.optionText}>Invite friends</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionItem}>
        <Icon name="location-on" size={30} color="#000" />
        <Text style={styles.optionText}>Find people nearby</Text>
      </TouchableOpacity>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContactItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  optionText: {
    marginLeft: 16,
    fontSize: 16,
    color: '#000',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginLeft: 72,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 18,
    color: '#000',
  },
  contactDetails: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    color: '#000',
  },
  onlineText: {
    color: 'green',
  },
  offlineText: {
    color: 'gray',
  },
});

export default ContactsScreen;