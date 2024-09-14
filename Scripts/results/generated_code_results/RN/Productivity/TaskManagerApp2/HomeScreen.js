import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
const navigation = useNavigation();
const TaskCard = ({ title, count, color, icon }) => (
<View style={[styles.taskCard, { backgroundColor: color }]}>
<Image source={require('../assets/snack-icon.png')} style={styles.taskIcon} />
<Text style={styles.taskCardTitle}>{title}</Text>
<Text style={styles.taskCardCount}>{count}</Text>
<TouchableOpacity style={styles.taskCardArrow}>
<Text style={styles.arrowText}>→</Text>
</TouchableOpacity>
</View>
);
const navigateToHome = () => {
navigation.navigate('Home');
};
return (
<View style={styles.container}>
<ScrollView>
<View style={styles.header}>
<View>
<Text style={styles.greeting}>Hi, Steven</Text>
<Text style={styles.subtitle}>Let's make this day productive</Text>
</View>
<TouchableOpacity onPress={navigateToHome}>
<Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
</TouchableOpacity>
</View>
    <Text style={styles.sectionTitle}>My Task</Text>

    <View style={styles.taskGrid}>
      <TaskCard title="Complete" count="86" color="#E7F3FF" icon="complete" />
      <TaskCard title="Pending" count="15" color="#E7E2FF" icon="pending" />
      <TaskCard title="Canceled" count="15" color="#FFE9E9" icon="canceled" />
      <TaskCard title="On Going" count="67" color="#E7FFE9" icon="ongoing" />
    </View>

    <View style={styles.todayTaskHeader}>
      <Text style={styles.todayTaskTitle}>Today Task</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
        <Text style={styles.viewAllText}>View all</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.taskItem}>
      <View style={styles.taskItemLeft}>
        <View style={styles.taskItemIndicator} />
        <View>
          <Text style={styles.taskItemTitle}>Cleaning Clothes</Text>
          <Text style={styles.taskItemTime}>07:00 - 07:15</Text>
        </View>
      </View>
      <View style={styles.taskItemTags}>
        <Text style={styles.tagUrgent}>Urgent</Text>
        <Text style={styles.tagHome}>Home</Text>
      </View>
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={navigateToHome}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Calendar')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddTask')}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Statistics')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
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
padding: 20,
},
greeting: {
fontSize: 24,
fontWeight: 'bold',
},
subtitle: {
fontSize: 14,
color: '#888888',
},
avatar: {
width: 50,
height: 50,
borderRadius: 25,
},
sectionTitle: {
fontSize: 20,
fontWeight: 'bold',
marginLeft: 20,
marginTop: 20,
},
taskGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
padding: 20,
},
taskCard: {
width: '48%',
padding: 15,
borderRadius: 10,
marginBottom: 15,
},
taskIcon: {
width: 30,
height: 30,
marginBottom: 10,
},
taskCardTitle: {
fontSize: 16,
fontWeight: 'bold',
},
taskCardCount: {
fontSize: 24,
fontWeight: 'bold',
marginTop: 5,
},
taskCardArrow: {
position: 'absolute',
right: 10,
bottom: 10,
},
arrowText: {
fontSize: 20,
color: '#000000',
},
todayTaskHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
marginTop: 20,
},
todayTaskTitle: {
fontSize: 20,
fontWeight: 'bold',
},
viewAllText: {
color: '#4A3780',
},
taskItem: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 20,
borderBottomWidth: 1,
borderBottomColor: '#EEEEEE',
},
taskItemLeft: {
flexDirection: 'row',
alignItems: 'center',
},
taskItemIndicator: {
width: 3,
height: 40,
backgroundColor: '#4A3780',
marginRight: 15,
},
taskItemTitle: {
fontSize: 16,
fontWeight: 'bold',
},
taskItemTime: {
fontSize: 14,
color: '#888888',
},
taskItemTags: {
flexDirection: 'row',
},
tagUrgent: {
backgroundColor: '#FFE9E9',
color: '#FF0000',
padding: 5,
borderRadius: 5,
marginRight: 5,
},
tagHome: {
backgroundColor: '#E7F3FF',
color: '#4A3780',
padding: 5,
borderRadius: 5,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
borderTopWidth: 1,
borderTopColor: '#EEEEEE',
paddingVertical: 10,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
navText: {
fontSize: 12,
marginTop: 5,
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
export default HomeScreen;