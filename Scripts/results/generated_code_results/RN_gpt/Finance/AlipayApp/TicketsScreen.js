import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TicketsScreen = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>淘票票大麦</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />
        </View>
        
        <View style={styles.searchSection}>
          <Text style={styles.backText}>烟台 &gt;</Text>
          <View style={styles.searchBox}>
            <Text style={styles.searchText}>三周年</Text>
          </View>
          <Button title="搜索" onPress={() => {}} />
        </View>
        
        <Image source={require('../assets/snack-icon.png')} style={styles.promoBanner} />
        
        <Button title="立即加入" onPress={() => {}} style={styles.joinButton} />
        
        <View style={styles.categorySection}>
          <View style={styles.category}>
            <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>电影/影院</Text>
          </View>
          <View style={styles.category}>
            <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>脱口秀</Text>
          </View>
          <View style={styles.category}>
            <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>展览休闲</Text>
          </View>
          <View style={styles.category}>
            <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>剧场演出</Text>
          </View>
          <View style={styles.category}>
            <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>音乐现场</Text>
          </View>
        </View>
        
        <View style={styles.movieSection}>
          <Text style={styles.sectionTitle}>热映影片</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.movieImage} />
          <Text style={styles.movieTitle}>神偷奶爸4</Text>
          <Text style={styles.movieRating}>评分 9.2</Text>
          <Button title="购票" onPress={() => {}} />
        </View>

        <View style={styles.movieSection}>
          <Text style={styles.sectionTitle}>即将上映</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.movieImage} />
          <Text style={styles.movieTitle}>《封神》导演</Text>
          <Text style={styles.movieRating}>评分 9.5</Text>
          <Button title="购票" onPress={() => {}} />
        </View>
        
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={navigateToHome}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>首页</Text>
        </TouchableOpacity>
        <View style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>想看</Text>
        </View>
        <View style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>会员</Text>
        </View>
        <View style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>票夹</Text>
        </View>
        <View style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>我的</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#4a90e2',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  backText: {
    color: '#000',
  },
  searchBox: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 5,
  },
  searchText: {
    color: '#aaa',
  },
  promoBanner: {
    width: '100%',
    height: 150,
    marginVertical: 10,
  },
  joinButton: {
    backgroundColor: 'orange',
    padding: 10,
    marginVertical: 10,
  },
  categorySection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
  },
  category: {
    alignItems: 'center',
  },
  categoryIcon: {
    width: 48,
    height: 48,
  },
  categoryText: {
    marginTop: 5,
    color: '#000',
  },
  movieSection: {
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#d9534f',
  },
  movieImage: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  movieTitle: {
    fontSize: 14,
    color: '#000',
  },
  movieRating: {
    fontSize: 12,
    color: '#999',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
  },
});

export default TicketsScreen;