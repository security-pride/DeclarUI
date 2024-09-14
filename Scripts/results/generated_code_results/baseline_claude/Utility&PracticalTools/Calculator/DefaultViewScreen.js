import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const DefaultViewScreen = () => {

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



  const handleExpand = () => {

    navigation.navigate('ExpandedView');

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



      <View style={styles.buttonRow}>

        <TouchableOpacity onPress={handleExpand} style={styles.iconButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

        <View style={styles.resultPill}>

          <Text style={styles.resultPillText}>{result}</Text>

        </View>

        <TouchableOpacity style={styles.iconButton}>

          <Text style={styles.closeIcon}>×</Text>

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

    marginBottom: 5,

  },

  result: {

    fontSize: 48,

    fontWeight: 'bold',

  },

  buttonRow: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 20,

  },

  iconButton: {

    padding: 10,

  },

  icon: {

    width: 24,

    height: 24,

  },

  resultPill: {

    backgroundColor: '#3A3A3C',

    borderRadius: 20,

    paddingVertical: 5,

    paddingHorizontal: 15,

  },

  resultPillText: {

    color: '#FFFFFF',

    fontSize: 18,

  },

  closeIcon: {

    fontSize: 24,

    color: '#8E8E93',

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

    backgroundColor: '#4A4A4C',

  },

  operatorKeyText: {

    color: '#FFFFFF',

  },

  equalsKey: {

    backgroundColor: '#FF9500',

  },

  equalsKeyText: {

    color: '#FFFFFF',

  },

});



export default DefaultViewScreen;