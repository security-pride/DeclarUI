import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Booking.com</Text>
        <Icon name="notifications-outline" size={24} color="#fff" />
      </View>
      
      <View style={styles.searchBox}>
        <View style={styles.inputRow}>
          <Icon name="search-outline" size={20} style={styles.icon} />
          <TextInput style={styles.input} placeholder="周围地区" />
        </View>
        <View style={styles.inputRow}>
          <Icon name="calendar-outline" size={20} style={styles.icon} />
          <TextInput style={styles.input} placeholder="7月18日 周四 - 7月19日 周五" />
        </View>
        <View style={styles.inputRow}>
          <Icon name="person-outline" size={20} style={styles.icon} />
          <TextInput style={styles.input} placeholder="1间房・2位成人・无儿童" />
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>搜索</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <Text style={styles.suggestionTitle}>临时起意?</Text>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image source={require('../assets/snack-icon.png')} style={styles.image} />
            <Text style={styles.cardTitle}>AC Hotel by Marriott Manchester</Text>
            <Text style={styles.cardDistance}>8,540公里</Text>
            <Text style={styles.cardPrice}>£160</Text>
          </View>
          
          <View style={styles.card}>
            <Image source={require('../assets/snack-icon.png')} style={styles.image} />
            <Text style={styles.cardTitle}>Maldron Hotel Manchester</Text>
            <Text style={styles.cardDistance}>8,541公里</Text>
            <Text style={styles.cardPrice}>£150</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#005bac',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBox: {
    margin: 16,
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    padding: 16,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#f0c808',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    borderBottomWidth: 1,
    flex: 1,
    fontSize: 16,
    paddingBottom: 4,
  },
  searchButton: {
    backgroundColor: '#005bac',
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  suggestionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  card: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    overflow: 'hidden',
  },
  image: {
    height: 100,
    width: '100%',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 8,
  },
  cardDistance: {
    fontSize: 12,
    paddingHorizontal: 8,
    color: '#666',
  },
  cardPrice: {
    fontSize: 16,
    paddingHorizontal: 8,
    paddingBottom: 8,
    color: '#000',
  },
});

export default SearchScreen;