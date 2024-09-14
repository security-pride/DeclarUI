import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const SettingScreen = () => {

  const navigation = useNavigation();

  const [temperatureUnit, setTemperatureUnit] = useState('C');

  const [lockScreen, setLockScreen] = useState(true);

  const [notification, setNotification] = useState(true);

  const [statusBar, setStatusBar] = useState(true);

  const [hideBackground, setHideBackground] = useState(true);



  const toggleTemperature = () => {

    setTemperatureUnit(prev => prev === 'C' ? 'F' : 'C');

  };



  const renderSettingItem = (icon, title, rightComponent, onPress, subtitle) => (

    <TouchableOpacity style={styles.settingItem} onPress={onPress}>

      <View style={styles.settingLeft}>

        <Icon name={icon} size={24} color="#fff" />

        <View>

          <Text style={styles.settingTitle}>{title}</Text>

          {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}

        </View>

      </View>

      {rightComponent}

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <Text style={styles.header}>SETTING</Text>

      <ScrollView>

        {renderSettingItem('home', 'Home', null, () => navigation.navigate('Home'))}

        {renderSettingItem('location', 'Manage location', null, () => navigation.navigate('EditLocation'))}

        {renderSettingItem('sunny', 'Temperature', (

          <View style={styles.temperatureSwitch}>

            <TouchableOpacity

              style={[styles.tempUnit, temperatureUnit === 'F' && styles.activeTempUnit]}

              onPress={() => setTemperatureUnit('F')}

            >

              <Text style={styles.tempUnitText}>F</Text>

            </TouchableOpacity>

            <TouchableOpacity

              style={[styles.tempUnit, temperatureUnit === 'C' && styles.activeTempUnit]}

              onPress={() => setTemperatureUnit('C')}

            >

              <Text style={styles.tempUnitText}>C</Text>

            </TouchableOpacity>

          </View>

        ), toggleTemperature)}

        {renderSettingItem('lock-closed', 'Lock screen', <Switch value={lockScreen} onValueChange={setLockScreen} />, () => setLockScreen(!lockScreen))}

        {renderSettingItem('notifications', 'Notification', <Switch value={notification} onValueChange={setNotification} />, () => setNotification(!notification))}

        {renderSettingItem('stats-chart', 'Status bar', <Switch value={statusBar} onValueChange={setStatusBar} />, () => setStatusBar(!statusBar))}

        {renderSettingItem('image', 'Hide background image', <Switch value={hideBackground} onValueChange={setHideBackground} />, () => setHideBackground(!hideBackground))}

        {renderSettingItem('radio', 'Weather radar', null, () => {})}

        {renderSettingItem('apps', 'Weather widgets', null, () => {}, 'Show on phone screen')}

        {renderSettingItem('close-circle', 'Remove ads', null, () => {})}

        {renderSettingItem('sunny', 'Unit setting', null, () => {}, 'pressure, wind speed, time format...')}

        {renderSettingItem('mail', 'Feedback and Suggestion', null, () => {})}

        {renderSettingItem('warning', 'Report problem', null, () => {})}

        {renderSettingItem('share-social', 'Share', null, () => {})}

      </ScrollView>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#3498db',

  },

  header: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#fff',

    padding: 16,

    paddingTop: 40,

  },

  settingItem: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: 'rgba(255,255,255,0.2)',

  },

  settingLeft: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  settingTitle: {

    color: '#fff',

    fontSize: 16,

    marginLeft: 16,

  },

  settingSubtitle: {

    color: 'rgba(255,255,255,0.7)',

    fontSize: 12,

    marginLeft: 16,

  },

  temperatureSwitch: {

    flexDirection: 'row',

    backgroundColor: 'rgba(255,255,255,0.2)',

    borderRadius: 15,

  },

  tempUnit: {

    paddingHorizontal: 10,

    paddingVertical: 5,

    borderRadius: 15,

  },

  activeTempUnit: {

    backgroundColor: '#fff',

  },

  tempUnitText: {

    color: '#fff',

    fontWeight: 'bold',

  },

});



export default SettingScreen;