import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SportsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>开始定制</Text>
          <Icon name="bulb-outline" size={16} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <Text style={styles.title}>Hi~ 我是你的轻松跑教练</Text>
        <Text style={styles.subtitle}>帮你 轻松面对 <Text style={styles.highlight}>3</Text> 公里</Text>
        <Text style={styles.tags}>
          #高效减脂 #不怂气 #轻松跑更远
        </Text>

        <TouchableOpacity style={styles.offer}>
          <Text style={styles.offerText}>限时免费，剩余 3 次</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.refresh}>
          <Icon name="refresh" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.navbar}>
        <Text style={styles.navItem}>目标跑</Text>
        <Text style={styles.navItem}>自由跑</Text>
        <Text style={[styles.navItem, styles.activeNavItem]}>轻松跑</Text>
        <Text style={styles.navItem}>课程跑</Text>
        <Text style={styles.navItem}>自定义</Text>
      </View>

      <View style={styles.controlPanel}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="map" size={24} color="#000" />
          <Text>路线</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.goButton}>
          <Text style={styles.goButtonText}>GO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="shoe-prints" size={24} color="#000" />
          <Text>跑鞋</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Icon name="flash" size={24} color="#000" />
        <Icon name="walk" size={24} color="#4CAF50" />
        <Icon name="run" size={24} color="#000" />
        <Icon name="ribbon" size={24} color="#000" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  logo: {
    height: 40,
    width: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    padding: 8,
    borderRadius: 16,
  },
  buttonText: {
    marginRight: 4,
  },
  main: {
    backgroundColor: '#512DA8',
    padding: 24,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 8,
  },
  highlight: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tags: {
    color: '#B39DDB',
  },
  offer: {
    marginTop: 16,
    backgroundColor: '#FFD54F',
    borderRadius: 16,
    padding: 8,
  },
  offerText: {
    color: '#512DA8',
  },
  refresh: {
    position: 'absolute',
    right: 16,
    top: -24,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    paddingVertical: 16,
  },
  navItem: {
    color: '#9E9E9E',
  },
  activeNavItem: {
    textDecorationLine: 'underline',
    color: '#000000',
  },
  controlPanel: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#f9f9f9',
  },
  iconButton: {
    alignItems: 'center',
  },
  goButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  goButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#212121',
    paddingVertical: 16,
  },
});

export default SportsScreen;