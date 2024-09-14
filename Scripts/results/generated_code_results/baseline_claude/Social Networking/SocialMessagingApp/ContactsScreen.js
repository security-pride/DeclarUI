import React from 'react';

import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ContactsScreen = () => {

  const navigation = useNavigation();



  const contacts = [

    { id: '1', name: 'Antonio Banderas', status: 'Online', initials: 'AB' },

    { id: '2', name: 'Billie Eilish', status: 'Online', initials: 'BE' },

    { id: '3', name: 'Chris Evans', status: 'Last seen today at 8:40', initials: 'CE' },

    { id: '4', name: 'Dasha Taran', status: '', initials: 'DT' },

    { id: '5', name: 'Dwayne Johnson', status: 'Last seen today at 6:02', initials: 'DJ' },

    { id: '6', name: 'Emily Blunt', status: 'Last seen today at 8:33', initials: 'EB' },

  ];



  const renderContactItem = ({ item }) => (

    <TouchableOpacity style={styles.contactItem} onPress={() => navigation.navigate('Chat', { contact: item })}>

      <View style={styles.avatar}>

        <Text style={styles.avatarText}>{item.initials}</Text>

      </View>

      <View style={styles.contactInfo}>

        <Text style={styles.contactName}>{item.name}</Text>

        <Text style={[styles.contactStatus, item.status === 'Online' && styles.onlineStatus]}>

          {item.status || ' '}

        </Text>

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <Text style={styles.title}>Contacts</Text>

      <TouchableOpacity style={styles.optionItem}>

        <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />

        <Text style={styles.optionText}>Invite friends</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.optionItem}>

        <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />

        <Text style={styles.optionText}>Find people nearby</Text>

      </TouchableOpacity>

      <FlatList

        data={contacts}

        renderItem={renderContactItem}

        keyExtractor={item => item.id}

        style={styles.contactList}

      />

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Messages')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Messages</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={[styles.tabIcon, styles.activeTabIcon]} />

          <Text style={[styles.tabText, styles.activeTabText]}>Contacts</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Calls')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Calls</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Profile</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  title: {

    fontSize: 34,

    fontWeight: 'bold',

    padding: 16,

  },

  optionItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#EEEEEE',

  },

  optionIcon: {

    width: 24,

    height: 24,

    marginRight: 16,

  },

  optionText: {

    fontSize: 16,

  },

  contactList: {

    flex: 1,

  },

  contactItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#EEEEEE',

  },

  avatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

    backgroundColor: '#EEEEEE',

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 16,

  },

  avatarText: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  contactInfo: {

    flex: 1,

  },

  contactName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  contactStatus: {

    fontSize: 14,

    color: '#999999',

  },

  onlineStatus: {

    color: '#4CAF50',

  },

  tabBar: {

    flexDirection: 'row',

    borderTopWidth: 1,

    borderTopColor: '#EEEEEE',

    paddingVertical: 8,

  },

  tabItem: {

    flex: 1,

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  tabText: {

    fontSize: 12,

    color: '#999999',

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#000000',

  },

  activeTabIcon: {

    tintColor: '#000000',

  },

  activeTabText: {

    color: '#000000',

  },

});



export default ContactsScreen;