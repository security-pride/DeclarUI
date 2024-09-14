import React, { useState } from 'react';

import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const CONTACTS = [

  { id: '1', name: 'Martha Craig', avatar: '../assets/snack-icon.png' },

  { id: '2', name: 'Kieron Dotson', avatar: '../assets/snack-icon.png' },

  { id: '3', name: 'Zack John', avatar: '../assets/snack-icon.png' },

  { id: '4', name: 'Jamie Franco', avatar: '../assets/snack-icon.png' },

  { id: '5', name: 'Tabitha Potter', avatar: '../assets/snack-icon.png' },

];



const NewMessageScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const navigation = useNavigation();



  const renderContactItem = ({ item }) => (

    <TouchableOpacity style={styles.contactItem}>

      <Image source={item.avatar} style={styles.avatar} />

      <Text style={styles.contactName}>{item.name}</Text>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView

        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

        style={styles.keyboardAvoidingView}

      >

        <View style={styles.header}>

          <TouchableOpacity onPress={() => navigation.goBack()}>

            <Text style={styles.cancelButton}>Cancel</Text>

          </TouchableOpacity>

          <Text style={styles.headerTitle}>New message</Text>

        </View>

        <View style={styles.searchContainer}>

          <Text style={styles.toLabel}>To:</Text>

          <TextInput

            style={styles.searchInput}

            placeholder=""

            value={searchQuery}

            onChangeText={setSearchQuery}

          />

        </View>

        <TouchableOpacity style={styles.createGroupButton}>

          <Image source="../assets/snack-icon.png" style={styles.groupIcon} />

          <Text style={styles.createGroupText}>Create a New Group</Text>

          <Image source="../assets/snack-icon.png" style={styles.arrowIcon} />

        </TouchableOpacity>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>ЛЮДИ</Text>

        <FlatList

          data={CONTACTS}

          renderItem={renderContactItem}

          keyExtractor={(item) => item.id}

          style={styles.contactList}

        />

      </KeyboardAvoidingView>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  keyboardAvoidingView: {

    flex: 1,

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingHorizontal: 16,

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#E5E5EA',

  },

  cancelButton: {

    fontSize: 17,

    color: '#007AFF',

  },

  headerTitle: {

    fontSize: 17,

    fontWeight: 'bold',

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#E5E5EA',

  },

  toLabel: {

    fontSize: 17,

    marginRight: 8,

  },

  searchInput: {

    flex: 1,

    fontSize: 17,

  },

  createGroupButton: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 12,

  },

  groupIcon: {

    width: 24,

    height: 24,

    marginRight: 12,

  },

  createGroupText: {

    flex: 1,

    fontSize: 17,

  },

  arrowIcon: {

    width: 20,

    height: 20,

  },

  divider: {

    height: 1,

    backgroundColor: '#E5E5EA',

    marginHorizontal: 16,

  },

  sectionTitle: {

    fontSize: 13,

    fontWeight: 'bold',

    color: '#8E8E93',

    marginLeft: 16,

    marginTop: 16,

    marginBottom: 8,

  },

  contactList: {

    flex: 1,

  },

  contactItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 8,

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 12,

  },

  contactName: {

    fontSize: 17,

  },

});



export default NewMessageScreen;