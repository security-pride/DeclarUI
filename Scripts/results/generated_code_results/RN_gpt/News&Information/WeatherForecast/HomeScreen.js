import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* Header with location information */}
      <View style={styles.header}>
        <Text style={styles.locationText}>Mountain View, CA 94043, USA</Text>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('AddLocations')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Lock screen */}
      <View style={styles.lockScreen}>
        <Image source={require('../assets/snack-icon.png')} style={styles.lockIcon} />
        <Text style={styles.lockText}>Lock screen</Text>
      </View>

      {/* Weather Information */}
      <View style={styles.weatherInfo}>
        <Text style={styles.dateText}>Mon Jul 15, 2024</Text>
        <Text style={styles.timeText}>07:11</Text>
        <Text style={styles.temperatureText}>16°C</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.weatherIcon} />
        <Text style={styles.weatherDetailText}>overcast clouds</Text>
        <Text style={styles.minMaxText}>Max: 29°  Min: 15°</Text>
        <Text style={styles.windText}>Wind: North North East 11 km/h</Text>
      </View>

      {/* Hourly Forecast Section */}
      <View style={styles.hourlyForecast}>
        {Array.from({ length: 6 }).map((_, index) => (
          <View key={index} style={styles.hourlyItem}>
            <Text style={styles.hourlyTime}>0{index + 7}:00 am</Text>
            <Image source={require('../assets/snack-icon.png')} style={styles.smallIcon} />
            <Text style={styles.hourlyPrecipitation}>0%</Text>
          </View>
        ))}
        <Text style={styles.next24}>24 hours next</Text>
      </View>

      {/* Graph for Temperature */}
      <View style={styles.graph}></View>

      {/* Chances of Rain and Snow */}
      <View style={styles.chances}>
        <Text style={styles.chanceText}>Chance of rain</Text>
        <Text style={styles.chanceText}>Chance of snow</Text>
      </View>

      {/* More details */}
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text style={styles.moreDetails}>more details</Text>
      </TouchableOpacity>

      {/* Day Buttons */}
      <View style={styles.dayButtons}>
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, index) => (
          <TouchableOpacity key={index} style={styles.dayButton}>
            <Text style={styles.dayButtonText}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Weekly Forecast */}
      <View style={styles.weeklyForecast}>
        {Array.from({ length: 7 }).map((_, index) => (
          <View key={index} style={styles.weeklyItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.smallIcon} />
            <Text style={styles.weeklyPrecipitation}>0%</Text>
            <Text style={styles.weeklyTemperature}>{index % 2 === 0 ? '29°' : '31°'}</Text>
          </View>
        ))}
      </View>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <Text style={styles.bottomText}>Touch a day to see forecast by hourly</Text>
      </View>

      {/* Setting Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <Text style={[styles.moreDetails, { textAlign: 'center', paddingTop: 20 }]}>Settings</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  locationText: {
    color: '#fff',
    fontSize: 18,
  },
  iconButton: {
    padding: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  lockScreen: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  lockIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  lockText: {
    color: '#fff',
  },
  weatherInfo: {
    alignItems: 'center',
    padding: 20,
  },
  dateText: {
    color: '#fff',
    fontSize: 16,
  },
  timeText: {
    color: '#fff',
    fontSize: 36,
  },
  temperatureText: {
    color: '#fff',
    fontSize: 72,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  weatherDetailText: {
    color: '#fff',
    fontSize: 18,
  },
  minMaxText: {
    color: '#fff',
    fontSize: 14,
  },
  windText: {
    color: '#fff',
    fontSize: 14,
  },
  hourlyForecast: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  hourlyItem: {
    alignItems: 'center',
  },
  hourlyTime: {
    color: '#fff',
    fontSize: 12,
  },
  smallIcon: {
    width: 20,
    height: 20,
  },
  hourlyPrecipitation: {
    color: '#fff',
    fontSize: 12,
  },
  next24: {
    color: '#fff',
    fontSize: 10,
  },
  graph: {
    height: 100,
    backgroundColor: '#221',
  },
  chances: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  chanceText: {
    color: '#fff',
    fontSize: 12,
  },
  moreDetails: {
    color: '#f0c',
    textAlign: 'right',
    padding: 10,
  },
  dayButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  dayButton: {
    padding: 5,
  },
  dayButtonText: {
    color: '#fff',
  },
  weeklyForecast: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  weeklyItem: {
    alignItems: 'center',
  },
  weeklyPrecipitation: {
    color: '#fff',
    fontSize: 10,
  },
  weeklyTemperature: {
    color: '#fff',
    fontSize: 14,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  bottomText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default HomeScreen;