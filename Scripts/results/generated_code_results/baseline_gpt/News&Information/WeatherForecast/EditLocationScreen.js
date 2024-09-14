import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EditLocationScreen = () => {
  const [isAutomatic, setIsAutomatic] = React.useState(false);

  const toggleSwitch = () => setIsAutomatic(previousState => !previousState);

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit location</Text>
      </View>

      {/* Add Location Section */}
      <View style={styles.addLocation}>
        <Icon name="add" size={24} color="#ffffff" />
        <Text style={styles.addLocationText}>Add location</Text>
      </View>

      {/* Current Location Section */}
      <View style={styles.currentLocation}>
        <Text style={styles.currentLocationText}>Current location</Text>
      </View>

      {/* Automatic Detection Section */}
      <View style={styles.automaticDetection}>
        <Icon name="location-outline" size={20} color="#ffffff" />
        <Text style={styles.automaticDetectionText}>Automatic detection</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isAutomatic ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isAutomatic}
        />
      </View>

      {/* Footer with Information Text */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          In some places, the function of automatic detection does not work well. 
          For example: Found location is very far from your real location. In that 
          case you can turn off automatic detection, then add your city manually 
          by searching with name of your city.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a3c54',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1d5c7f',
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    color: '#ffffff',
  },
  addLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#415a70',
  },
  addLocationText: {
    fontSize: 16,
    color: '#ffffff',
    marginLeft: 8,
  },
  currentLocation: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#415a70',
  },
  currentLocationText: {
    fontSize: 16,
    color: '#b0c2c7',
  },
  automaticDetection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  automaticDetectionText: {
    fontSize: 16,
    color: '#b0c2c7',
    flex: 1,
    marginLeft: 8,
  },
  footer: {
    backgroundColor: '#1d5c7f',
    padding: 16,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerText: {
    fontSize: 12,
    color: '#ffffff',
  },
});

export default EditLocationScreen;