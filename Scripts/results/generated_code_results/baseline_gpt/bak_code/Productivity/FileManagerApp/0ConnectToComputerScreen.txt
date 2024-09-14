import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ConnectToComputerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Connect to Computer</Text>
      </View>

      <View style={styles.mainContent}>
        <Image source={require('../assets/snack-icon.png')} style={styles.image} />
        <Text style={styles.waitingText}>Waiting…</Text>
        <Text style={styles.instructionsText}>Open your computer browser and enter below</Text>
      </View>

      <TouchableOpacity style={styles.urlButton}>
        <Text style={styles.urlText}>http://john-312-ru</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
  },
  header: {
    width: '100%',
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  waitingText: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
  },
  instructionsText: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
    textAlign: 'center',
  },
  urlButton: {
    backgroundColor: '#3D6DCC',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 40,
  },
  urlText: {
    fontSize: 16,
    color: '#FFFFFF',
  }
});

export default ConnectToComputerScreen;