import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const SettingScreen = ({ navigation }) => {

  const [temperatureUnit, setTemperatureUnit] = useState('C');

  const [lockScreen, setLockScreen] = useState(true);

  const [notification, setNotification] = useState(true);

  const [statusBar, setStatusBar] = useState(true);

  const [hideBackground, setHideBackground] = useState(false);



  const toggleTemperatureUnit = () => {

    setTemperatureUnit(prev => prev === 'C' ? 'F' : 'C');

  };



  const renderSettingItem = (icon, title, rightComponent, onPress) => (

    <TouchableOpacity style={styles.settingItem} onPress={onPress}>

      <Icon name={icon} size={24} color="#fff" style={styles.icon} />

      <Text style={styles.settingText}>{title}</Text>

      {rightComponent}

    </TouchableOpacity>

  );



  return (

    <ScrollView style={styles.container}>

      <Text style={styles.header}>SETTING</Text>

      

      {renderSettingItem('home', 'Home', null, () => navigation.navigate('Home'))}

      {renderSettingItem('location', 'Manage location', null, () => navigation.navigate('EditLocation'))}

      

      <View style={styles.settingItem}>

        <Icon name="thermometer" size={24} color="#fff" style={styles.icon} />

        <Text style={styles.settingText}>Temperature</Text>

        <View style={styles.temperatureToggle}>

          <TouchableOpacity

            style={[styles.tempUnit, temperatureUnit === 'F' && styles.activeUnit]}

            onPress={() => setTemperatureUnit('F')}

          >

            <Text style={styles.tempUnitText}>F</Text>

          </TouchableOpacity>

          <TouchableOpacity

            style={[styles.tempUnit, temperatureUnit === 'C' && styles.activeUnit]}

            onPress={() => setTemperatureUnit('C')}

          >

            <Text style={styles.tempUnitText}>C</Text>

          </TouchableOpacity>

        </View>

      </View>



      {renderSettingItem('lock-closed', 'Lock screen', 

        <Switch value={lockScreen} onValueChange={setLockScreen} />)}

      {renderSettingItem('notifications', 'Notification', 

        <Switch value={notification} onValueChange={setNotification} />)}

      {renderSettingItem('cellular', 'Status bar', 

        <Switch value={statusBar} onValueChange={setStatusBar} />)}

      {renderSettingItem('image', 'Hide background image', 

        <Switch value={hideBackground} onValueChange={setHideBackground} />)}

      {renderSettingItem('radar', 'Weather radar', null)}

      {renderSettingItem('apps', 'Weather widgets', null)}

      {renderSettingItem('close-circle', 'Remove ads', null)}

      {renderSettingItem('settings', 'Unit setting', null)}

      {renderSettingItem('mail', 'Feedback and Suggestion', null)}

      {renderSettingItem('alert-circle', 'Report problem', null)}

      {renderSettingItem('share-social', 'Share', null)}

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#3498db',

  },

  header: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#fff',

    padding: 20,

  },

  settingItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 15,

    paddingHorizontal: 20,

    borderBottomWidth: 1,

    borderBottomColor: '#2980b9',

  },

  icon: {

    marginRight: 15,

  },

  settingText: {

    flex: 1,

    color: '#fff',

    fontSize: 16,

  },

  temperatureToggle: {

    flexDirection: 'row',

    backgroundColor: '#2980b9',

    borderRadius: 15,

    overflow: 'hidden',

  },

  tempUnit: {

    paddingVertical: 5,

    paddingHorizontal: 10,

  },

  activeUnit: {

    backgroundColor: '#fff',

  },

  tempUnitText: {

    color: '#fff',

    fontWeight: 'bold',

  },

});



export default SettingScreen;