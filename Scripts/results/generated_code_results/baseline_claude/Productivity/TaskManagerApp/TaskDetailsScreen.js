import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import { PieChart } from 'react-native-svg-charts';



const TaskDetailsScreen = () => {

  const navigation = useNavigation();

  const [isExpanded, setIsExpanded] = useState(false);



  const pieData = [

    { value: 40, color: '#00BCD4', key: 'finish' },

    { value: 40, color: '#FF7043', key: 'past' },

    { value: 20, color: '#3F51B5', key: 'ongoing' },

  ];



  const renderPieChart = () => (

    <View style={styles.chartContainer}>

      <PieChart

        style={styles.chart}

        data={pieData}

        innerRadius="70%"

        padAngle={0}

      />

      <View style={styles.chartLegend}>

        <Text style={styles.chartPercentage}>40%</Text>

      </View>

    </View>

  );



  const renderLegendItem = (color, text) => (

    <View style={styles.legendItem}>

      <View style={[styles.legendDot, { backgroundColor: color }]} />

      <Text style={styles.legendText}>{text}</Text>

    </View>

  );



  const renderSubTask = (title, date, isCompleted) => (

    <View style={styles.subTaskItem}>

      <View style={styles.subTaskLeft}>

        <Icon

          name={isCompleted ? 'checkbox-outline' : 'square-outline'}

          size={24}

          color={isCompleted ? '#00BCD4' : '#C4C4C4'}

        />

        <View style={styles.subTaskContent}>

          <Text style={styles.subTaskTitle}>{title}</Text>

          <Text style={styles.subTaskDate}>{date}</Text>

        </View>

      </View>

      <TouchableOpacity>

        <Icon name="ellipsis-vertical" size={20} color="#000" />

      </TouchableOpacity>

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Task Details</Text>

        <View style={styles.placeholder} />

      </View>

      

      <ScrollView style={styles.content}>

        <Text style={styles.taskTitle}>User experience design</Text>

        

        <View style={styles.taskInfo}>

          <View style={styles.infoItem}>

            <Icon name="calendar-outline" size={20} color="#888" />

            <Text style={styles.infoText}>18-02-2022</Text>

          </View>

          <View style={styles.infoItem}>

            <Icon name="time-outline" size={20} color="#888" />

            <Text style={styles.infoText}>9:00 AM-12:00 PM</Text>

          </View>

        </View>



        {renderPieChart()}



        <View style={styles.legend}>

          {renderLegendItem('#00BCD4', 'Finish on time')}

          {renderLegendItem('#FF7043', 'Past the deadline')}

          {renderLegendItem('#3F51B5', 'Still ongoing')}

        </View>



        <View style={styles.descriptionContainer}>

          <Text style={styles.sectionTitle}>Description</Text>

          <Text style={styles.descriptionText}>

            Task management is the process which is monitoring your fast project's tasks through their various stages from start

            {isExpanded ? '...' : ''}

            {isExpanded && ' to finish. It involves planning, testing, tracking, and reporting on the progress of each task. Effective task management ensures that tasks are completed on time and within budget, contributing to the overall success of the project.'}

          </Text>

          <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>

            <Text style={styles.seeMoreText}>{isExpanded ? 'See less' : 'See more'}</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.subTaskContainer}>

          <Text style={styles.sectionTitle}>Sub Task</Text>

          {renderSubTask('Website Redesign', '18 Feb 2022', true)}

          {renderSubTask('Website Design', '19 Feb 2022', false)}

        </View>

      </ScrollView>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 20,

    backgroundColor: '#FFF',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  placeholder: {

    width: 24,

  },

  content: {

    flex: 1,

    padding: 20,

  },

  taskTitle: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  taskInfo: {

    flexDirection: 'row',

    marginBottom: 20,

  },

  infoItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginRight: 20,

  },

  infoText: {

    marginLeft: 5,

    color: '#888',

  },

  chartContainer: {

    height: 200,

    justifyContent: 'center',

    alignItems: 'center',

  },

  chart: {

    height: 200,

    width: 200,

  },

  chartLegend: {

    position: 'absolute',

  },

  chartPercentage: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  legend: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginVertical: 20,

  },

  legendItem: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  legendDot: {

    width: 10,

    height: 10,

    borderRadius: 5,

    marginRight: 5,

  },

  legendText: {

    fontSize: 12,

    color: '#888',

  },

  descriptionContainer: {

    marginBottom: 20,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  descriptionText: {

    color: '#666',

    lineHeight: 20,

  },

  seeMoreText: {

    color: '#00BCD4',

    marginTop: 5,

  },

  subTaskContainer: {

    marginBottom: 20,

  },

  subTaskItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    backgroundColor: '#FFF',

    borderRadius: 10,

    padding: 15,

    marginBottom: 10,

  },

  subTaskLeft: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  subTaskContent: {

    marginLeft: 10,

  },

  subTaskTitle: {

    fontWeight: 'bold',

  },

  subTaskDate: {

    color: '#888',

    fontSize: 12,

  },

});



export default TaskDetailsScreen;