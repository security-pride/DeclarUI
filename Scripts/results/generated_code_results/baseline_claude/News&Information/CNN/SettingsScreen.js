import React, { useState } from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SettingsScreen = () => {

  const navigation = useNavigation();

  const [enableThisIsCNN, setEnableThisIsCNN] = useState(false);



  const renderSectionHeader = (title) => (

    <Text style={styles.sectionHeader}>{title}</Text>

  );



  const renderSettingsItem = (title, subtitle, onPress, rightElement) => (

    <TouchableOpacity style={styles.settingsItem} onPress={onPress}>

      <View>

        <Text style={styles.settingsItemTitle}>{title}</Text>

        {subtitle && <Text style={styles.settingsItemSubtitle}>{subtitle}</Text>}

      </View>

      {rightElement}

    </TouchableOpacity>

  );



  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>Settings</Text>



      {renderSectionHeader('ACCOUNT')}

      {renderSettingsItem('Log In to your CNN Account', null, () => navigation.navigate('LogIn'))}

      {renderSettingsItem('Create a free CNN Account', null, () => navigation.navigate('CreateAccount'))}

      {renderSettingsItem('Saved Stories', 'Find your saved articles, videos & audio here', () => {})}



      {renderSectionHeader('APP PREFERENCES')}

      {renderSettingsItem('Edition', 'International', () => {})}

      {renderSettingsItem('Alerts', null, () => {})}

      {renderSettingsItem('Android Notification Settings', null, () => {})}

      {renderSettingsItem(

        'Enable \'This is CNN\'',

        'A sound effect when you open the app',

        null,

        <Switch

          value={enableThisIsCNN}

          onValueChange={setEnableThisIsCNN}

          trackColor={{ false: "#767577", true: "#81b0ff" }}

          thumbColor={enableThisIsCNN ? "#f5dd4b" : "#f4f3f4"}

        />

      )}



      <Text style={styles.darkModeText}>

        You are currently viewing CNN in light mode. To switch to dark mode, adjust the display setting on your device.

      </Text>



      {renderSectionHeader('GENERAL')}

      {renderSettingsItem('Send Feedback', null, () => {})}



      <View style={styles.navbar}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Elections')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Elections</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Watch')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Watch</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={[styles.navText, styles.activeNavText]}>Settings</Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    textAlign: 'center',

    marginVertical: 20,

  },

  sectionHeader: {

    fontSize: 12,

    fontWeight: 'bold',

    color: '#888',

    marginTop: 20,

    marginBottom: 10,

    paddingHorizontal: 16,

  },

  settingsItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingVertical: 16,

    paddingHorizontal: 16,

    borderBottomWidth: StyleSheet.hairlineWidth,

    borderBottomColor: '#ccc',

  },

  settingsItemTitle: {

    fontSize: 16,

  },

  settingsItemSubtitle: {

    fontSize: 14,

    color: '#888',

    marginTop: 4,

  },

  darkModeText: {

    fontSize: 14,

    color: '#888',

    paddingHorizontal: 16,

    paddingVertical: 20,

  },

  navbar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 8,

  },

  navItem: {

    alignItems: 'center',

  },

  activeNavItem: {

    borderTopWidth: 2,

    borderTopColor: 'red',

  },

  navIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  navText: {

    fontSize: 12,

  },

  activeNavText: {

    color: 'red',

  },

});



export default SettingsScreen;