import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const FilterScreen = () => {

  const navigation = useNavigation();

  const [orderTypeFilter, setOrderTypeFilter] = useState('Orders');

  const [orderDateFilter, setOrderDateFilter] = useState('Last 3 months');



  const renderFilterOption = (title, isSelected, onPress) => (

    <TouchableOpacity style={styles.filterOption} onPress={onPress}>

      <View style={[styles.radioButton, isSelected && styles.radioButtonSelected]}>

        {isSelected && <View style={styles.radioButtonInner} />}

      </View>

      <Text style={styles.filterOptionText}>{title}</Text>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

          <Text style={styles.backButtonText}>&lt;</Text>

        </TouchableOpacity>

        <View style={styles.searchBar}>

          <TextInput

            style={styles.searchInput}

            placeholder="Search Amazon.co.uk"

            placeholderTextColor="#888"

          />

          <TouchableOpacity style={styles.cameraButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.micButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.subHeader}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Text style={styles.backText}>Back</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.applyButton} onPress={()=> {navigation.navigate('Orders')}}>

          <Text style={styles.applyButtonText}>Apply</Text>

        </TouchableOpacity>

      </View>



      <ScrollView style={styles.content}>

        <View style={styles.filterSection}>

          <Text style={styles.filterSectionTitle}>FILTER BY ORDER TYPE</Text>

          {renderFilterOption('Orders', orderTypeFilter === 'Orders', () => setOrderTypeFilter('Orders'))}

          {renderFilterOption('Not Yet Dispatched', orderTypeFilter === 'Not Yet Dispatched', () => setOrderTypeFilter('Not Yet Dispatched'))}

          {renderFilterOption('Local shops', orderTypeFilter === 'Local shops', () => setOrderTypeFilter('Local shops'))}

          {renderFilterOption('Cancelled', orderTypeFilter === 'Cancelled', () => setOrderTypeFilter('Cancelled'))}

        </View>



        <View style={styles.filterSection}>

          <Text style={styles.filterSectionTitle}>FILTER BY ORDER DATE</Text>

          {renderFilterOption('Last 30 days', orderDateFilter === 'Last 30 days', () => setOrderDateFilter('Last 30 days'))}

          {renderFilterOption('Last 3 months', orderDateFilter === 'Last 3 months', () => setOrderDateFilter('Last 3 months'))}

          {renderFilterOption('2024', orderDateFilter === '2024', () => setOrderDateFilter('2024'))}

          {renderFilterOption('2023', orderDateFilter === '2023', () => setOrderDateFilter('2023'))}

          {renderFilterOption('2022', orderDateFilter === '2022', () => setOrderDateFilter('2022'))}

          {renderFilterOption('2021', orderDateFilter === '2021', () => setOrderDateFilter('2021'))}

        </View>

      </ScrollView>



      <TouchableOpacity style={styles.applyButtonBottom} onPress={()=> {navigation.navigate('Orders')}}>

        <Text style={styles.applyButtonText}>Apply</Text>

      </TouchableOpacity>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={()=> {navigation.navigate('Home')}}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]} onPress={()=> {navigation.navigate('Account')}}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={()=> {navigation.navigate('Orders')}}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={()=> {navigation.navigate('Profile')}}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f0f0f0',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#9cebd5',

  },

  backButton: {

    paddingRight: 10,

  },

  backButtonText: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: 'white',

    borderRadius: 5,

    paddingHorizontal: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

  },

  icon: {

    width: 20,

    height: 20,

  },

  subHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

    backgroundColor: 'white',

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  backText: {

    fontSize: 16,

    color: '#007185',

  },

  applyButton: {

    backgroundColor: '#FFD814',

    paddingVertical: 6,

    paddingHorizontal: 12,

    borderRadius: 20,

  },

  applyButtonText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  content: {

    flex: 1,

  },

  filterSection: {

    backgroundColor: 'white',

    marginBottom: 10,

    padding: 15,

  },

  filterSectionTitle: {

    fontSize: 14,

    fontWeight: 'bold',

    marginBottom: 10,

    color: '#555',

  },

  filterOption: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 15,

  },

  radioButton: {

    width: 20,

    height: 20,

    borderRadius: 10,

    borderWidth: 2,

    borderColor: '#555',

    marginRight: 10,

    justifyContent: 'center',

    alignItems: 'center',

  },

  radioButtonSelected: {

    borderColor: '#008296',

  },

  radioButtonInner: {

    width: 10,

    height: 10,

    borderRadius: 5,

    backgroundColor: '#008296',

  },

  filterOptionText: {

    fontSize: 16,

  },

  applyButtonBottom: {

    backgroundColor: '#FFD814',

    padding: 15,

    alignItems: 'center',

    marginHorizontal: 15,

    marginBottom: 15,

    borderRadius: 5,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    backgroundColor: 'white',

  },

  tabItem: {

    flex: 1,

    alignItems: 'center',

    paddingVertical: 10,

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#009987',

  },

  tabIcon: {

    width: 24,

    height: 24,

  },

});



export default FilterScreen;