import React, { useState } from 'react';

import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, SafeAreaView, Modal } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SortScreen = () => {

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const [sortOption, setSortOption] = useState('Date (new to old)');



  const pdfData = [

    { id: '1', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '2', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '3', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '4', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '5', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '6', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

    { id: '7', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },

  ];



  const sortOptions = [

    'Date (new to old)',

    'Date (old to new)',

    'Size (large to small)',

    'Size (small to large)',

    'Name (from A to Z)',

    'Name (from Z to A)',

  ];



  const renderPDFItem = ({ item }) => (

    <View style={styles.pdfItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.pdfIcon} />

      <View style={styles.pdfInfo}>

        <Text style={styles.pdfName}>{item.name}</Text>

        <Text style={styles.pdfDetails}>{`${item.date}    ${item.size}`}</Text>

      </View>

      <TouchableOpacity style={styles.moreButton}>

        <Text style={styles.moreButtonText}>...</Text>

      </TouchableOpacity>

    </View>

  );



  const renderSortModal = () => (

    <Modal

      animationType="slide"

      transparent={true}

      visible={modalVisible}

      onRequestClose={() => setModalVisible(false)}

    >

      <View style={styles.modalOverlay}>

        <View style={styles.modalContent}>

          <Text style={styles.modalTitle}>Sort by</Text>

          {sortOptions.map((option) => (

            <TouchableOpacity

              key={option}

              style={styles.sortOption}

              onPress={() => {

                setSortOption(option);

                setModalVisible(false);

              }}

            >

              <Text style={[

                styles.sortOptionText,

                option === sortOption && styles.selectedSortOptionText

              ]}>

                {option}

              </Text>

              {option === sortOption && (

                <Image source={require('../assets/snack-icon.png')} style={styles.checkIcon} />

              )}

            </TouchableOpacity>

          ))}

        </View>

      </View>

    </Modal>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>PDF file management</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => setModalVisible(true)}>

          <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

        </TouchableOpacity>

      </View>

      <FlatList

        data={pdfData}

        renderItem={renderPDFItem}

        keyExtractor={item => item.id}

        style={styles.list}

      />

      <TouchableOpacity style={styles.addButton} onPress={() => {/* Handle add button press */}}>

        <Text style={styles.addButtonText}>+</Text>

      </TouchableOpacity>

      {renderSortModal()}

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFFFFF',

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  headerIcon: {

    width: 24,

    height: 24,

  },

  list: {

    flex: 1,

  },

  pdfItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 16,

    marginBottom: 1,

  },

  pdfIcon: {

    width: 40,

    height: 40,

    marginRight: 16,

  },

  pdfInfo: {

    flex: 1,

  },

  pdfName: {

    fontSize: 16,

    fontWeight: '500',

  },

  pdfDetails: {

    fontSize: 14,

    color: '#888888',

  },

  moreButton: {

    padding: 8,

  },

  moreButtonText: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  addButton: {

    position: 'absolute',

    right: 16,

    bottom: 16,

    width: 56,

    height: 56,

    borderRadius: 28,

    backgroundColor: '#FF0000',

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 4,

  },

  addButtonText: {

    fontSize: 32,

    color: '#FFFFFF',

  },

  modalOverlay: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },

  modalContent: {

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    padding: 20,

    width: '80%',

  },

  modalTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 16,

  },

  sortOption: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingVertical: 12,

  },

  sortOptionText: {

    fontSize: 16,

  },

  selectedSortOptionText: {

    color: '#007AFF',

  },

  checkIcon: {

    width: 20,

    height: 20,

  },

});



export default SortScreen;