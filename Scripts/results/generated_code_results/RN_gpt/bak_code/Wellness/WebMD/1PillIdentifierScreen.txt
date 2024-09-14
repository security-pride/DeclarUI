import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PillIdentifierScreen = () => {
  const navigation = useNavigation();

  const handleShapePress = (shape) => {
    // Navigate to IdentifyResult screen or any other action based on shape selection
    navigation.navigate('IdentifyResult', { shape });
  };

  const handleViewResults = () => {
    // Navigate to Home or IdentifyResult based on the requirement
    navigation.navigate('IdentifyResult');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Text or imprint on pill"
        />
        <Button title="Clear" onPress={() => {}} />
      </View>

      <View style={styles.tabContainer}>
        <Text style={styles.activeTab}>Shape</Text>
        <Text style={styles.inactiveTab}>Color</Text>
      </View>

      <Text style={styles.instructionText}>
        Select the shape that best matches your prescription or OTC drug
      </Text>

      <View style={styles.shapeContainer}>
        {shapeOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.shapeButton}
            onPress={() => handleShapePress(option)}
          >
            <Image source={require('../assets/snack-icon.png')} style={styles.shapeIcon} />
            <Text style={styles.shapeLabel}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.viewResultsButton} onPress={handleViewResults}>
        <Text style={styles.viewResultsText}>View Results</Text>
      </TouchableOpacity>
    </View>
  );
};

const shapeOptions = [
  'Round',
  'Oblong',
  '3 Sided',
  'Square',
  'Rectangle',
  'Diamond',
  '5 Sided',
  '6 Sided',
  '7 Sided',
  '8 Sided',
  'Other'
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
  },
  activeTab: {
    flex: 1,
    textAlign: 'center',
    color: '#000',
    paddingBottom: 4,
    borderBottomWidth: 2,
    borderColor: '#000',
  },
  inactiveTab: {
    flex: 1,
    textAlign: 'center',
    color: '#ccc',
    paddingBottom: 4,
  },
  instructionText: {
    textAlign: 'center',
    marginBottom: 16,
    color: '#666',
  },
  shapeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  shapeButton: {
    alignItems: 'center',
    marginBottom: 16,
    width: 80,
  },
  shapeIcon: {
    width: 50,
    height: 50,
  },
  shapeLabel: {
    marginTop: 8,
    color: '#666',
  },
  viewResultsButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
  },
  viewResultsText: {
    color: '#fff',
  },
});

export default PillIdentifierScreen;