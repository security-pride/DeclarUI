import React from 'react';
import { View, Text, StyleSheet, Button, Switch, TouchableOpacity, Image } from 'react-native';

const ClearHistoryScreen = ({ navigation }) => {
  const handleSwitchToggle = () => {
    // Logic to toggle the theme
    navigation.navigate('DefaultView');
  };

  const handleClearHistory = () => {
    // Logic to clear history
    navigation.navigate('ClearHistory');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.switchText}>Switch to Light</Text>
        <Switch onValueChange={handleSwitchToggle} />
      </View>
      <View style={styles.display}>
        <Text style={styles.calculation}>45 × 24</Text>
        <Text style={styles.result}>1080</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.historySection}>
        <TouchableOpacity onPress={() => navigation.navigate('ShowHistory')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Button title="1080" onPress={() => {}} />
        <Button title="X" onPress={() => {}} />
      </View>
      <View style={styles.historyContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.clockIcon} />
        <Text style={styles.noHistoryText}>No history yet...</Text>
      </View>
      <View style={styles.keypad}>
        <Button title="/" onPress={() => {}} color="#632CA6" />
        <Button title="x" onPress={() => {}} color="#632CA6" />
        <Button title="-" onPress={() => {}} color="#632CA6" />
        <Button title="+" onPress={() => {}} color="#332359" />
        <Button title="=" onPress={() => {}} color="#FF2D55" />
      </View>
      <TouchableOpacity style={styles.clearHistoryButton} onPress={handleClearHistory}>
        <Text style={styles.clearHistoryText}>Clear History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222'
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16
  },
  switchText: {
    color: 'white',
    fontSize: 16
  },
  display: {
    alignItems: 'center',
    marginVertical: 16
  },
  calculation: {
    color: 'white',
    fontSize: 24
  },
  result: {
    color: 'white',
    fontSize: 48
  },
  divider: {
    height: 1,
    backgroundColor: '#FF2D55',
    marginHorizontal: 16
  },
  historySection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 64
  },
  icon: {
    width: 24,
    height: 24
  },
  historyContainer: {
    alignItems: 'center',
    padding: 16
  },
  clockIcon: {
    width: 40,
    height: 40
  },
  noHistoryText: {
    color: 'grey',
    fontSize: 16,
    marginTop: 8
  },
  keypad: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16
  },
  clearHistoryButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    padding: 16,
    backgroundColor: '#333',
    borderRadius: 8,
    alignItems: 'center'
  },
  clearHistoryText: {
    color: 'white',
    fontSize: 16
  }
});

export default ClearHistoryScreen;