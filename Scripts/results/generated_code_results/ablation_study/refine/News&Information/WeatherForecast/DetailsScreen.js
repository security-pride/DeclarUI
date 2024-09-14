import React from 'react';

import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const WeatherHourItem = ({ time, date, temperature, precipitation, condition, details }) => (

  <View style={styles.hourItem}>

    <View style={styles.hourHeader}>

      <View>

        <Text style={styles.timeText}>{time}</Text>

        <Text style={styles.dateText}>{date}</Text>

        <Text style={styles.precipText}>{precipitation}</Text>

      </View>

      <View style={styles.tempContainer}>

        <Text style={styles.tempText}>{temperature}°C</Text>

      </View>

      <View style={styles.conditionContainer}>

        <Icon name={condition === 'overcast clouds' ? 'weather-cloudy' : 'weather-partly-cloudy'} size={24} color="#fff" />

        <Text style={styles.conditionText}>{condition}</Text>

      </View>

    </View>

    <View style={styles.detailsContainer}>

      {details.map((detail, index) => (

        <Text key={index} style={styles.detailText}>{detail}</Text>

      ))}

    </View>

    <TouchableOpacity style={styles.detailsButton}>

      <Text style={styles.detailsButtonText}>Details</Text>

    </TouchableOpacity>

  </View>

);



const DetailsScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <StatusBar barStyle="light-content" />

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-left" size={24} color="#fff" />

        </TouchableOpacity>

        <View style={styles.headerTextContainer}>

          <Text style={styles.headerTitle}>1600 Charleston Rd, Mountain Vie...</Text>

          <Text style={styles.headerSubtitle}>Hourly weather</Text>

        </View>

      </View>

      <ScrollView style={styles.scrollView}>

        <WeatherHourItem

          time="07:00 AM"

          date="Jul 15, 2024"

          temperature="16"

          precipitation="0%"

          condition="overcast clouds"

          details={[

            "Precipitation 0 mm",

            "Wind chill 16",

            "Cloud cover 100%",

            "Moon phases Waxing gibbous",

            "Wind speed 5 km/h",

            "Humidity 81%",

            "Dew point 13",

            "Pressure 30 inHg",

            "Ultraviolet index 0",

            "Wind direction West North West"

          ]}

        />

        <WeatherHourItem

          time="08:00 AM"

          date="Jul 15, 2024"

          temperature="16"

          precipitation="0%"

          condition="broken clouds"

          details={[

            "Precipitation 0 mm",

            "Wind chill 16",

            "Cloud cover 81%",

            "Moon phases Waxing gibbous",

            "Wind speed 5 km/h",

            "Humidity 80%",

            "Dew point 12",

            "Pressure 30 inHg",

            "Ultraviolet index 0",

            "Wind direction West North West"

          ]}

        />

        <WeatherHourItem

          time="09:00 AM"

          date="Jul 15, 2024"

          temperature="16"

          precipitation="0%"

          condition="broken clouds"

          details={[

            "Precipitation 0 mm",

            "Wind chill 16",

            "Cloud cover 63%",

            "Moon phases Waxing gibbous",

            "Wind speed 4 km/h",

            "Humidity 79%",

            "Dew point 12",

            "Pressure 30 inHg",

            "Ultraviolet index 0",

            "Wind direction West North West"

          ]}

        />

      </ScrollView>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#0c3a5c',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    paddingTop: StatusBar.currentHeight + 16,

  },

  headerTextContainer: {

    marginLeft: 16,

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#fff',

  },

  headerSubtitle: {

    fontSize: 14,

    color: '#ccc',

  },

  scrollView: {

    flex: 1,

  },

  hourItem: {

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#1c4a6c',

  },

  hourHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  timeText: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#fff',

  },

  dateText: {

    fontSize: 14,

    color: '#ccc',

  },

  precipText: {

    fontSize: 14,

    color: '#ccc',

  },

  tempContainer: {

    flex: 1,

    alignItems: 'center',

  },

  tempText: {

    fontSize: 32,

    fontWeight: 'bold',

    color: '#fff',

  },

  conditionContainer: {

    alignItems: 'flex-end',

  },

  conditionText: {

    fontSize: 14,

    color: '#ccc',

    marginTop: 4,

  },

  detailsContainer: {

    marginTop: 16,

  },

  detailText: {

    fontSize: 14,

    color: '#ccc',

    marginBottom: 4,

  },

  detailsButton: {

    alignSelf: 'flex-end',

    marginTop: 8,

  },

  detailsButtonText: {

    fontSize: 14,

    color: '#ffa500',

    fontWeight: 'bold',

  },

});



export default DetailsScreen;