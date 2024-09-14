import React, { useState } from 'react';

import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const ActivityItem = ({ name, onFollow }) => (

  <View style={styles.activityItem}>

    <Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />

    <View style={styles.activityInfo}>

      <Text style={styles.nameText}>{name}</Text>

      <Text style={styles.followingText}>Started following you</Text>

    </View>

    <TouchableOpacity style={styles.followButton} onPress={onFollow}>

      <Text style={styles.followButtonText}>Follow</Text>

    </TouchableOpacity>

  </View>

);



const ActivityScreen = () => {

  const [activeTab, setActiveTab] = useState('All');

  const [activities] = useState([

    { id: '1', name: 'thomas' },

    { id: '2', name: 'mike' },

    { id: '3', name: 'michael' },

    { id: '4', name: 'willie' },

    { id: '5', name: 'peter' },

    { id: '6', name: 'angela' },

    { id: '7', name: 'devon' },

    { id: '8', name: 'col' },

    { id: '9', name: 'templeton' },

    { id: '10', name: 'dori' },

  ]);



  const handleFollow = (id) => {

    console.log(`Followed user with id: ${id}`);

  };



  const renderTab = (tabName) => (

    <TouchableOpacity

      style={[styles.tab, activeTab === tabName && styles.activeTab]}

      onPress={() => setActiveTab(tabName)}

    >

      <Text style={[styles.tabText, activeTab === tabName && styles.activeTabText]}>

        {tabName}

      </Text>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <Text style={styles.header}>Activity</Text>

      <View style={styles.tabContainer}>

        {renderTab('All')}

        {renderTab('Answers')}

        {renderTab('Mentions')}

        {renderTab('Verified')}

      </View>

      <FlatList

        data={activities}

        renderItem={({ item }) => (

          <ActivityItem name={item.name} onFollow={() => handleFollow(item.id)} />

        )}

        keyExtractor={(item) => item.id}

      />

      <View style={styles.bottomNav}>

        <Icon name="home-outline" size={24} color="#888" />

        <Icon name="search-outline" size={24} color="#888" />

        <Icon name="create-outline" size={24} color="#888" />

        <Icon name="heart-outline" size={24} color="#888" />

        <Icon name="person-outline" size={24} color="#888" />

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000',

  },

  header: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#fff',

    padding: 16,

  },

  tabContainer: {

    flexDirection: 'row',

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  tab: {

    flex: 1,

    paddingVertical: 12,

    alignItems: 'center',

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#fff',

  },

  tabText: {

    color: '#888',

  },

  activeTabText: {

    color: '#fff',

  },

  activityItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  profileIcon: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 12,

  },

  activityInfo: {

    flex: 1,

  },

  nameText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  followingText: {

    color: '#888',

  },

  followButton: {

    backgroundColor: '#333',

    paddingHorizontal: 16,

    paddingVertical: 8,

    borderRadius: 20,

  },

  followButtonText: {

    color: '#fff',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    paddingVertical: 12,

    borderTopWidth: 1,

    borderTopColor: '#333',

  },

});



export default ActivityScreen;