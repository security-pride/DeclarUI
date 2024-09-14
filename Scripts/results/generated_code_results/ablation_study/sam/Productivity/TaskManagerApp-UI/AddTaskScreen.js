import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const AddTaskScreen = () => {

  const navigation = useNavigation();

  const [taskName, setTaskName] = useState('');

  const [selectedMembers, setSelectedMembers] = useState([]);

  const [date, setDate] = useState('May 01, 2020');

  const [startTime, setStartTime] = useState('10:00 AM');

  const [endTime, setEndTime] = useState('01:00 PM');

  const [description, setDescription] = useState('');

  const [board, setBoard] = useState('RUNNING');



  const teamMembers = ['John', 'Ranak', 'Parkao', 'Mahmud'];

  const boardOptions = ['URGENT', 'RUNNING', 'ONGOING'];



  const toggleMember = (member) => {

    setSelectedMembers(prev => 

      prev.includes(member) ? prev.filter(m => m !== member) : [...prev, member]

    );

  };



  const handleDone = () => {

    // Here you would typically save the task

    console.log('Task saved');

    navigation.goBack();

  };



  const navigateToScreen = (screenName) => {

    navigation.navigate(screenName);

  };



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Add Task</Text>

      </View>



      <View style={styles.form}>

        <Text style={styles.label}>TASK NAME</Text>

        <TextInput

          style={styles.input}

          value={taskName}

          onChangeText={setTaskName}

          placeholder="Enter task name"

        />



        <Text style={styles.label}>TEAM MEMBER</Text>

        <View style={styles.memberContainer}>

          {teamMembers.map((member, index) => (

            <TouchableOpacity

              key={index}

              style={[

                styles.memberButton,

                selectedMembers.includes(member) && styles.selectedMember

              ]}

              onPress={() => toggleMember(member)}

            >

              <Text style={styles.memberText}>{member}</Text>

            </TouchableOpacity>

          ))}

          <TouchableOpacity style={styles.addMemberButton}>

            <Icon name="add" size={24} color="#6B5CFF" />

          </TouchableOpacity>

        </View>



        <Text style={styles.label}>DATE</Text>

        <TouchableOpacity style={styles.input}>

          <Text>{date}</Text>

          <Icon name="calendar-outline" size={24} color="#000" />

        </TouchableOpacity>



        <View style={styles.timeContainer}>

          <View style={styles.timeSection}>

            <Text style={styles.label}>START TIME</Text>

            <TouchableOpacity style={styles.input}>

              <Text>{startTime}</Text>

              <Icon name="chevron-down-outline" size={24} color="#000" />

            </TouchableOpacity>

          </View>

          <View style={styles.timeSection}>

            <Text style={styles.label}>END TIME</Text>

            <TouchableOpacity style={styles.input}>

              <Text>{endTime}</Text>

              <Icon name="chevron-down-outline" size={24} color="#000" />

            </TouchableOpacity>

          </View>

        </View>



        <Text style={styles.label}>DESCRIPTION</Text>

        <TextInput

          style={[styles.input, styles.textArea]}

          value={description}

          onChangeText={setDescription}

          placeholder="Enter description"

          multiline

        />



        <Text style={styles.label}>BOARD</Text>

        <View style={styles.boardContainer}>

          {boardOptions.map((option, index) => (

            <TouchableOpacity

              key={index}

              style={[

                styles.boardButton,

                board === option && styles.selectedBoard

              ]}

              onPress={() => setBoard(option)}

            >

              <Text style={[

                styles.boardText,

                board === option && styles.selectedBoardText

              ]}>{option}</Text>

            </TouchableOpacity>

          ))}

        </View>

      </View>



      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>

        <Text style={styles.doneButtonText}>Done</Text>

      </TouchableOpacity>



      <View style={styles.navigationButtons}>

        <TouchableOpacity style={styles.navButton} onPress={() => navigateToScreen('Board')}>

          <Text style={styles.navButtonText}>Go to Board</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigateToScreen('Dashboard')}>

          <Text style={styles.navButtonText}>Go to Dashboard</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigateToScreen('Task')}>

          <Text style={styles.navButtonText}>Go to Task</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigateToScreen('Message')}>

          <Text style={styles.navButtonText}>Go to Message</Text>

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

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFF',

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

    fontSize: 12,

    color: '#888',

    marginTop: 16,

    marginBottom: 8,

  },

  input: {

    backgroundColor: '#FFF',

    borderRadius: 8,

    padding: 12,

    fontSize: 16,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  memberContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

  },

  memberButton: {

    padding: 8,

    borderRadius: 20,

    backgroundColor: '#FFF',

    marginRight: 8,

    marginBottom: 8,

  },

  selectedMember: {

    backgroundColor: '#6B5CFF',

  },

  memberText: {

    color: '#000',

  },

  addMemberButton: {

    padding: 8,

    borderRadius: 20,

    borderWidth: 1,

    borderColor: '#6B5CFF',

    borderStyle: 'dashed',

  },

  timeContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  timeSection: {

    flex: 1,

    marginRight: 8,

  },

  textArea: {

    height: 100,

    textAlignVertical: 'top',

  },

  boardContainer: {

    flexDirection: 'row',

  },

  boardButton: {

    padding: 8,

    borderRadius: 20,

    backgroundColor: '#FFF',

    marginRight: 8,

  },

  selectedBoard: {

    backgroundColor: '#6B5CFF',

  },

  boardText: {

    color: '#000',

  },

  selectedBoardText: {

    color: '#FFF',

  },

  doneButton: {

    backgroundColor: '#6B5CFF',

    padding: 16,

    borderRadius: 8,

    alignItems: 'center',

    margin: 16,

  },

  doneButtonText: {

    color: '#FFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

  navigationButtons: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 16,

  },

  navButton: {

    backgroundColor: '#6B5CFF',

    padding: 8,

    borderRadius: 8,

  },

  navButtonText: {

    color: '#FFF',

    fontSize: 14,

  },

});



export default AddTaskScreen;