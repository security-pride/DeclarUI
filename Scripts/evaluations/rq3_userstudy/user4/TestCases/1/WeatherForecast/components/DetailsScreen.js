import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const WeatherDetails = () => {
const navigation = useNavigation();
const handleBackPress = () => {
navigation.navigate('Home');
};
const renderWeatherHour = (time, date, temp, icon, condition, details) => (
<View style={styles.hourContainer}>
<View style={styles.hourHeader}>
<Text style={styles.timeText}>{time}</Text>
<Text style={styles.dateText}>{date}</Text>
<Text style={styles.tempText}>{temp}°C</Text>
<Icon name={icon} size={24} color="white" />
<Text style={styles.conditionText}>{condition}</Text>
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
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" />
<View style={styles.header}>
<TouchableOpacity onPress={handleBackPress}>
<Icon name="arrow-left" size={24} color="white" />
</TouchableOpacity>
<Text style={styles.headerTitle}>1600 Charleston Rd, Mountain Vie...</Text>
<Text style={styles.headerSubtitle}>Hourly weather</Text>
</View>
<ScrollView>
{renderWeatherHour(
"07:00 AM",
"Jul 15, 2024",
"16",
"weather-cloudy",
"overcast clouds",
[
"Precipitation 0 mm",
"Humidity 81%",
"Wind chill 16",
"Dew point 13",
"Cloud cover 100%",
"Pressure 30 inHg",
"Moon phases Waxing gibbous",
"Ultraviolet index 0",
"Wind speed 5 km/h",
"Wind direction West North West"
]
)}
{renderWeatherHour(
"08:00 AM",
"Jul 15, 2024",
"16",
"weather-partly-cloudy",
"broken clouds",
[
"Precipitation 0 mm",
"Humidity 80%",
"Wind chill 16",
"Dew point 12",
"Cloud cover 81%",
"Pressure 30 inHg",
"Moon phases Waxing gibbous",
"Ultraviolet index 0",
"Wind speed 5 km/h",
"Wind direction West North West"
]
)}
{renderWeatherHour(
"09:00 AM",
"Jul 15, 2024",
"16",
"weather-partly-cloudy",
"broken clouds",
[
"Precipitation 0 mm",
"Humidity 79%",
"Wind chill 16",
"Dew point 12",
"Cloud cover 63%",
"Pressure 30 inHg",
"Moon phases Waxing gibbous",
"Ultraviolet index 0",
"Wind speed 4 km/h",
"Wind direction West North West"
]
)}
</ScrollView>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#0a2d3d',
},
header: {
padding: 16,
paddingTop: StatusBar.currentHeight + 16,
},
headerTitle: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center'
},
headerSubtitle: {
color: 'white',
fontSize: 14,
textAlign: 'center'
},
hourContainer: {
borderBottomWidth: 1,
borderBottomColor: '#1e4559',
padding: 16,
},
hourHeader: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
marginBottom: 8,
},
timeText: {
color: 'white',
fontSize: 16,
fontWeight: 'bold',
},
dateText: {
color: 'white',
fontSize: 14,
},
tempText: {
color: 'white',
fontSize: 24,
fontWeight: 'bold',
},
conditionText: {
color: 'white',
fontSize: 14,
},
detailsContainer: {
marginTop: 8,
},
detailText: {
color: 'white',
fontSize: 14,
marginBottom: 4,
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
export default WeatherDetails;