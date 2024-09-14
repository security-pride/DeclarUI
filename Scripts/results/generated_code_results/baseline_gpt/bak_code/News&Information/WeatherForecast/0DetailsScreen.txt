import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#fff" />
        <Text style={styles.headerText}>1600 Charleston Rd, Mountain View</Text>
      </View>
      
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Hourly weather</Text>
      </View>

      {data.map((item, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.timeRow}>
            <Text style={styles.time}>{item.time}</Text>
            <Image source={require('../assets/snack-icon.png')} style={styles.weatherIcon} />
          </View>
          
          <View style={styles.dateRow}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.rain}>{item.rainChance}</Text>
          </View>
          
          <View style={styles.temperatureRow}>
            <Text style={styles.temperature}>{item.temperature}</Text>
            <Text style={styles.clouds}>{item.clouds}</Text>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoColumn}>
              <Text style={styles.infoText}>Precipitation {item.precipitation}</Text>
              <Text style={styles.infoText}>Wind chill {item.windChill}</Text>
              <Text style={styles.infoText}>Cloud cover {item.cloudCover}</Text>
              <Text style={styles.infoText}>Moon phases {item.moonPhases}</Text>
              <Text style={styles.infoText}>Wind speed {item.windSpeed}</Text>
            </View>
            <View style={styles.infoColumn}>
              <Text style={styles.infoText}>Humidity {item.humidity}</Text>
              <Text style={styles.infoText}>Dew point {item.dewPoint}</Text>
              <Text style={styles.infoText}>Pressure {item.pressure}</Text>
              <Text style={styles.infoText}>Ultraviolet index {item.uvIndex}</Text>
              <Text style={styles.infoText}>Wind direction {item.windDirection}</Text>
            </View>
          </View>

          <Text style={styles.detailsLink}>Details</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const data = [
  {
    time: '07:00 AM',
    date: 'Jul 15, 2024',
    temperature: '16°C',
    clouds: 'overcast clouds',
    rainChance: '0%',
    precipitation: '0 mm',
    windChill: '16',
    cloudCover: '100%',
    moonPhases: 'Waxing gibbous',
    windSpeed: '5 km/h',
    humidity: '81%',
    dewPoint: '13',
    pressure: '30 inHg',
    uvIndex: '0',
    windDirection: 'West North West'
  },
  // Additional data entries here
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e4d71',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 16,
  },
  subHeader: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  subHeaderText: {
    color: '#fff',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#164675',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    color: '#fff',
    fontSize: 16,
  },
  weatherIcon: {
    width: 24,
    height: 24,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  date: {
    color: '#fff',
    fontSize: 14,
  },
  rain: {
    color: '#fff',
    fontSize: 14,
  },
  temperatureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  temperature: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  clouds: {
    color: '#fff',
    fontSize: 14,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  infoColumn: {
    flex: 1,
  },
  infoText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 4,
  },
  detailsLink: {
    color: '#e1a34c',
    textAlign: 'right',
    marginTop: 16,
  },
});

export default DetailsScreen;