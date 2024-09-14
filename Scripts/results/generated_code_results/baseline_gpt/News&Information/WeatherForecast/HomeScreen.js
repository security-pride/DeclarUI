import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/snack-icon.png')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Icon name="menu" size={30} color="white" />
          <Text style={styles.locationText}>Mountain View, CA 94043, USA</Text>
          <Icon name="location-outline" size={25} color="white" />
        </View>

        {/* Lock Screen and Toggle */}
        <View style={styles.lockScreenContainer}>
          <Text style={styles.lockText}>Lock screen</Text>
          <View style={styles.toggleContainer}>
            <View style={styles.toggleCircleOn}></View>
            <View style={styles.toggleCircleOff}></View>
          </View>
        </View>

        {/* Current Weather Information */}
        <View style={styles.weatherContainer}>
          <Text style={styles.dateText}>Mon Jul 15, 2024</Text>
          <Text style={styles.timeText}>07:11</Text>
          <View style={styles.temperatureContainer}>
            <Text style={styles.temperatureText}>16</Text>
            <Text style={styles.degreeText}>°C</Text>
          </View>
          <View style={styles.weatherDetailsContainer}>
            <Icon name="cloud-outline" size={25} color="white" />
            <Text style={styles.weatherConditionText}>overcast clouds</Text>
          </View>
        </View>

        {/* Weather Forecast */}
        <View style={styles.forecastContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[...Array(6)].map((_, index) => (
              <View key={index} style={styles.forecastItem}>
                <Text style={styles.forecastTimeText}>07:00 am</Text>
                <Icon name="cloud-outline" size={20} color="white" />
                <Text style={styles.forecastChanceText}>0%</Text>
                <Text style={styles.forecastTempText}>16°</Text>
              </View>
            ))}
          </ScrollView>
          <Text style={styles.forecastLabelText}>24 hours next</Text>
        </View>

        {/* More Details */}
        <TouchableOpacity>
          <Text style={styles.moreDetailsText}>more details</Text>
        </TouchableOpacity>

        {/* Weekly Forecast */}
        <View style={styles.weeklyForecastContainer}>
          <Text style={styles.weeklyForecastLabel}>Touch a day to see forecast by hourly</Text>
          <View style={styles.daysContainer}>
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, index) => (
              <View key={index} style={styles.dayItem}>
                <Text style={styles.dayText}>{day}</Text>
                <Icon name="sunny-outline" size={25} color="yellow" />
                <Text style={styles.chanceText}>0%</Text>
                <Text style={styles.tempText}>29°</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationText: {
    color: 'white',
    fontSize: 16,
  },
  lockScreenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  lockText: {
    color: 'white',
    fontSize: 14,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleCircleOn: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    marginRight: 5,
  },
  toggleCircleOff: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
  },
  weatherContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  dateText: {
    color: 'white',
    fontSize: 14,
  },
  timeText: {
    color: 'white',
    fontSize: 24,
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureText: {
    color: 'white',
    fontSize: 72,
  },
  degreeText: {
    color: 'white',
    fontSize: 20,
  },
  weatherDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherConditionText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 5,
  },
  forecastContainer: {
    marginVertical: 16,
  },
  forecastItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  forecastTimeText: {
    color: 'white',
    fontSize: 12,
  },
  forecastChanceText: {
    color: 'white',
    fontSize: 12,
  },
  forecastTempText: {
    color: 'white',
    fontSize: 12,
  },
  forecastLabelText: {
    color: 'white',
    fontSize: 14,
    marginTop: 8,
  },
  moreDetailsText: {
    color: 'yellow',
    fontSize: 14,
    textAlign: 'right',
    marginBottom: 16,
  },
  weeklyForecastContainer: {
    marginBottom: 16,
  },
  weeklyForecastLabel: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  dayItem: {
    alignItems: 'center',
  },
  dayText: {
    color: 'white',
    fontSize: 12,
  },
  chanceText: {
    color: 'white',
    fontSize: 12,
  },
  tempText: {
    color: 'white',
    fontSize: 14,
  },
});

export default HomeScreen;