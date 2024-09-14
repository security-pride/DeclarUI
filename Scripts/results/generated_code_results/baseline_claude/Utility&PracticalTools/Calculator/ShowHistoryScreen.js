import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Switch, ScrollView, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ShowHistoryScreen = () => {

  const [isLightMode, setIsLightMode] = useState(true);

  const [result, setResult] = useState('1080');

  const [equation, setEquation] = useState('45 × 24');

  const navigation = useNavigation();



  const toggleSwitch = () => setIsLightMode(previousState => !previousState);



  const handleClearHistory = () => {

    // Implement clear history logic here

    navigation.navigate('ClearHistory');

  };



  const handleExpandCollapse = () => {

    navigation.navigate('ExpandedView');

  };



  const handleCloseHistory = () => {

    navigation.goBack();

  };



  const renderHistoryItem = (eq, res) => (

    <View style={styles.historyItem} key={eq}>

      <Text style={styles.historyEquation}>{eq}</Text>

      <Text style={styles.historyResult}>= {res}</Text>

    </View>

  );



  const renderOperatorButton = (operator) => (

    <TouchableOpacity style={styles.operatorButton}>

      <Text style={styles.operatorButtonText}>{operator}</Text>

    </TouchableOpacity>

  );



  return (

    <View style={[styles.container, isLightMode ? styles.lightContainer : styles.darkContainer]}>

      <View style={styles.header}>

        <Switch

          trackColor={{ false: "#767577", true: "#81b0ff" }}

          thumbColor={isLightMode ? "#f5dd4b" : "#f4f3f4"}

          ios_backgroundColor="#3e3e3e"

          onValueChange={toggleSwitch}

          value={isLightMode}

        />

        <Text style={[styles.switchText, isLightMode ? styles.darkText : styles.lightText]}>

          Switch to {isLightMode ? 'Dark' : 'Light'}

        </Text>

      </View>



      <View style={styles.resultContainer}>

        <Text style={[styles.equation, isLightMode ? styles.darkText : styles.lightText]}>{equation}</Text>

        <Text style={[styles.result, isLightMode ? styles.darkText : styles.lightText]}>{result}</Text>

      </View>



      <View style={styles.historyContainer}>

        <View style={styles.historyHeader}>

          <TouchableOpacity onPress={handleExpandCollapse}>

            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

          </TouchableOpacity>

          <View style={styles.resultPill}>

            <Text style={styles.resultPillText}>{result}</Text>

          </View>

          <TouchableOpacity onPress={handleCloseHistory}>

            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

          </TouchableOpacity>

        </View>



        <ScrollView style={styles.historyScroll}>

          {renderHistoryItem('45 × 24', '1080')}

          {renderHistoryItem('25 × 2', '50')}

        </ScrollView>



        <TouchableOpacity style={styles.clearHistoryButton} onPress={handleClearHistory}>

          <Text style={styles.clearHistoryText}>Clear History</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.operatorContainer}>

        {renderOperatorButton('/')}

        {renderOperatorButton('x')}

        {renderOperatorButton('-')}

        {renderOperatorButton('+')}

        {renderOperatorButton('=')}

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    padding: 20,

  },

  lightContainer: {

    backgroundColor: '#F2F2F7',

  },

  darkContainer: {

    backgroundColor: '#1C1C1E',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 20,

  },

  switchText: {

    marginLeft: 10,

    fontSize: 16,

  },

  lightText: {

    color: '#FFFFFF',

  },

  darkText: {

    color: '#000000',

  },

  resultContainer: {

    alignItems: 'flex-end',

    marginBottom: 20,

  },

  equation: {

    fontSize: 24,

    color: '#8E8E93',

  },

  result: {

    fontSize: 48,

    fontWeight: 'bold',

  },

  historyContainer: {

    flex: 1,

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    padding: 15,

    marginBottom: 20,

  },

  historyHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 15,

  },

  icon: {

    width: 24,

    height: 24,

  },

  resultPill: {

    backgroundColor: '#F2F2F7',

    borderRadius: 15,

    paddingVertical: 5,

    paddingHorizontal: 15,

  },

  resultPillText: {

    fontSize: 16,

    color: '#000000',

  },

  historyScroll: {

    flex: 1,

  },

  historyItem: {

    marginBottom: 15,

  },

  historyEquation: {

    fontSize: 18,

    color: '#8E8E93',

  },

  historyResult: {

    fontSize: 24,

    color: '#007AFF',

    fontWeight: 'bold',

  },

  clearHistoryButton: {

    backgroundColor: '#007AFF',

    borderRadius: 10,

    padding: 15,

    alignItems: 'center',

  },

  clearHistoryText: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  operatorContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  operatorButton: {

    backgroundColor: '#4A4A4A',

    width: 60,

    height: 60,

    borderRadius: 30,

    justifyContent: 'center',

    alignItems: 'center',

  },

  operatorButtonText: {

    color: '#FFFFFF',

    fontSize: 24,

    fontWeight: 'bold',

  },

});



export default ShowHistoryScreen;