import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.map} />
        
        {/* Map Control Buttons */}
        <View style={styles.mapControls}>
          <TouchableOpacity style={styles.mapControlButton}>
            <Icon name="notifications-outline" size={24} color="#000" />
            <Text style={styles.controlText}>通知</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mapControlButton}>
            <Icon name="layers-outline" size={24} color="#000" />
            <Text style={styles.controlText}>图层</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mapControlButton}>
            <Icon name="pencil-outline" size={24} color="#000" />
            <Text style={styles.controlText}>反馈</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search-outline" size={20} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="查找地点、公交、地铁"
        />
        <TouchableOpacity>
          <Icon name="qr-code-outline" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="mic-outline" size={24} color="#888" />
        </TouchableOpacity>
      </View>
      
      {/* Services Icons */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.serviceIcons}>
        {[
          { icon: 'car-outline', label: '驾车' },
          { icon: 'bus-outline', label: '公交' },
          { icon: 'flash-outline', label: '优惠加油' },
          { icon: 'car-sport-outline', label: '打车' },
          { icon: 'bed-outline', label: '订酒店' },
          { icon: 'train-outline', label: '火车票机票' },
          { icon: 'steering-wheel-outline', label: '代驾' },
          { icon: 'walk-outline', label: '步行' },
          { icon: 'radio-outline', label: '实时公交' },
          { icon: 'ellipsis-horizontal-outline', label: '更多工具' }
        ].map((service, index) => (
          <TouchableOpacity key={index} style={styles.serviceButton}>
            <Icon name={service.icon} size={40} color="#4A90E2" />
            <Text style={styles.serviceText}>{service.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Shortcut Buttons */}
      <View style={styles.shortcuts}>
        <TouchableOpacity style={styles.shortcutButton}>
          <Icon name="home-outline" size={24} color="#000" />
          <Text style={styles.shortcutText}>回家</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shortcutButton}>
          <Text style={styles.shortcutText}>去设置</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shortcutButton}>
          <Icon name="briefcase-outline" size={24} color="#000" />
          <Text style={styles.shortcutText}>去单位</Text>
        </TouchableOpacity>
      </View>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {[
          { icon: 'navigate-outline', label: '首页' },
          { icon: 'location-outline', label: '附近' },
          { icon: 'chatbubble-outline', label: '消息' },
          { icon: 'car-outline', label: '打车' },
          { icon: 'person-outline', label: '我的' }
        ].map((navItem, index) => (
          <TouchableOpacity key={index} style={styles.navButton}>
            <Icon name={navItem.icon} size={24} color={index === 0 ? '#4A90E2' : '#888'} />
            <Text style={[styles.navText, index === 0 && { color: '#4A90E2' }]}>{navItem.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  mapContainer: {
    flex: 3,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapControls: {
    position: 'absolute',
    right: 10,
    top: 10,
    alignItems: 'center',
  },
  mapControlButton: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  controlText: {
    fontSize: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
  },
  serviceIcons: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  serviceButton: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  serviceText: {
    fontSize: 12,
    marginTop: 5,
  },
  shortcuts: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginVertical: 10,
    paddingVertical: 10,
  },
  shortcutButton: {
    alignItems: 'center',
  },
  shortcutText: {
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#888',
  },
});

export default HomeScreen;