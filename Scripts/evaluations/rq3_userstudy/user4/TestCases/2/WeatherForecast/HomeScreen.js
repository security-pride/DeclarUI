import React, { useState } from 'react';

import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Switch } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const HomeScreen = () => {

  const navigation = useNavigation();

  const [isLockScreenEnabled, setIsLockScreenEnabled] = useState(false);



  const toggleLockScreen = () => setIsLockScreenEnabled(previousState => !previousState);



  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const hourlyForecast = ['07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00'];



  return (

    <ImageBackground source={require('../assets/snack-icon.png')} style={styles.backgroundImage}>

      <ScrollView style={styles.container}>

        <View style={styles.header}>

          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>

            <Icon name="menu" size={24} color="#fff" />

          </TouchableOpacity>

          <Text style={styles.headerTitle}>Mountain View, CA 94043, USA</Text>

          <TouchableOpacity onPress={() => navigation.navigate('AddLocations')}>

            <Icon name="location" size={24} color="#fff" />

          </TouchableOpacity>

        </View>



        <View style={styles.lockScreenContainer}>

          <Icon name="lock-closed" size={20} color="#fff" />

          <Text style={styles.lockScreenText}>Lock screen</Text>

          <Switch

            trackColor={{ false: "#767577", true: "#81b0ff" }}

            thumbColor={isLockScreenEnabled ? "#f5dd4b" : "#f4f3f4"}

            ios_backgroundColor="#3e3e3e"

            onValueChange={toggleLockScreen}

            value={isLockScreenEnabled}

          />

        </View>



        <View style={styles.currentWeather}>

          <View style={styles.weather1}>
            <View>
              <Text style={styles.date}>Mon Jul 15, 2024</Text>

              <Text style={styles.time}>07:11</Text>
            </View>

            <View style={styles.temperatureContainer}>

              <Text style={styles.temperature}>16</Text>

              <Text style={styles.temperatureUnit}>°C</Text>

            </View>

            <View style={styles.weatherIconContainer}>

              <Icon name="cloud" size={40} color="#fff" />

              <Text style={styles.weatherDescription}>overcast clouds</Text>

            </View>
          </View>

          <View>
            <Text style={styles.minMaxTemp}>Max: 29° Min: 15°</Text>

            <Text style={styles.windInfo}>Wind: North North East 11 km/h</Text>

          </View>
        </View>



        <View style={styles.hourlyForecast}>

          <Text style={styles.forecastTitle}>24 hours next</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            {hourlyForecast.map((hour, index) => (

              <View key={index} style={styles.hourlyItem}>

                <Text style={styles.hourlyTime}>{hour}</Text>

                <Icon name="cloud" size={24} color="#fff" />

                <Text style={styles.hourlyTemp}>16°</Text>

                <View style={styles.precipitationContainer}>

                  <Icon name="water" size={16} color="#fff" />

                  <Text style={styles.precipitationText}>0%</Text>

                </View>

              </View>

            ))}

          </ScrollView>

        </View>



        <TouchableOpacity style={styles.moreDetailsButton} onPress={() => navigation.navigate('Details')}>

          <Text style={styles.moreDetailsText}>more details</Text>

        </TouchableOpacity>



        <View style={styles.precipitationLegend}>

          <View style={styles.legendItem}>

            <Icon name="rainy" size={20} color="#fff" />

            <Text style={styles.legendText}>Chance of rain</Text>

          </View>

          <View style={styles.legendItem}>

            <Icon name="snow" size={20} color="#fff" />

            <Text style={styles.legendText}>Chance of snow</Text>

          </View>

        </View>



        <Text style={styles.touchDayText}>Touch a day to see forecast by hourly</Text>



        <View style={styles.weeklyForecast}>

          {weekDays.map((day, index) => (

            <TouchableOpacity key={index} style={styles.dayForecast}>

              <Text style={styles.dayName}>{day}</Text>

              <Icon name="sunny" size={24} color="#fff" />

              <View style={styles.precipitationContainer}>

                <Icon name="water" size={16} color="#fff" />

                <Text style={styles.precipitationText}>0%</Text>

              </View>

              <Text style={styles.dayTemp}>{index === 0 ? '29°' : '31°'}</Text>

              <View style={[styles.tempBar, { height: 100 + index * 10 }]} />

            </TouchableOpacity>

          ))}

        </View>

      </ScrollView>

    </ImageBackground>

  );

};



const styles = StyleSheet.create({

  backgroundImage: {

    flex: 1,

    resizeMode: 'cover',

  },

  container: {

    flex: 1,

    backgroundColor: 'rgba(0,0,0,0.3)',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    paddingTop: 40,

  },

  headerTitle: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

  lockScreenContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'flex-end',

    paddingRight: 16,

  },

  lockScreenText: {

    color: '#fff',

    marginRight: 8,

  },

  currentWeather: {

    alignItems: 'center',

    marginTop: 20,

  },

  weather1: {
    flexDirection: 'row'
  },

  date: {

    color: '#fff',

    fontSize: 14,

  },

  time: {

    color: '#fff',

    fontSize: 30,

    fontWeight: 'bold',

  },

  temperatureContainer: {

    flexDirection: 'row',

    alignItems: 'flex-start',

  },

  temperature: {

    color: '#fff',

    fontSize: 50,

    fontWeight: 'bold',

  },

  temperatureUnit: {

    color: '#fff',

    fontSize: 24,

    marginTop: 8,

    marginLeft: 10

  },

  weatherIconContainer: {

    alignItems: 'center',

  },

  weatherDescription: {

    color: '#fff',

    fontSize: 16,

  },

  minMaxTemp: {

    color: '#fff',

    fontSize: 16,

    marginTop: 8,

  },

  windInfo: {

    color: '#fff',

    fontSize: 14,

  },

  hourlyForecast: {

    marginTop: 20,

  },

  forecastTitle: {

    color: '#fff',

    fontSize: 16,

    marginLeft: 16,

    marginBottom: 8,

  },

  hourlyItem: {

    alignItems: 'center',

    marginHorizontal: 8,

  },

  hourlyTime: {

    color: '#fff',

    fontSize: 12,

  },

  hourlyTemp: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

  precipitationContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  precipitationText: {

    color: '#fff',

    fontSize: 12,

    marginLeft: 4,

  },

  moreDetailsButton: {

    alignSelf: 'flex-end',

    marginRight: 16,

    marginTop: 8,

  },

  moreDetailsText: {

    color: '#ffd700',

    fontSize: 14,

  },

  precipitationLegend: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginTop: 16,

  },

  legendItem: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  legendText: {

    color: '#fff',

    marginLeft: 4,

  },

  touchDayText: {

    color: '#ffd700',

    textAlign: 'center',

    marginVertical: 16,

  },

  weeklyForecast: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 16,

  },

  dayForecast: {

    alignItems: 'center',

  },

  dayName: {

    color: '#fff',

    fontSize: 12,

    fontWeight: 'bold',

  },

  dayTemp: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

  tempBar: {

    width: 8,

    backgroundColor: '#ffd700',

    borderRadius: 4,

    marginTop: 4,

  },

});



export default HomeScreen;