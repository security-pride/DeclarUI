import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('For You');

  const renderTopTab = (title) => (
    <TouchableOpacity onPress={() => setActiveTab(title)}>
      <Text style={[styles.topTabText, activeTab === title && styles.activeTopTabText]}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.timeText}>9:41</Text>
        <View style={styles.topTabs}>
          {renderTopTab('For You')}
          {renderTopTab('Following')}
          {renderTopTab('Live')}
        </View>
      </View>
      
      <ScrollView style={styles.content}>
        <Image source={require('../assets/snack-icon.png')} style={styles.backgroundImage} />
        <View style={styles.overlay}>
          <View style={styles.userInfo}>
            <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
            <Text style={styles.username}>RomeoSmile</Text>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla ac a eu eras. Et augue amet id</Text>
          <View style={styles.musicInfo}>
            <Icon name="musical-note" size={16} color="#fff" />
            <Text style={styles.musicText}>eyes blue like the atlantic</Text>
          </View>
        </View>
        <View style={styles.interactionBar}>
          <TouchableOpacity style={styles.interactionItem}>
            <Icon name="heart" size={28} color="#fff" />
            <Text style={styles.interactionText}>4231</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.interactionItem}>
            <Icon name="chatbubble-ellipses" size={28} color="#fff" />
            <Text style={styles.interactionText}>644</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.interactionItem}>
            <Icon name="paper-plane" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={24} color="#FF3B30" />
          <Text style={[styles.bottomBarText, styles.activeBottomBarText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem} onPress={() => navigation.navigate('Discover')}>
          <Icon name="search" size={24} color="#fff" />
          <Text style={styles.bottomBarText}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={32} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem} onPress={() => navigation.navigate('Activity')}>
          <Icon name="notifications" size={24} color="#fff" />
          <Text style={styles.bottomBarText}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="person" size={24} color="#fff" />
          <Text style={styles.bottomBarText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  timeText: {
    color: '#fff',
    fontSize: 14,
    position: 'absolute',
    top: 10,
    left: 15,
  },
  topTabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  topTabText: {
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 15,
    opacity: 0.7,
  },
  activeTopTabText: {
    opacity: 1,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    justifyContent: 'flex-end',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  followButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginLeft: 10,
  },
  followButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  description: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },
  musicInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 5,
  },
  interactionBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 15,
  },
  interactionItem: {
    alignItems: 'center',
    marginLeft: 20,
  },
  interactionText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    paddingBottom: 20,
    paddingTop: 10,
  },
  bottomBarItem: {
    alignItems: 'center',
  },
  bottomBarText: {
    color: '#fff',
    fontSize: 10,
    marginTop: 5,
  },
  activeBottomBarText: {
    color: '#FF3B30',
  },
  addButton: {
    width: 44,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;