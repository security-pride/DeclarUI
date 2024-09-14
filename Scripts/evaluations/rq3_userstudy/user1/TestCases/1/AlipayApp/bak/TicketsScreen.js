import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Tickets = () => {
const [searchQuery, setSearchQuery] = useState('');
const navigation = useNavigation();
const navigateToHome = () => {
navigation.navigate('Home');
};
const handleSearch = () => {
// Implement search functionality
};
const renderMovieItem = (movie) => (
<View style={styles.movieItem}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.moviePoster} />
<Text style={styles.movieTitle}>{movie.title}</Text>
<Text style={styles.movieRating}>评分 {movie.rating}</Text>
<TouchableOpacity style={styles.buyButton}>
<Text style={styles.buyButtonText}>购票</Text>
</TouchableOpacity>
</View>
);
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>淘票票大麦</Text>
<TouchableOpacity onPress={navigateToHome} style={styles.headerButton}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.headerIcon} />
</TouchableOpacity>
</View>
  <View style={styles.searchBar}>
    <Text>烟台 &gt;</Text>
    <TextInput
      style={styles.searchInput}
      placeholder="三周年"
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
    <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
      <Text style={styles.searchButtonText}>搜索</Text>
    </TouchableOpacity>
  </View>

  <ImageBackground
    source={{ uri: '../assets/snack-icon.png' }}
    style={styles.promoBanner}
  >
    <View style={styles.promoContent}>
      <Text style={styles.promoTitle}>淘麦VIP电影演出优等生</Text>
      <Text style={styles.promoSubtitle}>暑期超级夏令营！</Text>
      <Text style={styles.promoPrice}>19.9元起优惠购票</Text>
      <TouchableOpacity style={styles.promoButton}>
        <Text style={styles.promoButtonText}>立即加入</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>

  <View style={styles.categories}>
    {['电影/影院', '脱口秀', '展览休闲', '剧场演出', '音乐现场'].map((category, index) => (
      <TouchableOpacity key={index} style={styles.categoryItem}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.categoryIcon} />
        <Text style={styles.categoryText}>{category}</Text>
      </TouchableOpacity>
    ))}
  </View>

  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>热映影片</Text>
      <TouchableOpacity>
        <Text style={styles.sectionMore}>全部 &gt;</Text>
      </TouchableOpacity>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {[
        { title: '神偷奶爸4', rating: '9.2' },
        { title: '抓娃娃', rating: '9.5' },
        { title: '默杀', rating: '9.3' },
        { title: '落凡尘', rating: '9.5' },
      ].map((movie, index) => renderMovieItem(movie))}
    </ScrollView>
  </View>

  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>即将上映</Text>
      <TouchableOpacity>
        <Text style={styles.sectionMore}>全部 &gt;</Text>
      </TouchableOpacity>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {[
        { title: '《封神》导演', rating: 'N/A' },
        { title: '新片1', rating: 'N/A' },
        { title: '新片2', rating: 'N/A' },
      ].map((movie, index) => renderMovieItem(movie))}
    </ScrollView>
  </View>

  <View style={styles.bottomBar}>
    <TouchableOpacity style={styles.bottomBarItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.bottomBarIcon} />
      <Text>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomBarItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.bottomBarIcon} />
      <Text>想看</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomBarItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.bottomBarIcon} />
      <Text>会员</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomBarItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.bottomBarIcon} />
      <Text>票夹</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomBarItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.bottomBarIcon} />
      <Text>我的</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
backgroundColor: '#1890ff',
},
headerTitle: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
headerButton: {
padding: 5,
},
headerIcon: {
width: 24,
height: 24,
},
searchBar: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: 'white',
},
searchInput: {
flex: 1,
marginHorizontal: 10,
padding: 5,
backgroundColor: '#f0f0f0',
borderRadius: 5,
},
searchButton: {
padding: 5,
backgroundColor: '#1890ff',
borderRadius: 5,
},
searchButtonText: {
color: 'white',
},
promoBanner: {
height: 200,
justifyContent: 'center',
padding: 20,
},
promoContent: {
backgroundColor: 'rgba(255,255,255,0.8)',
padding: 15,
borderRadius: 10,
},
promoTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 5,
},
promoSubtitle: {
fontSize: 16,
marginBottom: 5,
},
promoPrice: {
fontSize: 14,
color: '#ff4d4f',
marginBottom: 10,
},
promoButton: {
backgroundColor: '#ff4d4f',
padding: 10,
borderRadius: 5,
alignItems: 'center',
},
promoButtonText: {
color: 'white',
fontWeight: 'bold',
},
categories: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 15,
backgroundColor: 'white',
},
categoryItem: {
alignItems: 'center',
},
categoryIcon: {
width: 40,
height: 40,
marginBottom: 5,
},
categoryText: {
fontSize: 12,
},
section: {
marginTop: 15,
backgroundColor: 'white',
padding: 15,
},
sectionHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 10,
},
sectionTitle: {
fontSize: 16,
fontWeight: 'bold',
},
sectionMore: {
color: '#888',
},
movieItem: {
width: 120,
marginRight: 15,
},
moviePoster: {
width: 120,
height: 180,
borderRadius: 5,
},
movieTitle: {
marginTop: 5,
fontSize: 14,
fontWeight: 'bold',
},
movieRating: {
fontSize: 12,
color: '#ff4d4f',
},
buyButton: {
marginTop: 5,
backgroundColor: '#ff4d4f',
padding: 5,
borderRadius: 3,
alignItems: 'center',
},
buyButtonText: {
color: 'white',
fontSize: 12,
},
bottomBar: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
backgroundColor: 'white',
borderTopWidth: 1,
borderTopColor: '#e8e8e8',
},
bottomBarItem: {
alignItems: 'center',
},
bottomBarIcon: {
width: 24,
height: 24,
marginBottom: 5,
},
});
export default Tickets;