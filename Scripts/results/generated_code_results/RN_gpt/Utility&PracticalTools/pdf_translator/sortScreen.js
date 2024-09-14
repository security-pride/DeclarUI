import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, FlatList, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const sortScreen = () => {
  const navigation = useNavigation();

  const pdfFiles = [
    { id: '1', name: 'Travel plan_America.pdf', date: 'Oct 22, 2022', size: '98KB' },
    { id: '2', name: 'Travel plan_America.pdf', date: 'Oct 22, 2022', size: '98KB' },
    { id: '3', name: 'Travel plan_America.pdf', date: 'Oct 22, 2022', size: '98KB' },
  ];

  const handleHomeRedirect = () => {
    navigation.navigate('home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PDF file management</Text>
      <FlatList
        data={pdfFiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.fileItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.pdfIcon} />
            <View style={styles.fileDetails}>
              <Text>{item.name}</Text>
              <Text>{item.date}     {item.size}</Text>
            </View>
            <TouchableOpacity style={styles.optionButton}>
              <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleHomeRedirect}>
        <Image source={require('../assets/snack-icon.png')} style={styles.addIcon} />
      </TouchableOpacity>

      <Modal visible={true} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sort by</Text>
            <Pressable onPress={() => {}}>
              <Text style={styles.selectedOption}>Date (new to old)</Text>
            </Pressable>
            <Pressable onPress={() => {}}>
              <Text>Date (old to new)</Text>
            </Pressable>
            <Pressable onPress={() => {}}>
              <Text>Size (large to small)</Text>
            </Pressable>
            <Pressable onPress={() => {}}>
              <Text>Size (small to large)</Text>
            </Pressable>
            <Pressable onPress={() => {}}>
              <Text>Name (from A to Z)</Text>
            </Pressable>
            <Pressable onPress={() => {}}>
              <Text>Name (from Z to A)</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  pdfIcon: {
    width: 32,
    height: 32,
    marginRight: 16,
  },
  fileDetails: {
    flex: 1,
  },
  optionButton: {
    marginLeft: 16,
  },
  optionIcon: {
    width: 24,
    height: 24,
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    width: 24,
    height: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  selectedOption: {
    color: 'blue',
    marginBottom: 8,
  },
});

export default sortScreen;