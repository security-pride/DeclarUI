import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Switch } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const HomeScreen = ({ navigation }) => {

  const [isLockScreenEnabled, setIsLockScreenEnabled] = useState(false);



  const toggleLockScreen = () => setIsLockScreenEnabled(previousState => !previousState);



  const hourlyForecast = [

    { time: '07:00 am', temp: 16, icon: 'cloudy' },

    { time: '08:00 am', temp: 16, icon: 'cloudy' },

    { time: '09:00 am', temp: 16, icon: 'cloudy' },

    { time: '10:00 am', temp: 16, icon: 'cloudy' },

    { time: '11:00 am', temp: 15, icon: 'cloudy' },

    { time: '12:00 pm', temp: 15, icon: 'partly-sunny' },

  ];



  const weeklyForecast = [

    { day: 'MON', temp: 29, icon: 'sunny' },

    { day: 'TUE', temp: 28, icon: 'sunny' },

    { day: 'WED', temp: 31, icon: 'sunny' },

    { day: 'THU', temp: 31, icon: 'sunny' },

    { day: 'FRI', temp: 31, icon: 'sunny' },

    { day: 'SAT', temp: 27, icon: 'sunny' },

    { day: 'SUN', temp: 27, icon: 'sunny' },

  ];



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>

          <Icon name="menu" size={24} color="#fff" />

        </TouchableOpacity>

        <Text style={styles.location}>Mountain View, CA 94043, USA</Text>

        <TouchableOpacity onPress={() => navigation.navigate('AddLocations')}>

          <Icon name="location" size={24} color="#fff" />

        </TouchableOpacity>

      </View>



      <View style={styles.lockScreenToggle}>

        <Icon name="lock-closed" size={24} color="#fff" />

        <Text style={styles.lockScreenText}>Lock screen</Text>

        <Switch

          trackColor={{ false: "#767577", true: "#81b0ff" }}

          thumbColor={isLockScreenEnabled ? "#f5dd4b" : "#f4f3f4"}

          ios_backgroundColor="#3e3e3e"

          onValueChange={toggleLockScreen}

          value={isLockScreenEnabled}

        />

      </View>



      <View style={styles.mainWeather}>

        <Text style={styles.date}>Mon Jul 15, 2024</Text>

        <Text style={styles.time}>07:11</Text>

        <Text style={styles.temperature}>16°C</Text>

        <View style={styles.weatherInfo}>

          <Image source={require('../assets/snack-icon.png')} style={styles.weatherIcon} />

          <Text style={styles.weatherDescription}>overcast clouds</Text>

        </View>

        <Text style={styles.minMaxTemp}>Max: 29° Min: 15°</Text>

        <Text style={styles.wind}>Wind: North North East 11 km/h</Text>

      </View>



      <View style={styles.hourlyForecast}>

        <Text style={styles.forecastTitle}>24 hours next</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          {hourlyForecast.map((item, index) => (

            <View key={index} style={styles.hourlyItem}>

              <Text style={styles.hourlyTime}>{item.time}</Text>

              <Icon name={item.icon} size={24} color="#fff" />

              <Text style={styles.hourlyTemp}>{item.temp}°</Text>

              <Icon name="rainy" size={16} color="#ffff00" />

              <Text style={styles.hourlyPrecip}>0%</Text>

            </View>

          ))}

        </ScrollView>

      </View>



      <TouchableOpacity style={styles.moreDetails} onPress={() => navigation.navigate('Details')}>

        <Text style={styles.moreDetailsText}>more details</Text>

      </TouchableOpacity>



      <View style={styles.weeklyForecast}>

        <Text style={styles.forecastInstructions}>Touch a day to see forecast by hourly</Text>

        {weeklyForecast.map((item, index) => (

          <View key={index} style={styles.weeklyItem}>

            <Text style={styles.weekDay}>{item.day}</Text>

            <Icon name={item.icon} size={24} color="#fff" />

            <Icon name="rainy" size={16} color="#ffff00" />

            <Text style={styles.weeklyPrecip}>0%</Text>

            <View style={[styles.tempBar, { height: `${(item.temp / 31) * 100}%` }]} />

            <Text style={styles.weeklyTemp}>{item.temp}°</Text>

          </View>

        ))}

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#0e4c92',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    paddingTop: 40,

  },

  location: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  lockScreenToggle: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

  },

  lockScreenText: {

    color: '#fff',

    marginLeft: 8,

    marginRight: 'auto',

  },

  mainWeather: {

    alignItems: 'center',

    padding: 16,

  },

  date: {

    color: '#fff',

    fontSize: 18,

  },

  time: {

    color: '#fff',

    fontSize: 48,

    fontWeight: 'bold',

  },

  temperature: {

    color: '#fff',

    fontSize: 72,

    fontWeight: 'bold',

  },

  weatherInfo: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  weatherIcon: {

    width: 30,

    height: 30,

  },

  weatherDescription: {

    color: '#fff',

    fontSize: 18,

    marginLeft: 8,

  },

  minMaxTemp: {

    color: '#fff',

    fontSize: 16,

    marginTop: 8,

  },

  wind: {

    color: '#fff',

    fontSize: 16,

    marginTop: 4,

  },

  hourlyForecast: {

    padding: 16,

  },

  forecastTitle: {

    color: '#fff',

    fontSize: 18,

    marginBottom: 8,

  },

  hourlyItem: {

    alignItems: 'center',

    marginRight: 16,

  },

  hourlyTime: {

    color: '#fff',

  },

  hourlyTemp: {

    color: '#fff',

    fontSize: 18,

  },

  hourlyPrecip: {

    color: '#fff',

  },

  moreDetails: {

    alignItems: 'center',

    padding: 16,

  },

  moreDetailsText: {

    color: '#ffff00',

    fontSize: 16,

  },

  weeklyForecast: {

    padding: 16,

  },

  forecastInstructions: {

    color: '#ffff00',

    fontSize: 14,

    marginBottom: 16,

  },

  weeklyItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 16,

  },

  weekDay: {

    color: '#fff',

    width: 40,

  },

  weeklyPrecip: {

    color: '#fff',

    width: 30,

  },

  tempBar: {

    width: 10,

    backgroundColor: '#ffff00',

    marginRight: 8,

  },

  weeklyTemp: {

    color: '#fff',

    width: 30,

    textAlign: 'right',

  },

});



export default HomeScreen;