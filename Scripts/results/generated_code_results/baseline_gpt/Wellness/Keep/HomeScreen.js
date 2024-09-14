import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search-outline" size={20} color="#666" />
        <TextInput placeholder="心火已燃" style={styles.searchInput} />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <Text style={styles.tab}>关注</Text>
        <Text style={[styles.tab, styles.activeTab]}>发现</Text>
        <Text style={styles.tab}>活动</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="sync-outline" size={20} color="#666" />
          <Text style={styles.buttonText}>跟练</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="location-outline" size={20} color="#666" />
          <Text style={styles.buttonText}>同城</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="flame-outline" size={20} color="#666" />
          <Text style={styles.buttonText}>心火已燃</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        {/* First Row */}
        <View style={styles.row}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
        </View>

        {/* Second Row */}
        <View style={styles.row}>
          <View style={styles.infoBox}>
            <Text style={styles.boldText}>急性子狠瘦全身</Text>
            <Text>朱七七教瘦</Text>
          </View>
          <View style={styles.infoBox}>
            <Text>只送不卖！100份简爱</Text>
            <Text>Keep_活动</Text>
          </View>
        </View>

        {/* Third Row */}
        <View style={styles.row}>
          <View style={styles.routeBox}>
            <Text style={styles.boldText}>户外跑步</Text>
            <Text>5.00 公里</Text>
          </View>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
        </View>

        {/* Fourth Row */}
        <View style={styles.row}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
        </View>
      </View>

      {/* Footer Navigation */ }
      <View style={styles.footer}>
        <Text>首页</Text>
        <Text>课程</Text>
        <Text>运动</Text>
        <Text>商城</Text>
        <Text>我的</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
    margin: 10,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tab: {
    fontSize: 16,
    color: '#333',
  },
  activeTab: {
    color: '#0f0',
    borderBottomWidth: 2,
    borderBottomColor: '#0f0',
    paddingBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    marginTop: 5,
    fontSize: 14,
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  image: {
    width: '48%',
    height: 150,
    borderRadius: 10,
  },
  infoBox: {
    width: '48%',
    padding: 10,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  routeBox: {
    width: '48%',
    padding: 10,
    backgroundColor: '#e7e7e7',
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});

export default HomeScreen;