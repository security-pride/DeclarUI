import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import DateTimePicker from '@react-native-community/datetimepicker';



const AddTaskScreen = () => {

  const navigation = useNavigation();

  const [title, setTitle] = useState('Plan for a month');

  const [date, setDate] = useState(new Date('2021-08-04'));

  const [startTime, setStartTime] = useState(new Date('2021-08-04T07:00:00'));

  const [endTime, setEndTime] = useState(new Date('2021-08-04T07:30:00'));

  const [description, setDescription] = useState('Creating this month\'s work plan');

  const [taskType, setTaskType] = useState('Personal');

  const [tags, setTags] = useState(['Office', 'Home', 'Urgent', 'Work']);



  const handleDateChange = (event, selectedDate) => {

    const currentDate = selectedDate || date;

    setDate(currentDate);

  };



  const handleStartTimeChange = (event, selectedTime) => {

    const currentTime = selectedTime || startTime;

    setStartTime(currentTime);

  };



  const handleEndTimeChange = (event, selectedTime) => {

    const currentTime = selectedTime || endTime;

    setEndTime(currentTime);

  };



  const handleTaskTypeChange = (type) => {

    setTaskType(type);

  };



  const handleAddTag = () => {

    // Implement logic to add a new tag

  };



  const handleCreateTask = () => {

    // Implement logic to create the task

    navigation.goBack();

  };



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="chevron-back" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Add Task</Text>

      </View>



      <View style={styles.inputContainer}>

        <Text style={styles.label}>Title</Text>

        <TextInput

          style={styles.input}

          value={title}

          onChangeText={setTitle}

          placeholder="Enter task title"

        />

      </View>



      <View style={styles.inputContainer}>

        <Text style={styles.label}>Date</Text>

        <DateTimePicker

          value={date}

          mode="date"

          display="default"

          onChange={handleDateChange}

        />

      </View>



      <View style={styles.inputContainer}>

        <Text style={styles.label}>Time</Text>

        <View style={styles.timeContainer}>

          <DateTimePicker

            value={startTime}

            mode="time"

            is24Hour={false}

            display="default"

            onChange={handleStartTimeChange}

          />

          <Text style={styles.timeSeparator}>-</Text>

          <DateTimePicker

            value={endTime}

            mode="time"

            is24Hour={false}

            display="default"

            onChange={handleEndTimeChange}

          />

        </View>

      </View>



      <View style={styles.inputContainer}>

        <Text style={styles.label}>Description</Text>

        <TextInput

          style={styles.input}

          value={description}

          onChangeText={setDescription}

          placeholder="Enter task description"

          multiline

        />

      </View>



      <View style={styles.inputContainer}>

        <Text style={styles.label}>Type</Text>

        <View style={styles.taskTypeContainer}>

          {['Personal', 'Private', 'Secret'].map((type) => (

            <TouchableOpacity

              key={type}

              style={[

                styles.taskTypeButton,

                taskType === type && styles.taskTypeButtonActive,

              ]}

              onPress={() => handleTaskTypeChange(type)}

            >

              <Text

                style={[

                  styles.taskTypeText,

                  taskType === type && styles.taskTypeTextActive,

                ]}

              >

                {type}

              </Text>

            </TouchableOpacity>

          ))}

        </View>

      </View>



      <View style={styles.inputContainer}>

        <Text style={styles.label}>Tags</Text>

        <View style={styles.tagsContainer}>

          {tags.map((tag, index) => (

            <View key={index} style={styles.tag}>

              <Text style={styles.tagText}>{tag}</Text>

            </View>

          ))}

          <TouchableOpacity style={styles.addTagButton} onPress={handleAddTag}>

            <Text style={styles.addTagText}>+ Add new tag</Text>

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

    padding: 20,

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 20,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    marginLeft: 20,

  },

  inputContainer: {

    marginBottom: 20,

  },

  label: {

    fontSize: 16,

    marginBottom: 5,

    color: '#666',

  },

  input: {

    borderWidth: 1,

    borderColor: '#ddd',

    borderRadius: 8,

    padding: 10,

    fontSize: 16,

  },

  timeContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  timeSeparator: {

    marginHorizontal: 10,

    fontSize: 18,

  },

  taskTypeContainer: {

    flexDirection: 'row',

  },

  taskTypeButton: {

    paddingVertical: 8,

    paddingHorizontal: 16,

    borderRadius: 20,

    marginRight: 10,

    borderWidth: 1,

    borderColor: '#ddd',

  },

  taskTypeButtonActive: {

    backgroundColor: '#4a3bf5',

    borderColor: '#4a3bf5',

  },

  taskTypeText: {

    color: '#666',

  },

  taskTypeTextActive: {

    color: '#fff',

  },

  tagsContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

  },

  tag: {

    backgroundColor: '#f0f0f0',

    borderRadius: 16,

    paddingVertical: 6,

    paddingHorizontal: 12,

    marginRight: 8,

    marginBottom: 8,

  },

  tagText: {

    color: '#666',

  },

  addTagButton: {

    borderWidth: 1,

    borderColor: '#ddd',

    borderRadius: 16,

    paddingVertical: 6,

    paddingHorizontal: 12,

  },

  addTagText: {

    color: '#666',

  },

  createButton: {

    backgroundColor: '#4a3bf5',

    borderRadius: 8,

    paddingVertical: 12,

    alignItems: 'center',

    marginTop: 20,

  },

  createButtonText: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

});



export default AddTaskScreen;