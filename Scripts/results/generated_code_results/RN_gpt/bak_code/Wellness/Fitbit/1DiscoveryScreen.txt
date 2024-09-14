import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const DiscoveryScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>发现</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>特色</Text>
          <View style={styles.card}>
            <Image source={require('../assets/snack-icon.png')} style={styles.thumbnail} />
            <Text style={styles.premiumLabel}>premium</Text>
            <Text style={styles.duration}>45 MIN</Text>
            <Text style={styles.title}>Nature rain on leaves</Text>
            <TouchableOpacity>
              <View style={styles.row}>
                <Icon name="play" size={15} color="#009688" />
                <Text style={styles.playText}>播放</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.starButton}>
              <Icon name="star-outline" size={20} color="#333" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.workoutHeader}>
            <Text style={styles.sectionTitle}>锻炼</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>查看全部</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <Image source={require('../assets/snack-icon.png')} style={styles.thumbnail} />
            <Text style={styles.premiumLabel}>premium</Text>
            <Text style={styles.duration}>27 MIN</Text>
            <Text style={styles.title}>Total body barre: bodyweight</Text>
            <Text style={styles.language}>英语</Text>
            <TouchableOpacity>
              <View style={styles.row}>
                <Icon name="play" size={15} color="#009688" />
                <Text style={styles.playText}>播放</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.starButton}>
              <Icon name="star-outline" size={20} color="#333" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => handleNavigation('Discovery')}>
          <Icon name="compass-outline" size={25} color="#333" />
          <Text style={styles.navText}>发现</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => handleNavigation('Home')}>
          <Icon name="home-outline" size={25} color="#999" />
          <Text style={styles.navTextInactive}>今天</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => handleNavigation('EnvironmentSimulation')}>
          <Icon name="md-leaf-outline" size={25} color="#999" />
          <Text style={styles.navTextInactive}>好友</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="star-outline" size={25} color="#999" />
          <Text style={styles.navTextInactive}>Premium</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  section: {
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    elevation: 3,
  },
  thumbnail: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  premiumLabel: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#fff',
    padding: 4,
    fontSize: 12,
    color: '#333',
  },
  duration: {
    marginTop: 8,
    fontSize: 14,
    color: '#999',
  },
  title: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  language: {
    fontSize: 14,
    color: '#999',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  playText: {
    marginLeft: 4,
    color: '#009688',
    fontSize: 14,
  },
  starButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  workoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    color: '#009688',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    color: '#333',
    fontSize: 12,
  },
  navTextInactive: {
    color: '#999',
    fontSize: 12,
  },
});

export default DiscoveryScreen;