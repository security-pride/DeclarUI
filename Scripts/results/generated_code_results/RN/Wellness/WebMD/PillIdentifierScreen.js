import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PillIdentifierScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedShape, setSelectedShape] = useState(null);
  const navigation = useNavigation();

  const shapes = [
    { name: 'Round', icon: '../assets/round_icon.png' },
    { name: 'Oblong', icon: '../assets/oblong_icon.png' },
    { name: '3 Sided', icon: '../assets/3sided_icon.png' },
    { name: 'Square', icon: '../assets/square_icon.png' },
    { name: 'Rectangle', icon: '../assets/rectangle_icon.png' },
    { name: 'Diamond', icon: '../assets/diamond_icon.png' },
    { name: '5 Sided', icon: '../assets/5sided_icon.png' },
    { name: '6 Sided', icon: '../assets/6sided_icon.png' },
    { name: '7 Sided', icon: '../assets/7sided_icon.png' },
    { name: '8 Sided', icon: '../assets/8sided_icon.png' },
    { name: 'Other', icon: '../assets/other_icon.png' },
  ];

  const handleShapeSelection = (shape) => {
    setSelectedShape(shape);
  };

  const handleViewResults = () => {
    navigation.navigate('IdentifyResult', { shape: selectedShape, searchText });
  };

  const handleBackPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.backIcon} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          placeholder="Text or imprint on pill"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={() => setSearchText('')}>
          <Text style={styles.clearButton}>Clear</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <Text style={[styles.tabText, styles.activeTab]}>Shape</Text>
        <Text style={styles.tabText}>Color</Text>
      </View>

      <ScrollView>
        <Text style={styles.instructionText}>
          Select the shape that best matches your prescription or OTC drug
        </Text>

        <View style={styles.shapeGrid}>
          {shapes.map((shape) => (
            <TouchableOpacity
              key={shape.name}
              style={[
                styles.shapeButton,
                selectedShape === shape.name && styles.selectedShape,
              ]}
              onPress={() => handleShapeSelection(shape.name)}
            >
              <Image source={{ uri: shape.icon }} style={styles.shapeIcon} />
              <Text style={styles.shapeText}>{shape.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity
        style={[styles.viewResultsButton, !selectedShape && styles.disabledButton]}
        onPress={handleViewResults}
        disabled={!selectedShape}
      >
        <Text style={styles.viewResultsText}>View Results</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  clearButton: {
    color: '#007AFF',
    marginLeft: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tabText: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 16,
  },
  activeTab: {
    color: '#007AFF',
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  instructionText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  shapeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  shapeButton: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  selectedShape: {
    backgroundColor: '#e6f2ff',
    borderRadius: 10,
  },
  shapeIcon: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  shapeText: {
    fontSize: 14,
    textAlign: 'center',
  },
  viewResultsButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    margin: 20,
    borderRadius: 10,
  },
  disabledButton: {
    backgroundColor: '#cccccc',
  },
  viewResultsText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PillIdentifierScreen;