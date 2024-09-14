import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const StoreScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="瑜伽服装"
          placeholderTextColor="#ccc"
        />
        <Icon name="search-outline" size={20} color="#ccc" style={styles.searchIcon} />
        <Icon name="flash-outline" size={25} color="black" style={styles.flashIcon} />
        <Icon name="cart-outline" size={25} color="black" style={styles.cartIcon} />
      </View>

      <View style={styles.tabsContainer}>
        <Text style={styles.activeTab}>全部</Text>
        <Text style={styles.inactiveTab}>运动必备</Text>
      </View>

      <View style={styles.newGiftContainer}>
        <View style={styles.newGiftHeader}>
          <Text style={styles.newGiftText}>新人首单礼</Text>
          <Icon name="close-outline" size={25} color="white" style={styles.closeIcon} />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.giftItemsContainer}>
          <View style={styles.giftItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.giftImage} />
            <Text style={styles.priceText}>¥259 <Text style={styles.originalPriceText}>¥289</Text></Text>
            <Text style={styles.tagText}>必买精选</Text>
          </View>
          <View style={styles.giftItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.giftImage} />
            <Text style={styles.priceText}>¥82 <Text style={styles.originalPriceText}>¥109</Text></Text>
            <Text style={styles.tagText}>热销爆款</Text>
          </View>
          <View style={styles.giftItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.giftImage} />
            <Text style={styles.priceText}>¥59 <Text style={styles.originalPriceText}>¥89</Text></Text>
            <Text style={styles.tagText}>直降 ¥30</Text>
          </View>
          <View style={styles.giftItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.giftImage} />
            <Text style={styles.priceText}>¥13 <Text style={styles.originalPriceText}>¥29</Text></Text>
            <Text style={styles.tagText}>60 天低价</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.categoriesContainer}>
        <View style={styles.categoryItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
          <Text style={styles.categoryText}>运动奖品</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
          <Text style={styles.categoryText}>全身燃脂</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
          <Text style={styles.categoryText}>身体数据</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
          <Text style={styles.categoryText}>运动装备</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
          <Text style={styles.categoryText}>家用智能</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
          <Text style={styles.categoryText}>Keep 周边</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
          <Text style={styles.categoryText}>健康食品</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
          <Text style={styles.categoryText}>女子服饰</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
          <Text style={styles.categoryText}>男子服饰</Text>
        </View>
        <View style={styles.categoryItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
          <Text style={styles.categoryText}>全部分类</Text>
        </View>
      </View>

      <View style={styles.bottomImagesContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.bottomImage} />
        <Image source={require('../assets/snack-icon.png')} style={styles.bottomImage} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 40,
    backgroundColor: '#f1f1f1',
  },
  searchIcon: {
    position: 'absolute',
    left: 20,
  },
  flashIcon: {
    marginHorizontal: 10,
  },
  cartIcon: {
    marginHorizontal: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  activeTab: {
    padding: 10,
    fontWeight: 'bold',
    color: 'black',
    borderBottomWidth: 2,
    borderBottomColor: 'green',
  },
  inactiveTab: {
    padding: 10,
    color: 'grey',
  },
  newGiftContainer: {
    backgroundColor: 'purple',
    paddingVertical: 20,
  },
  newGiftHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newGiftText: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  closeIcon: {
    paddingRight: 20,
  },
  giftItemsContainer: {
    marginTop: 20,
  },
  giftItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  giftImage: {
    width: 100,
    height: 100,
  },
  priceText: {
    color: '#555',
    marginTop: 5,
  },
  originalPriceText: {
    textDecorationLine: 'line-through',
    fontSize: 12,
  },
  tagText: {
    backgroundColor: 'red',
    color: 'white',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 2,
    marginTop: 3,
    fontSize: 12,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  categoryItem: {
    alignItems: 'center',
    width: '22%',
    marginBottom: 20,
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 12,
  },
  bottomImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  bottomImage: {
    width: '48%',
    height: 100,
  },
});

export default StoreScreen;