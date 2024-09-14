import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch, StatusBar, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Home = () => {
const [isLockScreenEnabled, setIsLockScreenEnabled] = useState(false);
const navigation = useNavigation();
const handleSettingsPress = () => {
navigation.navigate('Setting');
};
const handleLocationPress = () => {
navigation.navigate('EditLocation');
};
const handleMoreDetailsPress = () => {
navigation.navigate('Details');
};
const renderHourlyForecast = () => {
const hours = ['07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00'];
return hours.map((hour, index) => (
<View key={index} style={styles.hourlyForecast}>
<Text style={styles.hourText}>{hour}</Text>
<Icon name="weather-cloudy" size={24} color="white" />
<Text style={styles.tempText}>16°</Text>
<Text style={styles.precipText}>0%</Text>
</View>
));
};
const renderDailyForecast = () => {
const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const temps = [29, 28, 31, 31, 31, 27, 27];
return days.map((day, index) => (
<TouchableOpacity key={index} style={styles.dayButton}>
<Text style={styles.dayText}>{day}</Text>
<Icon name="weather-sunny" size={24} color="white" />
<Text style={styles.precipText}>0%</Text>
<Text style={styles.tempText}>{temps[index]}°</Text>
</TouchableOpacity>
));
};
return (
<ImageBackground source={require('../assets/snack-icon.png')} style={styles.container}>
<StatusBar barStyle="light-content" />
<View style={styles.header}>
<TouchableOpacity onPress={handleSettingsPress}>
<Icon name="menu" size={24} color="white" />
</TouchableOpacity>
<Text style={styles.locationText}>Mountain View, CA 94043, USA</Text>
<TouchableOpacity onPress={handleLocationPress}>
<Icon name="map-marker" size={24} color="white" />
</TouchableOpacity>
</View>
<View style={styles.lockScreenContainer}>
<Icon name="lock" size={24} color="white" />
<Text style={styles.lockScreenText}>Lock screen</Text>
<Switch
value={isLockScreenEnabled}
onValueChange={setIsLockScreenEnabled}
trackColor={{ false: "#767577", true: "#81b0ff" }}
thumbColor={isLockScreenEnabled ? "#f5dd4b" : "#f4f3f4"}
/>
</View>
<View style={styles.currentWeather}>
<Text style={styles.dateText}>Mon Jul 15, 2024</Text>
<Text style={styles.timeText}>07:11</Text>
<Text style={styles.tempLargeText}>16°C</Text>
<Text style={styles.weatherCondition}>overcast clouds</Text>
<Text style={styles.minMaxTemp}>Max: 29° Min: 15°</Text>
<Text style={styles.windInfo}>Wind: North North East 11 km/h</Text>
</View>
<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.hourlyContainer}>
<Text style={styles.forecastTitle}>24 hours next</Text>
{renderHourlyForecast()}
</ScrollView>
<TouchableOpacity onPress={handleMoreDetailsPress} style={styles.moreDetailsButton}>
<Text style={styles.moreDetailsText}>more details</Text>
</TouchableOpacity>
<View style={styles.precipitationInfo}>
<Icon name="weather-rainy" size={16} color="white" />
<Text style={styles.precipInfoText}>Chance of rain</Text>
<Icon name="weather-snowy" size={16} color="white" />
<Text style={styles.precipInfoText}>Chance of snow</Text>
</View>
<Text style={styles.touchDayText}>Touch a day to see forecast by hourly</Text>
<View style={styles.dailyForecastContainer}>
{renderDailyForecast()}
</View>
</ImageBackground>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'rgba(0,0,0,0.5)',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
},
locationText: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
lockScreenContainer: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
padding: 16,
backgroundColor: 'rgba(255,255,255,0.1)',
},
lockScreenText: {
color: 'white',
fontSize: 16,
},
currentWeather: {
alignItems: 'center',
padding: 16,
},
dateText: {
color: 'white',
fontSize: 18,
},
timeText: {
color: 'white',
fontSize: 48,
fontWeight: 'bold',
},
tempLargeText: {
color: 'white',
fontSize: 72,
fontWeight: 'bold',
},
weatherCondition: {
color: 'white',
fontSize: 18,
},
minMaxTemp: {
color: 'white',
fontSize: 16,
},
windInfo: {
color: 'white',
fontSize: 16,
},
hourlyContainer: {
paddingVertical: 16,
},
forecastTitle: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
marginLeft: 16,
},
hourlyForecast: {
alignItems: 'center',
marginHorizontal: 16,
},
hourText: {
color: 'white',
fontSize: 14,
},
tempText: {
color: 'white',
fontSize: 16,
fontWeight: 'bold',
},
precipText: {
color: 'white',
fontSize: 14,
},
moreDetailsButton: {
alignSelf: 'flex-end',
padding: 16,
},
moreDetailsText: {
color: 'yellow',
fontSize: 16,
},
precipitationInfo: {
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
padding: 16,
},
precipInfoText: {
color: 'white',
fontSize: 14,
marginHorizontal: 8,
},
touchDayText: {
color: 'white',
fontSize: 14,
textAlign: 'center',
padding: 16,
},
dailyForecastContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 16,
},
dayButton: {
alignItems: 'center',
},
dayText: {
color: 'white',
fontSize: 14,
fontWeight: 'bold',
},
});
export default Home;