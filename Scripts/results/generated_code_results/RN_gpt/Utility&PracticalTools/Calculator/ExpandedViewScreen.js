import React from 'react';
import { View, Text, Image, Button, Switch, StyleSheet } from 'react-native';

const ExpandedViewScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Switch style={styles.toggleSwitch} />
        <Text style={styles.switchLabel}>Switch to Dark</Text>
      </View>
      <View style={styles.indicatorSection}>
        <Text style={styles.indicatorText}>45 × 24</Text>
        <Text style={styles.resultText}>1080</Text>
      </View>
      <View style={styles.navBar}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      </View>
      <View style={styles.buttonGrid}>
        <Button title="sin" onPress={() => {}} color="#841584" />
        <Button title="cos" onPress={() => {}} color="#841584" />
        <Button title="tan" onPress={() => {}} color="#841584" />
        <Button title="7" onPress={() => {}} color="white" />
        <Button title="8" onPress={() => {}} color="white" />
        <Button title="9" onPress={() => {}} color="white" />
        <Button title="÷" onPress={() => {}} color="#8e44ad" />
        <Button title="log10" onPress={() => {}} color="#841584" />
        <Button title="log" onPress={() => {}} color="#841584" />
        <Button title="1/x" onPress={() => {}} color="white" />
        <Button title="4" onPress={() => {}} color="white" />
        <Button title="5" onPress={() => {}} color="white" />
        <Button title="6" onPress={() => {}} color="white" />
        <Button title="×" onPress={() => {}} color="#8e44ad" />
        <Button title="eⁿ" onPress={() => {}} color="#841584" />
        <Button title="x²" onPress={() => {}} color="#841584" />
        <Button title="xⁿ" onPress={() => {}} color="#841584" />
        <Button title="1" onPress={() => {}} color="white" />
        <Button title="2" onPress={() => {}} color="white" />
        <Button title="3" onPress={() => {}} color="white" />
        <Button title="−" onPress={() => {}} color="#8e44ad" />
        <Button title="|x|" onPress={() => {}} color="#841584" />
        <Button title="π" onPress={() => {}} color="#841584" />
        <Button title="e" onPress={() => {}} color="#841584" />
        <Button title="+/−" onPress={() => {}} color="white" />
        <Button title="0" onPress={() => {}} color="white" />
        <Button title="." onPress={() => {}} color="white" />
        <Button title="+" onPress={() => {}} color="#8e44ad" />
        <Button title="=" onPress={() => { navigation.navigate('ExpandedView-ShowHistory'); }} color="#e74c3c" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9E9',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  toggleSwitch: {
    marginRight: 10,
  },
  switchLabel: {
    fontSize: 16,
    color: '#000',
  },
  indicatorSection: {
    padding: 20,
    alignItems: 'flex-end',
  },
  indicatorText: {
    fontSize: 18,
    color: '#555',
  },
  resultText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#d0a9f5',
  },
  icon: {
    width: 24,
    height: 24,
  },
  buttonGrid: {
    flex: 1,
    padding: 10,
    backgroundColor: '#d1c4e9',
    justifyContent: 'space-around',
  },
});

export default ExpandedViewScreen;