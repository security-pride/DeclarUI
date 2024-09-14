import React from 'react';
import { View, Text, Button, Image, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const ExpandedViewShowHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Switch value={false} />
        <Text style={styles.switchText}>Switch to Dark</Text>
        <Text style={styles.expressionText}>45 × 24</Text>
        <Text style={styles.resultText}>1080</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.iconWrapper}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </View>
        <View style={styles.historyDisplay}>
          <Text style={styles.historyText}>45 × 24</Text>
          <Text style={styles.equalText}>= 1080</Text>
        </View>
        <Button title="Clear History" onPress={() => {}} />
        <View style={styles.keypad}>
          <View style={styles.row}>
            <Button title="C" onPress={() => {}} />
            <Button title="()" onPress={() => {}} />
            <Button title="%" onPress={() => {}} />
            <Button title="/" onPress={() => {}} />
          </View>
          <View style={styles.row}>
            <Button title="7" onPress={() => {}} />
            <Button title="8" onPress={() => {}} />
            <Button title="9" onPress={() => {}} />
            <TouchableOpacity style={styles.pinkButton} onPress={() => {}}>
              <Text style={styles.buttonText}>x</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Button title="4" onPress={() => {}} />
            <Button title="5" onPress={() => {}} />
            <Button title="6" onPress={() => {}} />
            <Button title="-" onPress={() => {}} />
          </View>
          <View style={styles.row}>
            <Button title="1" onPress={() => {}} />
            <Button title="2" onPress={() => {}} />
            <Button title="3" onPress={() => {}} />
            <Button title="+" onPress={() => {}} />
          </View>
          <View style={styles.row}>
            <Button title="+/-" onPress={() => {}} />
            <Button title="0" onPress={() => {}} />
            <Button title="." onPress={() => {}} />
            <TouchableOpacity style={styles.pinkButton} onPress={() => {}}>
              <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E794FF',
  },
  header: {
    backgroundColor: '#EDEDED',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switchText: {
    marginLeft: 10,
    color: '#000',
  },
  expressionText: {
    color: '#777',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  body: {
    flex: 1,
    padding: 20,
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  historyDisplay: {
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  historyText: {
    color: '#555',
  },
  equalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  keypad: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  pinkButton: {
    backgroundColor: '#FF69B4',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ExpandedViewShowHistoryScreen;