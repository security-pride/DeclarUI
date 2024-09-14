import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const AddTaskScreen = () => {

  const [taskName, setTaskName] = useState('');

  const [selectedMembers, setSelectedMembers] = useState(['Parkao']);

  const [date, setDate] = useState('May 01, 2020');

  const [startTime, setStartTime] = useState('10:00 AM');

  const [endTime, setEndTime] = useState('01:00 PM');

  const [description, setDescription] = useState('');

  const [boardStatus, setBoardStatus] = useState('RUNNING');



  const teamMembers = [

    { name: 'John', avatar: require('../assets/snack-icon.png') },

    { name: 'Ranak', avatar: require('../assets/snack-icon.png') },

    { name: 'Parkao', avatar: require('../assets/snack-icon.png') },

    { name: 'Mahmud', avatar: require('../assets/snack-icon.png') },

  ];



  const renderMemberIcon = (member) => (

    <TouchableOpacity

      key={member.name}

      style={styles.memberIcon}

      onPress={() => toggleMember(member.name)}

    >

      <Image source={member.avatar} style={styles.avatar} />

      {selectedMembers.includes(member.name) && (

        <View style={styles.checkMark}>

          <Icon name="check" size={16} color="#fff" />

        </View>

      )}

      <Text style={styles.memberName}>{member.name}</Text>

    </TouchableOpacity>

  );



  const toggleMember = (name) => {

    if (selectedMembers.includes(name)) {

      setSelectedMembers(selectedMembers.filter(member => member !== name));

    } else {

      setSelectedMembers([...selectedMembers, name]);

    }

  };



  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>Add Task</Text>

      

      <View style={styles.inputContainer}>

        <Text style={styles.label}>TASK NAME</Text>

        <TextInput

          style={styles.input}

          value={taskName}

          onChangeText={setTaskName}

          placeholder="Enter task name"

        />

      </View>



      <View style={styles.inputContainer}>

        <Text style={styles.label}>TEAM MEMBER</Text>

        <View style={styles.memberList}>

          {teamMembers.map(renderMemberIcon)}

          <TouchableOpacity style={styles.addMemberButton}>

            <Icon name="add" size={24} color="#8875FF" />

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.inputContainer}>

        <Text style={styles.label}>DATE</Text>

        <TouchableOpacity style={styles.datePickerButton}>

          <Text style={styles.dateText}>{date}</Text>

          <Icon name="date-range" size={24} color="#8875FF" />

        </TouchableOpacity>

      </View>



      <View style={styles.timeContainer}>

        <View style={styles.timeInput}>

          <Text style={styles.label}>START TIME</Text>

          <TouchableOpacity style={styles.timePickerButton}>

            <Text style={styles.timeText}>{startTime}</Text>

            <Icon name="arrow-drop-down" size={24} color="#8875FF" />

          </TouchableOpacity>

        </View>

        <View style={styles.timeInput}>

          <Text style={styles.label}>END TIME</Text>

          <TouchableOpacity style={styles.timePickerButton}>

            <Text style={styles.timeText}>{endTime}</Text>

            <Icon name="arrow-drop-down" size={24} color="#8875FF" />

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.inputContainer}>

        <Text style={styles.label}>DESCRIPTION</Text>

        <TextInput

          style={[styles.input, styles.descriptionInput]}

          value={description}

          onChangeText={setDescription}

          placeholder="Enter description"

          multiline

        />

      </View>



      <View style={styles.inputContainer}>

        <Text style={styles.label}>BOARD</Text>

        <View style={styles.boardButtons}>

          <TouchableOpacity

            style={[styles.boardButton, boardStatus === 'URGENT' && styles.selectedBoardButton]}

            onPress={() => setBoardStatus('URGENT')}

          >

            <Text style={[styles.boardButtonText, boardStatus === 'URGENT' && styles.selectedBoardButtonText]}>URGENT</Text>

          </TouchableOpacity>

          <TouchableOpacity

            style={[styles.boardButton, boardStatus === 'RUNNING' && styles.selectedBoardButton]}

            onPress={() => setBoardStatus('RUNNING')}

          >

            <Text style={[styles.boardButtonText, boardStatus === 'RUNNING' && styles.selectedBoardButtonText]}>RUNNING</Text>

          </TouchableOpacity>

          <TouchableOpacity

            style={[styles.boardButton, boardStatus === 'ONGOING' && styles.selectedBoardButton]}

            onPress={() => setBoardStatus('ONGOING')}

          >

            <Text style={[styles.boardButtonText, boardStatus === 'ONGOING' && styles.selectedBoardButtonText]}>ONGOING</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.addBoardButton}>

            <Icon name="add" size={24} color="#8875FF" />

          </TouchableOpacity>

        </View>

      </View>



      <TouchableOpacity style={styles.doneButton}>

        <Text style={styles.doneButtonText}>Done</Text>

      </TouchableOpacity>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#8875FF',

    padding: 20,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#fff',

    marginBottom: 20,

  },

  inputContainer: {

    marginBottom: 20,

  },

  label: {

    fontSize: 14,

    color: '#fff',

    marginBottom: 5,

  },

  input: {

    backgroundColor: '#fff',

    borderRadius: 10,

    padding: 10,

    fontSize: 16,

  },

  memberList: {

    flexDirection: 'row',

    flexWrap: 'wrap',

  },

  memberIcon: {

    alignItems: 'center',

    marginRight: 15,

    marginBottom: 10,

  },

  avatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

  },

  checkMark: {

    position: 'absolute',

    right: 0,

    top: 0,

    backgroundColor: '#8875FF',

    borderRadius: 10,

    padding: 2,

  },

  memberName: {

    color: '#fff',

    marginTop: 5,

  },

  addMemberButton: {

    width: 50,

    height: 50,

    borderRadius: 25,

    borderWidth: 2,

    borderColor: '#8875FF',

    borderStyle: 'dashed',

    justifyContent: 'center',

    alignItems: 'center',

  },

  datePickerButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fff',

    borderRadius: 10,

    padding: 10,

  },

  dateText: {

    flex: 1,

    fontSize: 16,

  },

  timeContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 20,

  },

  timeInput: {

    flex: 1,

    marginRight: 10,

  },

  timePickerButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fff',

    borderRadius: 10,

    padding: 10,

  },

  timeText: {

    flex: 1,

    fontSize: 16,

  },

  descriptionInput: {

    height: 100,

    textAlignVertical: 'top',

  },

  boardButtons: {

    flexDirection: 'row',

    flexWrap: 'wrap',

  },

  boardButton: {

    backgroundColor: '#fff',

    borderRadius: 20,

    paddingVertical: 5,

    paddingHorizontal: 15,

    marginRight: 10,

    marginBottom: 10,

  },

  selectedBoardButton: {

    backgroundColor: '#8875FF',

  },

  boardButtonText: {

    color: '#8875FF',

    fontWeight: 'bold',

  },

  selectedBoardButtonText: {

    color: '#fff',

  },

  addBoardButton: {

    width: 40,

    height: 40,

    borderRadius: 20,

    backgroundColor: '#fff',

    justifyContent: 'center',

    alignItems: 'center',

  },

  doneButton: {

    backgroundColor: '#fff',

    borderRadius: 10,

    padding: 15,

    alignItems: 'center',

    marginTop: 20,

  },

  doneButtonText: {

    color: '#8875FF',

    fontSize: 18,

    fontWeight: 'bold',

  },

});



export default AddTaskScreen;