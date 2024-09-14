import React, { useState } from 'react';

import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';



const ActivityScreen = ({ navigation }) => {

  const [activeTab, setActiveTab] = useState('All');



  const tabs = ['All', 'Answers', 'Mentions', 'Verifi'];



  const activityList = [

    { name: 'thomas', action: 'Started following you' },

    { name: 'mike', action: 'Started following you' },

    { name: 'michael', action: 'Started following you' },

    { name: 'willie', action: 'Started following you' },

    { name: 'peter', action: 'Started following you' },

    { name: 'angela', action: 'Started following you' },

    { name: 'devon', action: 'Started following you' },

    { name: 'col', action: 'Started following you' },

    { name: 'templeton', action: 'Started following you' },

    { name: 'willie', action: 'Started following you' },

    { name: 'dori', action: 'Started following you' },

  ];



  const renderActivityItem = ({ item }) => (

    <TouchableOpacity

      style={styles.activityItem}

      onPress={() => navigation.navigate('UserProfile', { username: item.name })}

    >

      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      <View style={styles.activityContent}>

        <Text style={styles.username}>{item.name}</Text>

        <Text style={styles.action}>{item.action}</Text>

      </View>

      <TouchableOpacity style={styles.followButton}>

        <Text style={styles.followButtonText}>Follow</Text>

      </TouchableOpacity>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>Activity</Text>

      </View>

      <View style={styles.tabContainer}>

        {tabs.map((tab) => (

          <TouchableOpacity

            key={tab}

            style={[styles.tab, activeTab === tab && styles.activeTab]}

            onPress={() => setActiveTab(tab)}

          >

            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>

              {tab}

            </Text>

          </TouchableOpacity>

        ))}

      </View>

      <FlatList

        data={activityList}

        renderItem={renderActivityItem}

        keyExtractor={(item, index) => index.toString()}

      />

      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Feed')}>

          <Icon name="home" size={24} color="#333" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Icon name="search" size={24} color="#333" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="plus-square" size={24} color="#333" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="heart" size={24} color="#333" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>

          <Icon name="user" size={24} color="#333" />

        </TouchableOpacity>

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

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#fff',

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

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 12,

  },

  activityContent: {

    flex: 1,

  },

  username: {

    color: '#fff',

    fontWeight: 'bold',

    marginBottom: 4,

  },

  action: {

    color: '#888',

  },

  followButton: {

    backgroundColor: '#333',

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 16,

  },

  followButtonText: {

    color: '#fff',

    fontWeight: 'bold',

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