import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TrendsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#999" />
          <TextInput style={styles.searchInput} placeholder="Search Twitter" />
        </View>
        <Icon name="settings-outline" size={24} color="#1DA1F2" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Trends for you</Text>
        <Text style={styles.noTrendsText}>No new trends for you</Text>
        <Text style={styles.description}>It seems like there’s not a lot to show you right now, but you can see trends for other areas</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change location</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.floatingButton}>
        <Icon name="add-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 8,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E8ED',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: '#E1E8ED',
    borderRadius: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 5,
    height: 30,
    fontSize: 14,
  },
  content: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noTrendsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#657786',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1DA1F2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1DA1F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TrendsScreen;