import React from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const WeatherItem = ({ label, value }) => (

  <View style={styles.weatherItem}>

    <Text style={styles.weatherLabel}>{label}</Text>

    <Text style={styles.weatherValue}>{value}</Text>

  </View>

);



const HourlyForecast = ({ time, date, temperature, icon, details }) => (

  <View style={styles.hourlyForecast}>

    <View style={styles.hourlyHeader}>

      <View>

        <Text style={styles.hourlyTime}>{time}</Text>

        <Text style={styles.hourlyDate}>{date}</Text>

        <View style={styles.precipitationContainer}>

          <Icon name="water-outline" size={16} color="#fff" />

          <Text style={styles.precipitationText}>0%</Text>

        </View>

      </View>

      <View style={styles.temperatureContainer}>

        <Text style={styles.temperature}>{temperature}</Text>

        <Text style={styles.temperatureUnit}>°C</Text>

      </View>

      <View style={styles.weatherIconContainer}>

        <Icon name={icon} size={24} color="#fff" />

        <Text style={styles.weatherDescription}>{details}</Text>

      </View>

    </View>

    <View style={styles.weatherDetails}>

      <WeatherItem label="Precipitation" value="0 mm" />

      <WeatherItem label="Humidity" value={details.humidity} />

      <WeatherItem label="Wind chill" value={details.windChill} />

      <WeatherItem label="Dew point" value={details.dewPoint} />

      <WeatherItem label="Cloud cover" value={details.cloudCover} />

      <WeatherItem label="Pressure" value={details.pressure} />

      <WeatherItem label="Moon phases" value={details.moonPhases} />

      <WeatherItem label="Ultraviolet index" value={details.uvIndex} />

      <WeatherItem label="Wind speed" value={details.windSpeed} />

      <WeatherItem label="Wind direction" value={details.windDirection} />

    </View>

    <TouchableOpacity style={styles.detailsButton}>

      <Text style={styles.detailsButtonText}>Details</Text>

    </TouchableOpacity>

  </View>

);



const DetailsScreen = () => {

  const navigation = useNavigation();



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#fff" />

        </TouchableOpacity>

        <View style={styles.headerTextContainer}>

          <Text style={styles.headerTitle}>1600 Charleston Rd, Mountain Vie...</Text>

          <Text style={styles.headerSubtitle}>Hourly weather</Text>

        </View>

      </View>

      <HourlyForecast 

        time="07:00 AM"

        date="Jul 15, 2024"

        temperature="16"

        icon="cloud-outline"

        details={{

          humidity: "81%",

          windChill: "16",

          dewPoint: "13",

          cloudCover: "100%",

          pressure: "30 inHg",

          moonPhases: "Waxing gibbous",

          uvIndex: "0",

          windSpeed: "5 km/h",

          windDirection: "West North West"

        }}

      />

      <HourlyForecast 

        time="08:00 AM"

        date="Jul 15, 2024"

        temperature="16"

        icon="cloud-outline"

        details={{

          humidity: "80%",

          windChill: "16",

          dewPoint: "12",

          cloudCover: "81%",

          pressure: "30 inHg",

          moonPhases: "Waxing gibbous",

          uvIndex: "0",

          windSpeed: "5 km/h",

          windDirection: "West North West"

        }}

      />

      <HourlyForecast 

        time="09:00 AM"

        date="Jul 15, 2024"

        temperature="16"

        icon="cloud-outline"

        details={{

          humidity: "79%",

          windChill: "16",

          dewPoint: "12",

          cloudCover: "63%",

          pressure: "30 inHg",

          moonPhases: "Waxing gibbous",

          uvIndex: "0",

          windSpeed: "4 km/h",

          windDirection: "West North West"

        }}

      />

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#0d2f4f',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    paddingTop: 40,

  },

  headerTextContainer: {

    marginLeft: 16,

  },

  headerTitle: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  headerSubtitle: {

    color: '#fff',

    fontSize: 14,

  },

  hourlyForecast: {

    borderBottomWidth: 1,

    borderBottomColor: 'rgba(255,255,255,0.1)',

    padding: 16,

  },

  hourlyHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  hourlyTime: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

  hourlyDate: {

    color: '#fff',

    fontSize: 14,

  },

  precipitationContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 4,

  },

  precipitationText: {

    color: '#fff',

    marginLeft: 4,

  },

  temperatureContainer: {

    flexDirection: 'row',

    alignItems: 'flex-start',

  },

  temperature: {

    color: '#fff',

    fontSize: 36,

    fontWeight: 'bold',

  },

  temperatureUnit: {

    color: '#fff',

    fontSize: 16,

    marginTop: 4,

  },

  weatherIconContainer: {

    alignItems: 'center',

  },

  weatherDescription: {

    color: '#fff',

    marginTop: 4,

  },

  weatherDetails: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    marginTop: 16,

  },

  weatherItem: {

    width: '48%',

    marginBottom: 8,

  },

  weatherLabel: {

    color: '#fff',

    fontSize: 14,

  },

  weatherValue: {

    color: '#fff',

    fontSize: 14,

    fontWeight: 'bold',

  },

  detailsButton: {

    alignSelf: 'flex-end',

    marginTop: 8,

  },

  detailsButtonText: {

    color: '#ffd700',

    fontSize: 14,

    fontWeight: 'bold',

  },

});



export default DetailsScreen;