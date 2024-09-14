import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LineChart, BarChart } from 'react-native-chart-kit';
const StatisticsScreen = () => {
const navigation = useNavigation();
const priorityData = {
labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
datasets: [
{
data: [4, 6, 6, 10, 6, 4, 8],
color: (opacity = 1) => rgba(255, 0, 0, ${opacity}),
strokeWidth: 2
},
{
data: [2, 2, 8, 2, 4, 8, 6],
color: (opacity = 1) => rgba(0, 0, 255, ${opacity}),
strokeWidth: 2
},
{
data: [8, 8, 2, 4, 2, 10, 6],
color: (opacity = 1) => rgba(0, 255, 0, ${opacity}),
strokeWidth: 2
}
],
legend: ['Personal', 'Private', 'Secret']
};
const activityData = {
labels: ['1', '2', '3', '4', '5', '6', '7'],
datasets: [
{
data: [2, 3, 1, 4, 2, 3, 2],
},
],
};
return (
<ScrollView style={styles.container}>
<Text style={styles.header}>Graphic</Text>
  <View style={styles.chartContainer}>
    <Text style={styles.chartTitle}>Priority</Text>
    <Text style={styles.chartSubtitle}>Task Perday</Text>
    <LineChart
      data={priorityData}
      width={350}
      height={220}
      chartConfig={{
        backgroundColor: '#ffffff',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  </View>

  <View style={styles.chartContainer}>
    <Text style={styles.chartTitle}>Your Activity</Text>
    <View style={styles.monthSelector}>
      <TouchableOpacity>
        <Text style={styles.arrowButton}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.monthYear}>April 2021</Text>
      <TouchableOpacity>
        <Text style={styles.arrowButton}>{'>'}</Text>
      </TouchableOpacity>
    </View>
    <BarChart
      data={activityData}
      width={350}
      height={220}
      yAxisLabel=""
      chartConfig={{
        backgroundColor: '#ffffff',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(74, 55, 128, ${opacity})`,
        style: {
          borderRadius: 16,
        },
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
      <Text>Calendar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddTask')}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text>Chart</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Text>Profile</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#F5F5F5',
},
header: {
fontSize: 24,
fontWeight: 'bold',
textAlign: 'center',
marginVertical: 20,
},
chartContainer: {
backgroundColor: '#FFFFFF',
borderRadius: 16,
padding: 16,
marginHorizontal: 16,
marginBottom: 20,
},
chartTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 5,
},
chartSubtitle: {
fontSize: 14,
color: '#888888',
marginBottom: 10,
},
monthSelector: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 10,
},
arrowButton: {
fontSize: 20,
fontWeight: 'bold',
color: '#4A3780',
},
monthYear: {
fontSize: 16,
fontWeight: 'bold',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
backgroundColor: '#FFFFFF',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#EEEEEE',
},
addButton: {
backgroundColor: '#4A3780',
width: 50,
height: 50,
borderRadius: 25,
justifyContent: 'center',
alignItems: 'center',
},
addButtonText: {
color: '#FFFFFF',
fontSize: 24,
fontWeight: 'bold',
},
});
export default StatisticsScreen;