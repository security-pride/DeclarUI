import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const PEOPLE_DATA = [

  { id: '1', name: 'Martha Craig', avatar: '../assets/snack-icon.png', status: 'active' },

  { id: '2', name: 'Kieron Dotson', avatar: '../assets/snack-icon.png', status: '8 min' },

  { id: '3', name: 'Zack John', avatar: '../assets/snack-icon.png', status: '10 min' },

  { id: '4', name: 'Jamie Franco', avatar: '../assets/snack-icon.png', status: 'active' },

  { id: '5', name: 'Tabitha Potter', avatar: '../assets/snack-icon.png', status: '10 min' },

  { id: '6', name: 'Albert Lasker', avatar: '../assets/snack-icon.png', status: '30 min' },

];



const PeopleScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const navigation = useNavigation();



  const renderPersonItem = ({ item }) => (

    <TouchableOpacity style={styles.personItem}>

      <Image source={item.avatar} style={styles.avatar} />

      <View style={styles.personInfo}>

        <Text style={styles.personName}>{item.name}</Text>

        {item.status === 'active' && <View style={styles.activeStatus} />}

        {item.status !== 'active' && <Text style={styles.statusText}>{item.status}</Text>}

      </View>

      <TouchableOpacity style={styles.waveButton}>

        <Image source="../assets/snack-icon.png" style={styles.waveIcon} />

      </TouchableOpacity>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Image source="../assets/snack-icon.png" style={styles.profileIcon} />

        <Text style={styles.headerTitle}>People</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>

          <Image source="../assets/snack-icon.png" style={styles.chatIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AddPerson')}>

          <Image source="../assets/snack-icon.png" style={styles.addPersonIcon} />

        </TouchableOpacity>

      </View>

      <View style={styles.searchContainer}>

        <Image source="../assets/snack-icon.png" style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="Search"

          value={searchQuery}

          onChangeText={setSearchQuery}

        />

      </View>

      <TouchableOpacity style={styles.storyButton}>

        <View style={styles.addStoryIcon}>

          <Text style={styles.plusIcon}>+</Text>

        </View>

        <View>

          <Text style={styles.yourStoryText}>Your story</Text>

          <Text style={styles.addToStoryText}>Add to your story</Text>

        </View>

      </TouchableOpacity>

      <FlatList

        data={PEOPLE_DATA}

        renderItem={renderPersonItem}

        keyExtractor={(item) => item.id}

        style={styles.personList}

      />

      <Text style={styles.recentlyActiveText}>RECENTLY ACTIVE</Text>

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source="../assets/snack-icon.png" style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source="../assets/snack-icon.png" style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source="../assets/snack-icon.png" style={styles.tabIcon} />

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 10,

  },

  profileIcon: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  headerTitle: {

    flex: 1,

    fontSize: 24,

    fontWeight: 'bold',

    marginLeft: 16,

  },

  chatIcon: {

    width: 24,

    height: 24,

    marginRight: 16,

  },

  addPersonIcon: {

    width: 24,

    height: 24,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F2F2F7',

    borderRadius: 10,

    marginHorizontal: 16,

    marginVertical: 8,

    paddingHorizontal: 8,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 8,

  },

  searchInput: {

    flex: 1,

    height: 36,

    fontSize: 16,

  },

  storyButton: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 12,

  },

  addStoryIcon: {

    width: 40,

    height: 40,

    borderRadius: 20,

    backgroundColor: '#0084FF',

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 12,

  },

  plusIcon: {

    color: '#FFFFFF',

    fontSize: 24,

    fontWeight: 'bold',

  },

  yourStoryText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  addToStoryText: {

    fontSize: 14,

    color: '#8E8E93',

  },

  personList: {

    flex: 1,

  },

  personItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 8,

  },

  avatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

    marginRight: 12,

  },

  personInfo: {

    flex: 1,

  },

  personName: {

    fontSize: 16,

    fontWeight: '500',

  },

  activeStatus: {

    width: 8,

    height: 8,

    borderRadius: 4,

    backgroundColor: '#4CD964',

    marginTop: 4,

  },

  statusText: {

    fontSize: 14,

    color: '#8E8E93',

  },

  waveButton: {

    padding: 8,

  },

  waveIcon: {

    width: 24,

    height: 24,

  },

  recentlyActiveText: {

    fontSize: 12,

    fontWeight: '500',

    color: '#8E8E93',

    marginLeft: 16,

    marginTop: 16,

    marginBottom: 8,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E5E5EA',

    paddingVertical: 8,

  },

  tabItem: {

    alignItems: 'center',

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#0084FF',

  },

  tabIcon: {

    width: 24,

    height: 24,

  },

});



export default PeopleScreen;