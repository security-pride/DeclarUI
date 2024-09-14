import React, { useState } from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, ImageBackground } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();



const ProfileScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

      </TouchableOpacity>

      <ImageBackground source={require('../assets/snack-icon.png')} style={styles.profilePicture}>

        <View style={styles.profilePictureOverlay} />

      </ImageBackground>

      <Text style={styles.name}>Martha Craig</Text>

      <Text style={styles.subtitle}>Messenger</Text>

      

      <View style={styles.actionsContainer}>

        <TouchableOpacity style={styles.actionButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

          <Text style={styles.actionText}>Audio</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

          <Text style={styles.actionText}>Video</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

          <Text style={styles.actionText}>Profile</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

          <Text style={styles.actionText}>Mute</Text>

        </TouchableOpacity>

      </View>

      

      <ScrollView style={styles.settingsContainer}>

        <View style={styles.settingItem}>

          <Text style={styles.settingLabel}>Color</Text>

          <View style={styles.colorDot} />

        </View>

        <View style={styles.settingItem}>

          <Text style={styles.settingLabel}>Emoji</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.settingIcon} />

        </View>

        <View style={styles.settingItem}>

          <Text style={styles.settingLabel}>Nicknames</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.settingIcon} />

        </View>

        

        <Text style={styles.sectionTitle}>MORE ACTIONS</Text>

        

        <TouchableOpacity style={styles.settingItem}>

          <Text style={styles.settingLabel}>Search in Conversation</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.settingIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>

          <Text style={styles.settingLabel}>Create group</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.settingIcon} />

        </TouchableOpacity>

        

        <Text style={styles.sectionTitle}>PRIVACY</Text>

        

        <View style={styles.settingItem}>

          <Text style={styles.settingLabel}>Notifications</Text>

          <Text style={styles.settingValue}>On</Text>

        </View>

        <TouchableOpacity style={styles.settingItem}>

          <Text style={styles.settingLabel}>Ignore Messages</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.settingIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>

          <Text style={styles.settingLabel}>Block</Text>

        </TouchableOpacity>

      </ScrollView>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  backButton: {

    position: 'absolute',

    top: 40,

    left: 20,

    zIndex: 1,

  },

  icon: {

    width: 24,

    height: 24,

  },

  profilePicture: {

    width: 100,

    height: 100,

    borderRadius: 50,

    alignSelf: 'center',

    marginTop: 60,

    overflow: 'hidden',

  },

  profilePictureOverlay: {

    ...StyleSheet.absoluteFillObject,

    backgroundColor: 'rgba(0,0,0,0.1)',

  },

  name: {

    fontSize: 24,

    fontWeight: 'bold',

    textAlign: 'center',

    marginTop: 16,

  },

  subtitle: {

    fontSize: 16,

    color: '#666',

    textAlign: 'center',

    marginTop: 4,

  },

  actionsContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginTop: 24,

    paddingHorizontal: 16,

  },

  actionButton: {

    alignItems: 'center',

  },

  actionIcon: {

    width: 32,

    height: 32,

  },

  actionText: {

    marginTop: 4,

    fontSize: 12,

  },

  settingsContainer: {

    flex: 1,

    marginTop: 24,

  },

  settingItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingVertical: 16,

    paddingHorizontal: 20,

    borderBottomWidth: 1,

    borderBottomColor: '#f0f0f0',

  },

  settingLabel: {

    fontSize: 16,

  },

  settingIcon: {

    width: 20,

    height: 20,

  },

  settingValue: {

    fontSize: 16,

    color: '#666',

  },

  sectionTitle: {

    fontSize: 12,

    fontWeight: 'bold',

    color: '#666',

    marginTop: 24,

    marginBottom: 8,

    paddingHorizontal: 20,

  },

  colorDot: {

    width: 20,

    height: 20,

    borderRadius: 10,

    backgroundColor: '#0084ff',

  },

});



const App = () => {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Profile" headerMode="none">

        <Stack.Screen name="Profile" component={ProfileScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  );

};



export default App;