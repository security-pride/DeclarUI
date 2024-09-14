import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const MoreScreen = () => {

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);



  const showModal = (file) => {

    setSelectedFile(file);

    setModalVisible(true);

  };



  const renderPDFItem = (file) => (

    <TouchableOpacity style={styles.pdfItem} onPress={() => showModal(file)}>

      <Image source={require('../assets/snack-icon.png')} style={styles.pdfIcon} />

      <View style={styles.pdfInfo}>

        <Text style={styles.pdfName}>{file.name}</Text>

        <Text style={styles.pdfDetails}>{`${file.date}    ${file.size}`}</Text>

      </View>

      <TouchableOpacity style={styles.moreButton}>

        <Text style={styles.moreButtonText}>...</Text>

      </TouchableOpacity>

    </TouchableOpacity>

  );



  const renderModal = () => (

    <Modal

      animationType="slide"

      transparent={true}

      visible={modalVisible}

      onRequestClose={() => setModalVisible(false)}

    >

      <View style={styles.modalOverlay}>

        <View style={styles.modalContent}>

          {selectedFile && renderPDFItem(selectedFile)}

          <TouchableOpacity style={styles.modalOption} onPress={() => { /* Handle Share */ }}>

            <Image source={require('../assets/snack-icon.png')} style={styles.modalIcon} />

            <Text style={styles.modalOptionText}>Share</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.modalOption} onPress={() => { /* Handle Rename */ }}>

            <Image source={require('../assets/snack-icon.png')} style={styles.modalIcon} />

            <Text style={styles.modalOptionText}>Rename</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.modalOption} onPress={() => { /* Handle Delete */ }}>

            <Image source={require('../assets/snack-icon.png')} style={styles.modalIcon} />

            <Text style={styles.modalOptionText}>Delete</Text>

          </TouchableOpacity>

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

        <TouchableOpacity onPress={() => navigation.navigate('More')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

        </TouchableOpacity>

      </View>

      <View style={styles.content}>

        {renderPDFItem({ name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' })}

        {renderPDFItem({ name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' })}

        {renderPDFItem({ name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' })}

        {renderPDFItem({ name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' })}

        {renderPDFItem({ name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' })}

      </View>

      {renderModal()}

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

  content: {

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

  modalOverlay: {

    flex: 1,

    justifyContent: 'flex-end',

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },

  modalContent: {

    backgroundColor: '#FFFFFF',

    borderTopLeftRadius: 20,

    borderTopRightRadius: 20,

    padding: 16,

  },

  modalOption: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  modalIcon: {

    width: 24,

    height: 24,

    marginRight: 16,

  },

  modalOptionText: {

    fontSize: 16,

  },

});



export default MoreScreen;