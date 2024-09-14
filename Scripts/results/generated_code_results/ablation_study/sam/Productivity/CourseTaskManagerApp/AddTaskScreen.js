import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const AddTaskScreen = () => {

  const navigation = useNavigation();

  const [subject, setSubject] = useState('Biology');

  const [topic, setTopic] = useState('');

  const [date, setDate] = useState('Fri 25 September, 2020');

  const [time, setTime] = useState('09:30 AM');



  const categories = ['Class', 'Exam', 'Lab', 'Assignment', 'Presentation'];

  const [selectedCategory, setSelectedCategory] = useState('');



  const handleAddTask = () => {

    // Logic to add task

    console.log('Task added');

    navigation.goBack();

  };



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>Add a task</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      </View>



      <View style={styles.categoryContainer}>

        {categories.map((category) => (

          <TouchableOpacity

            key={category}

            style={[

              styles.categoryButton,

              selectedCategory === category && styles.selectedCategory,

            ]}

            onPress={() => setSelectedCategory(category)}

          >

            <Text style={styles.categoryText}>{category}</Text>

          </TouchableOpacity>

        ))}

      </View>



      <View style={styles.form}>

        <View style={styles.inputContainer}>

          <Text style={styles.label}>Subject</Text>

          <TextInput

            style={styles.input}

            value={subject}

            onChangeText={setSubject}

          />

        </View>



        <View style={styles.inputContainer}>

          <Text style={styles.label}>Topic / Chapter Name</Text>

          <TextInput

            style={styles.input}

            value={topic}

            onChangeText={setTopic}

            placeholder="Enter topic or chapter name"

          />

        </View>



        <View style={styles.inputContainer}>

          <Text style={styles.label}>Date</Text>

          <TextInput

            style={styles.input}

            value={date}

            onChangeText={setDate}

          />

        </View>



        <View style={styles.inputContainer}>

          <Text style={styles.label}>Time</Text>

          <TextInput

            style={styles.input}

            value={time}

            onChangeText={setTime}

          />

        </View>

      </View>



      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>

        <Text style={styles.addButtonText}>Add Task</Text>

      </TouchableOpacity>



      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>

          <Icon name="event" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Classroom')}>

          <Icon name="school" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Discussion')}>

          <Icon name="chat" size={24} color="#000" />

        </TouchableOpacity>

      </View>

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

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

  },

  headerTitle: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  categoryContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 20,

  },

  categoryButton: {

    paddingVertical: 8,

    paddingHorizontal: 16,

    borderRadius: 20,

    backgroundColor: '#f0f0f0',

  },

  selectedCategory: {

    backgroundColor: '#4CAF50',

  },

  categoryText: {

    color: '#000',

  },

  form: {

    padding: 16,

  },

  inputContainer: {

    marginBottom: 16,

  },

  label: {

    fontSize: 16,

    marginBottom: 8,

  },

  input: {

    borderWidth: 1,

    borderColor: '#ccc',

    borderRadius: 8,

    padding: 8,

  },

  addButton: {

    backgroundColor: '#4CAF50',

    padding: 16,

    borderRadius: 8,

    alignItems: 'center',

    margin: 16,

  },

  addButtonText: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 16,

    borderTopWidth: 1,

    borderTopColor: '#ccc',

  },

});



export default AddTaskScreen;