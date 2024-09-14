import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ClearHistoryView = () => {
const [isDarkMode, setIsDarkMode] = useState(true);
const navigation = useNavigation();
const toggleTheme = () => {
setIsDarkMode(!isDarkMode);
if (!isDarkMode) {
navigation.navigate('DefaultView');
}
};
const handleEqualPress = () => {
// Perform calculation logic here
};
const handleClearHistory = () => {
// Clear history logic here
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
<Text style={[styles.switchLabel, isDarkMode ? styles.lightText : styles.darkText]}>
Switch to Light
</Text>
</View>
  <Text style={[styles.display, isDarkMode ? styles.lightText : styles.darkText]}>1080</Text>

  <View style={styles.buttonRow}>
    <TouchableOpacity style={styles.button}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.button1080}>
      <Text style={styles.buttonText}>1080</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
    </TouchableOpacity>
  </View>

  <View style={styles.buttonGrid}>
    <TouchableOpacity style={styles.operationButton}>
      <Text style={styles.buttonText}>/</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.operationButton}>
      <Text style={styles.buttonText}>x</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.operationButton}>
      <Text style={styles.buttonText}>-</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.operationButton}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.equalButton} onPress={handleEqualPress}>
    <Text style={styles.buttonText}>=</Text>
  </TouchableOpacity>

  <View style={styles.historySection}>
    <Text style={[styles.historyText, isDarkMode ? styles.lightText : styles.darkText]}>
      No history yet...
    </Text>
  </View>

  <TouchableOpacity style={styles.clearHistoryButton} onPress={handleClearHistory}>
    <Text style={styles.buttonText}>Clear History</Text>
  </TouchableOpacity>
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
display: {
fontSize: 48,
textAlign: 'right',
marginBottom: 20,
},
buttonRow: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 20,
},
button: {
width: 50,
height: 50,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#3D3D3D',
borderRadius: 25,
},
button1080: {
width: 80,
height: 50,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#3D3D3D',
borderRadius: 25,
},
buttonGrid: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 20,
},
operationButton: {
width: 70,
height: 70,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#FF9500',
borderRadius: 35,
},
equalButton: {
width: '100%',
height: 70,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#FF9500',
borderRadius: 35,
marginBottom: 20,
},
buttonText: {
color: '#FFFFFF',
fontSize: 24,
},
historySection: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
borderWidth: 1,
borderColor: '#3D3D3D',
borderRadius: 10,
marginBottom: 20,
},
historyText: {
fontSize: 18,
},
clearHistoryButton: {
width: '100%',
height: 50,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#3D3D3D',
borderRadius: 25,
},
icon: {
width: 24,
height: 24,
},
lightText: {
color: '#FFFFFF',
},
darkText: {
color: '#000000',
},
});
export default ClearHistoryView;