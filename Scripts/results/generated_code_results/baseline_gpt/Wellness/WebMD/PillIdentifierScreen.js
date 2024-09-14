import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PillIdentifierScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header with Search bar and Clear button */}
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#000" />
        <TextInput
          style={styles.searchInput}
          placeholder="Text or imprint on pill"
        />
        <TouchableOpacity>
          <Text style={styles.clearButton}>Clear</Text>
        </TouchableOpacity>
      </View>
      
      {/* Navigation Tabs */}
      <View style={styles.tabs}>
        <Text style={styles.activeTab}>Shape</Text>
        <Text style={styles.inactiveTab}>Color</Text>
      </View>

      {/* Instructional Text */}
      <Text style={styles.instructions}>
        Select the shape that best matches your prescription or OTC drug
      </Text>

      {/* Shapes */}
      <ScrollView contentContainerStyle={styles.shapesContainer}>
        {shapes.map((shape) => (
          <TouchableOpacity key={shape.label} style={styles.shapeButton}>
            <View style={[styles.shapeIcon, shape.style]} />
            <Text style={styles.shapeLabel}>{shape.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* View Results Button */}
      <TouchableOpacity style={styles.viewResultsButton}>
        <Text style={styles.viewResultsButtonText}>View Results</Text>
      </TouchableOpacity>
    </View>
  );
};

// Shape data
const shapes = [
  {image: require('../assets/snack-icon.png'),label:'Round'},
  {image: require('../assets/snack-icon.png'),label:'Oblong'},
  {image: require('../assets/snack-icon.png'),label:'3 Sided'},
  {image: require('../assets/snack-icon.png'),label:'Square'},
  {image: require('../assets/snack-icon.png'),label:'Rectangle'},
  {image: require('../assets/snack-icon.png'),label:'Diamond'},
  {image: require('../assets/snack-icon.png'),label:'5 Sided'},
  {image: require('../assets/snack-icon.png'),label:'6 Sided'},
  {image: require('../assets/snack-icon.png'),label:'7 Sided'},
  {image: require('../assets/snack-icon.png'),label:'8 Sided'},
  {image: require('../assets/snack-icon.png'),label:'Other'}
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  clearButton: {
    color: '#007AFF',
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
  },
  activeTab: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
    fontWeight: 'bold',
  },
  inactiveTab: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 8,
    color: '#777',
  },
  instructions: {
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 16,
    color: '#444',
  },
  shapesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  shapeButton: {
    alignItems: 'center',
    marginBottom: 16,
  },
  shapeIcon: {
    width: 50,
    height: 50,
    marginBottom: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  shapeLabel: {
    textAlign: 'center',
  },
  viewResultsButton: {
    alignSelf: 'center',
    backgroundColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderRadius: 5,
  },
  viewResultsButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  // Specific shape styles (for illustrative purposes)
  round: {
    borderRadius: 25,
  },
  oblong: {
    borderRadius: 15,
    width: 70,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 50,
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ccc',
  },
  square: {},
  rectangle: {
    width: 70,
  },
  diamond: {
    transform: [{ rotate: '45deg' }, { scale: 0.7 }],
  },
  pentagon: {},
  hexagon: {},
  heptagon: {},
  octagon: {},
  other: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PillIdentifierScreen;