import React, { useState } from 'react';

import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const SettingScreen = ({ navigation }) => {

  const [tempUnit, setTempUnit] = useState('C');

  const [lockScreen, setLockScreen] = useState(true);

  const [notification, setNotification] = useState(true);

  const [statusBar, setStatusBar] = useState(true);

  const [hideBackground, setHideBackground] = useState(false);



  const toggleTempUnit = () => setTempUnit(tempUnit === 'C' ? 'F' : 'C');



  return (

    <View style={styles.container}>

      <Text style={styles.header}>SETTING</Text>

      <ScrollView style={styles.scrollView}>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#fff" />

          <Text style={styles.itemText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ManageLocation')}>

          <Icon name="map-marker" size={24} color="#fff" />

          <Text style={styles.itemText}>Manage location</Text>

        </TouchableOpacity>

        <View style={styles.item}>

          <Icon name="thermometer" size={24} color="#fff" />

          <Text style={styles.itemText}>Temperature</Text>

          <View style={styles.tempSwitch}>

            <Text style={[styles.tempUnit, tempUnit === 'F' && styles.activeTempUnit]}>F</Text>

            <Switch

              trackColor={{ false: '#767577', true: '#81b0ff' }}

              thumbColor={tempUnit === 'C' ? '#f5dd4b' : '#f4f3f4'}

              ios_backgroundColor="#3e3e3e"

              onValueChange={toggleTempUnit}

              value={tempUnit === 'C'}

            />

            <Text style={[styles.tempUnit, tempUnit === 'C' && styles.activeTempUnit]}>C</Text>

          </View>

        </View>

        <View style={styles.item}>

          <Icon name="lock" size={24} color="#fff" />

          <Text style={styles.itemText}>Lock screen</Text>

          <Switch

            trackColor={{ false: '#767577', true: '#81b0ff' }}

            thumbColor={lockScreen ? '#f5dd4b' : '#f4f3f4'}

            ios_backgroundColor="#3e3e3e"

            onValueChange={() => setLockScreen(!lockScreen)}

            value={lockScreen}

          />

        </View>

        <View style={styles.item}>

          <Icon name="bell" size={24} color="#fff" />

          <Text style={styles.itemText}>Notification</Text>

          <Switch

            trackColor={{ false: '#767577', true: '#81b0ff' }}

            thumbColor={notification ? '#f5dd4b' : '#f4f3f4'}

            ios_backgroundColor="#3e3e3e"

            onValueChange={() => setNotification(!notification)}

            value={notification}

          />

        </View>

        <View style={styles.item}>

          <Icon name="ruler" size={24} color="#fff" />

          <Text style={styles.itemText}>Status bar</Text>

          <Switch

            trackColor={{ false: '#767577', true: '#81b0ff' }}

            thumbColor={statusBar ? '#f5dd4b' : '#f4f3f4'}

            ios_backgroundColor="#3e3e3e"

            onValueChange={() => setStatusBar(!statusBar)}

            value={statusBar}

          />

        </View>

        <View style={styles.item}>

          <Icon name="image" size={24} color="#fff" />

          <Text style={styles.itemText}>Hide background image</Text>

          <Switch

            trackColor={{ false: '#767577', true: '#81b0ff' }}

            thumbColor={hideBackground ? '#f5dd4b' : '#f4f3f4'}

            ios_backgroundColor="#3e3e3e"

            onValueChange={() => setHideBackground(!hideBackground)}

            value={hideBackground}

          />

        </View>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('WeatherRadar')}>

          <Icon name="radar" size={24} color="#fff" />

          <Text style={styles.itemText}>Weather radar</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('WeatherWidgets')}>

          <Icon name="widgets" size={24} color="#fff" />

          <Text style={styles.itemText}>Weather widgets</Text>

          <Text style={styles.subText}>Show on phone screen</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('RemoveAds')}>

          <Icon name="cancel" size={24} color="#fff" />

          <Text style={styles.itemText}>Remove ads</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('UnitSetting')}>

          <Icon name="cog" size={24} color="#fff" />

          <Text style={styles.itemText}>Unit setting</Text>

          <Text style={styles.subText}>pressure, wind speed, time format...</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Feedback')}>

          <Icon name="message-text" size={24} color="#fff" />

          <Text style={styles.itemText}>Feedback and Suggestion</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ReportProblem')}>

          <Icon name="alert-circle" size={24} color="#fff" />

          <Text style={styles.itemText}>Report problem</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Share')}>

          <Icon name="share-variant" size={24} color="#fff" />

          <Text style={styles.itemText}>Share</Text>

        </TouchableOpacity>

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

    fontSize: 24,

    fontWeight: 'bold',

    color: '#fff',

    padding: 16,

    paddingTop: 40,

  },

  scrollView: {

    flex: 1,

  },

  item: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: 'rgba(255,255,255,0.2)',

  },

  itemText: {

    color: '#fff',

    fontSize: 16,

    marginLeft: 16,

    flex: 1,

  },

  subText: {

    color: 'rgba(255,255,255,0.7)',

    fontSize: 12,

    marginLeft: 16,

  },

  tempSwitch: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  tempUnit: {

    color: '#fff',

    fontSize: 16,

    marginHorizontal: 8,

  },

  activeTempUnit: {

    fontWeight: 'bold',

  },

});



export default SettingScreen;