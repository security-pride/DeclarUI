import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

const selectScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PDF file management</Text>

      <View style={styles.fileListItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.pdfIcon} />
        <View style={styles.fileDetails}>
          <Text style={styles.fileName}>Travel plan_America.pdf</Text>
          <Text style={styles.fileMeta}>Oct 22,2022  98KB</Text>
        </View>
        <Pressable style={styles.menuIcon} onPress={() => navigation.navigate('more')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.ellipsisIcon} />
        </Pressable>
      </View>

      <View style={styles.conversionOptions}>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>DOC TO PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
          <Text style={styles.optionText}>IMG TO PDF</Text>
        </TouchableOpacity>
      </View>

      <Pressable style={styles.newFileButton} onPress={() => navigation.navigate('select')}>
        <Text style={styles.newFileButtonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  fileListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 8,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  pdfIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  fileDetails: {
    flex: 1,
  },
  fileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fileMeta: {
    fontSize: 14,
    color: '#666',
  },
  menuIcon: {
    padding: 10,
  },
  ellipsisIcon: {
    width: 20,
    height: 20,
  },
  conversionOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    position: 'absolute',
    bottom: 80,
    left: '10%',
    right: '10%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  optionButton: {
    alignItems: 'center',
  },
  optionIcon: {
    width: 50,
    height: 50,
  },
  optionText: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },
  newFileButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  newFileButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default selectScreen;