import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ClearHistoryScreen = () => {

  const [isLightMode, setIsLightMode] = useState(false);

  const navigation = useNavigation();



  const toggleSwitch = () => setIsLightMode(previousState => !previousState);



  return (

    <View style={[styles.container, isLightMode && styles.lightContainer]}>

      <View style={styles.header}>

        <Switch

          trackColor={{ false: "#3e3e3e", true: "#81b0ff" }}

          thumbColor={isLightMode ? "#f5dd4b" : "#f4f3f4"}

          ios_backgroundColor="#3e3e3e"

          onValueChange={toggleSwitch}

          value={isLightMode}

        />

        <Text style={[styles.switchText, isLightMode && styles.lightText]}>Switch to {isLightMode ? 'Dark' : 'Light'}</Text>

      </View>



      <View style={styles.content}>

        <Text style={[styles.resultText, isLightMode && styles.lightText]}>45 × 24</Text>

        <Text style={[styles.resultValue, isLightMode && styles.lightText]}>1080</Text>

      </View>



      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.expandButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.expandIcon} />

        </TouchableOpacity>

        <View style={styles.resultButton}>

          <Text style={styles.resultButtonText}>1080</Text>

        </View>

        <TouchableOpacity style={styles.closeButton}>

          <Text style={styles.closeButtonText}>×</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.historyContainer}>

        <View style={styles.historyHeader}>

          <Image source={require('../assets/snack-icon.png')} style={styles.historyIcon} />

          <Text style={[styles.noHistoryText, isLightMode && styles.lightText]}>No history yet...</Text>

        </View>

      </View>



      <View style={styles.calculatorButtons}>

        <TouchableOpacity style={styles.calcButton}>

          <Text style={styles.calcButtonText}>/</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.calcButton}>

          <Text style={styles.calcButtonText}>×</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.calcButton}>

          <Text style={styles.calcButtonText}>-</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.calcButton}>

          <Text style={styles.calcButtonText}>+</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.equalsButton}>

          <Text style={styles.equalsButtonText}>=</Text>

        </TouchableOpacity>

      </View>



      <TouchableOpacity 

        style={styles.clearHistoryButton}

        onPress={() => {

          // Add clear history logic here

          console.log('History cleared');

          // Navigate back to the default view

          navigation.goBack();

        }}

      >

        <Text style={styles.clearHistoryText}>Clear Histroy</Text>

      </TouchableOpacity>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#1c1c1e',

    padding: 20,

  },

  lightContainer: {

    backgroundColor: '#f2f2f7',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 20,

  },

  switchText: {

    color: '#fff',

    marginLeft: 10,

  },

  lightText: {

    color: '#000',

  },

  content: {

    alignItems: 'flex-end',

    marginBottom: 20,

  },

  resultText: {

    color: '#8e8e93',

    fontSize: 24,

  },

  resultValue: {

    color: '#fff',

    fontSize: 48,

    fontWeight: 'bold',

  },

  buttonContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 20,

  },

  expandButton: {

    padding: 10,

  },

  expandIcon: {

    width: 20,

    height: 20,

    tintColor: '#8e8e93',

  },

  resultButton: {

    backgroundColor: '#3a3a3c',

    paddingVertical: 5,

    paddingHorizontal: 15,

    borderRadius: 20,

  },

  resultButtonText: {

    color: '#fff',

    fontSize: 18,

  },

  closeButton: {

    padding: 10,

  },

  closeButtonText: {

    color: '#8e8e93',

    fontSize: 24,

  },

  historyContainer: {

    flex: 1,

    backgroundColor: '#2c2c2e',

    borderRadius: 10,

    padding: 20,

    marginBottom: 20,

  },

  historyHeader: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  historyIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

    tintColor: '#8e8e93',

  },

  noHistoryText: {

    color: '#8e8e93',

    fontSize: 18,

  },

  calculatorButtons: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 20,

  },

  calcButton: {

    backgroundColor: '#4a4a4c',

    width: 60,

    height: 60,

    borderRadius: 30,

    justifyContent: 'center',

    alignItems: 'center',

  },

  calcButtonText: {

    color: '#fff',

    fontSize: 24,

  },

  equalsButton: {

    backgroundColor: '#ff9500',

    width: 60,

    height: 60,

    borderRadius: 30,

    justifyContent: 'center',

    alignItems: 'center',

  },

  equalsButtonText: {

    color: '#fff',

    fontSize: 24,

  },

  clearHistoryButton: {

    backgroundColor: '#ff3b30',

    padding: 15,

    borderRadius: 10,

    alignItems: 'center',

  },

  clearHistoryText: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

});



export default ClearHistoryScreen;