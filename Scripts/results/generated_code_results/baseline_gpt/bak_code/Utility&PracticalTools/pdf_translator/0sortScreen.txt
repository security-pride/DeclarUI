import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const sortOptions = [
  { id: '1', label: 'Date (new to old)', selected: true },
  { id: '2', label: 'Date (old to new)', selected: false },
  { id: '3', label: 'Size (large to small)', selected: false },
  { id: '4', label: 'Size (small to large)', selected: false },
  { id: '5', label: 'Name (from A to Z)', selected: false },
  { id: '6', label: 'Name (from Z to A)', selected: false }
];

const sortScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [selectedOption, setSelectedOption] = useState(sortOptions.find(option => option.selected)?.id);

  const handleOptionSelect = (id) => {
    setSelectedOption(id);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sort by</Text>
            <FlatList
              data={sortOptions}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.optionContainer} onPress={() => handleOptionSelect(item.id)}>
                  <Text style={styles.optionText}>{item.label}</Text>
                  {item.id === selectedOption && (
                    <Icon name="check" size={20} color="#007AFF" style={styles.checkIcon} />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
    justifyContent: 'space-between'
  },
  optionText: {
    fontSize: 16
  },
  checkIcon: {
    marginLeft: 10
  }
});

export default sortScreen;