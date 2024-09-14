import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search" size={20} style={styles.searchIcon} />
        <TextInput placeholder="任何地方" style={styles.input} />
        <TextInput placeholder="添加日期" style={styles.input} />
        <TextInput placeholder="添加人数" style={styles.input} />
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        <View style={styles.categoryContainer}>
          <Icon name="star" size={30} />
          <Text>王牌</Text>
        </View>
        <View style={styles.categoryContainer}>
          <Icon name="home" size={30} />
          <Text>小木屋</Text>
        </View>
        <View style={styles.categoryContainer}>
          <Icon name="boat" size={30} />
          <Text>海景民宿</Text>
        </View>
        <View style={styles.categoryContainer}>
          <Icon name="water" size={30} />
          <Text>魅力泳池</Text>
        </View>
        <View style={styles.categoryContainer}>
          <Icon name="tree" size={30} />
          <Text>湖区</Text>
        </View>
      </ScrollView>

      {/* Listings */}
      <ScrollView style={styles.listings}>
        <View style={styles.listingCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.listingImage} />
          <Text style={styles.listingTitle}>在X学院参加训练</Text>
          <Text style={styles.listingSubtitle}>房东：Jubilee</Text>
          <Text style={styles.listingNote}>预订通道已关闭</Text>
        </View>
        <View style={styles.listingCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.listingImage} />
          <Text style={styles.listingTitle}>在X学院参加训练</Text>
          <Text style={styles.listingSubtitle}>房东：Jubilee</Text>
          <Text style={styles.listingNote}>预订通道已关闭</Text>
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    margin: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 7,
    marginHorizontal: 5,
  },
  categoryScroll: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  categoryContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  listings: {
    paddingHorizontal: 10,
  },
  listingCard: {
    marginBottom: 20,
  },
  listingImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  listingTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  listingSubtitle: {
    color: '#555',
  },
  listingNote: {
    color: '#888',
    marginTop: 5,
  },
});

export default SearchScreen;