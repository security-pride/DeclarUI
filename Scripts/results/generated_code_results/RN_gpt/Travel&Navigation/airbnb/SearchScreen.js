import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();

  const handleCategoryPress = () => {
    navigation.navigate('SearchCategory');
  };

  const handleDetailsPress = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image style={styles.searchIcon} source={require('../assets/snack-icon.png')} />
        <TextInput style={styles.searchInput} placeholder='任何地方' />
        <TextInput style={styles.searchInput} placeholder='添加日期' />
        <TextInput style={styles.searchInput} placeholder='添加人数' />
      </View>

      <View style={styles.categories}>
        <TouchableOpacity onPress={handleCategoryPress}>
          <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
          <Text style={styles.categoryLabel}>王牌</Text>
        </TouchableOpacity>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.categoryLabel}>小木屋</Text>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.categoryLabel}>海景民宿</Text>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.categoryLabel}>魅力泳池</Text>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.categoryLabel}>湖区</Text>
      </View>

      <TouchableOpacity style={styles.featuredExperience} onPress={handleDetailsPress}>
        <Image style={styles.featuredImage} source={require('../assets/snack-icon.png')} />
        <Text style={styles.featuredTitle}>在 X 学院参加训练</Text>
        <Text style={styles.featuredHost}>房东：Jubilee</Text>
        <Text style={styles.featuredStatus}>预订通道已关闭</Text>
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>探索</Text>
        <Text style={styles.navItem}>心愿单</Text>
        <Text style={styles.navItem}>行程</Text>
        <Text style={styles.navItem}>消息</Text>
        <Text style={styles.navItem}>我的</Text>
      </View>
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
  },
  searchIcon: {
    width: 20,
    height: 20,
    margin: 5,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 5,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  categoryLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  featuredExperience: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  featuredImage: {
    width: '100%',
    height: 200,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  featuredHost: {
    fontSize: 14,
    color: '#666',
  },
  featuredStatus: {
    fontSize: 14,
    color: '#f00',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  navItem: {
    fontSize: 14,
    color: '#000',
  },
});

export default SearchScreen;