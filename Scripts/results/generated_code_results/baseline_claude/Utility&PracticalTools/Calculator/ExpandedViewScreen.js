import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ExpandedViewScreen = () => {

  const [isLightMode, setIsLightMode] = useState(true);

  const [result, setResult] = useState('1080');

  const [equation, setEquation] = useState('45 × 24');

  const navigation = useNavigation();



  const toggleSwitch = () => setIsLightMode(previousState => !previousState);



  const handleButtonPress = (value) => {

    // Implement button press logic here

  };



  const handleClear = () => {

    setResult('0');

    setEquation('');

  };



  const handleEquals = () => {

    // Implement calculation logic here

  };



  const handleHistoryPress = () => {

    navigation.navigate('ShowHistory');

  };



  const handleCollapsePress = () => {

    navigation.navigate('DefaultView');

  };



  const renderButton = (label, isWide = false, isOperator = false) => (

    <TouchableOpacity

      style={[

        styles.button,

        isWide && styles.wideButton,

        isOperator && styles.operatorButton

      ]}

      onPress={() => handleButtonPress(label)}

    >

      <Text style={[

        styles.buttonText,

        isOperator && styles.operatorButtonText

      ]}>

        {label}

      </Text>

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



      <View style={styles.topBar}>

        <TouchableOpacity onPress={handleHistoryPress}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={handleCollapsePress}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

        <View style={styles.resultPill}>

          <Text style={styles.resultPillText}>{result}</Text>

        </View>

        <TouchableOpacity onPress={handleClear}>

          <Text style={styles.clearText}>×</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.keypad}>

        <View style={styles.row}>

          {renderButton('↺')}

          {renderButton('Deg/Rad', true)}

          {renderButton('√')}

          {renderButton('C')}

        </View>

        <View style={styles.row}>

          {renderButton('(')}

          {renderButton(')')}

          {renderButton('%')}

          {renderButton('/', false, true)}

        </View>

        <View style={styles.row}>

          {renderButton('sin')}

          {renderButton('cos')}

          {renderButton('tan')}

          {renderButton('7')}

          {renderButton('8')}

          {renderButton('9')}

          {renderButton('×', false, true)}

        </View>

        <View style={styles.row}>

          {renderButton('log10')}

          {renderButton('log')}

          {renderButton('1/x')}

          {renderButton('4')}

          {renderButton('5')}

          {renderButton('6')}

          {renderButton('-', false, true)}

        </View>

        <View style={styles.row}>

          {renderButton('eⁿ')}

          {renderButton('x²')}

          {renderButton('xⁿ')}

          {renderButton('1')}

          {renderButton('2')}

          {renderButton('3')}

          {renderButton('+', false, true)}

        </View>

        <View style={styles.row}>

          {renderButton('|x|')}

          {renderButton('π')}

          {renderButton('e')}

          {renderButton('+/-')}

          {renderButton('0')}

          {renderButton('.')}

          {renderButton('=', false, true)}

        </View>

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

  topBar: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 20,

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

  clearText: {

    fontSize: 24,

    color: '#8E8E93',

  },

  keypad: {

    flex: 1,

  },

  row: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 10,

  },

  button: {

    flex: 1,

    aspectRatio: 1,

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    marginHorizontal: 5,

  },

  wideButton: {

    flex: 2,

    aspectRatio: 2,

  },

  operatorButton: {

    backgroundColor: '#4A4A4C',

  },

  buttonText: {

    fontSize: 18,

    color: '#000000',

  },

  operatorButtonText: {

    color: '#FFFFFF',

  },

});



export default ExpandedViewScreen;