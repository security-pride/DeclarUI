import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
        <Icon name="search-outline" size={25} color="#000" style={styles.icon} />
      </View>

      <View style={styles.tabBar}>
        <Text style={[styles.tab, styles.activeTab]}>Top News</Text>
        <Text style={styles.tab}>Your CNN</Text>
        <Text style={styles.tab}>World</Text>
        <Text style={styles.tab}>U.S. Politics</Text>
        <Text style={styles.tab}>Business</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
          <Text style={styles.title}>
            Minute-by-minute: Visual timeline of the assassination attempt on Donald Trump
          </Text>
          <Text style={styles.time}>7h ago</Text>
        </View>

        <TouchableOpacity style={styles.updateSection}>
          <Text style={styles.updateText}>LIVE UPDATES</Text>
          <Text style={styles.subtitle}>
            Biden condemns Trump shooting; authorities search for gunman’s motive
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.videoSection}>
          <Text style={styles.videoText}>VIDEO</Text>
          <Text style={styles.subtitle}>Watch Biden’s entire Oval Office address</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.analysisSection}>
          <Text style={styles.analysisText}>ANALYSIS</Text>
          <Text style={styles.subtitle}>
            A nation traumatized and a campaign transformed as Trump is set to reemerge
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Icon name="home" size={25} color="#E12D2D" />
          <Text style={styles.footerTextActive}>Home</Text>
        </View>
        <View style={styles.footerItem}>
          <Icon name="bar-chart" size={25} color="#000" />
          <Text style={styles.footerText}>Elections</Text>
        </View>
        <View style={styles.footerItem}>
          <Icon name="play-circle" size={25} color="#000" />
          <Text style={styles.footerText}>Watch</Text>
        </View>
        <View style={styles.footerItem}>
          <Icon name="settings" size={25} color="#000" />
          <Text style={styles.footerText}>Settings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  icon: {
    padding: 10,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  tab: {
    fontSize: 16,
    color: '#000',
  },
  activeTab: {
    color: '#E12D2D',
    borderBottomWidth: 2,
    borderBottomColor: '#E12D2D'
  },
  content: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  time: {
    fontSize: 14,
    color: '#888',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  updateSection: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  updateText: {
    color: '#E12D2D',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  videoSection: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  videoText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  analysisSection: {
    paddingVertical: 10,
  },
  analysisText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#000',
  },
  footerTextActive: {
    fontSize: 12,
    color: '#E12D2D',
  },
});

export default HomeScreen;