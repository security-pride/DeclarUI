import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const FilterScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.applyText}>Apply</Text>
      </View>
      <ScrollView>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>FILTER BY ORDER TYPE</Text>
        </View>
        {['Orders', 'Not Yet Dispatched', 'Local shops', 'Cancelled'].map((item, index) => (
          <View key={index} style={styles.optionRow}>
            <Icon name="circle-outline" size={24} color="#000" />
            <Text style={styles.optionText}>{item}</Text>
          </View>
        ))}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>FILTER BY ORDER DATE</Text>
        </View>
        {['Last 30 days', 'Last 3 months', '2024', '2023', '2022', '2021'].map((item, index) => (
          <View key={index} style={styles.optionRow}>
            <Icon name={item === 'Last 3 months' ? 'circle-slice-8' : 'circle-outline'} size={24} color={item === 'Last 3 months' ? '#007185' : '#000'} />
            <Text style={styles.optionText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.applyButton} onPress={() => navigation.navigate('Orders')}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
      <View style={styles.bottomNav}>
        {['home', 'account', 'cart', 'menu'].map((iconName, index) => (
          <TouchableOpacity key={index} style={styles.bottomNavItem} onPress={() => { if(iconName === 'home') navigation.navigate('Home'); }}>
            <Icon name={iconName} size={30} color="#000" />
          </TouchableOpacity>
        ))}
      </View>
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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  applyText: {
    fontSize: 16,
    color: '#007185',
  },
  sectionHeader: {
    marginTop: 20,
    paddingLeft: 20,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007185',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
  },
  applyButton: {
    backgroundColor: '#f3e5ab',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 60,
  },
  applyButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  bottomNavItem: {
    alignItems: 'center',
  },
});

export default FilterScreen;