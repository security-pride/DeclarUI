import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ShowHistory = () => {
const [isDarkMode, setIsDarkMode] = useState(false);
const [history, setHistory] = useState([
{ expression: '45 × 24', result: '1080' },
{ expression: '25 × 2', result: '50' }
]);
const navigation = useNavigation();
const toggleTheme = () => {
setIsDarkMode(prev => !prev);
};
const handleClearHistory = () => {
navigation.navigate('ClearHistory');
};
const handleOperatorPress = (operator) => {
// Implement operator logic here
console.log(Operator ${operator} pressed);
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
  <Text style={[styles.equation, isDarkMode ? styles.darkText : styles.lightText]}>45 × 24</Text>
  <Text style={[styles.display, isDarkMode ? styles.darkText : styles.lightText]}>1080</Text>

  <View style={styles.historyContainer}>
    {history.map((item, index) => (
      <View key={index} style={styles.historyItem}>
        <Text style={[styles.historyExpression, isDarkMode ? styles.darkText : styles.lightText]}>
          {item.expression}
        </Text>
        <Text style={[styles.historyResult, isDarkMode ? styles.darkText : styles.lightText]}>
          = {item.result}
        </Text>
      </View>
    ))}
  </View>

  <View style={styles.operatorContainer}>
    <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorPress('/')}>
      <Text style={styles.operatorText}>/</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorPress('x')}>
      <Text style={styles.operatorText}>x</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorPress('-')}>
      <Text style={styles.operatorText}>-</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorPress('+')}>
      <Text style={styles.operatorText}>+</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.equalButton} onPress={() => handleOperatorPress('=')}>
      <Text style={styles.operatorText}>=</Text>
    </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.clearHistoryButton} onPress={handleClearHistory}>
    <Text style={styles.clearHistoryText}>Clear History</Text>
  </TouchableOpacity>

  <View style={styles.footer}>
    <TouchableOpacity onPress={() => {}}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('ExpandedView-ShowHistory')}>
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
historyContainer: {
flex: 1,
marginBottom: 20,
},
historyItem: {
marginBottom: 10,
},
historyExpression: {
fontSize: 18,
textAlign: 'right',
},
historyResult: {
fontSize: 24,
textAlign: 'right',
fontWeight: 'bold',
},
operatorContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 20,
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
backgroundColor: '#FF45FF',
borderRadius: 5,
margin: 5,
},
operatorText: {
fontSize: 24,
color: '#FFFFFF',
},
clearHistoryButton: {
backgroundColor: '#E0E0E0',
padding: 15,
borderRadius: 25,
alignItems: 'center',
marginBottom: 20,
},
clearHistoryText: {
fontSize: 18,
color: '#000000',
},
footer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
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
buttonText: {
color: '#FFFFFF',
fontSize: 16,
},
darkText: {
color: '#FFFFFF',
},
lightText: {
color: '#000000',
},
});
export default ShowHistory;