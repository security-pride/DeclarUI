import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const EnvironmentSimulationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/snack-icon.png')} style={styles.backgroundImage} />
      <View style={styles.header}>
        <Icon name="close" size={24} color="#fff" onPress={() => { /* Navigation logic */ }} />
        <Icon name="lock" size={24} color="#fff" style={styles.lockIcon} onPress={() => { /* Lock logic */ }} />
        <Icon name="star-outline" size={24} color="#fff" onPress={() => { /* Favorite logic */ }} />
      </View>
      <View style={styles.content}>
        <Image source={require('../assets/snack-icon.png')} style={styles.calmIcon} />
        <Text style={styles.title}>Nature rain on leaves</Text>
        <Text style={styles.subtitle}>用心</Text>
        <Text style={styles.description}>Relax with ease to the sounds of rain on leaves.</Text>
        <View style={styles.durationContainer}>
          <Icon name="time-outline" size={20} color="#fff" />
          <Text style={styles.durationLabel}>持续时间</Text>
          <Text style={styles.durationValue}>45 分钟</Text>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.tryPremiumButton} 
        onPress={() => navigation.navigate('Discovery')}
      >
        <Text style={styles.tryPremiumText}>试用 PREMIUM</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c2a3a',
    justifyContent: 'space-between',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  lockIcon: {
    marginHorizontal: 20,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  calmIcon: {
    width: 50,
    height: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#bbb',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#bbb',
    marginBottom: 20,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationLabel: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  durationValue: {
    fontSize: 14,
    color: '#fff',
    position: 'absolute',
    right: 0,
  },
  tryPremiumButton: {
    backgroundColor: '#4ba3c7',
    borderRadius: 25,
    margin: 20,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryPremiumText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EnvironmentSimulationScreen;