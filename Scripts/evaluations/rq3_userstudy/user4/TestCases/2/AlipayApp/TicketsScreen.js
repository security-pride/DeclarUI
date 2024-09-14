import React from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const TicketsScreen = () => {

  const navigation = useNavigation();



  const renderHeader = () => (

    <View style={styles.header}>

      <Text style={styles.headerTitle}>淘票票大麦</Text>

      <TouchableOpacity style={styles.headerRight}>

        <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

        <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

      </TouchableOpacity>

    </View>

  );



  const renderSearchBar = () => (

    <View style={styles.searchBar}>

      <Text style={styles.locationText}>烟台 ＞</Text>

      <View style={styles.searchInputContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="三周年"

          placeholderTextColor="#999"

        />

      </View>

      <TouchableOpacity style={styles.searchButton}>

        <Text style={styles.searchButtonText}>搜索</Text>

      </TouchableOpacity>

    </View>

  );



  const renderBanner = () => (

    <View style={styles.banner}>

      <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />

      <View style={styles.bannerContent}>

        <Text style={styles.bannerTitle}>淘麦VIP电影演出优等生</Text>

        <Text style={styles.bannerSubtitle}>暑期超级夏令营！</Text>

        <Text style={styles.bannerPrice}>19.9元起优惠购票</Text>

        <TouchableOpacity style={styles.bannerButton}>

          <Text style={styles.bannerButtonText}>立即加入 ➔</Text>

        </TouchableOpacity>

      </View>

    </View>

  );



  const renderCategories = () => (

    <View style={styles.categories}>

      {['电影/影院', '脱口秀', '展览休闲', '剧场演出', '音乐现场'].map((category, index) => (

        <View key={index} style={styles.categoryItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />

          <Text style={styles.categoryText}>{category}</Text>

        </View>

      ))}

    </View>

  );



  const renderSecondBanner = () => (

    <View style={styles.secondBanner}>

      <Image source={require('../assets/snack-icon.png')} style={styles.secondBannerImage} />

    </View>

  );



  const renderMovieSection = (title, movies, showAll = false) => (

    <View style={styles.movieSection}>

      <View style={styles.sectionHeader}>

        <Text style={styles.sectionTitle}>{title}</Text>

        {showAll && <TouchableOpacity><Text style={styles.sectionMore}>全部 ＞</Text></TouchableOpacity>}

      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.movieList}>

        {movies.map((movie, index) => (

          <View key={index} style={styles.movieItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.moviePoster} />

            <Text style={styles.movieTitle}>{movie.title}</Text>

            <Text style={styles.movieRating}>评分 {movie.rating}</Text>

            <TouchableOpacity style={styles.buyButton}>

              <Text style={styles.buyButtonText}>购票</Text>

            </TouchableOpacity>

          </View>

        ))}

      </ScrollView>

    </View>

  );



  const hotMovies = [

    { title: '神偷奶爸4', rating: '9.2' },

    { title: '咒腕', rating: '9.5' },

    { title: '默杀', rating: '9.3' },

    { title: '落凡尘', rating: '9.5' },

  ];



  const upcomingMovies = [

    { title: '《封神》导演', rating: '暂无' },

    { title: '3D豚鼠特工队', rating: '暂无' },

  ];



  return (

    <ScrollView style={styles.container}>

      {renderHeader()}

      {renderSearchBar()}

      {renderBanner()}

      {renderCategories()}

      {renderSecondBanner()}

      {renderMovieSection('热映影片', hotMovies, true)}

      {renderMovieSection('即将上映', upcomingMovies, true)}

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

    backgroundColor: '#1E90FF',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: 'white',

  },

  headerRight: {

    flexDirection: 'row',

  },

  headerIcon: {

    width: 24,

    height: 24,

    marginLeft: 15,

  },

  searchBar: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#1E90FF',

  },

  locationText: {

    color: 'white',

    marginRight: 10,

  },

  searchInputContainer: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: 'white',

    borderRadius: 20,

    paddingHorizontal: 10,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 5,

  },

  searchInput: {

    flex: 1,

    height: 36,

  },

  searchButton: {

    marginLeft: 10,

    padding: 5,

  },

  searchButtonText: {

    color: 'white',

  },

  banner: {

    position: 'relative',

    height: 150,

  },

  bannerImage: {

    width: '100%',

    height: '100%',

  },

  bannerContent: {

    position: 'absolute',

    top: 0,

    left: 0,

    right: 0,

    bottom: 0,

    padding: 15,

    justifyContent: 'center',

  },

  bannerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: 'white',

  },

  bannerSubtitle: {

    fontSize: 24,

    fontWeight: 'bold',

    color: 'white',

    marginVertical: 5,

  },

  bannerPrice: {

    fontSize: 16,

    color: 'white',

  },

  bannerButton: {

    position: 'absolute',

    right: 15,

    bottom: 15,

    backgroundColor: 'white',

    paddingVertical: 5,

    paddingHorizontal: 10,

    borderRadius: 15,

  },

  bannerButtonText: {

    color: '#1E90FF',

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

  secondBanner: {

    height: 80,

    marginVertical: 10,

  },

  secondBannerImage: {

    width: '100%',

    height: '100%',

  },

  movieSection: {

    backgroundColor: 'white',

    marginBottom: 10,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

  },

  sectionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  sectionMore: {

    color: '#999',

  },

  movieList: {

    paddingHorizontal: 10,

  },

  movieItem: {

    width: 120,

    marginRight: 10,

  },

  moviePoster: {

    width: 120,

    height: 160,

    borderRadius: 5,

  },

  movieTitle: {

    fontSize: 14,

    marginTop: 5,

  },

  movieRating: {

    fontSize: 12,

    color: '#FFA500',

    marginTop: 2,

  },

  buyButton: {

    backgroundColor: '#FF4500',

    borderRadius: 15,

    paddingVertical: 2,

    paddingHorizontal: 10,

    alignSelf: 'flex-start',

    marginTop: 5,

  },

  buyButtonText: {

    color: 'white',

    fontSize: 12,

  },

});



export default TicketsScreen;