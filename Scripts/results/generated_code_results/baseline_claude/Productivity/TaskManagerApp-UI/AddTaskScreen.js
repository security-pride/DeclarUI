import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import DateTimePicker from '@react-native-community/datetimepicker';



const AddTaskScreen = () => {

  const navigation = useNavigation();

  const [taskName, setTaskName] = useState('');

  const [description, setDescription] = useState('');

  const [date, setDate] = useState(new Date('2020-05-01'));

  const [startTime, setStartTime] = useState(new Date('2020-05-01T10:00:00'));

  const [endTime, setEndTime] = useState(new Date('2020-05-01T13:00:00'));

  const [showDatePicker, setShowDatePicker] = useState(false);

  const [showStartTimePicker, setShowStartTimePicker] = useState(false);

  const [showEndTimePicker, setShowEndTimePicker] = useState(false);



  const teamMembers = [

    { id: 1, name: 'John', image: require('../assets/snack-icon.png') },

    { id: 2, name: 'Ranak', image: require('../assets/snack-icon.png') },

    { id: 3, name: 'Parkao', image: require('../assets/snack-icon.png') },

    { id: 4, name: 'Mahmud', image: require('../assets/snack-icon.png') },

  ];



  const [selectedMember, setSelectedMember] = useState(3);

  const [selectedBoard, setSelectedBoard] = useState('RUNNING');



  const onDateChange = (event, selectedDate) => {

    const currentDate = selectedDate || date;

    setShowDatePicker(false);

    setDate(currentDate);

  };



  const onStartTimeChange = (event, selectedTime) => {

    const currentTime = selectedTime || startTime;

    setShowStartTimePicker(false);

    setStartTime(currentTime);

  };



  const onEndTimeChange = (event, selectedTime) => {

    const currentTime = selectedTime || endTime;

    setShowEndTimePicker(false);

    setEndTime(currentTime);

  };



  const handleDone = () => {

    // Handle task creation logic here

    navigation.goBack();

  };



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Text style={styles.backButton}>{'<'}</Text>

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Add Task</Text>

      </View>



      <View style={styles.formContainer}>

        <Text style={styles.label}>TASK NAME</Text>

        <TextInput

          style={styles.input}

          value={taskName}

          onChangeText={setTaskName}

          placeholder="Enter task name"

        />



        <Text style={styles.label}>TEAM MEMBER</Text>

        <View style={styles.teamMembersContainer}>

          {teamMembers.map((member) => (

            <TouchableOpacity

              key={member.id}

              onPress={() => setSelectedMember(member.id)}

              style={[

                styles.memberButton,

                selectedMember === member.id && styles.selectedMemberButton,

              ]}

            >

              <Image source={member.image} style={styles.memberImage} />

              <Text style={styles.memberName}>{member.name}</Text>

            </TouchableOpacity>

          ))}

          <TouchableOpacity style={styles.addMemberButton}>

            <Text style={styles.addMemberButtonText}>+</Text>

          </TouchableOpacity>

        </View>



        <Text style={styles.label}>DATE</Text>

        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>

          <Text>{date.toDateString()}</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.calendarIcon} />

        </TouchableOpacity>



        <View style={styles.timeContainer}>

          <View style={styles.timeInputContainer}>

            <Text style={styles.label}>START TIME</Text>

            <TouchableOpacity onPress={() => setShowStartTimePicker(true)} style={styles.timeInput}>

              <Text>{startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>

            </TouchableOpacity>

          </View>

          <View style={styles.timeInputContainer}>

            <Text style={styles.label}>END TIME</Text>

            <TouchableOpacity onPress={() => setShowEndTimePicker(true)} style={styles.timeInput}>

              <Text>{endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>

            </TouchableOpacity>

          </View>

        </View>



        <Text style={styles.label}>DESCRIPTION</Text>

        <TextInput

          style={[styles.input, styles.descriptionInput]}

          value={description}

          onChangeText={setDescription}

          placeholder="Enter task description"

          multiline

        />



        <Text style={styles.label}>BOARD</Text>

        <View style={styles.boardContainer}>

          {['URGENT', 'RUNNING', 'ONGOING'].map((board) => (

            <TouchableOpacity

              key={board}

              onPress={() => setSelectedBoard(board)}

              style={[

                styles.boardButton,

                selectedBoard === board && styles.selectedBoardButton,

              ]}

            >

              <Text style={[

                styles.boardButtonText,

                selectedBoard === board && styles.selectedBoardButtonText,

              ]}>{board}</Text>

            </TouchableOpacity>

          ))}

          <TouchableOpacity style={styles.addBoardButton}>

            <Text style={styles.addBoardButtonText}>+</Text>

          </TouchableOpacity>

        </View>

      </View>



      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>

        <Text style={styles.doneButtonText}>Done</Text>

      </TouchableOpacity>



      {showDatePicker && (

        <DateTimePicker

          value={date}

          mode="date"

          display="default"

          onChange={onDateChange}

        />

      )}

      {showStartTimePicker && (

        <DateTimePicker

          value={startTime}

          mode="time"

          is24Hour={true}

          display="default"

          onChange={onStartTimeChange}

        />

      )}

      {showEndTimePicker && (

        <DateTimePicker

          value={endTime}

          mode="time"

          is24Hour={true}

          display="default"

          onChange={onEndTimeChange}

        />

      )}

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#6A5ACD',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 20,

  },

  backButton: {

    fontSize: 24,

    color: 'white',

    marginRight: 20,

  },

  headerTitle: {

    fontSize: 24,

    fontWeight: 'bold',

    color: 'white',

  },

  formContainer: {

    backgroundColor: 'white',

    borderTopLeftRadius: 30,

    borderTopRightRadius: 30,

    padding: 20,

  },

  label: {

    fontSize: 12,

    color: '#888',

    marginTop: 15,

    marginBottom: 5,

  },

  input: {

    borderWidth: 1,

    borderColor: '#ddd',

    borderRadius: 8,

    padding: 10,

    fontSize: 16,

  },

  teamMembersContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 10,

  },

  memberButton: {

    alignItems: 'center',

  },

  selectedMemberButton: {

    backgroundColor: '#6A5ACD',

    borderRadius: 50,

    padding: 5,

  },

  memberImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  memberName: {

    fontSize: 12,

    marginTop: 5,

  },

  addMemberButton: {

    width: 40,

    height: 40,

    borderRadius: 20,

    borderWidth: 1,

    borderColor: '#ddd',

    justifyContent: 'center',

    alignItems: 'center',

  },

  addMemberButtonText: {

    fontSize: 24,

    color: '#888',

  },

  dateInput: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    borderWidth: 1,

    borderColor: '#ddd',

    borderRadius: 8,

    padding: 10,

  },

  calendarIcon: {

    width: 20,

    height: 20,

  },

  timeContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  timeInputContainer: {

    flex: 1,

    marginRight: 10,

  },

  timeInput: {

    borderWidth: 1,

    borderColor: '#ddd',

    borderRadius: 8,

    padding: 10,

  },

  descriptionInput: {

    height: 100,

    textAlignVertical: 'top',

  },

  boardContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 10,

  },

  boardButton: {

    paddingHorizontal: 15,

    paddingVertical: 8,

    borderRadius: 20,

    backgroundColor: '#f0f0f0',

  },

  selectedBoardButton: {

    backgroundColor: '#6A5ACD',

  },

  boardButtonText: {

    color: '#888',

  },

  selectedBoardButtonText: {

    color: 'white',

  },

  addBoardButton: {

    paddingHorizontal: 15,

    paddingVertical: 8,

    borderRadius: 20,

    borderWidth: 1,

    borderColor: '#ddd',

  },

  addBoardButtonText: {

    color: '#888',

  },

  doneButton: {

    backgroundColor: '#6A5ACD',

    padding: 15,

    borderRadius: 8,

    alignItems: 'center',

    margin: 20,

  },

  doneButtonText: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

  },

});



export default AddTaskScreen;