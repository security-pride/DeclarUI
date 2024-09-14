import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const CalendarScreen = () => {
const navigation = useNavigation();
const [searchText, setSearchText] = useState('');
const [selectedDate, setSelectedDate] = useState(14);
const days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
const dates = [12, 13, 14, 15, 16, 17, 18];
const tasks = [
{ time: '07:00', title: 'Cleaning Clothes', duration: '07:00 - 07:15', tags: ['Urgent', 'Home'] },
{ time: '07:15', title: 'Cleaning', duration: '07:15 - 07:30', tags: ['Urgent'] },
{ time: '08:00', title: 'Cleaning Clothes', duration: '08:00 - 08:35', tags: ['Urgent', 'Home'] },
{ time: '08:00', title: 'Cleaning', duration: '08:00 - 08:15', tags: ['Urgent'] },
{ time: '10:00', title: 'Cleaning Clothes', duration: '10:00 - 10:30', tags: ['Urgent', 'Home'] },
];
const renderTask = (task) => (
<View key={${task.time}-${task.title}} style={styles.taskCard}>
<View style={styles.taskTimeContainer}>
<Text style={styles.taskTime}>{task.time}</Text>
</View>
<View style={styles.taskContent}>
<Text style={styles.taskTitle}>{task.title}</Text>
<Text style={styles.taskDuration}>{task.duration}</Text>
<View style={styles.tagContainer}>
{task.tags.map((tag) => (
<View key={tag} style={styles.tag}>
<Text style={styles.tagText}>{tag}</Text>
</View>
))}
</View>
</View>
</View>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<View style={styles.searchBar}>
<Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
<TextInput style={styles.searchInput} placeholder="Search for task" value={searchText} onChangeText={setSearchText} />
<TouchableOpacity onPress={() => setSearchText('')}>
<Image source={require('../assets/snack-icon.png')} style={styles.closeIcon} />
</TouchableOpacity>
</View>
<View style={styles.calendarHeader}>
<Text style={styles.taskTitle}>Task</Text>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.calendarIcon} />
</TouchableOpacity>
<Text style={styles.monthYear}>August 2021</Text>
</View>
</View>
  <View style={styles.weekView}>
    {days.map((day, index) => (
      <TouchableOpacity 
        key={day} 
        style={[styles.dayButton, selectedDate === dates[index] && styles.selectedDay]}
        onPress={() => setSelectedDate(dates[index])}
      >
        <Text style={[styles.dayText, selectedDate === dates[index] && styles.selectedDayText]}>{day}</Text>
        <Text style={[styles.dateText, selectedDate === dates[index] && styles.selectedDayText]}>{dates[index]}</Text>
      </TouchableOpacity>
    ))}
  </View>

  <View style={styles.todayHeader}>
    <Text style={styles.todayText}>Today</Text>
    <Text style={styles.todayDuration}>09 h 45 min</Text>
  </View>

  <ScrollView style={styles.taskList}>
    {tasks.map(renderTask)}
    <View style={styles.emptySlot}>
      <Text style={styles.emptySlotText}>You don't have any schedule or</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AddTask')}>
        <Text style={styles.addText}>+ Add</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('AddTask')} style={styles.addButton}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#F5F5F5',
},
header: {
backgroundColor: '#FFFFFF',
paddingTop: 40,
paddingHorizontal: 20,
paddingBottom: 10,
},
searchBar: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#F0F0F0',
borderRadius: 20,
paddingHorizontal: 10,
marginBottom: 10,
},
searchIcon: {
width: 20,
height: 20,
marginRight: 10,
},
searchInput: {
flex: 1,
height: 40,
},
closeIcon: {
width: 20,
height: 20,
},
calendarHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
},
taskTitle: {
fontSize: 24,
fontWeight: 'bold',
},
calendarIcon: {
width: 24,
height: 24,
},
monthYear: {
fontSize: 16,
},
weekView: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: '#FFFFFF',
paddingVertical: 10,
},
dayButton: {
alignItems: 'center',
padding: 5,
},
selectedDay: {
backgroundColor: '#4A3780',
borderRadius: 20,
paddingHorizontal: 10,
},
dayText: {
fontSize: 12,
},
dateText: {
fontSize: 16,
fontWeight: 'bold',
},
selectedDayText: {
color: '#FFFFFF',
},
todayHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
paddingHorizontal: 20,
paddingVertical: 10,
backgroundColor: '#FFFFFF',
marginTop: 10,
},
todayText: {
fontSize: 18,
fontWeight: 'bold',
},
todayDuration: {
fontSize: 14,
color: '#888888',
},
taskList: {
flex: 1,
},
taskCard: {
flexDirection: 'row',
backgroundColor: '#FFFFFF',
marginHorizontal: 20,
marginVertical: 5,
borderRadius: 10,
overflow: 'hidden',
},
taskTimeContainer: {
backgroundColor: '#4A3780',
padding: 10,
justifyContent: 'center',
alignItems: 'center',
width: 60,
},
taskTime: {
color: '#FFFFFF',
fontWeight: 'bold',
},
taskContent: {
flex: 1,
padding: 10,
},
taskTitle: {
fontSize: 16,
fontWeight: 'bold',
},
taskDuration: {
fontSize: 12,
color: '#888888',
},
tagContainer: {
flexDirection: 'row',
marginTop: 5,
},
tag: {
backgroundColor: '#E0E0E0',
borderRadius: 10,
paddingHorizontal: 8,
paddingVertical: 2,
marginRight: 5,
},
tagText: {
fontSize: 10,
},
emptySlot: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
paddingVertical: 10,
},
emptySlotText: {
color: '#888888',
},
addText: {
color: '#4A3780',
fontWeight: 'bold',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
backgroundColor: '#FFFFFF',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
},
navIcon: {
width: 24,
height: 24,
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
export default CalendarScreen;