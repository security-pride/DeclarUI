import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const AddTaskScreen = () => {
const navigation = useNavigation();
const [title, setTitle] = useState('Plan for a month');
const [date, setDate] = useState('4 August 2021');
const [startTime, setStartTime] = useState('07:00');
const [endTime, setEndTime] = useState('07:30');
const [description, setDescription] = useState("Creating this month's work plan");
const [taskType, setTaskType] = useState('Personal');
const [tags, setTags] = useState(['Office', 'Home', 'Urgent', 'Work']);
const handleCreateTask = () => {
// Logic to create task
navigation.navigate('Home');
};
const handleAddNewTag = () => {
// Logic to add a new tag
navigation.navigate('AddTask');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>Add Task</Text>
</View>
  <View style={styles.form}>
    <Text style={styles.label}>Title</Text>
    <TextInput
      style={styles.input}
      value={title}
      onChangeText={setTitle}
    />

    <Text style={styles.label}>Date</Text>
    <View style={styles.dateContainer}>
      <Text style={styles.dateText}>{date}</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.calendarIcon} />
    </View>

    <Text style={styles.label}>Time</Text>
    <View style={styles.timeContainer}>
      <Text style={styles.timeText}>{startTime} AM</Text>
      <Text style={styles.timeText}>{endTime} AM</Text>
    </View>

    <Text style={styles.label}>Description</Text>
    <TextInput
      style={[styles.input, styles.descriptionInput]}
      value={description}
      onChangeText={setDescription}
      multiline
    />

    <Text style={styles.label}>Type</Text>
    <View style={styles.typeContainer}>
      {['Personal', 'Private', 'Secret'].map((type) => (
        <TouchableOpacity
          key={type}
          style={[styles.typeButton, taskType === type && styles.selectedTypeButton]}
          onPress={() => setTaskType(type)}
        >
          <Text style={styles.typeButtonText}>{type}</Text>
        </TouchableOpacity>
      ))}
    </View>

    <Text style={styles.label}>Tags</Text>
    <View style={styles.tagsContainer}>
      {tags.map((tag) => (
        <TouchableOpacity key={tag} style={styles.tagButton}>
          <Text style={styles.tagButtonText}>{tag}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.addTagButton} onPress={handleAddNewTag}>
        <Text style={styles.addTagButtonText}>+ Add new tag</Text>
      </TouchableOpacity>
    </View>
  </View>

  <TouchableOpacity style={styles.createButton} onPress={handleCreateTask}>
    <Text style={styles.createButtonText}>Create</Text>
  </TouchableOpacity>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
},
backButton: {
padding: 8,
},
backIcon: {
width: 24,
height: 24,
},
headerTitle: {
fontSize: 20,
fontWeight: 'bold',
marginLeft: 16,
},
form: {
padding: 16,
},
label: {
fontSize: 16,
fontWeight: 'bold',
marginTop: 16,
marginBottom: 8,
},
input: {
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 8,
padding: 8,
fontSize: 16,
},
dateContainer: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 8,
padding: 8,
},
dateText: {
fontSize: 16,
},
calendarIcon: {
width: 24,
height: 24,
},
timeContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
},
timeText: {
fontSize: 16,
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 8,
padding: 8,
},
descriptionInput: {
height: 100,
textAlignVertical: 'top',
},
typeContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
},
typeButton: {
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 8,
padding: 8,
flex: 1,
marginHorizontal: 4,
alignItems: 'center',
},
selectedTypeButton: {
backgroundColor: '#007AFF',
borderColor: '#007AFF',
},
typeButtonText: {
fontSize: 14,
},
tagsContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
},
tagButton: {
backgroundColor: '#E0E0E0',
borderRadius: 16,
paddingVertical: 4,
paddingHorizontal: 12,
margin: 4,
},
tagButtonText: {
fontSize: 14,
},
addTagButton: {
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 16,
paddingVertical: 4,
paddingHorizontal: 12,
margin: 4,
},
addTagButtonText: {
fontSize: 14,
color: '#007AFF',
},
createButton: {
backgroundColor: '#007AFF',
borderRadius: 8,
padding: 16,
margin: 16,
alignItems: 'center',
},
createButtonText: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
});
export default AddTaskScreen;