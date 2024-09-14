import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quark</Text>
      <View style={styles.searchBar}>
        <TextInput style={styles.input} placeholder="Search" placeholderTextColor="#aaa" />
        <TouchableOpacity>
          <Icon name="microphone" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="camera" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconsRow}>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconImage} />
          <Text style={styles.iconText}>夸克日报</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconImage} />
          <Text style={styles.iconText}>精选</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconImage} />
          <Text style={styles.iconText}>夸克学习</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconImage} />
          <Text style={styles.iconText}>夸克扫描王</Text>
        </View>
      </View>
      <View style={styles.iconsRow}>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconImage} />
          <Text style={styles.iconText}>夸克文档</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconImage} />
          <Text style={styles.iconText}>更多</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconImage} />
          <Text style={styles.iconText}>省钱集市</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconImage} />
          <Text style={styles.iconText}>AI工具</Text>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <Icon name="book" size={30} color="#fff" />
        <Icon name="sticky-note" size={30} color="#fff" />
        <Icon name="refresh" size={30} color="#fff" />
        <Icon name="cloud" size={30} color="#fff" />
        <Icon name="commenting" size={30} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 40,
  },
  title: {
    fontSize: 40,
    color: '#fff',
    marginVertical: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 25,
    paddingHorizontal: 10,
    width: '90%',
    height: 50,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    color: '#fff',
    paddingRight: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  iconText: {
    color: '#fff',
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 20,
  },
});

export default HomeScreen;