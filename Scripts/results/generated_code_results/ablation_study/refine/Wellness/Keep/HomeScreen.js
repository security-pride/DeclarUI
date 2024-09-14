import React, { useState } from 'react';

import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';



const HomeScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TextInput

          style={styles.searchBar}

          placeholder="心火已燃"

          value={searchQuery}

          onChangeText={setSearchQuery}

        />

        <Image source={require('../assets/snack-icon.png')} style={styles.kLogo} />

        <View style={styles.notificationContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.notificationIcon} />

          <View style={styles.notificationBadge}>

            <Text style={styles.notificationText}>13</Text>

          </View>

        </View>

      </View>



      <ScrollView style={styles.content}>

        <View style={styles.tabBar}>

          <Text style={styles.tabBarItem}>关注</Text>

          <Text style={[styles.tabBarItem, styles.activeTab]}>发现</Text>

          <Text style={styles.tabBarItem}>活动</Text>

        </View>



        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>

          <TouchableOpacity style={styles.categoryButton}>

            <Icon name="link" size={20} color="#000" />

            <Text style={styles.categoryText}>跟练</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>

            <Icon name="map-marker" size={20} color="#000" />

            <Text style={styles.categoryText}>同城</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>

            <Icon name="fire" size={20} color="#000" />

            <Text style={styles.categoryText}>心火已燃</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>

            <Icon name="building" size={20} color="#000" />

            <Text style={styles.categoryText}>城市K五</Text>

          </TouchableOpacity>

        </ScrollView>



        <View style={styles.contentCards}>

          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.workoutCard}>

            <View style={styles.workoutOverlay}>

              <Text style={styles.warmUpText}>WARM UP</Text>

            </View>

          </ImageBackground>

          <View style={styles.workoutInfo}>

            <Text style={styles.workoutTitle}>急性子狠瘦全身</Text>

            <View style={styles.workoutMeta}>

              <Image source={require('../assets/snack-icon.png')} style={styles.userAvatar} />

              <Text style={styles.userName}>朱七七教授</Text>

              <Icon name="comment" size={16} color="#999" />

              <Text style={styles.commentCount}>1373</Text>

            </View>

          </View>



          <TouchableOpacity style={styles.adCard}>

            <Image source={require('../assets/snack-icon.png')} style={styles.adImage} />

            <View style={styles.adContent}>

              <Text style={styles.adTitle}>我的控糖代餐新选择</Text>

              <Text style={styles.adSubtitle}>刘畊宏同款 轻食酸奶</Text>

              <TouchableOpacity style={styles.claimButton}>

                <Text style={styles.claimButtonText}>0元申领</Text>

              </TouchableOpacity>

            </View>

          </TouchableOpacity>



          <View style={styles.runningCard}>

            <Image source={require('../assets/snack-icon.png')} style={styles.mapImage} />

            <View style={styles.runningInfo}>

              <Icon name="running" size={20} color="#4CAF50" />

              <Text style={styles.runningText}>户外跑步</Text>

              <Text style={styles.runningDistance}>5.00公里</Text>

              <View style={styles.achievementContainer}>

                <Icon name="medal" size={16} color="#FFD700" />

                <Text style={styles.achievementText}>成绩 00:22:30</Text>

              </View>

            </View>

          </View>



          <TouchableOpacity style={styles.videoCard}>

            <Image source={require('../assets/snack-icon.png')} style={styles.videoThumbnail} />

            <View style={styles.editIconContainer}>

              <Icon name="pencil" size={20} color="#FFF" />

            </View>

            <Text style={styles.videoTitle}>一首歌燃脂</Text>

          </TouchableOpacity>

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="home" size={24} color="#000" />

          <Text style={styles.tabText}>首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="book" size={24} color="#000" />

          <Text style={styles.tabText}>课程</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Icon name="bolt" size={24} color="#4CAF50" />

          <Text style={[styles.tabText, styles.activeTabText]}>运动</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="shopping-cart" size={24} color="#000" />

          <Text style={styles.tabText}>商城</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="user" size={24} color="#000" />

          <Text style={styles.tabText}>我的</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#FFF',

  },

  searchBar: {

    flex: 1,

    height: 36,

    backgroundColor: '#EFEFEF',

    borderRadius: 18,

    paddingHorizontal: 15,

    marginRight: 10,

  },

  kLogo: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  notificationContainer: {

    position: 'relative',

  },

  notificationIcon: {

    width: 24,

    height: 24,

  },

  notificationBadge: {

    position: 'absolute',

    top: -5,

    right: -5,

    backgroundColor: 'red',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  notificationText: {

    color: '#FFF',

    fontSize: 12,

  },

  content: {

    flex: 1,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

    backgroundColor: '#FFF',

    borderBottomWidth: 1,

    borderBottomColor: '#EFEFEF',

  },

  tabBarItem: {

    fontSize: 16,

    color: '#000',

  },

  activeTab: {

    color: '#4CAF50',

    fontWeight: 'bold',

  },

  categories: {

    flexDirection: 'row',

    padding: 10,

  },

  categoryButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF',

    paddingVertical: 5,

    paddingHorizontal: 10,

    borderRadius: 20,

    marginRight: 10,

  },

  categoryText: {

    marginLeft: 5,

  },

  contentCards: {

    padding: 10,

  },

  workoutCard: {

    height: 200,

    justifyContent: 'flex-end',

    marginBottom: 10,

  },

  workoutOverlay: {

    backgroundColor: 'rgba(0,0,0,0.5)',

    padding: 10,

  },

  warmUpText: {

    color: '#FFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

  workoutInfo: {

    marginBottom: 10,

  },

  workoutTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  workoutMeta: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 5,

  },

  userAvatar: {

    width: 20,

    height: 20,

    borderRadius: 10,

    marginRight: 5,

  },

  userName: {

    fontSize: 14,

    marginRight: 10,

  },

  commentCount: {

    fontSize: 14,

    color: '#999',

    marginLeft: 5,

  },

  adCard: {

    flexDirection: 'row',

    backgroundColor: '#FFF',

    borderRadius: 10,

    overflow: 'hidden',

    marginBottom: 10,

  },

  adImage: {

    width: 100,

    height: 100,

  },

  adContent: {

    flex: 1,

    padding: 10,

  },

  adTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  adSubtitle: {

    fontSize: 14,

    color: '#666',

    marginTop: 5,

  },

  claimButton: {

    backgroundColor: '#4CAF50',

    borderRadius: 5,

    paddingVertical: 5,

    paddingHorizontal: 10,

    alignSelf: 'flex-start',

    marginTop: 10,

  },

  claimButtonText: {

    color: '#FFF',

    fontWeight: 'bold',

  },

  runningCard: {

    backgroundColor: '#FFF',

    borderRadius: 10,

    overflow: 'hidden',

    marginBottom: 10,

  },

  mapImage: {

    width: '100%',

    height: 150,

  },

  runningInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

  },

  runningText: {

    fontSize: 16,

    fontWeight: 'bold',

    marginLeft: 5,

  },

  runningDistance: {

    fontSize: 16,

    fontWeight: 'bold',

    marginLeft: 'auto',

  },

  achievementContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginLeft: 10,

  },

  achievementText: {

    fontSize: 14,

    marginLeft: 5,

  },

  videoCard: {

    position: 'relative',

  },

  videoThumbnail: {

    width: '100%',

    height: 200,

    borderRadius: 10,

  },

  editIconContainer: {

    position: 'absolute',

    right: 10,

    bottom: 10,

    backgroundColor: 'rgba(0,0,0,0.5)',

    borderRadius: 20,

    padding: 5,

  },

  videoTitle: {

    position: 'absolute',

    left: 10,

    bottom: 10,

    color: '#FFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#FFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#EFEFEF',

  },

  tabItem: {

    alignItems: 'center',

  },

  tabText: {

    fontSize: 12,

    marginTop: 5,

  },

  activeTabText: {

    color: '#4CAF50',

  },

});



export default HomeScreen;