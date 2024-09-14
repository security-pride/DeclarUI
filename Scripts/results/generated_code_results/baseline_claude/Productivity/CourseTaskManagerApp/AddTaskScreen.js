import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const AddTaskScreen = () => {

  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [topicName, setTopicName] = useState('');

  const [selectedDate, setSelectedDate] = useState('');

  const [selectedTime, setSelectedTime] = useState('');



  const categories = [

    { id: 'class', label: 'Class', color: '#4CAF50' },

    { id: 'exam', label: 'Exam', color: '#FF4081' },

    { id: 'lab', label: 'Lab', color: '#E91E63' },

    { id: 'assignment', label: 'Assignment', color: '#FFC107' },

    { id: 'presentation', label: 'Presentation', color: '#7986CB' },

  ];



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.header}>

          <Text style={styles.headerText}>Hello Liana</Text>

          <Text style={styles.subHeaderText}>Add a task</Text>

          <TouchableOpacity style={styles.profileButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

            <View style={styles.notificationBadge}>

              <Text style={styles.notificationText}>4</Text>

            </View>

          </TouchableOpacity>

        </View>



        <View style={styles.categoryContainer}>

          <Text style={styles.labelText}>Category</Text>

          <View style={styles.categoryButtonsContainer}>

            {categories.map((category) => (

              <TouchableOpacity

                key={category.id}

                style={[

                  styles.categoryButton,

                  { backgroundColor: category.color },

                  selectedCategory === category.id && styles.selectedCategory,

                ]}

                onPress={() => setSelectedCategory(category.id)}

              >

                <Text style={styles.categoryButtonText}>{category.label}</Text>

              </TouchableOpacity>

            ))}

          </View>

        </View>



        <View style={styles.inputContainer}>

          <Icon name="book-outline" size={24} color="#888" style={styles.inputIcon} />

          <TextInput

            style={styles.input}

            placeholder="Biology"

            placeholderTextColor="#888"

            value={topicName}

            onChangeText={setTopicName}

          />

        </View>



        <View style={styles.inputContainer}>

          <Icon name="document-text-outline" size={24} color="#888" style={styles.inputIcon} />

          <TextInput

            style={styles.input}

            placeholder="Topic / Chapter Name"

            placeholderTextColor="#888"

          />

        </View>



        <View style={styles.inputContainer}>

          <Icon name="calendar-outline" size={24} color="#888" style={styles.inputIcon} />

          <TextInput

            style={styles.input}

            placeholder="Fri 25 September, 2020"

            placeholderTextColor="#888"

            value={selectedDate}

            onChangeText={setSelectedDate}

          />

        </View>



        <View style={styles.inputContainer}>

          <Icon name="time-outline" size={24} color="#888" style={styles.inputIcon} />

          <TextInput

            style={styles.input}

            placeholder="09:30 AM"

            placeholderTextColor="#888"

            value={selectedTime}

            onChangeText={setSelectedTime}

          />

        </View>



        <TouchableOpacity style={styles.addButton}>

          <Text style={styles.addButtonText}>Add Task</Text>

        </TouchableOpacity>

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Icon name="home-outline" size={24} color="#888" />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Tasks')}>

          <Icon name="list-outline" size={24} color="#888" />

          <Text style={styles.navText}>Tasks</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Classroom')}>

          <Icon name="school-outline" size={24} color="#888" />

          <Text style={styles.navText}>Classroom</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Chat')}>

          <Icon name="chatbubble-outline" size={24} color="#888" />

          <Text style={styles.navText}>Chat</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  scrollContent: {

    padding: 20,

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 20,

  },

  headerText: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  subHeaderText: {

    fontSize: 18,

    color: '#888',

  },

  profileButton: {

    position: 'relative',

  },

  profileImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  notificationBadge: {

    position: 'absolute',

    top: -5,

    right: -5,

    backgroundColor: 'red',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  notificationText: {

    color: 'white',

    fontSize: 12,

    fontWeight: 'bold',

  },

  categoryContainer: {

    marginBottom: 20,

  },

  labelText: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  categoryButtonsContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

  },

  categoryButton: {

    paddingHorizontal: 15,

    paddingVertical: 8,

    borderRadius: 20,

    marginBottom: 10,

  },

  categoryButtonText: {

    color: 'white',

    fontWeight: 'bold',

  },

  selectedCategory: {

    borderWidth: 2,

    borderColor: 'black',

  },

  inputContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    borderWidth: 1,

    borderColor: '#E0E0E0',

    borderRadius: 8,

    paddingHorizontal: 10,

    marginBottom: 15,

  },

  inputIcon: {

    marginRight: 10,

  },

  input: {

    flex: 1,

    height: 50,

    fontSize: 16,

  },

  addButton: {

    backgroundColor: '#4CAF50',

    borderRadius: 8,

    paddingVertical: 15,

    alignItems: 'center',

    marginTop: 20,

  },

  addButtonText: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 10,

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    color: '#888',

    marginTop: 5,

  },

});



export default AddTaskScreen;