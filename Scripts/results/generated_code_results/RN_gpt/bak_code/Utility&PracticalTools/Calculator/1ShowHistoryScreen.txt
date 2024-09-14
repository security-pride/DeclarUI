import React from 'react';
import { View, Text, StyleSheet, Image, Button, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ShowHistoryScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Switch style={styles.toggle} />
        <Text style={styles.toggleText}>Switch to Dark</Text>
      </View>
      <View style={styles.display}>
        <Text style={styles.operation}>45 × 24</Text>
        <Text style={styles.result}>1080</Text>
      </View>
      <View style={styles.calculationArea}>
        <Image source={require('../assets/snack-icon.png')} style={styles.clockIcon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.expandIcon} />
        <View style={styles.calculationDisplay}>
          <Text style={styles.calculationText}>45 × 24</Text>
          <Text style={styles.equalsText}>= 1080</Text>
          <Text style={styles.calculationText}>25 × 2</Text>
          <Text style={styles.equalsText}>= 50</Text>
        </View>
        <View style={styles.buttons}>
          <Button title="/" onPress={() => {}} color="#9E4AFF" />
          <Button title="x" onPress={() => {}} color="#9E4AFF" />
          <Button title="-" onPress={() => {}} color="#9E4AFF" />
          <Button title="+" onPress={() => {}} color="#9E4AFF" />
          <Button title="=" onPress={() => {}} color="#FF0090" />
        </View>
      </View>
      <Button 
        title="Clear History" 
        onPress={() => navigation.navigate('ClearHistory')} 
        color="#FFFFFF" 
        style={styles.clearButton} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5D9F2',
    padding: 20,
    position: 'relative'
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggle: {
    marginRight: 10,
  },
  toggleText: {
    fontSize: 18,
    color: '#FF0090',
  },
  display: {
    backgroundColor: '#F0F0F0',
    padding: 20,
    marginVertical: 20,
    borderRadius: 10,
  },
  operation: {
    fontSize: 24,
    color: '#666666',
  },
  result: {
    fontSize: 48,
    color: '#222222',
  },
  calculationArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clockIcon: {
    width: 30,
    height: 30,
  },
  expandIcon: {
    width: 30,
    height: 30,
  },
  calculationDisplay: {
    flex: 1,
    marginHorizontal: 10,
  },
  calculationText: {
    fontSize: 18,
    color: '#333333',
  },
  equalsText: {
    fontSize: 20,
    color: '#333333',
  },
  buttons: {
    justifyContent: 'space-between',
    height: 300,
  },
  clearButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#FF0090',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
  },
});

export default ShowHistoryScreen;