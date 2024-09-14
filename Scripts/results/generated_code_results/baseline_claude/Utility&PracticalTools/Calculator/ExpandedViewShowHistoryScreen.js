import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Switch, ScrollView, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ExpandedViewShowHistoryScreen = () => {

  const [isLightMode, setIsLightMode] = useState(true);

  const [result, setResult] = useState('1080');

  const [equation, setEquation] = useState('45 × 24');

  const navigation = useNavigation();



  const toggleSwitch = () => setIsLightMode(previousState => !previousState);



  const handleNumberPress = (number) => {

    setResult(prevResult => prevResult === '1080' ? number : prevResult + number);

  };



  const handleOperatorPress = (operator) => {

    // Implement operator logic here

  };



  const handleEquals = () => {

    // Implement calculation logic here

  };



  const handleClear = () => {

    setResult('0');

    setEquation('');

  };



  const handleClearHistory = () => {

    // Implement clear history logic here

    navigation.navigate('ClearHistory');

  };



  const handleCollapse = () => {

    navigation.navigate('DefaultView');

  };



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



      <View style={styles.expandedContainer}>

        <View style={styles.historyHeader}>

          <TouchableOpacity onPress={() => navigation.navigate('ShowHistory')}>

            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

          </TouchableOpacity>

          <TouchableOpacity onPress={handleCollapse}>

            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

          </TouchableOpacity>

        </View>

        <ScrollView style={styles.historyScroll}>

          <View style={styles.historyItem}>

            <Text style={styles.historyEquation}>45 × 24</Text>

            <Text style={styles.historyResult}>= 1080</Text>

          </View>

          <View style={styles.historyItem}>

            <Text style={styles.historyEquation}>25 × 2</Text>

            <Text style={styles.historyResult}>= 50</Text>

          </View>

        </ScrollView>

        <TouchableOpacity style={styles.clearHistoryButton} onPress={handleClearHistory}>

          <Text style={styles.clearHistoryText}>Clear History</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.keypad}>

        {['C', '()', '%', '/', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '+/-', '0', '.', '='].map((key, index) => (

          <TouchableOpacity

            key={index}

            style={[

              styles.key,

              ['/', '×', '-', '+', '='].includes(key) ? styles.operatorKey : null,

              key === '=' ? styles.equalsKey : null

            ]}

            onPress={() => {

              if (key === 'C') handleClear();

              else if (key === '=') handleEquals();

              else if (['/', '×', '-', '+'].includes(key)) handleOperatorPress(key);

              else handleNumberPress(key);

            }}

          >

            <Text style={[

              styles.keyText,

              ['/', '×', '-', '+', '='].includes(key) ? styles.operatorKeyText : null,

              key === '=' ? styles.equalsKeyText : null

            ]}>{key}</Text>

          </TouchableOpacity>

        ))}

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

    marginBottom: 10,

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

    marginBottom: 10,

  },

  equation: {

    fontSize: 20,

    marginBottom: 5,

  },

  result: {

    fontSize: 36,

    fontWeight: 'bold',

  },

  expandedContainer: {

    flex: 1,

    backgroundColor: '#E6E6FA',

    borderRadius: 10,

    padding: 10,

    marginBottom: 10,

  },

  historyHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 10,

  },

  icon: {

    width: 24,

    height: 24,

  },

  historyScroll: {

    flex: 1,

  },

  historyItem: {

    marginBottom: 10,

  },

  historyEquation: {

    fontSize: 18,

    color: '#6A5ACD',

  },

  historyResult: {

    fontSize: 22,

    fontWeight: 'bold',

    color: '#4B0082',

  },

  clearHistoryButton: {

    backgroundColor: '#8A2BE2',

    padding: 10,

    borderRadius: 5,

    alignItems: 'center',

  },

  clearHistoryText: {

    color: '#FFFFFF',

    fontSize: 16,

  },

  keypad: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

  },

  key: {

    width: '22%',

    aspectRatio: 1,

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    marginBottom: 10,

  },

  keyText: {

    fontSize: 24,

    color: '#000000',

  },

  operatorKey: {

    backgroundColor: '#4A0E8C',

  },

  operatorKeyText: {

    color: '#FFFFFF',

  },

  equalsKey: {

    backgroundColor: '#FF1493',

  },

  equalsKeyText: {

    color: '#FFFFFF',

  },

});



export default ExpandedViewShowHistoryScreen;