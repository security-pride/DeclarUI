import React, { useState } from 'react';

import {

  View,

  Text,

  TextInput,

  TouchableOpacity,

  Image,

  ScrollView,

  StyleSheet,

  FlatList,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('烟台百纳瑞汀酒店（第一海水浴...');



  const popularDestinations = ['烟台', '威海', '蓬莱阁', '长岛', '武汉', '直播', '养马岛'];



  const services = [

    { id: '1', icon: '../assets/snack-icon.png', name: '酒店' },

    { id: '2', icon: '../assets/snack-icon.png', name: '机票' },

    { id: '3', icon: '../assets/snack-icon.png', name: '火车票' },

    { id: '4', icon: '../assets/snack-icon.png', name: '旅游' },

    { id: '5', icon: '../assets/snack-icon.png', name: '攻略/景点' },

    { id: '6', icon: '../assets/snack-icon.png', name: '民宿/客栈' },

    { id: '7', icon: '../assets/snack-icon.png', name: '机票+酒店' },

    { id: '8', icon: '../assets/snack-icon.png', name: '汽车/船票' },

    { id: '9', icon: '../assets/snack-icon.png', name: '门票/玩乐' },

    { id: '10', icon: '../assets/snack-icon.png', name: '美食/购物' },

    { id: '11', icon: '../assets/snack-icon.png', name: '酒店套餐' },

    { id: '12', icon: '../assets/snack-icon.png', name: '接送机/包车' },

    { id: '13', icon: '../assets/snack-icon.png', name: '租车' },

    { id: '14', icon: '../assets/snack-icon.png', name: '签证/换外币' },

    { id: '15', icon: '../assets/snack-icon.png', name: '借钱/分期' },

  ];



  const promotions = [

    { id: '1', image: '../assets/snack-icon.png', title: '烟台甄选特价', subtitle: '精选酒店套餐' },

    { id: '2', image: '../assets/snack-icon.png', title: '烟台爆款团购', subtitle: '好货超值购' },

    { id: '3', image: '../assets/snack-icon.png', title: '美景酒店榜', subtitle: '烟台' },

    { id: '4', image: '../assets/snack-icon.png', title: '烟台海水浴场', subtitle: '涨幅35%' },

  ];



  const renderServiceItem = ({ item }) => (

    <TouchableOpacity style={styles.serviceItem}>

      <Image source={item.icon} style={styles.serviceIcon} />

      <Text style={styles.serviceText}>{item.name}</Text>

    </TouchableOpacity>

  );



  const renderPromotionItem = ({ item }) => (

    <TouchableOpacity style={styles.promotionItem}>

      <Image source={item.image} style={styles.promotionImage} />

      <Text style={styles.promotionTitle}>{item.title}</Text>

      <Text style={styles.promotionSubtitle}>{item.subtitle}</Text>

    </TouchableOpacity>

  );



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <View style={styles.searchBar}>

          <TextInput

            style={styles.searchInput}

            value={searchText}

            onChangeText={setSearchText}

            placeholder="搜索目的地/景点/酒店"

          />

          <TouchableOpacity style={styles.searchButton}>

            <Text style={styles.searchButtonText}>搜索</Text>

          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.mapButton}>

          <Text style={styles.mapButtonText}>旅游地图</Text>

        </TouchableOpacity>

      </View>



      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularDestinations}>

        {popularDestinations.map((destination, index) => (

          <TouchableOpacity key={index} style={styles.destinationButton}>

            <Text style={styles.destinationText}>{destination}</Text>

          </TouchableOpacity>

        ))}

      </ScrollView>



      <FlatList

        data={services}

        renderItem={renderServiceItem}

        keyExtractor={(item) => item.id}

        numColumns={5}

        style={styles.servicesList}

      />



      <View style={styles.promotionsHeader}>

        <Text style={styles.promotionsTitle}>特价专区</Text>

        <Text style={styles.promotionsTitle}>直播团购</Text>

        <Text style={styles.promotionsTitle}>口碑榜</Text>

        <Text style={styles.promotionsTitle}>旅行热点</Text>

      </View>



      <FlatList

        data={promotions}

        renderItem={renderPromotionItem}

        keyExtractor={(item) => item.id}

        horizontal

        showsHorizontalScrollIndicator={false}

        style={styles.promotionsList}

      />



      <TouchableOpacity style={styles.banner}>

        <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />

      </TouchableOpacity>



      <View style={styles.tripInfo}>

        <Text style={styles.tripInfoTitle}>您有一段旅程</Text>

        <TouchableOpacity style={styles.tripInfoMore}>

          <Text style={styles.tripInfoMoreText}>更多 ></Text>

        </TouchableOpacity>

      </View>



      <TouchableOpacity style={styles.hotelInfo}>

        <Image source={require('../assets/snack-icon.png')} style={styles.hotelIcon} />

        <View style={styles.hotelDetails}>

          <Text style={styles.hotelName}>烟台百纳瑞汀酒店（第一海水浴场火车站店）</Text>

          <Text style={styles.hotelDate}>7月17日入住 · 3晚 · 7月20日离店</Text>

          <Text style={styles.roomType}>瑞雅海景大床房 1间</Text>

        </View>

        <TouchableOpacity style={styles.mapButton}>

          <Text style={styles.mapButtonText}>地图·周边 ></Text>

        </TouchableOpacity>

      </TouchableOpacity>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>社区</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>消息</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>行程</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>我的</Text>

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

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#1E90FF',

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    backgroundColor: '#fff',

    borderRadius: 20,

    paddingHorizontal: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

  },

  searchButton: {

    justifyContent: 'center',

    alignItems: 'center',

    paddingHorizontal: 10,

  },

  searchButtonText: {

    color: '#1E90FF',

    fontWeight: 'bold',

  },

  mapButton: {

    marginLeft: 10,

  },

  mapButtonText: {

    color: '#fff',

  },

  popularDestinations: {

    backgroundColor: '#fff',

    paddingVertical: 10,

  },

  destinationButton: {

    paddingHorizontal: 15,

  },

  destinationText: {

    color: '#333',

  },

  servicesList: {

    backgroundColor: '#fff',

    paddingVertical: 10,

  },

  serviceItem: {

    flex: 1,

    alignItems: 'center',

    marginBottom: 10,

  },

  serviceIcon: {

    width: 40,

    height: 40,

    marginBottom: 5,

  },

  serviceText: {

    fontSize: 12,

    color: '#333',

  },

  promotionsHeader: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

    backgroundColor: '#fff',

    marginTop: 10,

  },

  promotionsTitle: {

    fontWeight: 'bold',

    color: '#333',

  },

  promotionsList: {

    backgroundColor: '#fff',

    paddingVertical: 10,

  },

  promotionItem: {

    width: 120,

    marginHorizontal: 5,

  },

  promotionImage: {

    width: 120,

    height: 80,

    borderRadius: 5,

    marginBottom: 5,

  },

  promotionTitle: {

    fontSize: 14,

    fontWeight: 'bold',

    color: '#333',

  },

  promotionSubtitle: {

    fontSize: 12,

    color: '#666',

  },

  banner: {

    marginTop: 10,

  },

  bannerImage: {

    width: '100%',

    height: 80,

  },

  tripInfo: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#fff',

    marginTop: 10,

  },

  tripInfoTitle: {

    fontWeight: 'bold',

    color: '#333',

  },

  tripInfoMore: {

    padding: 5,

  },

  tripInfoMoreText: {

    color: '#666',

  },

  hotelInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#fff',

  },

  hotelIcon: {

    width: 40,

    height: 40,

    marginRight: 10,

  },

  hotelDetails: {

    flex: 1,

  },

  hotelName: {

    fontWeight: 'bold',

    color: '#333',

    marginBottom: 5,

  },

  hotelDate: {

    fontSize: 12,

    color: '#666',

    marginBottom: 2,

  },

  roomType: {

    fontSize: 12,

    color: '#666',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

    backgroundColor: '#fff',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  tabText: {

    fontSize: 12,

    color: '#666',

  },

  activeTabText: {

    color: '#1E90FF',

  },

});



export default HomeScreen;