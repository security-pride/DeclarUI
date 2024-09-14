import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SettingsScreen = () => {

  const navigation = useNavigation();

  const [newsNotification, setNewsNotification] = useState(true);

  const [message, setMessage] = useState(true);



  const handleGoBack = () => {

    navigation.goBack();

  };



  const toggleNewsNotification = () => setNewsNotification(previousState => !previousState);

  const toggleMessage = () => setMessage(previousState => !previousState);



  const renderSettingsItem = (title, value, onPress, isSwitch = false) => (

    <TouchableOpacity style={styles.settingsItem} onPress={onPress}>

      <Text style={styles.settingsItemText}>{title}</Text>

      {isSwitch ? (

        <Switch

          trackColor={{ false: "#767577", true: "#ff4d4f" }}

          thumbColor={value ? "#f4f3f4" : "#f4f3f4"}

          ios_backgroundColor="#3e3e3e"

          onValueChange={onPress}

          value={value}

        />

      ) : (

        <Text style={styles.settingsItemValue}>{value}</Text>

      )}

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.time}>8:57</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

      </View>



      <View style={styles.titleContainer}>

        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.title}>Settings</Text>

      </View>



      <ScrollView style={styles.content}>

        <Text style={styles.sectionTitle}>Features</Text>

        {renderSettingsItem('News notification', newsNotification, toggleNewsNotification, true)}

        {renderSettingsItem('News notification settings', '', () => {})}

        {renderSettingsItem('Message', message, toggleMessage, true)}

        {renderSettingsItem('Messaging settings', '', () => {})}

        {renderSettingsItem('Reader mode', 'Auto', () => {})}

        {renderSettingsItem('Clear cache', '', () => {})}



        <Text style={styles.sectionTitle}>Data</Text>

        {renderSettingsItem('Data Saving', '0 B saved', () => {})}

        {renderSettingsItem('Pictureless Mode', 'Disabled', () => {})}



        <Text style={styles.sectionTitle}>Terms</Text>

        {renderSettingsItem('End-user license agreement', '', () => {})}

        {renderSettingsItem('Privacy statement', '', () => {})}

        {renderSettingsItem('Delete my data', '', () => {})}

      </ScrollView>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Me')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={[styles.footerText, styles.activeFooterText]}>Me</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

  },

  time: {

    fontSize: 16,

  },

  icon: {

    width: 20,

    height: 20,

  },

  titleContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  backButton: {

    padding: 5,

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  title: {

    fontSize: 20,

    fontWeight: 'bold',

    marginLeft: 10,

  },

  content: {

    flex: 1,

  },

  sectionTitle: {

    fontSize: 16,

    color: '#888888',

    paddingHorizontal: 15,

    paddingVertical: 10,

  },

  settingsItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 15,

    paddingVertical: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  settingsItemText: {

    fontSize: 16,

  },

  settingsItemValue: {

    fontSize: 16,

    color: '#888888',

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 10,

  },

  footerButton: {

    alignItems: 'center',

  },

  footerIcon: {

    width: 24,

    height: 24,

  },

  footerText: {

    fontSize: 12,

    marginTop: 5,

  },

  activeFooterText: {

    color: '#ff4d4f',

  },

});



export default SettingsScreen;