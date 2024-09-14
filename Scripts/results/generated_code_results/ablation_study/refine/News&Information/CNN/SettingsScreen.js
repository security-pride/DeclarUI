import React, { useState } from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const SettingsScreen = ({ navigation }) => {

  const [enableSound, setEnableSound] = useState(false);



  const renderSettingsItem = (title, subtitle, onPress) => (

    <TouchableOpacity style={styles.settingsItem} onPress={onPress}>

      <Text style={styles.settingsItemTitle}>{title}</Text>

      {subtitle && <Text style={styles.settingsItemSubtitle}>{subtitle}</Text>}

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTime}>6:17</Text>

        <Icon name="disc-outline" size={20} color="black" />

        <Icon name="battery-full-outline" size={20} color="black" />

      </View>



      <Text style={styles.title}>Settings</Text>



      <ScrollView style={styles.scrollView}>

        <Text style={styles.sectionHeader}>ACCOUNT</Text>

        {renderSettingsItem('Log In to your CNN Account', null, () => navigation.navigate('LogIn'))}

        {renderSettingsItem('Create a free CNN Account', null, () => navigation.navigate('SignUp'))}

        {renderSettingsItem('Saved Stories', 'Find your saved articles, videos & audio here')}



        <Text style={styles.sectionHeader}>APP PREFERENCES</Text>

        {renderSettingsItem('Edition', 'International')}

        {renderSettingsItem('Alerts')}

        {renderSettingsItem('Android Notification Settings')}



        <View style={styles.settingsItem}>

          <View style={styles.soundEffectContainer}>

            <View>

              <Text style={styles.settingsItemTitle}>Enable 'This is CNN'</Text>

              <Text style={styles.settingsItemSubtitle}>A sound effect when you open the app</Text>

            </View>

            <Switch

              value={enableSound}

              onValueChange={setEnableSound}

              trackColor={{ false: "#767577", true: "#81b0ff" }}

              thumbColor={enableSound ? "#f5dd4b" : "#f4f3f4"}

            />

          </View>

        </View>



        <Text style={styles.lightModeText}>

          You are currently viewing CNN in light mode. To switch to dark mode, adjust the display setting on your device.

        </Text>



        <Text style={styles.sectionHeader}>GENERAL</Text>

        {renderSettingsItem('Send Feedback')}

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Icon name="home-outline" size={24} color="black" />

          <Text>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Elections')}>

          <Icon name="list-outline" size={24} color="black" />

          <Text>Elections</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Watch')}>

          <Icon name="play-outline" size={24} color="black" />

          <Text>Watch</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="settings-outline" size={24} color="red" />

          <Text style={styles.activeNavText}>Settings</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: 'white',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'flex-end',

    alignItems: 'center',

    paddingTop: 10,

    paddingRight: 10,

  },

  headerTime: {

    marginRight: 10,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    textAlign: 'center',

    marginVertical: 20,

  },

  scrollView: {

    flex: 1,

    paddingHorizontal: 20,

  },

  sectionHeader: {

    fontSize: 12,

    fontWeight: 'bold',

    color: 'grey',

    marginTop: 20,

    marginBottom: 10,

  },

  settingsItem: {

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

    paddingVertical: 15,

  },

  settingsItemTitle: {

    fontSize: 16,

  },

  settingsItemSubtitle: {

    fontSize: 14,

    color: 'grey',

    marginTop: 5,

  },

  soundEffectContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  lightModeText: {

    fontSize: 14,

    color: 'grey',

    marginVertical: 20,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 10,

  },

  navItem: {

    alignItems: 'center',

  },

  activeNavText: {

    color: 'red',

  },

});



export default SettingsScreen;