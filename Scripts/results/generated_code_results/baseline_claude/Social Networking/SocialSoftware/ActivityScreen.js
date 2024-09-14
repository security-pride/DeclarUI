import React from 'react';

import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ActivityItem = ({ name }) => {

  const navigation = useNavigation();



  return (

    <View style={styles.activityItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      <View style={styles.activityInfo}>

        <Text style={styles.name}>{name}</Text>

        <Text style={styles.action}>Started following you</Text>

      </View>

      <TouchableOpacity style={styles.followButton}>

        <Text style={styles.followButtonText}>Follow</Text>

      </TouchableOpacity>

    </View>

  );

};



const ActivityScreen = () => {

  const activities = [

    { id: '1', name: 'thomas' },

    { id: '2', name: 'mike' },

    { id: '3', name: 'michael' },

    { id: '4', name: 'willie' },

    { id: '5', name: 'peter' },

    { id: '6', name: 'angela' },

    { id: '7', name: 'devon' },

    { id: '8', name: 'col' },

    { id: '9', name: 'templeton' },

    { id: '10', name: 'willie' },

    { id: '11', name: 'dori' },

  ];



  return (

    <View style={styles.container}>

      <Text style={styles.header}>Activity</Text>

      <View style={styles.tabContainer}>

        <TouchableOpacity style={[styles.tab, styles.activeTab]}>

          <Text style={[styles.tabText, styles.activeTabText]}>All</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>

          <Text style={styles.tabText}>Answers</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>

          <Text style={styles.tabText}>Mentions</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>

          <Text style={styles.tabText}>Verifi</Text>

        </TouchableOpacity>

      </View>

      <FlatList

        data={activities}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => <ActivityItem name={item.name} />}

      />

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000',

    paddingTop: 60,

  },

  header: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#fff',

    marginLeft: 20,

    marginBottom: 20,

  },

  tabContainer: {

    flexDirection: 'row',

    paddingHorizontal: 20,

    marginBottom: 20,

  },

  tab: {

    marginRight: 15,

    paddingVertical: 5,

    paddingHorizontal: 10,

    borderRadius: 15,

  },

  activeTab: {

    backgroundColor: '#fff',

  },

  tabText: {

    color: '#888',

    fontSize: 16,

  },

  activeTabText: {

    color: '#000',

  },

  activityItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 20,

    paddingVertical: 10,

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  activityInfo: {

    flex: 1,

  },

  name: {

    color: '#fff',

    fontWeight: 'bold',

    fontSize: 16,

  },

  action: {

    color: '#888',

    fontSize: 14,

  },

  followButton: {

    backgroundColor: '#333',

    paddingHorizontal: 15,

    paddingVertical: 5,

    borderRadius: 15,

  },

  followButtonText: {

    color: '#fff',

    fontSize: 14,

  },

});



export default ActivityScreen;