import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ExpandedViewShowHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Switch value={false} onValueChange={() => {}} />
        <Text style={styles.switchLabel}>Switch to Dark</Text>
        <Text style={styles.headerText}>45 x 24</Text>
        <Text style={styles.headerResult}>1080</Text>
      </View>

      <View style={styles.calculatorSection}>
        <View style={styles.history}>
          <Icon name="time-outline" size={24} color="#725ac1" />
          <View style={styles.historyContent}>
            <Text style={styles.historyText}>45 × 24</Text>
            <Text style={styles.historyResult}>= 1080</Text>
            <Text>25 × 2</Text>
            <Text>50</Text>
          </View>
          <TouchableOpacity style={styles.clearHistoryButton}>
            <Text style={styles.clearHistoryText}>Clear History</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keyboard}>
          {renderButton('C')}
          {renderButton('(')}
          {renderButton(')')}
          {renderButton('%')}
          {renderButton('/')}
          {renderButton('7')}
          {renderButton('8')}
          {renderButton('9')}
          {renderButton('x')}
          {renderButton('4')}
          {renderButton('5')}
          {renderButton('6')}
          {renderButton('-')}
          {renderButton('1')}
          {renderButton('2')}
          {renderButton('3')}
          {renderButton('+')}
          {renderButton('+/-')}
          {renderButton('0')}
          {renderButton('.')}
          <TouchableOpacity style={styles.equalsButton}>
            <Text style={styles.equalsButtonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const renderButton = (label) => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    padding: 16,
    backgroundColor: '#D1C4E9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switchLabel: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  headerText: {
    fontSize: 18,
    color: '#555',
  },
  headerResult: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
  calculatorSection: {
    flex: 1,
    backgroundColor: '#CE93D8',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  history: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  historyContent: {
    flex: 1,
    marginLeft: 8,
  },
  historyText: {
    fontSize: 16,
    color: '#333',
  },
  historyResult: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A148C',
  },
  clearHistoryButton: {
    backgroundColor: '#F3E5F5',
    padding: 8,
    borderRadius: 8,
  },
  clearHistoryText: {
    fontSize: 14,
    color: '#333',
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  button: {
    width: '22%',
    backgroundColor: '#D1C4E9',
    margin: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A148C',
  },
  equalsButton: {
    width: '22%',
    backgroundColor: '#AB47BC',
    margin: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  equalsButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default ExpandedViewShowHistoryScreen;