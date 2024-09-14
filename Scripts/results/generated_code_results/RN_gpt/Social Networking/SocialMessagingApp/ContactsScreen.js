import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ContactsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Contacts</Text>
      <ScrollView>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="person-add" size={20} color="#000" />
            <Text style={styles.actionText}>Invite friends</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="location-on" size={20} color="#000" />
            <Text style={styles.actionText}>Find people nearby</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contactList}>
          {contactsData.map((contact, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.contactItem} 
              onPress={() => navigation.navigate('Chat', { contactName: contact.name })}
            >
              <ImageBackground 
                source={require('../assets/snack-icon.png')} 
                style={styles.avatar} 
              >
                <Text style={styles.avatarText}>{contact.initials}</Text>
              </ImageBackground>
              <View style={styles.contactDetails}>
                <Text style={styles.contactName}>{contact.name}</Text>
                <Text style={styles.contactStatus}>{contact.status}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
          <Text style={styles.navText}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.navTextActive}>Contacts</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Calls')}>
          <Text style={styles.navText}>Calls</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const contactsData = [
  { name: 'Antonio Banderas', status: 'Online', initials: 'AB' },
  { name: 'Billie Eilish', status: 'Online', initials: 'BE' },
  { name: 'Chris Evans', status: 'Last seen today at 8:40', initials: 'CE' },
  { name: 'Dasha Taran', status: '', initials: 'DT' },
  { name: 'Dwayne Johnson', status: 'Last seen today at 6:02', initials: 'DJ' },
  { name: 'Emily Blunt', status: 'Last seen today at 8:33', initials: 'EB' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 16,
    marginLeft: 5,
  },
  contactList: {
    paddingHorizontal: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  avatar: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE',
    borderRadius: 25,
    marginRight: 15,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactDetails: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: '600',
  },
  contactStatus: {
    color: 'gray',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  navText: {
    fontSize: 16,
    color: 'gray',
  },
  navTextActive: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ContactsScreen;