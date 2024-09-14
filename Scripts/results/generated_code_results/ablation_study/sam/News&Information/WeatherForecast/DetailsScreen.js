import React from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const WeatherInfoItem = ({ label, value }) => (

  <View style={styles.infoItem}>

    <Text style={styles.infoLabel}>{label}</Text>

    <Text style={styles.infoValue}>{value}</Text>

  </View>

);



const DetailsScreen = ({ navigation }) => {

  const weatherData = [

    { time: '07:00 AM', temperature: 16, condition: 'overcast clouds', details: [

      { label: 'Precipitation', value: '0 mm' },

      { label: 'Humidity', value: '81%' },

      { label: 'Wind chill', value: '16' },

      { label: 'Dew point', value: '13' },

      { label: 'Cloud cover', value: '100%' },

      { label: 'Pressure', value: '30 inHg' },

      { label: 'Moon phases', value: 'Waxing gibbous' },

      { label: 'Ultraviolet index', value: '0' },

      { label: 'Wind direction', value: 'West North West' },

      { label: 'Wind speed', value: '5 km/h' },

    ]},

    { time: '08:00 AM', temperature: 16, condition: 'broken clouds', details: [

      { label: 'Precipitation', value: '0 mm' },

      { label: 'Humidity', value: '80%' },

      { label: 'Wind chill', value: '16' },

      { label: 'Dew point', value: '12' },

      { label: 'Cloud cover', value: '81%' },

      { label: 'Pressure', value: '30 inHg' },

      { label: 'Moon phases', value: 'Waxing gibbous' },

      { label: 'Ultraviolet index', value: '0' },

      { label: 'Wind direction', value: 'West North West' },

      { label: 'Wind speed', value: '5 km/h' },

    ]},

    { time: '09:00 AM', temperature: 16, condition: 'broken clouds', details: [

      { label: 'Precipitation', value: '0 mm' },

      { label: 'Humidity', value: '79%' },

      { label: 'Wind chill', value: '16' },

      { label: 'Dew point', value: '12' },

      { label: 'Cloud cover', value: '63%' },

      { label: 'Pressure', value: '30 inHg' },

      { label: 'Moon phases', value: 'Waxing gibbous' },

      { label: 'Ultraviolet index', value: '0' },

      { label: 'Wind direction', value: 'West North West' },

      { label: 'Wind speed', value: '4 km/h' },

    ]},

  ];



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="arrow-back" size={24} color="#fff" />

        </TouchableOpacity>

        <Text style={styles.title}>1600 Charleston Rd, Mountain Vie...</Text>

        <Text style={styles.subtitle}>Hourly weather</Text>

      </View>

      <ScrollView>

        {weatherData.map((hour, index) => (

          <View key={index} style={styles.hourlyContainer}>

            <View style={styles.hourlyHeader}>

              <View>

                <Text style={styles.time}>{hour.time}</Text>

                <Text style={styles.date}>Jul 15, 2024</Text>

                <Text style={styles.precipitation}>0%</Text>

              </View>

              <View style={styles.temperatureContainer}>

                <Text style={styles.temperature}>{hour.temperature}°C</Text>

                <Image source={require('../assets/snack-icon.png')} style={styles.weatherIcon} />

                <Text style={styles.condition}>{hour.condition}</Text>

              </View>

            </View>

            <View style={styles.detailsContainer}>

              {hour.details.map((detail, detailIndex) => (

                <WeatherInfoItem key={detailIndex} label={detail.label} value={detail.value} />

              ))}

            </View>

            <TouchableOpacity style={styles.detailsButton}>

              <Text style={styles.detailsButtonText}>Details</Text>

            </TouchableOpacity>

          </View>

        ))}

      </ScrollView>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#0e4c92',

  },

  header: {

    padding: 16,

    paddingTop: 40,

  },

  title: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#fff',

    marginTop: 8,

  },

  subtitle: {

    fontSize: 16,

    color: '#fff',

    marginTop: 4,

  },

  hourlyContainer: {

    backgroundColor: '#0a3d78',

    margin: 8,

    borderRadius: 8,

    padding: 16,

  },

  hourlyHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 16,

  },

  time: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#fff',

  },

  date: {

    fontSize: 14,

    color: '#ccc',

  },

  precipitation: {

    fontSize: 14,

    color: '#ccc',

  },

  temperatureContainer: {

    alignItems: 'center',

  },

  temperature: {

    fontSize: 32,

    fontWeight: 'bold',

    color: '#fff',

  },

  weatherIcon: {

    width: 40,

    height: 40,

  },

  condition: {

    fontSize: 14,

    color: '#ccc',

  },

  detailsContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

  },

  infoItem: {

    width: '48%',

    marginBottom: 8,

  },

  infoLabel: {

    fontSize: 14,

    color: '#ccc',

  },

  infoValue: {

    fontSize: 16,

    color: '#fff',

    fontWeight: 'bold',

  },

  detailsButton: {

    alignSelf: 'flex-end',

    marginTop: 16,

  },

  detailsButtonText: {

    color: '#ffd700',

    fontSize: 16,

    fontWeight: 'bold',

  },

});



export default DetailsScreen;