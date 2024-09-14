import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchCategoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#000" />
        <TextInput
          style={styles.searchInput}
          placeholder="任何地方"
        />
        <TextInput
          style={styles.searchInput}
          placeholder="添加日期"
        />
        <TextInput
          style={styles.searchInput}
          placeholder="添加人数"
        />
        <Icon name="settings-outline" size={20} color="#000" />
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.categories}>
        <View style={styles.categoryItem}>
          <Icon name="home-outline" size={24} color="#000" />
          <Text>海景民宿</Text>
        </View>
        <View style={styles.categoryItem}>
          <Icon name="water-outline" size={24} color="#000" />
          <Text>魅力泳池</Text>
        </View>
        <View style={styles.categoryItem}>
          <Icon name="leaf-outline" size={24} color="#000" />
          <Text>湖区</Text>
        </View>
        <View style={styles.categoryItem}>
          <Icon name="snow-outline" size={24} color="#000" />
          <Text>近滑雪场</Text>
        </View>
        <View style={styles.categoryItem}>
          <Icon name="planet-outline" size={24} color="#000" />
          <Text>OMG 妙</Text>
        </View>
      </ScrollView>

      <View style={styles.priceToggle}>
        <Text>显示总价</Text>
        <Text style={styles.priceNote}>税前价格，包含所有费用</Text>
        <Switch />
      </View>
      
      <View style={styles.card}>
        <View style={styles.recommendationBadge}>
          <Text>房客推荐</Text>
        </View>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.cardImage}
        />
        <TouchableOpacity style={styles.heartIcon}>
          <Icon name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>英国 多塞特(Dorset)</Text>
          <Text style={styles.cardSubtitle}>Man O'War海滩</Text>
          <Text style={styles.cardSubtitle}>9月2日至7日</Text>
          <Text style={styles.cardSubtitle}>
            房客说“会推荐再次来。风景漂亮。” 
          </Text>
          <View style={styles.priceRating}>
            <Text style={styles.price}>¥ 2,424 /晚</Text>
            <View style={styles.rating}>
              <Icon name="star" size={16} color="#000" />
              <Text>4.8</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  priceToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 16,
  },
  priceNote: {
    fontSize: 12,
    color: '#888',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    position: 'relative',
  },
  recommendationBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    zIndex: 1,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  heartIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  priceRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SearchCategoryScreen;