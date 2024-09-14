import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DiscoverScreen = ({ navigation }) => {
  const renderTag = (title, color) => (
    <TouchableOpacity style={[styles.tag, { backgroundColor: color }]}>
      <Text style={styles.tagText}>{title}</Text>
    </TouchableOpacity>
  );

  const renderVideoItem = (views) => (
    <View style={styles.videoItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.videoThumbnail} />
      <View style={styles.viewsContainer}>
        <Icon name="play" size={12} color="#fff" />
        <Text style={styles.viewsText}>{views}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.statusIcons}>
          <Icon name="cellular" size={16} color="#fff" />
          <Icon name="wifi" size={16} color="#fff" />
          <Icon name="battery-full" size={16} color="#fff" />
        </View>
      </View>

      <ScrollView>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#666"
          />
        </View>

        <View style={styles.campDayContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.campDayImage} />
          <View style={styles.campDayOverlay}>
            <Text style={styles.campDayTitle}>Camp day</Text>
            <TouchableOpacity style={styles.joinNowButton}>
              <Text style={styles.joinNowText}>Join now</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagsScroll}>
          {renderTag('All', '#FF3B30')}
          {renderTag('Challenge', '#FF9500')}
          {renderTag('Entertainment', '#007AFF')}
          {renderTag('Dance', '#5856D6')}
        </ScrollView>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Hot</Text>
            <Icon name="chevron-forward" size={20} color="#fff" />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {renderVideoItem('420.8K')}
            {renderVideoItem('316.0K')}
            {renderVideoItem('180.6K')}
          </ScrollView>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured</Text>
            <Icon name="chevron-forward" size={20} color="#fff" />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {renderVideoItem('')}
            {renderVideoItem('')}
            {renderVideoItem('')}
          </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="home" size={24} color="#fff" />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>
          <Icon name="compass" size={24} color="#FF3B30" />
          <Text style={[styles.tabText, styles.activeTabText]}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <View style={styles.plusButton}>
            <Icon name="add" size={32} color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="notifications" size={24} color="#fff" />
          <Text style={styles.tabText}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="person" size={24} color="#fff" />
          <Text style={styles.tabText}>Profile</Text>
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
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  time: {
    color: '#fff',
    fontSize: 14,
  },
  statusIcons: {
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 10,
  },
  campDayContainer: {
    height: 200,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  campDayImage: {
    width: '100%',
    height: '100%',
  },
  campDayOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  campDayTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  joinNowButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  joinNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tagsScroll: {
    paddingHorizontal: 10,
  },
  tag: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  tagText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  videoItem: {
    width: 150,
    height: 200,
    marginLeft: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
  },
  viewsContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10,
  },
  viewsText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 5,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    paddingBottom: 20,
    paddingTop: 10,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    color: '#fff',
    fontSize: 10,
    marginTop: 5,
  },
  activeTab: {
    color: '#FF3B30',
  },
  activeTabText: {
    color: '#FF3B30',
  },
  plusButton: {
    width: 44,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DiscoverScreen;