import React from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SettingsScreen = () => {

  const navigation = useNavigation();



  const settingsItems = [

    { section: 'Accounts', items: [

      { icon: 'microsoft', title: 'Microsoft account', action: 'Sign in' },

      { icon: 'work', title: 'Work or school account', action: 'Sign in' },

    ]},

    { section: 'General', items: [

      { icon: 'privacy', title: 'Privacy' },

      { icon: 'globe', title: 'Region and language' },

      { icon: 'permissions', title: 'Permissions' },

    ]},

    { section: 'Preferences', items: [

      { icon: 'home', title: 'Homepage' },

      { icon: 'bell', title: 'Notifications' },

      { icon: 'theme', title: 'Theme' },

      { icon: 'search', title: 'Search' },

      { icon: 'rewards', title: 'Rewards' },

    ]},

  ];



  const renderSettingsItem = (item, index) => (

    <TouchableOpacity key={index} style={styles.settingsItem}>

      <Image source={{ uri: `../assets/snack-icon.png` }} style={styles.itemIcon} />

      <Text style={styles.itemTitle}>{item.title}</Text>

      {item.action && <Text style={styles.itemAction}>{item.action}</Text>}

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Settings</Text>

      </View>



      <ScrollView>

        {settingsItems.map((section, sectionIndex) => (

          <View key={sectionIndex} style={styles.section}>

            <Text style={styles.sectionTitle}>{section.section}</Text>

            {section.items.map(renderSettingsItem)}

          </View>

        ))}

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Weather')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />

          <Text style={styles.navText}>Weather</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />

          <Text style={styles.navText}>Chat</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />

          <Text style={styles.navText}>Tabs</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Apps')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />

          <Text style={styles.navText}>Apps</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F0F0F5',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    backgroundColor: '#FFFFFF',

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  backIcon: {

    width: 24,

    height: 24,

    marginRight: 15,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#4285F4',

  },

  section: {

    marginBottom: 20,

  },

  sectionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#666',

    padding: 15,

  },

  settingsItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    backgroundColor: '#FFFFFF',

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  itemIcon: {

    width: 24,

    height: 24,

    marginRight: 15,

  },

  itemTitle: {

    flex: 1,

    fontSize: 16,

  },

  itemAction: {

    color: '#4285F4',

    fontSize: 14,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  navItem: {

    alignItems: 'center',

  },

  navIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  navText: {

    fontSize: 12,

    color: '#666',

  },

});



export default SettingsScreen;