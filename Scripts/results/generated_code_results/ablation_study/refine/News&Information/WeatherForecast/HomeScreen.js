import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const HomeScreen = ({ navigation }) => {

  const [selectedDay, setSelectedDay] = useState('MON');



  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const hours = ['07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm'];



  return (

    <View style={styles.container}>

      <StatusBar barStyle="light-content" />

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.openDrawer()}>

          <Icon name="menu" size={24} color="#fff" />

        </TouchableOpacity>

        <Text style={styles.locationText}>1, Mountain View, CA 94043, USA</Text>

        <TouchableOpacity onPress={() => navigation.navigate('EditLocation')}>

          <Icon name="map-marker-outline" size={24} color="#fff" />

        </TouchableOpacity>

      </View>

      <ScrollView style={styles.content}>

        <View style={styles.lockScreenContainer}>

          <Icon name="lock-outline" size={20} color="#fff" />

          <Text style={styles.lockScreenText}>Lock screen</Text>

          <View style={styles.toggleSwitch}>

            <View style={[styles.toggleButton, styles.toggleButtonActive]} />

            <View style={styles.toggleButton} />

          </View>

        </View>

        <View style={styles.weatherCard}>

          <Text style={styles.dateText}>Mon Jul 15, 2024</Text>

          <Text style={styles.timeText}>07:11</Text>

          <View style={styles.mainWeatherInfo}>

            <Text style={styles.temperatureText}>16°C</Text>

            <View style={styles.weatherIconContainer}>

              <Icon name="cloud-outline" size={40} color="#fff" />

              <Text style={styles.weatherDescription}>overcast clouds</Text>

            </View>

          </View>

          <Text style={styles.minMaxText}>Max: 29° Min: 15°</Text>

          <Text style={styles.windText}>Wind: North North East 11 km/h</Text>

        </View>

        <View style={styles.hourlyForecast}>

          <Text style={styles.sectionTitle}>24 hours next</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            {hours.map((hour, index) => (

              <View key={index} style={styles.hourlyItem}>

                <Text style={styles.hourText}>{hour}</Text>

                <Icon name="cloud-outline" size={24} color="#fff" />

                <Text style={styles.precipitationText}>0%</Text>

                <Text style={styles.hourlyTemp}>16°</Text>

              </View>

            ))}

          </ScrollView>

        </View>

        <TouchableOpacity style={styles.moreDetailsButton}>

          <Text style={styles.moreDetailsText}>more details</Text>

        </TouchableOpacity>

        <View style={styles.precipitationChance}>

          <View style={styles.precipitationItem}>

            <Icon name="weather-rainy" size={20} color="#fff" />

            <Text style={styles.precipitationText}>Chance of rain</Text>

          </View>

          <View style={styles.precipitationItem}>

            <Icon name="weather-snowy" size={20} color="#fff" />

            <Text style={styles.precipitationText}>Chance of snow</Text>

          </View>

        </View>

        <Text style={styles.touchDayText}>Touch a day to see forecast by hourly</Text>

        <View style={styles.weekForecast}>

          {days.map((day, index) => (

            <TouchableOpacity

              key={index}

              style={[styles.dayButton, selectedDay === day && styles.selectedDayButton]}

              onPress={() => setSelectedDay(day)}

            >

              <Text style={[styles.dayButtonText, selectedDay === day && styles.selectedDayText]}>{day}</Text>

              <Icon name="white-balance-sunny" size={24} color={selectedDay === day ? '#fff' : '#ffeb3b'} />

              <Text style={styles.precipitationText}>0%</Text>

              <Text style={styles.dayTemp}>{index === 0 ? '29°' : '31°'}</Text>

            </TouchableOpacity>

          ))}

        </View>

      </ScrollView>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#1e4e7a',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    paddingTop: StatusBar.currentHeight + 16,

  },

  locationText: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

  content: {

    flex: 1,

  },

  lockScreenContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

  },

  lockScreenText: {

    color: '#fff',

    marginLeft: 8,

  },

  toggleSwitch: {

    flexDirection: 'row',

    marginLeft: 'auto',

  },

  toggleButton: {

    width: 20,

    height: 20,

    borderRadius: 10,

    backgroundColor: '#4a4a4a',

    marginLeft: 4,

  },

  toggleButtonActive: {

    backgroundColor: '#fff',

  },

  weatherCard: {

    backgroundColor: 'rgba(0, 0, 0, 0.3)',

    borderRadius: 8,

    padding: 16,

    margin: 16,

  },

  dateText: {

    color: '#fff',

    fontSize: 18,

  },

  timeText: {

    color: '#fff',

    fontSize: 48,

    fontWeight: 'bold',

  },

  mainWeatherInfo: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginTop: 16,

  },

  temperatureText: {

    color: '#fff',

    fontSize: 72,

    fontWeight: 'bold',

  },

  weatherIconContainer: {

    alignItems: 'center',

  },

  weatherDescription: {

    color: '#fff',

    marginTop: 8,

  },

  minMaxText: {

    color: '#fff',

    marginTop: 8,

  },

  windText: {

    color: '#fff',

    marginTop: 4,

  },

  hourlyForecast: {

    marginTop: 16,

  },

  sectionTitle: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 16,

    marginBottom: 8,

  },

  hourlyItem: {

    alignItems: 'center',

    marginRight: 16,

  },

  hourText: {

    color: '#fff',

  },

  precipitationText: {

    color: '#fff',

    marginTop: 4,

  },

  hourlyTemp: {

    color: '#fff',

    fontWeight: 'bold',

  },

  moreDetailsButton: {

    alignSelf: 'flex-end',

    marginRight: 16,

    marginTop: 8,

  },

  moreDetailsText: {

    color: '#ffeb3b',

  },

  precipitationChance: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginTop: 16,

  },

  precipitationItem: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  touchDayText: {

    color: '#fff',

    textAlign: 'center',

    marginTop: 16,

  },

  weekForecast: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 16,

    paddingHorizontal: 16,

  },

  dayButton: {

    alignItems: 'center',

    padding: 8,

    borderRadius: 8,

  },

  selectedDayButton: {

    backgroundColor: 'rgba(255, 255, 255, 0.2)',

  },

  dayButtonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  selectedDayText: {

    color: '#ffeb3b',

  },

  dayTemp: {

    color: '#fff',

    fontWeight: 'bold',

    marginTop: 4,

  },

});



export default HomeScreen;