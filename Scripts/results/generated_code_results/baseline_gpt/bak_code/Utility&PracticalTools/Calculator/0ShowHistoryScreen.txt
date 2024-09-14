import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ShowHistoryScreen = () => {

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Switch value={false} />
        <Text style={styles.darkModeText}>Switch to Dark</Text>
        <Text style={styles.calcResultSmall}>45 × 24</Text>
        <Text style={styles.calcResultLarge}>1080</Text>
      </View>

      {/* History Section */}
      <View style={styles.historyContainer}>
        <View style={styles.historyTopBar}>
          <Icon name="time-outline" size={24} color="#FFFFFF" />
          <Icon name="resize-outline" size={24} color="#FFFFFF" />
          <TouchableOpacity>
            <Text style={styles.historyActiveTab}>1080</Text>
          </TouchableOpacity>
          <Icon name="close-outline" size={24} color="#FFFFFF" />
        </View>

        {/* History Items */}
        <ScrollView style={styles.historyItems}>
          <View style={styles.historyItem}>
            <Text style={styles.calcHistoryText}>45 × 24</Text>
            <Text style={styles.calcHistoryResult}>= 1080</Text>
          </View>
          <View style={styles.historyItem}>
            <Text style={styles.calcHistoryText}>25 × 2</Text>
            <Text style={styles.calcHistoryResult}>= 50</Text>
          </View>
        </ScrollView>

        {/* Calculator Buttons */}
        <View style={styles.buttonsContainer}>
          <Text style={styles.button}>/</Text>
          <Text style={styles.button}>x</Text>
          <Text style={styles.button}>-</Text>
          <Text style={styles.button}>+</Text>
          <TouchableOpacity style={styles.equalButton}>
            <Text style={styles.equalButtonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Clear History Button */}
      <TouchableOpacity style={styles.clearHistoryButton}>
        <Text style={styles.clearHistoryText}>Clear History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE6FF',
  },
  header: {
    backgroundColor: '#F7F7F9',
    padding: 20,
    alignItems: 'flex-start',
  },
  darkModeText: {
    color: '#FF00A2',
    marginLeft: 10,
    marginBottom: 20,
  },
  calcResultSmall: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
  },
  calcResultLarge: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
  },
  historyContainer: {
    flex: 1,
    backgroundColor: '#CFBFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  historyTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  historyActiveTab: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  historyItems: {
    flex: 1,
    backgroundColor: '#C3B2FF',
    borderRadius: 10,
    padding: 10,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  calcHistoryText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  calcHistoryResult: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#914CEA',
    padding: 15,
    borderRadius: 10,
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  equalButton: {
    backgroundColor: '#FF00A2',
    padding: 15,
    borderRadius: 10,
  },
  equalButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  clearHistoryButton: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 20,
  },
  clearHistoryText: {
    color: '#999',
    fontSize: 18,
  },
});

export default ShowHistoryScreen;