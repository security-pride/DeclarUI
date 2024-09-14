import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter your destination"
        />
        <Icon name="search" size={24} color="#fff" style={styles.searchIcon} />
      </View>
      
      <ScrollView horizontal style={styles.tagsContainer}>
        {['烟台', '威海', '蓬莱阁', '长岛', '武汉'].map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.navigationSection}>
        <View style={styles.navigationRow}>
          {['酒庄', '机票', '火车票', '旅游'].map((item, index) => (
            <TouchableOpacity key={index} style={styles.navItem}>
              <Icon name="airplane" size={32} color="#FF8C00" />
              <Text style={styles.navText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.navigationRow}>
          {['酒店套餐', '接送机/包车', '租车', '签证/换外币'].map((item, index) => (
            <TouchableOpacity key={index} style={styles.navItem}>
              <Icon name="car" size={32} color="#1E90FF" />
              <Text style={styles.navText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.offersSection}>
        <Text style={styles.sectionTitle}>特价专区</Text>
        <ScrollView horizontal>
          <Image source={require('../assets/snack-icon.png')} style={styles.offerImage} />
          <Image source={require('../assets/snack-icon.png')} style={styles.offerImage} />
        </ScrollView>
      </View>

      <View style={styles.recommendationsSection}>
        <Text style={styles.sectionTitle}>推荐活动</Text>
        <ScrollView horizontal>
          <Image source={require('../assets/snack-icon.png')} style={styles.recommendationImage} />
          <Image source={require('../assets/snack-icon.png')} style={styles.recommendationImage} />
        </ScrollView>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>您有一段旅程</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.journeyImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    borderRadius: 20,
    margin: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    color: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  tagsContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  tag: {
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#1E90FF',
    borderRadius: 20,
  },
  tagText: {
    color: '#fff',
  },
  navigationSection: {
    marginVertical: 10,
  },
  navigationRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    marginTop: 5,
    color: '#333',
  },
  offersSection: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    marginVertical: 5,
  },
  offerImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  recommendationsSection: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
  recommendationImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  footerContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  footerText: {
    fontSize: 16,
    marginBottom: 10,
  },
  journeyImage: {
    width: '90%',
    height: 150,
    borderRadius: 10,
  },
});

export default HomeScreen;