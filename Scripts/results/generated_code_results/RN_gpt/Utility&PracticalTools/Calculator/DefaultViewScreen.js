import React from 'react';
import { View, Text, StyleSheet, Button, Pressable, Switch, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DefaultViewScreen = () => {
  const navigation = useNavigation();

  const handleRedirect = () => {
    navigation.navigate('ExpandedView');
  };

  return (
    <View style={styles.container}>

      <View style={styles.topBar}>
        <Switch />
        <Text style={styles.switchText}>Switch to Dark</Text>
      </View>

      <View style={styles.display}>
        <Text style={styles.equation}>45 × 24</Text>
        <Text style={styles.result}>1080</Text>
      </View>

      <View style={styles.iconRow}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.memoryButton}>1080</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      </View>

      <View style={styles.keypad}>
        <View style={styles.row}>
          <Pressable style={styles.button}><Text>C</Text></Pressable>
          <Pressable style={styles.button}><Text>()</Text></Pressable>
          <Pressable style={styles.button}><Text>%</Text></Pressable>
          <Pressable style={styles.operatorButton}><Text>/</Text></Pressable>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.button}><Text>7</Text></Pressable>
          <Pressable style={styles.button}><Text>8</Text></Pressable>
          <Pressable style={styles.button}><Text>9</Text></Pressable>
          <Pressable style={styles.operatorButton}><Text>x</Text></Pressable>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.button}><Text>4</Text></Pressable>
          <Pressable style={styles.button}><Text>5</Text></Pressable>
          <Pressable style={styles.button}><Text>6</Text></Pressable>
          <Pressable style={styles.operatorButton}><Text>-</Text></Pressable>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.button}><Text>1</Text></Pressable>
          <Pressable style={styles.button}><Text>2</Text></Pressable>
          <Pressable style={styles.button}><Text>3</Text></Pressable>
          <Pressable style={styles.operatorButton}><Text>+</Text></Pressable>
        </View>
        <View style={styles.row}>
          <Pressable style={styles.buttonDouble}><Text>+/-</Text></Pressable>
          <Pressable style={styles.button}><Text>0</Text></Pressable>
          <Pressable style={styles.button}><Text>.</Text></Pressable>
          <Pressable style={styles.equalsButton} onPress={handleRedirect}><Text>=</Text></Pressable>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    padding: 20,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  switchText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  display: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  equation: {
    fontSize: 20,
    color: '#000',
  },
  result: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  memoryButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  keypad: {
    backgroundColor: 'lavender',
    borderRadius: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    margin: 5,
  },
  buttonDouble: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    flex: 2,
    alignItems: 'center',
    margin: 5,
  },
  operatorButton: {
    backgroundColor: 'purple',
    padding: 20,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    margin: 5,
    color: '#fff',
  },
  equalsButton: {
    backgroundColor: '#ff00ff',
    padding: 20,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    margin: 5,
    color: '#fff',
  },
});

export default DefaultViewScreen;