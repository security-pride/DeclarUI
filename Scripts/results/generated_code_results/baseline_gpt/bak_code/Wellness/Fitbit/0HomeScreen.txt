import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="person-circle-outline" size={40} color="#ccc" />
        <Text style={styles.title}>fitbit</Text>
        <Icon name="pencil-outline" size={25} color="#00bcd4" />
      </View>

      <View style={styles.mainSection}>
        <Text style={styles.todayText}>今天</Text>
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <Icon name="walk-outline" size={40} color="#00bcd4" />
            <Text style={styles.stepCount}>0</Text>
            <Text style={styles.stepLabel}>步</Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detail}>
            <Icon name="location-outline" size={25} color="#00bcd4" />
            <Text style={styles.detailText}>0公里</Text>
          </View>
          <View style={styles.detail}>
            <Icon name="flame-outline" size={25} color="#00bcd4" />
            <Text style={styles.detailText}>12卡</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.features}>
        <View style={styles.feature}>
          <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>追踪您的正念</Text>
            <Text style={styles.featureSubtitle}>本周剩 5 天</Text>
          </View>
        </View>
        <View style={styles.feature}>
          <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>追踪锻炼情况</Text>
            <Text style={styles.featureSubtitle}>本周剩 5 天</Text>
          </View>
          <Icon name="add-circle-outline" size={25} color="#ff6e40" />
        </View>
        <View style={styles.feature}>
          <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
          <View style={styles.featureText}>
            <Text style={styles.featureTitle}>经期健康</Text>
            <Text style={styles.featureSubtitle}>记录与趋势</Text>
          </View>
          <Icon name="add-circle-outline" size={25} color="#ff6e40" />
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
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  todayText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 10,
    borderColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  stepCount: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  stepLabel: {
    fontSize: 16,
    color: '#333',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  detail: {
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  features: {
    paddingHorizontal: 20,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  featureIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  featureSubtitle: {
    fontSize: 14,
    color: '#777',
  },
});

export default HomeScreen;