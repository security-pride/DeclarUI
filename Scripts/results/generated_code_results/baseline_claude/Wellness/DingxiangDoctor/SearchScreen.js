import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SearchScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const navigation = useNavigation();



  const handleSearch = () => {

    // Implement search functionality

  };



  const navigateToPage = (pageName) => {

    navigation.navigate(pageName);

  };



  const popularSearches = ['痔疮', '湿疹', '甲状腺结节', '荨麻疹', '痛风', '前列腺炎'];



  const recommendations = [

    { id: 1, title: '免费导诊', subtitle: '为你量身推荐专家', icon: require('../assets/snack-icon.png'), color: '#4CAF50' },

    { id: 2, title: '新人问医生\n9.9 元起', subtitle: '立即咨询', icon: require('../assets/snack-icon.png'), color: '#FF5722' },

    { id: 3, title: '直播课件', subtitle: '直播内容文字版\n持续更新', icon: require('../assets/snack-icon.png'), color: '#2196F3' },

    { id: 4, title: '视频问医生', subtitle: '面对面问诊\n更安心', icon: require('../assets/snack-icon.png'), color: '#FF9800' },

  ];



  return (

    <ScrollView style={styles.container}>

      <View style={styles.searchContainer}>

        <View style={styles.searchInputContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

          <TextInput

            style={styles.searchInput}

            placeholder="搜索"

            value={searchQuery}

            onChangeText={setSearchQuery}

            onSubmitEditing={handleSearch}

          />

        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Text style={styles.cancelButton}>取消</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.section}>

        <Text style={styles.sectionTitle}>热门推荐</Text>

        <View style={styles.recommendationsGrid}>

          {recommendations.map((item) => (

            <TouchableOpacity

              key={item.id}

              style={[styles.recommendationItem, { backgroundColor: item.color }]}

              onPress={() => navigateToPage(item.title)}

            >

              <Image source={item.icon} style={styles.recommendationIcon} />

              <View style={styles.recommendationTextContainer}>

                <Text style={styles.recommendationTitle}>{item.title}</Text>

                <Text style={styles.recommendationSubtitle}>{item.subtitle}</Text>

              </View>

            </TouchableOpacity>

          ))}

        </View>

      </View>



      <View style={styles.section}>

        <Text style={styles.sectionTitle}>热门搜索</Text>

        <View style={styles.popularSearchesContainer}>

          {popularSearches.map((search, index) => (

            <TouchableOpacity

              key={index}

              style={styles.popularSearchItem}

              onPress={() => navigateToPage('SearchMedicineDisease')}

            >

              <Image source={require('../assets/snack-icon.png')} style={styles.fireIcon} />

              <Text style={styles.popularSearchText}>{search}</Text>

            </TouchableOpacity>

          ))}

        </View>

      </View>

    </ScrollView>

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

    padding: 10,

    backgroundColor: '#FFFFFF',

  },

  searchInputContainer: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0F0F0',

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

    height: 40,

  },

  cancelButton: {

    marginLeft: 10,

    color: '#333333',

  },

  section: {

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginTop: 10,

  },

  sectionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 15,

  },

  recommendationsGrid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

  },

  recommendationItem: {

    width: '48%',

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    borderRadius: 10,

    marginBottom: 10,

  },

  recommendationIcon: {

    width: 40,

    height: 40,

    marginRight: 10,

  },

  recommendationTextContainer: {

    flex: 1,

  },

  recommendationTitle: {

    color: '#FFFFFF',

    fontWeight: 'bold',

    fontSize: 14,

  },

  recommendationSubtitle: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  popularSearchesContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

  },

  popularSearchItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0F0F0',

    paddingVertical: 5,

    paddingHorizontal: 10,

    borderRadius: 15,

    marginRight: 10,

    marginBottom: 10,

  },

  fireIcon: {

    width: 16,

    height: 16,

    marginRight: 5,

  },

  popularSearchText: {

    fontSize: 14,

    color: '#333333',

  },

});



export default SearchScreen;