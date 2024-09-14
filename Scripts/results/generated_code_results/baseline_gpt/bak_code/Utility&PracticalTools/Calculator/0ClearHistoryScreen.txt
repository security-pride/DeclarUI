import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ClearHistoryScreen = () => {
  const [isLightMode, setIsLightMode] = React.useState(false);

  const toggleSwitch = () => setIsLightMode(previousState => !previousState);

  return (
    <View style={[styles.container, { backgroundColor: isLightMode ? '#f0f0f0' : '#1c1c1c' }]}>
      <View style={styles.header}>
        <Switch 
          onValueChange={toggleSwitch}
          value={isLightMode}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isLightMode ? '#f5dd4b' : '#f4f3f4'}
        />
        <Text style={styles.switchText}>Switch to {isLightMode ? 'Dark' : 'Light'}</Text>
      </View>
      <Text style={styles.calculation}>45 × 24</Text>
      <Text style={styles.result}>1080</Text>
      <View style={styles.separator} />
      <View style={styles.historyContainer}>
        <Icon name="time-outline" size={40} color="#888" />
        <Text style={styles.noHistoryText}>No history yet...</Text>
      </View>
      <TouchableOpacity style={styles.clearButton}>
        <Text style={styles.clearButtonText}>Clear Histroy</Text>
      </TouchableOpacity>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.functionButton}>
          <Icon name="timer-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.functionButton}>
          <Icon name="expand-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.functionButton}>
          <Text style={styles.buttonLabel}>1080</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.functionButton}>
          <Icon name="close-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.operationsContainer}>
        {['/', 'x', '-', '+', '='].map(op => (
          <TouchableOpacity key={op} style={styles.operationButton}>
            <Text style={styles.operationText}>{op}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchText: {
    color: '#fff',
    marginLeft: 10,
  },
  calculation: {
    color: '#aaa',
    fontSize: 24,
    marginVertical: 5,
  },
  result: {
    color: '#fff',
    fontSize: 64,
    fontWeight: 'bold',
  },
  separator: {
    height: 2,
    backgroundColor: '#ff007f',
    alignSelf: 'stretch',
    marginVertical: 20,
  },
  historyContainer: {
    width: 180,
    height: 140,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  noHistoryText: {
    color: '#888',
    marginTop: 10,
  },
  clearButton: {
    backgroundColor: '#555',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 20,
  },
  clearButtonText: {
    color: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  functionButton: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  operationsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  operationButton: {
    backgroundColor: '#5e3aee',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
  },
  operationText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default ClearHistoryScreen;