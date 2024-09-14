import React from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity, Image } from 'react-native';

const Objects = ({ navigation }) => {
  const objectTypes = [
    { icon: 'vertical-line', name: 'Vertical Line' },
    { icon: 'horizontal-line', name: 'Horizontal Line' },
    { icon: 'trendline', name: 'Trendline' },
    { icon: 'angle', name: 'Angle' },
    { icon: 'fibonacci', name: 'Fibonacci' },
    { icon: 'arrow', name: 'Arrow' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Charts')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </Pressable>
        <Text style={styles.headerTitle}>Objects</Text>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addObjectButton}>
        <Text style={styles.addObjectText}>Add Object</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.chevronIcon} />
      </TouchableOpacity>

      <View style={styles.objectTypesContainer}>
        {objectTypes.map((object, index) => (
          <TouchableOpacity key={index} style={styles.objectTypeButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.objectTypeIcon} />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.instructionText}>
        Long tap the object on the chart to edit or delete it
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  addObjectButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  addObjectText: {
    color: '#fff',
    fontSize: 16,
  },
  chevronIcon: {
    width: 16,
    height: 16,
    tintColor: '#fff',
  },
  objectTypesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  objectTypeButton: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
  },
  objectTypeIcon: {
    width: 24,
    height: 24,
    tintColor: '#0080ff',
  },
  instructionText: {
    color: '#888',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Objects;