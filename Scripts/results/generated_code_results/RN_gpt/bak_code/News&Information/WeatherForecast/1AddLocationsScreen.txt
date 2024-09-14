import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, StatusBar, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const AddLocationsScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/snack-icon.png')} style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={styles.topBar}>
        <Text style={styles.time}>7:11</Text>
        <Icon name="battery" size={20} color="#fff" />
        <Icon name="circle" size={20} color="#000000" />
      </View>
      <View style={styles.header}>
        <Icon name="menu" size={30} color="#fff" />
        <Text style={styles.title}>Add location</Text>
        <Icon name="map-marker-plus" size={30} color="#fff" />
      </View>
      <View style={styles.lockScreenContainer}>
        <Icon name="lock" size={24} color="#fff" />
        <Text style={styles.lockScreenText}>Lock screen</Text>
        <Switch style={styles.lockScreenSwitch} />
      </View>
      <View style={styles.addLocationContainer}>
        <Button
          title="Click to add location"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  time: {
    color: '#fff',
    fontSize: 18,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lockScreenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  lockScreenText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  lockScreenSwitch: {
    marginLeft: 'auto',
  },
  addLocationContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    alignSelf: 'stretch',
    margin: 10,
    borderRadius: 5,
  },
});

export default AddLocationsScreen;