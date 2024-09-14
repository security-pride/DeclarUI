import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DefaultViewScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{ false: '#767577', true: '#f4f3f4' }}
          thumbColor={'#f50057'}
          ios_backgroundColor="#3e3e3e"
          value={false}
          onValueChange={() => {}}
        />
        <Text style={styles.switchText}>Switch to Dark</Text>
      </View>
      <View style={styles.displayContainer}>
        <Text style={styles.operationText}>45 × 24</Text>
        <Text style={styles.resultText}>1080</Text>
      </View>
      <View style={styles.historyContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="time-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="resize-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.historyText}>1080</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="close-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        {[
          ['C', '()', '%', '/'],
          ['7', '8', '9', 'x'],
          ['4', '5', '6', '-'],
          ['1', '2', '3', '+'],
          ['+/-', '0', '.', '=']
        ].map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button, buttonIndex) => (
              <TouchableOpacity
                key={buttonIndex}
                style={[
                  styles.button,
                  button === '=' && styles.equalsButton,
                  (button === '/' || button === 'x' || button === '-' || button === '+' || button === '=') && styles.operatorButton
                ]}
                onPress={() => {}}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f7',
    padding: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchText: {
    marginLeft: 10,
    color: '#444',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  operationText: {
    fontSize: 20,
    color: '#999',
  },
  resultText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#222',
  },
  historyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  iconButton: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#ba68c8',
  },
  historyText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  button: {
    width: '22%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  operatorButton: {
    backgroundColor: '#6a1b9a',
  },
  equalsButton: {
    backgroundColor: '#f50057',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default DefaultViewScreen;