import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          1600 Charleston Rd, Mountain View...
        </Text>
        <Text style={styles.subHeaderText}>Hourly weather</Text>
      </View>
      {weatherData.map((item, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.timeText}>{item.time}</Text>
            <Text style={styles.dateText}>{item.date}</Text>
            <Image
              source={require('../assets/snack-icon.png')}
              style={styles.icon}
            />
            <Text style={styles.tempText}>{item.temperature}°C</Text>
            <Image
              source={require('../assets/snack-icon.png')}
              style={styles.cloudIcon}
            />
            <Text style={styles.cloudsText}>{item.clouds}</Text>
          </View>
          <View style={styles.detailsRow}>
            <View style={styles.detailsColumn}>
              {item.leftDetails.map((detail, i) => (
                <Text key={i} style={styles.detailText}>{detail}</Text>
              ))}
            </View>
            <View style={styles.detailsColumn}>
              {item.rightDetails.map((detail, i) => (
                <Text key={i} style={styles.detailText}>{detail}</Text>
              ))}
              <TouchableOpacity>
                <Text style={styles.detailsLink}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const weatherData = [
  {
    time: "07:00 AM",
    date: "Jul 15, 2024",
    temperature: 16,
    clouds: "overcast clouds",
    leftDetails: [
      "Precipitation 0 mm",
      "Wind chill 16",
      "Cloud cover 100%",
      "Moon phases Waxing gibbous",
      "Wind speed 5 km/h"
    ],
    rightDetails: [
      "Humidity 81%",
      "Dew point 13",
      "Pressure 30 inHg",
      "Ultraviolet index 0",
      "Wind direction West North West"
    ]
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  },
  header: {
    padding: 16,
    backgroundColor: '#002b36',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  subHeaderText: {
    color: '#fff',
    fontSize: 14
  },
  card: {
    backgroundColor: '#004d60',
    margin: 8,
    borderRadius: 8,
    padding: 12
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  timeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  dateText: {
    color: '#fff',
    fontSize: 14
  },
  icon: {
    width: 24,
    height: 24
  },
  tempText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold'
  },
  cloudIcon: {
    width: 24,
    height: 24
  },
  cloudsText: {
    color: '#fff',
    fontSize: 14
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  detailsColumn: {
    flex: 1,
    paddingHorizontal: 8
  },
  detailText: {
    color: '#eee',
    fontSize: 14,
    marginBottom: 4
  },
  detailsLink: {
    color: '#f0a500',
    fontSize: 14,
    marginTop: 8
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#002b36',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navText: {
    color: '#f0a500',
    fontSize: 16
  }
});

export default DetailsScreen;