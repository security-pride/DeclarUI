import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EnvironmentSimulationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/snack-icon.png')} style={styles.imageBackground}>
        <View style={styles.header}>
          <Icon name="close" size={30} color="white" />
          <View style={styles.icons}>
            <Icon name="lock-closed" size={20} color="white" />
            <Icon name="star" size={20} color="white" />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.calmText}>Calm</Text>
          <Text style={styles.title}>Nature rain on leaves</Text>
          <Text style={styles.subtitle}>用心</Text>
          <Text style={styles.description}>Relax with ease to the sounds of rain on leaves.</Text>
          <View style={styles.durationContainer}>
            <Icon name="time" size={20} color="white" />
            <Text style={styles.durationText}>持续时间</Text>
            <Text style={styles.durationTime}>45 分钟</Text>
          </View>
        </View>
      </ImageBackground>
      <TouchableOpacity style={styles.premiumButton}>
        <Text style={styles.premiumText}>试用 PREMIUM</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A212F',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    width: 50,
    justifyContent: 'space-between',
  },
  content: {
    paddingHorizontal: 20,
  },
  calmText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  description: {
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  durationTime: {
    color: 'white',
    fontSize: 16,
    marginLeft: 'auto',
  },
  premiumButton: {
    backgroundColor: '#1DA897',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    margin: 20,
  },
  premiumText: {
    color: 'white',
    fontSize: 18,
  },
});

export default EnvironmentSimulationScreen;