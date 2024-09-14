import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const CalendarScreen = () => {
const navigation = useNavigation();
const renderCalendarDays = () => {
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const dates = [14, 15, 16, 17, 18, 19, 20];
return days.map((day, index) => (
  <View key={day} style={styles.calendarDay}>
    <Text style={styles.dayText}>{day}</Text>
    <Text style={[
      styles.dateText,
      index === 3 ? styles.selectedDate : null
    ]}>{dates[index]}</Text>
  </View>
));
};
const renderScheduleItem = (time, subject, details, instructor, platform) => (
<View style={styles.scheduleItem}>
<Text style={styles.scheduleTime}>{time}</Text>
<View style={styles.scheduleDetails}>
<Text style={styles.scheduleSubject}>{subject}</Text>
<Text style={styles.scheduleChapter}>{details}</Text>
<View style={styles.instructorPlatform}>
<Text style={styles.scheduleInstructor}>{instructor}</Text>
<Text style={styles.schedulePlatform}>{platform}</Text>
</View>
</View>
</View>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.dateHeader}>17 September</Text>
<Text style={styles.todayText}>Today</Text>
<TouchableOpacity
style={styles.addTaskButton}
onPress={() => navigation.navigate('AddTask')}
>
<Text style={styles.addTaskButtonText}>+ Add Task</Text>
</TouchableOpacity>
</View>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.calendar}>
    {renderCalendarDays()}
  </ScrollView>

  <ScrollView style={styles.scheduleContainer}>
    {renderScheduleItem('9:30', 'Physics', 'Chapter 3: Force', 'Alex Jesus', 'Google Meet')}
    {renderScheduleItem('11:00', 'Geography', 'Chapter 12: Soil Profile', 'Jennifer Clark', 'Zoom')}
    {renderScheduleItem('12:20', 'Assignment', 'World Regional Pattern', 'Alexia Tenorio', 'Google Docs')}
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.activeNavItem}>Tasks</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Classroom')}>
      <Text>Classroom</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
      <Text>Chat</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
},
dateHeader: {
fontSize: 16,
fontWeight: 'bold',
},
todayText: {
fontSize: 24,
fontWeight: 'bold',
},
addTaskButton: {
backgroundColor: '#4CAF50',
padding: 8,
borderRadius: 20,
},
addTaskButtonText: {
color: '#FFFFFF',
fontWeight: 'bold',
},
calendar: {
flexDirection: 'row',
paddingVertical: 16,
},
calendarDay: {
alignItems: 'center',
marginHorizontal: 8,
},
dayText: {
fontSize: 12,
color: '#888888',
},
dateText: {
fontSize: 16,
fontWeight: 'bold',
marginTop: 4,
},
selectedDate: {
backgroundColor: '#007AFF',
color: '#FFFFFF',
borderRadius: 20,
width: 36,
height: 36,
textAlign: 'center',
textAlignVertical: 'center',
},
scheduleContainer: {
flex: 1,
padding: 16,
},
scheduleItem: {
flexDirection: 'row',
marginBottom: 16,
},
scheduleTime: {
width: 50,
fontSize: 14,
color: '#888888',
},
scheduleDetails: {
flex: 1,
backgroundColor: '#E6E6FA',
borderRadius: 8,
padding: 12,
},
scheduleSubject: {
fontSize: 16,
fontWeight: 'bold',
},
scheduleChapter: {
fontSize: 14,
color: '#555555',
},
instructorPlatform: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 8,
},
scheduleInstructor: {
fontSize: 12,
color: '#888888',
},
schedulePlatform: {
fontSize: 12,
color: '#007AFF',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
paddingVertical: 16,
borderTopWidth: 1,
borderTopColor: '#EEEEEE',
},
activeNavItem: {
color: '#007AFF',
fontWeight: 'bold',
},
});
export default CalendarScreen;