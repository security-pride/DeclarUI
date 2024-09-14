import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Switch } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import DateTimePicker from '@react-native-community/datetimepicker';



const AddTaskScreen = () => {

  const navigation = useNavigation();

  const [taskTitle, setTaskTitle] = useState('Website redesign');

  const [taskType, setTaskType] = useState('Important');

  const [date, setDate] = useState(new Date(2022, 1, 18));

  const [startTime, setStartTime] = useState(new Date(2022, 1, 18, 9, 0));

  const [endTime, setEndTime] = useState(new Date(2022, 1, 18, 12, 0));

  const [isAlertOn, setIsAlertOn] = useState(true);



  const handleDone = () => {

    // Logic to save the task

    navigation.goBack();

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Image

          source={require('../assets/snack-icon.png')}

          style={styles.avatar}

        />

        <Text style={styles.headerTitle}>Add New Task</Text>

      </View>



      <View style={styles.calendar}>

        <TouchableOpacity>

          <Text style={styles.calendarArrow}>{'<'}</Text>

        </TouchableOpacity>

        <Text style={styles.calendarMonth}>February 2022</Text>

        <TouchableOpacity>

          <Text style={styles.calendarArrow}>{'>'}</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.calendarDays}>

        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (

          <Text key={index} style={styles.calendarDay}>{day}</Text>

        ))}

      </View>



      <View style={styles.calendarDates}>

        {[14, 15, 16, 17, 18, 19, 20].map((date, index) => (

          <TouchableOpacity

            key={index}

            style={[

              styles.calendarDate,

              date === 18 && styles.selectedDate

            ]}

          >

            <Text style={[

              styles.calendarDateText,

              date === 18 && styles.selectedDateText

            ]}>{date}</Text>

          </TouchableOpacity>

        ))}

      </View>



      <View style={styles.form}>

        <Text style={styles.label}>Task title</Text>

        <TextInput

          style={styles.input}

          value={taskTitle}

          onChangeText={setTaskTitle}

        />



        <Text style={styles.label}>Task type</Text>

        <View style={styles.taskTypeContainer}>

          <TouchableOpacity

            style={[

              styles.taskTypeButton,

              taskType === 'Important' && styles.selectedTaskType

            ]}

            onPress={() => setTaskType('Important')}

          >

            <Text style={[

              styles.taskTypeText,

              taskType === 'Important' && styles.selectedTaskTypeText

            ]}>Important</Text>

          </TouchableOpacity>

          <TouchableOpacity

            style={[

              styles.taskTypeButton,

              taskType === 'Personal' && styles.selectedTaskType

            ]}

            onPress={() => setTaskType('Personal')}

          >

            <Text style={[

              styles.taskTypeText,

              taskType === 'Personal' && styles.selectedTaskTypeText

            ]}>Personal</Text>

          </TouchableOpacity>

        </View>



        <Text style={styles.label}>Choose date & time</Text>

        <View style={styles.dateTimeContainer}>

          <DateTimePicker

            value={date}

            mode="date"

            display="default"

            onChange={(event, selectedDate) => setDate(selectedDate)}

          />

          <DateTimePicker

            value={startTime}

            mode="time"

            display="default"

            onChange={(event, selectedTime) => setStartTime(selectedTime)}

          />

          <Text>-</Text>

          <DateTimePicker

            value={endTime}

            mode="time"

            display="default"

            onChange={(event, selectedTime) => setEndTime(selectedTime)}

          />

        </View>



        <View style={styles.alertContainer}>

          <Text style={styles.label}>Get alert for this task</Text>

          <Switch

            value={isAlertOn}

            onValueChange={setIsAlertOn}

            trackColor={{ false: '#767577', true: '#81b0ff' }}

            thumbColor={isAlertOn ? '#f5dd4b' : '#f4f3f4'}

          />

        </View>

      </View>



      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>

        <Text style={styles.doneButtonText}>Done</Text>

      </TouchableOpacity>

    </View>

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

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  headerTitle: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  calendar: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    backgroundColor: '#00bcd4',

    borderRadius: 10,

    padding: 10,

    marginBottom: 10,

  },

  calendarArrow: {

    fontSize: 20,

    color: '#fff',

  },

  calendarMonth: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#fff',

  },

  calendarDays: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 10,

  },

  calendarDay: {

    fontSize: 14,

    color: '#999',

  },

  calendarDates: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 20,

  },

  calendarDate: {

    width: 30,

    height: 30,

    justifyContent: 'center',

    alignItems: 'center',

    borderRadius: 15,

  },

  selectedDate: {

    backgroundColor: '#00bcd4',

  },

  calendarDateText: {

    fontSize: 16,

  },

  selectedDateText: {

    color: '#fff',

  },

  form: {

    marginBottom: 20,

  },

  label: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  input: {

    borderWidth: 1,

    borderColor: '#ddd',

    borderRadius: 5,

    padding: 10,

    marginBottom: 15,

  },

  taskTypeContainer: {

    flexDirection: 'row',

    marginBottom: 15,

  },

  taskTypeButton: {

    flex: 1,

    padding: 10,

    borderWidth: 1,

    borderColor: '#ddd',

    borderRadius: 5,

    marginRight: 10,

    alignItems: 'center',

  },

  selectedTaskType: {

    backgroundColor: '#ff7043',

    borderColor: '#ff7043',

  },

  taskTypeText: {

    color: '#999',

  },

  selectedTaskTypeText: {

    color: '#fff',

  },

  dateTimeContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 15,

  },

  alertContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  doneButton: {

    backgroundColor: '#00bcd4',

    padding: 15,

    borderRadius: 10,

    alignItems: 'center',

  },

  doneButtonText: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

});



export default AddTaskScreen;