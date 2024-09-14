import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DefaultView = () => {
const [isDarkMode, setIsDarkMode] = useState(false);
const [displayValue, setDisplayValue] = useState('1080');
const [equation, setEquation] = useState('45 × 24');
const navigation = useNavigation();
const handleNumberPress = (number) => {
setDisplayValue(prev => prev === '0' ? number : prev + number);
};
const handleOperatorPress = (operator) => {
setDisplayValue(prev => prev + operator);
};
const handleClear = () => {
setDisplayValue('0');
setEquation('');
};
const handleEquals = () => {
try {
const result = eval(displayValue);
setEquation(displayValue);
setDisplayValue(result.toString());
} catch (error) {
setDisplayValue('Error');
}
};
const handleExpandPress = () => {
navigation.navigate('ExpandedView');
};
const toggleTheme = () => {
setIsDarkMode(prev => !prev);
};
return (
<View style={[styles.container, isDarkMode ? styles.darkMode : styles.lightMode]}>
<View style={styles.header}>
<Switch
value={isDarkMode}
onValueChange={toggleTheme}
trackColor={{ false: "#767577", true: "#81b0ff" }}
thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
/>
<Text style={[styles.switchLabel, isDarkMode ? styles.darkText : styles.lightText]}>
Switch to Dark
</Text>
</View>
  <Text style={[styles.equation, isDarkMode ? styles.darkText : styles.lightText]}>{equation}</Text>
  <Text style={[styles.display, isDarkMode ? styles.darkText : styles.lightText]}>{displayValue}</Text>

  <View style={styles.buttonContainer}>
    <View style={styles.row}>
      <TouchableOpacity style={styles.button} onPress={() => handleClear()}>
        <Text style={styles.buttonText}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('()')}>
        <Text style={styles.buttonText}>()</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('%')}>
        <Text style={styles.buttonText}>%</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorPress('/')}>
        <Text style={styles.buttonText}>/</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.row}>
      <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('7')}>
        <Text style={styles.buttonText}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('8')}>
        <Text style={styles.buttonText}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('9')}>
        <Text style={styles.buttonText}>9</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorPress('*')}>
        <Text style={styles.buttonText}>x</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.row}>
      <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('4')}>
        <Text style={styles.buttonText}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('5')}>
        <Text style={styles.buttonText}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('6')}>
        <Text style={styles.buttonText}>6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorPress('-')}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.row}>
      <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('1')}>
        <Text style={styles.buttonText}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('2')}>
        <Text style={styles.buttonText}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('3')}>
        <Text style={styles.buttonText}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorPress('+')}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.row}>
      <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('+/-')}>
        <Text style={styles.buttonText}>+/-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('0')}>
        <Text style={styles.buttonText}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('.')}>
        <Text style={styles.buttonText}>.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.equalButton} onPress={() => handleEquals()}>
        <Text style={styles.buttonText}>=</Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.footer}>
    <TouchableOpacity onPress={() => {}}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={handleExpandPress}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.button1080}>
      <Text style={styles.buttonText}>1080</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
},
darkMode: {
backgroundColor: '#1E1E1E',
},
lightMode: {
backgroundColor: '#FFFFFF',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 20,
},
switchLabel: {
fontSize: 16,
},
equation: {
fontSize: 24,
textAlign: 'right',
marginBottom: 10,
},
display: {
fontSize: 48,
textAlign: 'right',
marginBottom: 20,
},
buttonContainer: {
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
backgroundColor: '#F0F0F0',
borderRadius: 5,
margin: 5,
},
operatorButton: {
flex: 1,
aspectRatio: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#FF9500',
borderRadius: 5,
margin: 5,
},
equalButton: {
flex: 1,
aspectRatio: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#FF9500',
borderRadius: 5,
margin: 5,
},
buttonText: {
fontSize: 24,
color: '#000000',
},
footer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginTop: 20,
},
icon: {
width: 24,
height: 24,
},
button1080: {
paddingHorizontal: 15,
paddingVertical: 10,
backgroundColor: '#3D3D3D',
borderRadius: 20,
},
darkText: {
color: '#FFFFFF',
},
lightText: {
color: '#000000',
},
});
export default DefaultView;