import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('For You');

  const tabs = ['For You', 'Following', 'Live'];

  const renderVideo = () => (
    <View style={styles.videoContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.video} />
      <View style={styles.videoOverlay}>
        <View style={styles.userInfo}>
          <Image source={require('../assets/snack-icon.png')} style={styles.userAvatar} />
          <Text style={styles.userName}>RomeoSmile</Text>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.videoDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla ac a eu eras. Et augue amet id
        </Text>
        <View style={styles.musicInfo}>
          <Icon name="music" size={16} color="#fff" />
          <Text style={styles.musicText}>eyes blue like the atlantic</Text>
        </View>
      </View>
      <View style={styles.interactions}>
        <TouchableOpacity style={styles.interactionButton}>
          <Icon name="heart" size={28} color="#fff" />
          <Text style={styles.interactionText}>4231</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactionButton} onPress={() => navigation.navigate('Comments')}>
          <Icon name="comment" size={28} color="#fff" />
          <Text style={styles.interactionText}>644</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactionButton}>
          <Icon name="share" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={[{ key: 'video' }]}
        renderItem={renderVideo}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" size={24} color="#ff2b55" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Discover')}>
          <Icon name="compass" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.createButton}>
          <Icon name="plus" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="bell" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="user" size={24} color="#fff" />
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
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 10,
  },
  tab: {
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  tabText: {
    color: '#999',
    fontSize: 16,
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  videoContainer: {
    flex: 1,
    height: '100%',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  videoOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  followButton: {
    backgroundColor: '#ff2b55',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginLeft: 10,
  },
  followButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  videoDescription: {
    color: '#fff',
    marginBottom: 10,
  },
  musicInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  musicText: {
    color: '#fff',
    marginLeft: 5,
  },
  interactions: {
    position: 'absolute',
    right: 10,
    bottom: 100,
  },
  interactionButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  interactionText: {
    color: '#fff',
    marginTop: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  navButton: {
    padding: 10,
  },
  createButton: {
    backgroundColor: '#fff',
    width: 44,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;