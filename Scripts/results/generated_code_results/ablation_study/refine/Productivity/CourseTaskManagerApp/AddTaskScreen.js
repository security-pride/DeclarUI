import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const AddTaskScreen = () => {

  const [selectedCategory, setSelectedCategory] = useState('');

  const [topicName, setTopicName] = useState('');

  const [selectedDate, setSelectedDate] = useState('Fri 25 September, 2020');

  const [selectedTime, setSelectedTime] = useState('09:30 AM');



  const renderCategoryButton = (category) => (

    <TouchableOpacity

      style={[

        styles.categoryButton,

        selectedCategory === category && styles.selectedCategoryButton,

      ]}

      onPress={() => setSelectedCategory(category)}

    >

      <Text style={[

        styles.categoryButtonText,

        selectedCategory === category && styles.selectedCategoryButtonText,

      ]}>

        {category}

      </Text>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.greeting}>Hello Liana</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.profilePic} />

      </View>

      <Text style={styles.title}>Add a task</Text>

      <Text style={styles.label}>Category</Text>

      <View style={styles.categoryContainer}>

        {renderCategoryButton('Class')}

        {renderCategoryButton('Exam')}

        {renderCategoryButton('Lab')}

        {renderCategoryButton('Assignment')}

        {renderCategoryButton('Presentation')}

      </View>

      <View style={styles.inputContainer}>

        <Text style={styles.inputLabel}>Biology</Text>

        <TextInput

          style={styles.input}

          placeholder="Topic / Chapter Name"

          value={topicName}

          onChangeText={setTopicName}

        />

        <TouchableOpacity style={styles.dateTimeContainer}>

          <Icon name="calendar-today" size={24} color="#000" />

          <Text style={styles.dateTimeText}>{selectedDate}</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.dateTimeContainer}>

          <Icon name="access-time" size={24} color="#000" />

          <Text style={styles.dateTimeText}>{selectedTime}</Text>

        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.addButton}>

        <Text style={styles.addButtonText}>Add Task</Text>

      </TouchableOpacity>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

    padding: 20,

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 20,

  },

  greeting: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  profilePic: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 20,

  },

  label: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  categoryContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    marginBottom: 20,

  },

  categoryButton: {

    paddingHorizontal: 15,

    paddingVertical: 8,

    borderRadius: 20,

    backgroundColor: '#E0E0E0',

    marginRight: 10,

    marginBottom: 10,

  },

  selectedCategoryButton: {

    backgroundColor: '#4CAF50',

  },

  categoryButtonText: {

    color: '#000',

  },

  selectedCategoryButtonText: {

    color: '#FFF',

  },

  inputContainer: {

    backgroundColor: '#FFF',

    borderRadius: 10,

    padding: 15,

    marginBottom: 20,

  },

  inputLabel: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  input: {

    borderBottomWidth: 1,

    borderColor: '#E0E0E0',

    paddingVertical: 10,

    marginBottom: 15,

  },

  dateTimeContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 15,

  },

  dateTimeText: {

    marginLeft: 10,

    fontSize: 16,

  },

  addButton: {

    backgroundColor: '#4CAF50',

    borderRadius: 25,

    paddingVertical: 15,

    alignItems: 'center',

  },

  addButtonText: {

    color: '#FFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

});



export default AddTaskScreen;