import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const GroupDetailsScreen = ({ navigation }) => {

  const [isCollected, setIsCollected] = useState(false);



  const handleBackPress = () => {

    navigation.goBack();

  };



  const handleCollect = () => {

    setIsCollected(!isCollected);

  };



  const handleCustomerService = () => {

    // Implement customer service logic

  };



  const handleBookNow = () => {

    navigation.navigate('GroupTravelSearchResult');

  };



  return (

    <View style={styles.container}>

      <ScrollView>

        <Image source={require('../assets/snack-icon.png')} style={styles.image} />

        <View style={styles.content}>

          <Text style={styles.title}>烟台+蓬莱区2日1晚拼小团</Text>

          <Text style={styles.price}>¥965/人起</Text>

          <Text style={styles.description}>

            6人MiniGroup帆船出海/黄渤海分界线/投喂海鸥/养马岛/中国四大名楼-蓬莱阁/专业司兼导/宝藏机位/千与千寻同款入海轨道/烟台古城

          </Text>

          <View style={styles.reviewContainer}>

            <Text style={styles.rating}>5.0分</Text>

            <Text style={styles.comment}>酒店很舒服</Text>

          </View>

          <View style={styles.availabilityContainer}>

            <Text style={styles.sectionTitle}>可选日期</Text>

            <View style={styles.dateList}>

              {['07-19', '07-20', '07-21'].map((date, index) => (

                <TouchableOpacity key={index} style={styles.dateItem}>

                  <Text style={styles.dateText}>{date}</Text>

                </TouchableOpacity>

              ))}

            </View>

          </View>

          <View style={styles.servicesContainer}>

            <Text style={styles.sectionTitle}>服务保障</Text>

            <View style={styles.serviceList}>

              {['放心游', '无购物', '成团保障', '提前2天免费退'].map((service, index) => (

                <View key={index} style={styles.serviceItem}>

                  <Icon name="check-circle" size={16} color="#4CAF50" />

                  <Text style={styles.serviceText}>{service}</Text>

                </View>

              ))}

            </View>

          </View>

        </View>

      </ScrollView>

      <View style={styles.bottomBar}>

        <TouchableOpacity style={styles.bottomBarItem} onPress={() => {}}>

          <Icon name="store" size={24} color="#666" />

          <Text style={styles.bottomBarText}>店铺</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomBarItem} onPress={handleCollect}>

          <Icon name={isCollected ? "favorite" : "favorite-border"} size={24} color={isCollected ? "#FF6B6B" : "#666"} />

          <Text style={styles.bottomBarText}>收藏</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomBarItem} onPress={handleCustomerService}>

          <Icon name="headset-mic" size={24} color="#666" />

          <Text style={styles.bottomBarText}>客服</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bookButton} onPress={handleBookNow}>

          <Text style={styles.bookButtonText}>立即预订</Text>

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

  image: {

    width: '100%',

    height: 200,

    resizeMode: 'cover',

  },

  content: {

    padding: 15,

  },

  title: {

    fontSize: 20,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  price: {

    fontSize: 18,

    color: '#FF6B6B',

    marginBottom: 10,

  },

  description: {

    fontSize: 14,

    color: '#666',

    marginBottom: 15,

  },

  reviewContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 15,

  },

  rating: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#FF6B6B',

    marginRight: 10,

  },

  comment: {

    fontSize: 14,

    color: '#666',

  },

  availabilityContainer: {

    marginBottom: 15,

  },

  sectionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  dateList: {

    flexDirection: 'row',

  },

  dateItem: {

    paddingHorizontal: 15,

    paddingVertical: 8,

    borderRadius: 20,

    backgroundColor: '#E0E0E0',

    marginRight: 10,

  },

  dateText: {

    fontSize: 14,

  },

  servicesContainer: {

    marginBottom: 15,

  },

  serviceList: {

    flexDirection: 'row',

    flexWrap: 'wrap',

  },

  serviceItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginRight: 15,

    marginBottom: 10,

  },

  serviceText: {

    fontSize: 14,

    marginLeft: 5,

  },

  bottomBar: {

    flexDirection: 'row',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    padding: 10,

    backgroundColor: '#FFF',

  },

  bottomBarItem: {

    flex: 1,

    alignItems: 'center',

  },

  bottomBarText: {

    fontSize: 12,

    color: '#666',

    marginTop: 2,

  },

  bookButton: {

    flex: 2,

    backgroundColor: '#FF6B6B',

    justifyContent: 'center',

    alignItems: 'center',

    borderRadius: 20,

    marginLeft: 10,

  },

  bookButtonText: {

    color: '#FFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

});



export default GroupDetailsScreen;