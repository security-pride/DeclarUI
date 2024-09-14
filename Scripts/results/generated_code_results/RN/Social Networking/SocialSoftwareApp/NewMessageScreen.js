import React, { useState } from 'react';

import { View, Text, TouchableOpacity, TextInput, Image, FlatList, StyleSheet } from 'react-native';



const NewMessage = ({ navigation }) => {

  const [recipient, setRecipient] = useState('');



  const contacts = [

    { id: '1', name: 'Martha Craig', image: require('../assets/snack-icon.png') },

    { id: '2', name: 'Kieron Dotson', image: require('../assets/snack-icon.png') },

    { id: '3', name: 'Zack John', image: require('../assets/snack-icon.png') },

    { id: '4', name: 'Jamie Franco', image: require('../assets/snack-icon.png') },

    { id: '5', name: 'Tabitha Potter', image: require('../assets/snack-icon.png') },

  ];



  const renderContact = ({ item }) => (

    <TouchableOpacity style={styles.contactItem}>

      <Image source={item.image} style={styles.avatar} />

      <Text style={styles.contactName}>{item.name}</Text>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Text style={styles.cancelButton}>Cancel</Text>

        </TouchableOpacity>

        <Text style={styles.title}>New message</Text>

      </View>

      <View style={styles.toField}>

        <Text style={styles.toLabel}>To:</Text>

        <TextInput

          style={styles.recipientInput}

          value={recipient}

          onChangeText={setRecipient}

          placeholder="Type a name or number"

        />

      </View>

      <TouchableOpacity style={styles.createGroupButton}>

        <Image source={require('../assets/snack-icon.png')} style={styles.groupIcon} />

        <Text style={styles.createGroupText}>Create a New Group</Text>

        <Text style={styles.arrowIcon}>&gt;</Text>

      </TouchableOpacity>

      <View style={styles.divider} />

      <Text style={styles.sectionLabel}>ЛЮДИ</Text>

      <FlatList

        data={contacts}

        renderItem={renderContact}

        keyExtractor={(item) => item.id}

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

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  cancelButton: {

    color: '#007AFF',

    fontSize: 16,

  },

  title: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  toField: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  toLabel: {

    fontSize: 16,

    marginRight: 10,

  },

  recipientInput: {

    flex: 1,

    fontSize: 16,

  },

  createGroupButton: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  groupIcon: {

    width: 30,

    height: 30,

    marginRight: 10,

  },

  createGroupText: {

    fontSize: 16,

    flex: 1,

  },

  arrowIcon: {

    fontSize: 18,

    color: '#c0c0c0',

  },

  divider: {

    height: 1,

    backgroundColor: '#e0e0e0',

  },

  sectionLabel: {

    fontSize: 12,

    color: '#8e8e93',

    padding: 15,

    backgroundColor: '#f2f2f7',

  },

  contactItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 15,

  },

  contactName: {

    fontSize: 16,

  },

});



export default NewMessage;