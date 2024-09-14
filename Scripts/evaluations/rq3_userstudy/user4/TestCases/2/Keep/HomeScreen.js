import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const [searchQuery, setSearchQuery] = useState('心火已燃');

  const navigation = useNavigation();



  const categories = [

    { id: '1', title: '跟练' },

    { id: '2', title: '同城' },

    { id: '3', title: '心火已燃' },

    { id: '4', title: '城市K歌' },

  ];



  const posts = [

    {

      id: '1',

      type: 'workout',

      image: '../assets/snack-icon.png',

      title: '急性子狼瘦全身🔥...',

      user: '朱七七教瘦',

      likes: 1373,

    },

    {

      id: '2',

      type: 'ad',

      image: '../assets/snack-icon.png',

      title: '只送不卖！100份简爱轻食酸奶免费领',

      user: 'Keep_活动',

    },

    {

      id: '3',

      type: 'run',

      distance: '5.00',

      duration: '00:22:30',

    },

    {

      id: '4',

      type: 'workout',

      image: '../assets/snack-icon.png',

      title: '一首歌燃脂🔥',

    },

  ];



  const renderCategory = ({ item }) => (

    <TouchableOpacity style={styles.categoryItem}>

      <Text style={styles.categoryText}>{item.title}</Text>

    </TouchableOpacity>

  );



  const renderPost = ({ item }) => {

    switch (item.type) {

      case 'workout':

        return (

          <View style={styles.postItem}>

            <Image source={item.image} style={styles.postImage} />

            <Text style={styles.postTitle}>{item.title}</Text>

            {item.user && (

              <View style={styles.postUserInfo}>

                <Text style={styles.postUserName}>{item.user}</Text>

                {item.likes && <Text style={styles.postLikes}>{item.likes}</Text>}

              </View>

            )}

          </View>

        );

      case 'ad':

        return (

          <View style={styles.adItem}>

            <Image source={item.image} style={styles.adImage} />

            <Text style={styles.adTitle}>{item.title}</Text>

            <Text style={styles.adUser}>{item.user}</Text>

          </View>

        );

      case 'run':

        return (

          <View style={styles.runItem}>

            <Text style={styles.runDistance}>{item.distance} 公里</Text>

            <Text style={styles.runDuration}>{item.duration}</Text>

            <View style={styles.runMap} />

          </View>

        );

      default:

        return null;

    }

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TextInput

          style={styles.searchInput}

          value={searchQuery}

          onChangeText={setSearchQuery}

        />

        <TouchableOpacity onPress={() => {}}>

          <Image source={'../assets/snack-icon.png'} style={styles.headerIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>

          <Image source={'../assets/snack-icon.png'} style={styles.headerIcon} />

        </TouchableOpacity>

      </View>

      <View style={styles.tabBar}>

        <TouchableOpacity>

          <Text style={styles.tabBarText}>关注</Text>

        </TouchableOpacity>

        <TouchableOpacity>

          <Text style={[styles.tabBarText, styles.activeTab]}>发现</Text>

        </TouchableOpacity>

        <TouchableOpacity>

          <Text style={styles.tabBarText}>活动</Text>

        </TouchableOpacity>

      </View>

      <FlatList

        horizontal

        data={categories}

        renderItem={renderCategory}

        keyExtractor={item => item.id}

        style={styles.categoriesList}

      />

      <FlatList

        data={posts}

        renderItem={renderPost}

        keyExtractor={item => item.id}

        style={styles.postsList}

      />

      <View style={styles.bottomTabBar}>

        <TouchableOpacity style={styles.tabBarItem}>

          <Image source={'../assets/snack-icon.png'} style={styles.tabBarIcon} />

          <Text style={styles.tabBarItemText}>首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBarItem}>

          <Image source={'../assets/snack-icon.png'} style={styles.tabBarIcon} />

          <Text style={styles.tabBarItemText}>课程</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBarItem} onPress={() => navigation.navigate('SearchSports')}>

          <Image source={'../assets/snack-icon.png'} style={styles.tabBarIcon} />

          <Text style={[styles.tabBarItemText, styles.activeTabBarItem]}>运动</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBarItem} onPress={() => navigation.navigate('Store')}>

          <Image source={'../assets/snack-icon.png'} style={styles.tabBarIcon} />

          <Text style={styles.tabBarItemText}>商城</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBarItem} onPress={() => navigation.navigate('Profile')}>

          <Image source={'../assets/snack-icon.png'} style={styles.tabBarIcon} />

          <Text style={styles.tabBarItemText}>我的</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f0f0f0',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#fff',

  },

  searchInput: {

    flex: 1,

    height: 36,

    backgroundColor: '#f0f0f0',

    borderRadius: 18,

    paddingHorizontal: 10,

    marginRight: 10,

  },

  headerIcon: {

    width: 24,

    height: 24,

    marginLeft: 10,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

    backgroundColor: '#fff',

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  tabBarText: {

    fontSize: 16,

    color: '#888',

  },

  activeTab: {

    color: '#000',

    fontWeight: 'bold',

  },

  categoriesList: {

    backgroundColor: 'gray',

    paddingVertical: 10,

  },

  categoryItem: {

    paddingHorizontal: 15,

    paddingVertical: 5,

    borderRadius: 15,

    backgroundColor: '#f0f0f0',

    marginHorizontal: 5,

    height: 30,

  },

  categoryText: {

    fontSize: 14,

  },

  postsList: {

    flex: 1,

  },

  postItem: {

    backgroundColor: '#fff',

    margin: 10,

    borderRadius: 10,

    overflow: 'hidden',

  },

  postImage: {

    width: '100%',

    height: 200,

  },

  postTitle: {

    padding: 10,

    fontSize: 16,

    fontWeight: 'bold',

  },

  postUserInfo: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 10,

  },

  postUserName: {

    fontSize: 14,

    color: '#888',

  },

  postLikes: {

    fontSize: 14,

    color: '#888',

  },

  adItem: {

    backgroundColor: '#fff',

    margin: 10,

    borderRadius: 10,

    padding: 10,

  },

  adImage: {

    width: '100%',

    height: 150,

    borderRadius: 10,

  },

  adTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginTop: 10,

  },

  adUser: {

    fontSize: 14,

    color: '#888',

    marginTop: 5,

  },

  runItem: {

    backgroundColor: '#fff',

    margin: 10,

    borderRadius: 10,

    padding: 10,

  },

  runDistance: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  runDuration: {

    fontSize: 14,

    color: '#888',

    marginTop: 5,

  },

  runMap: {

    width: '100%',

    height: 150,

    backgroundColor: '#e0e0e0',

    marginTop: 10,

    borderRadius: 10,

  },

  bottomTabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

    backgroundColor: '#fff',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

  tabBarItem: {

    alignItems: 'center',

  },

  tabBarIcon: {

    width: 24,

    height: 24,

  },

  tabBarItemText: {

    fontSize: 12,

    marginTop: 5,

    color: '#888',

  },

  activeTabBarItem: {

    color: '#000',

  },

});



export default HomeScreen;