import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const SettingsScreen = ({ navigation }) => {

  const [enableThisIsCNN, setEnableThisIsCNN] = useState(false);



  const renderSettingsItem = (title, subtitle = null, onPress = null, rightElement = null) => (

    <TouchableOpacity style={styles.settingsItem} onPress={onPress}>

      <View>

        <Text style={styles.settingsItemTitle}>{title}</Text>

        {subtitle && <Text style={styles.settingsItemSubtitle}>{subtitle}</Text>}

      </View>

      {rightElement || <Icon name="chevron-right" size={24} color="#888" />}

    </TouchableOpacity>

  );



  return (

    <ScrollView style={styles.container}>

      <Text style={styles.header}>Settings</Text>



      <Text style={styles.sectionHeader}>ACCOUNT</Text>

      {renderSettingsItem('Log In to your CNN Account', null, () => navigation.navigate('LogIn'))}

      {renderSettingsItem('Create a free CNN Account', null, () => navigation.navigate('CreateAccont'))}

      {renderSettingsItem('Saved Stories', 'Find your saved articles, videos & audio here')}



      <Text style={styles.sectionHeader}>APP PREFERENCES</Text>

      {renderSettingsItem('Edition', 'International')}

      {renderSettingsItem('Alerts')}

      {renderSettingsItem('Android Notification Settings')}

      {renderSettingsItem(

        'Enable \'This is CNN\'',

        'A sound effect when you open the app',

        null,

        <Switch

          value={enableThisIsCNN}

          onValueChange={(value) => setEnableThisIsCNN(value)}

        />

      )}



      <Text style={styles.darkModeText}>

        You are currently viewing CNN in light mode. To switch to dark mode, adjust the display setting on your device.

      </Text>



      <Text style={styles.sectionHeader}>GENERAL</Text>

      {renderSettingsItem('Send Feedback')}



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#888" />

          <Text style={styles.footerButtonText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Elections')}>

          <Icon name="how-to-vote" size={24} color="#888" />

          <Text style={styles.footerButtonText}>Elections</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Icon name="ondemand-video" size={24} color="#888" />

          <Text style={styles.footerButtonText}>Watch</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.footerButton, styles.activeFooterButton]}>

          <Icon name="settings" size={24} color="#f00" />

          <Text style={[styles.footerButtonText, styles.activeFooterButtonText]}>Settings</Text>

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

  header: {

    fontSize: 24,

    fontWeight: 'bold',

    padding: 16,

  },

  sectionHeader: {

    fontSize: 12,

    fontWeight: 'bold',

    color: '#888',

    paddingHorizontal: 16,

    paddingTop: 16,

    paddingBottom: 8,

  },

  settingsItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingVertical: 16,

    paddingHorizontal: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#eee',

  },

  settingsItemTitle: {

    fontSize: 16,

  },

  settingsItemSubtitle: {

    fontSize: 12,

    color: '#888',

    marginTop: 4,

  },

  darkModeText: {

    fontSize: 14,

    color: '#333',

    padding: 16,

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#eee',

    paddingVertical: 8,

  },

  footerButton: {

    alignItems: 'center',

  },

  footerButtonText: {

    fontSize: 12,

    color: '#888',

    marginTop: 4,

  },

  activeFooterButton: {

    color: '#f00',

  },

  activeFooterButtonText: {

    color: '#f00',

  },

});



export default SettingsScreen;