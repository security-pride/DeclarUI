import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const PillIdentifierScreen = () => {

  const navigation = useNavigation();

  const [selectedShape, setSelectedShape] = useState(null);



  const shapes = [

    { name: 'Round', image: '../assets/round.png' },

    { name: 'Oblong', image: '../assets/oblong.png' },

    { name: '3 Sided', image: '../assets/3sided.png' },

    { name: 'Square', image: '../assets/square.png' },

    { name: 'Rectangle', image: '../assets/rectangle.png' },

    { name: 'Diamond', image: '../assets/diamond.png' },

    { name: '5 Sided', image: '../assets/5sided.png' },

    { name: '6 Sided', image: '../assets/6sided.png' },

    { name: '7 Sided', image: '../assets/7sided.png' },

    { name: '8 Sided', image: '../assets/8sided.png' },

    { name: 'Other', image: '../assets/other.png' },

  ];



  const handleShapeSelect = (shape) => {

    setSelectedShape(shape);

  };



  const handleViewResults = () => {

    navigation.navigate('IdentifyResult');

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={{ uri: '../assets/back-arrow.png' }} style={styles.backArrow} />

        </TouchableOpacity>

        <TextInput

          style={styles.searchInput}

          placeholder="Text or imprint on pill"

          placeholderTextColor="#999"

        />

        <TouchableOpacity>

          <Text style={styles.clearText}>Clear</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.tabContainer}>

        <TouchableOpacity style={[styles.tab, styles.activeTab]}>

          <Text style={[styles.tabText, styles.activeTabText]}>Shape</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>

          <Text style={styles.tabText}>Color</Text>

        </TouchableOpacity>

      </View>



      <Text style={styles.instructionText}>

        Select the shape that best matches your prescription or OTC drug

      </Text>



      <ScrollView contentContainerStyle={styles.shapeContainer}>

        {shapes.map((shape, index) => (

          <TouchableOpacity

            key={index}

            style={[

              styles.shapeItem,

              selectedShape === shape.name && styles.selectedShape,

            ]}

            onPress={() => handleShapeSelect(shape.name)}

          >

            <Image source={{ uri: shape.image }} style={styles.shapeImage} />

            <Text style={styles.shapeName}>{shape.name}</Text>

          </TouchableOpacity>

        ))}

      </ScrollView>



      <TouchableOpacity

        style={styles.viewResultsButton}

        onPress={handleViewResults}

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

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  backArrow: {

    width: 24,

    height: 24,

    marginRight: 16,

  },

  searchInput: {

    flex: 1,

    height: 40,

    backgroundColor: '#f0f0f0',

    borderRadius: 20,

    paddingHorizontal: 16,

  },

  clearText: {

    color: '#007AFF',

    marginLeft: 16,

  },

  tabContainer: {

    flexDirection: 'row',

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  tab: {

    flex: 1,

    alignItems: 'center',

    paddingVertical: 16,

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#007AFF',

  },

  tabText: {

    fontSize: 16,

    color: '#999',

  },

  activeTabText: {

    color: '#007AFF',

  },

  instructionText: {

    fontSize: 16,

    textAlign: 'center',

    marginVertical: 16,

    paddingHorizontal: 16,

  },

  shapeContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    paddingHorizontal: 16,

  },

  shapeItem: {

    width: '30%',

    aspectRatio: 1,

    alignItems: 'center',

    justifyContent: 'center',

    marginBottom: 16,

    borderWidth: 1,

    borderColor: '#e0e0e0',

    borderRadius: 8,

  },

  selectedShape: {

    borderColor: '#007AFF',

    backgroundColor: '#E6F2FF',

  },

  shapeImage: {

    width: '60%',

    height: '60%',

    resizeMode: 'contain',

  },

  shapeName: {

    marginTop: 8,

    fontSize: 12,

    textAlign: 'center',

  },

  viewResultsButton: {

    backgroundColor: '#007AFF',

    marginHorizontal: 16,

    marginBottom: 16,

    paddingVertical: 16,

    borderRadius: 8,

    alignItems: 'center',

  },

  viewResultsText: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

});



export default PillIdentifierScreen;