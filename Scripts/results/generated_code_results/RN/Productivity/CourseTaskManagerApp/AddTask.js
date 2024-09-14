import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const AddTaskScreen = () => {
const navigation = useNavigation();
const [category, setCategory] = useState('');
const [topic, setTopic] = useState('');
const [date, setDate] = useState('Fri 25 September, 2020');
const [time, setTime] = useState('09:30 AM');
const handleAddTask = () => {
// Add task logic here
console.log('Task added');
navigation.navigate('Home');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.greeting}>Hello Liana</Text>
<Text style={styles.title}>Add a task</Text>
<Image
source={require('../assets/snack-icon.png')}
style={styles.profilePic}
/>
</View>
  <Text style={styles.categoryLabel}>Category</Text>
  <View style={styles.categoryButtons}>
    <TouchableOpacity
      style={[styles.categoryButton, category === 'Class' && styles.selectedCategory]}
      onPress={() => setCategory('Class')}
    >
      <Text style={styles.categoryButtonText}>Class</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.categoryButton, category === 'Exam' && styles.selectedCategory]}
      onPress={() => setCategory('Exam')}
    >
      <Text style={styles.categoryButtonText}>Exam</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.categoryButton, category === 'Lab' && styles.selectedCategory]}
      onPress={() => setCategory('Lab')}
    >
      <Text style={styles.categoryButtonText}>Lab</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.categoryButton, category === 'Assignment' && styles.selectedCategory]}
      onPress={() => setCategory('Assignment')}
    >
      <Text style={styles.categoryButtonText}>Assignment</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.categoryButton, category === 'Presentation' && styles.selectedCategory]}
      onPress={() => setCategory('Presentation')}
    >
      <Text style={styles.categoryButtonText}>Presentation</Text>
    </TouchableOpacity>
  </View>

  <Text style={styles.subjectLabel}>Biology</Text>
  <TextInput
    style={styles.input}
    placeholder="Topic / Chapter Name"
    value={topic}
    onChangeText={setTopic}
  />

  <View style={styles.dateTimeContainer}>
    <View style={styles.dateContainer}>
      <Image
        source={require('../assets/snack-icon.png')}
        style={styles.icon}
      />
      <Text style={styles.dateTimeText}>{date}</Text>
    </View>
    <View style={styles.timeContainer}>
      <Image
        source={require('../assets/snack-icon.png')}
        style={styles.icon}
      />
      <Text style={styles.dateTimeText}>{time}</Text>
    </View>
  </View>

  <TouchableOpacity style={styles.addTaskButton} onPress={handleAddTask}>
    <Text style={styles.addTaskButtonText}>Add Task</Text>
  </TouchableOpacity>

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image
        source={require('../assets/snack-icon.png')}
        style={styles.navIcon}
      />
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
padding: 16,
backgroundColor: '#fff',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 20,
},
greeting: {
fontSize: 16,
},
title: {
fontSize: 20,
fontWeight: 'bold',
},
profilePic: {
width: 40,
height: 40,
borderRadius: 20,
},
categoryLabel: {
fontSize: 16,
marginBottom: 10,
},
categoryButtons: {
flexDirection: 'row',
flexWrap: 'wrap',
marginBottom: 20,
},
categoryButton: {
paddingHorizontal: 15,
paddingVertical: 10,
borderRadius: 20,
marginRight: 10,
marginBottom: 10,
backgroundColor: '#f0f0f0',
},
selectedCategory: {
backgroundColor: '#007AFF',
},
categoryButtonText: {
color: '#000',
},
subjectLabel: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
},
input: {
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 5,
padding: 10,
marginBottom: 20,
},
dateTimeContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 20,
},
dateContainer: {
flexDirection: 'row',
alignItems: 'center',
},
timeContainer: {
flexDirection: 'row',
alignItems: 'center',
},
icon: {
width: 20,
height: 20,
marginRight: 5,
},
dateTimeText: {
fontSize: 16,
},
addTaskButton: {
backgroundColor: '#007AFF',
padding: 15,
borderRadius: 5,
alignItems: 'center',
},
addTaskButtonText: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
position: 'absolute',
bottom: 0,
left: 0,
right: 0,
backgroundColor: '#fff',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#ccc',
},
navIcon: {
width: 24,
height: 24,
},
});
export default AddTaskScreen;