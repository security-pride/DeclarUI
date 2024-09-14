import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConnectToComputerScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = (pageId) => {
    navigation.navigate(pageId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Connect to Computer</Text>
      </View>
      <View style={styles.content}>
        <Image source={require('../assets/snack-icon.png')} style={styles.circularElement} />
        <Text style={styles.waitingText}>Waiting...</Text>
        <Text style={styles.instructions}>Open your computer browser and enter below</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handleNavigation('Connections')}>
        <Text style={styles.buttonText}>Go to Connections</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleNavigation('HomeGrid')}>
        <Text style={styles.buttonText}>Go to HomeGrid</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleNavigation('Recents')}>
        <Text style={styles.buttonText}>Go to Recents</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularElement: {
    width: 150,
    height: 150,
  },
  waitingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  instructions: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ConnectToComputerScreen;