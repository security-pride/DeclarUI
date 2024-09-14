import React, { useState } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();



const PeopleScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('');



  const contacts = [

    { id: '1', name: 'Martha Craig', active: true },

    { id: '2', name: 'Kieron Dotson', lastActive: '8 min' },

    { id: '3', name: 'Zack John', lastActive: '10 min' },

    { id: '4', name: 'Jamie Franco', active: true },

    { id: '5', name: 'Tabitha Potter', lastActive: '19 min' },

  ];



  const recentlyActive = [

    { id: '6', name: 'Albert Lasker', lastActive: '39 min' },

  ];



  const renderContact = ({ item }) => (

    <TouchableOpacity

      style={styles.contactItem}

      onPress={() => navigation.navigate('Intro', { name: item.name })}

    >

      <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      <View style={styles.contactInfo}>

        <Text style={styles.contactName}>{item.name}</Text>

        <Text style={styles.lastActive}>

          {item.active ? 'Active now' : `${item.lastActive} ago`}

        </Text>

      </View>

      <TouchableOpacity

        onPress={() => navigation.navigate('Chats', { name: item.name })}

        style={styles.waveButton}

      >

        <Text style={styles.waveIcon}>👋</Text>

      </TouchableOpacity>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>People</Text>

        <TouchableOpacity onPress={() => navigation.navigate('NewMessage')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

        </TouchableOpacity>

      </View>

      <TextInput

        style={styles.searchBar}

        placeholder="Search"

        value={searchQuery}

        onChangeText={setSearchQuery}

      />

      <TouchableOpacity style={styles.addStory}>

        <Image source={require('../assets/snack-icon.png')} style={styles.addStoryIcon} />

        <View>

          <Text style={styles.addStoryText}>Your story</Text>

          <Text style={styles.addStorySubtext}>Add to your story</Text>

        </View>

      </TouchableOpacity>

      <FlatList

        data={contacts}

        renderItem={renderContact}

        keyExtractor={item => item.id}

        ListHeaderComponent={<Text style={styles.sectionTitle}>ACTIVE</Text>}

      />

      <View>

        <Text style={styles.sectionTitle}>RECENTLY ACTIVE</Text>

        <FlatList

          data={recentlyActive}

          renderItem={renderContact}

          keyExtractor={item => item.id}

        />

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

    padding: 10,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  headerIcon: {

    width: 24,

    height: 24,

  },

  searchBar: {

    margin: 10,

    padding: 10,

    backgroundColor: '#f0f0f0',

    borderRadius: 20,

  },

  addStory: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

  },

  addStoryIcon: {

    width: 40,

    height: 40,

    marginRight: 10,

  },

  addStoryText: {

    fontWeight: 'bold',

  },

  addStorySubtext: {

    color: 'gray',

  },

  sectionTitle: {

    fontWeight: 'bold',

    padding: 10,

    backgroundColor: '#f0f0f0',

  },

  contactItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

  },

  avatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

    marginRight: 10,

  },

  contactInfo: {

    flex: 1,

  },

  contactName: {

    fontWeight: 'bold',

  },

  lastActive: {

    color: 'gray',

  },

  waveButton: {

    padding: 10,

  },

  waveIcon: {

    fontSize: 20,

  },

});



const App = () => {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="People">

        <Stack.Screen name="People" component={PeopleScreen} options={{ headerShown: false }} />

        <Stack.Screen name="Chats" component={PeopleScreen} />

        <Stack.Screen name="Intro" component={PeopleScreen} />

        <Stack.Screen name="NewMessage" component={PeopleScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

};



export default App;