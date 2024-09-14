import React from 'react';
import { View, Text, StyleSheet, Button, Switch, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EditLocationScreen = () => {
  const navigation = useNavigation();

  const handleAddLocation = () => {
    // Navigate to the Setting page
    navigation.navigate('Setting');
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.clock}>7:11</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
      </View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Edit location</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddLocation}>
        <Image source={require('../assets/snack-icon.png')} style={styles.addIcon} />
        <Text style={styles.addText}>Add location</Text>
      </TouchableOpacity>
      <View style={styles.section}>
        <Text style={styles.sectionText}>Current location</Text>
      </View>
      <View style={styles.section}>
        <Image source={require('../assets/snack-icon.png')} style={styles.locationIcon} />
        <Text style={styles.switchText}>Automatic detection</Text>
        <Switch style={styles.switch} />
      </View>
      <Text style={styles.infoText}>
        In some places, the function of automatic detection does not work well. For example: Found location is very far from your real location. In that case you can turn off automatic detection, then add your city manually by searching with name of your city
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#083F5C',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clock: {
    color: '#FFFFFF',
  },
  icon: {
    width: 20,
    height: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    color: '#CFE9F1',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  addIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  addText: {
    fontSize: 18,
    color: '#CFE9F1',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  sectionText: {
    fontSize: 18,
    color: '#CFE9F1',
    flex: 1,
  },
  locationIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  switchText: {
    flex: 1,
    fontSize: 18,
    color: '#CFE9F1',
  },
  switch: {
    transform: [{ scale: 1.2 }],
  },
  infoText: {
    fontSize: 14,
    color: '#CFE9F1',
    marginTop: 30,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});

export default EditLocationScreen;