import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#FFFFFF" />
        <TextInput 
          style={styles.searchInput}
          placeholder="Search exercises"
          placeholderTextColor="#AAAAAA"
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#EA742E' }]}>
          <Text style={styles.buttonText}>Meditate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#4B3B9A' }]}>
          <Text style={styles.buttonText}>Sleep</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#C667CE' }]}>
          <Text style={styles.buttonText}>Move</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#339ECF' }]}>
          <Text style={styles.buttonText}>Music</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.largeButton, { backgroundColor: '#FFDF00' }]}>
        <Text style={styles.largeButtonText}>Podcasts</Text>
      </TouchableOpacity>

      {/* Free Trial */}
      <View style={styles.trialContainer}>
        <Text style={styles.trialText}>Unlock the Headspace Library</Text>
        <TouchableOpacity style={styles.trialButton}>
          <Text style={styles.trialButtonText}>Start My Free Trial</Text>
        </TouchableOpacity>
      </View>

      {/* Additional Content */}
      <TouchableOpacity style={[styles.largeButton, { backgroundColor: '#FB87C5' }]}>
        <Text style={styles.largeButtonText}>Politics Without Panic</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.largeButton, { backgroundColor: '#3993DB' }]}>
        <Text style={styles.largeButtonText}>Calming Everyday Anxiety</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070A1A',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10142D',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#FFFFFF',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  largeButton: {
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  largeButtonText: {
    color: '#070A1A',
    fontSize: 18,
    fontWeight: 'bold',
  },
  trialContainer: {
    backgroundColor: '#242945',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  trialText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
  },
  trialButton: {
    backgroundColor: '#395BD7',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  trialButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExploreScreen;