import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good Evening, 子路</Text>
        <View style={styles.iconContainer}>
          <Icon name="heart-outline" size={24} color="white" />
          <Icon name="refresh-outline" size={24} color="white" />
        </View>
      </View>
      
      <Text style={styles.sectionTitle}>Start your day</Text>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>How to Headspace</Text>
          <View style={styles.cardInfo}>
            <Icon name="videocam-outline" size={16} color="white" />
            <Text style={styles.cardInfoText}>Video</Text>
          </View>
          <Text style={styles.cardInfoText}>2 min</Text>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>🔒 Rooted in the Present</Text>
          <View style={styles.cardInfo}>
            <Icon name="leaf-outline" size={16} color="white" />
            <Text style={styles.cardInfoText}>Mindful Activity</Text>
          </View>
          <Text style={styles.cardInfoText}>2 min</Text>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>🔒 Enjoying the Unknown</Text>
          <View style={styles.cardInfo}>
            <Icon name="musical-notes-outline" size={16} color="white" />
            <Text style={styles.cardInfoText}>Today's Meditation</Text>
          </View>
          <Text style={styles.cardInfoText}>3-20 min</Text>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />
      </View>
      
      <Text style={styles.sectionTitle}>Your afternoon lift</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E27',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
  },
  iconContainer: {
    flexDirection: 'row',
    width: 50,
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1C215D',
    margin: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  cardInfoText: {
    color: '#FFFFFF',
    marginLeft: 5,
    fontSize: 14,
  },
  cardImage: {
    width: 100,
    height: 100,
  },
});

export default HomeScreen;