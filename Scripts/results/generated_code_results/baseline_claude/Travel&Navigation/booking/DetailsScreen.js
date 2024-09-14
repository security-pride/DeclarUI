import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const DetailsScreen = () => {

  const navigation = useNavigation();



  const amenities = [

    { icon: 'car', text: '免费停车' },

    { icon: 'water', text: '室内游泳池' },

    { icon: 'restaurant', text: '餐厅' },

    { icon: 'flower', text: 'Spa及健康中心' },

    { icon: 'wifi', text: '免费无线网络连接' },

  ];



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#fff" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>烟台南山皇冠假日酒店</Text>

        <TouchableOpacity>

          <Icon name="heart-outline" size={24} color="#fff" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="share-social-outline" size={24} color="#fff" />

        </TouchableOpacity>

      </View>



      <View style={styles.imageGallery}>

        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.mainImage} />

        <View style={styles.thumbnailContainer}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.thumbnail} />

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.thumbnail} />

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.thumbnail} />

          <View style={styles.moreThumbnail}>

            <Text style={styles.moreThumbnailText}>+118</Text>

          </View>

        </View>

      </View>



      <View style={styles.amenitiesContainer}>

        {amenities.map((amenity, index) => (

          <View key={index} style={styles.amenityItem}>

            <Icon name={amenity.icon} size={24} color="#666" />

            <Text style={styles.amenityText}>{amenity.text}</Text>

          </View>

        ))}

      </View>



      <View style={styles.hotelInfo}>

        <Text style={styles.hotelName}>烟台南山皇冠假日酒店</Text>

        <View style={styles.ratingContainer}>

          <Icon name="star" size={16} color="#FFD700" />

          <Icon name="star" size={16} color="#FFD700" />

          <Icon name="star" size={16} color="#FFD700" />

          <Icon name="star" size={16} color="#FFD700" />

          <Icon name="star" size={16} color="#FFD700" />

          <Icon name="thumbs-up" size={16} color="#4CAF50" />

          <Text style={styles.rating}>8.6</Text>

        </View>

      </View>



      <View style={styles.bookingInfo}>

        <View style={styles.dateContainer}>

          <View style={styles.dateItem}>

            <Text style={styles.dateLabel}>入住时间</Text>

            <Text style={styles.dateValue}>7月18日 周四</Text>

          </View>

          <View style={styles.dateItem}>

            <Text style={styles.dateLabel}>退房时间</Text>

            <Text style={styles.dateValue}>7月19日 周五</Text>

          </View>

        </View>

        <View style={styles.guestInfo}>

          <Text style={styles.guestInfoText}>1间房 · 2位成人 · 无儿童</Text>

        </View>

        <View style={styles.priceInfo}>

          <Text style={styles.priceLabel}>1晚房价 (7月18日 - 7月19日)</Text>

        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TypeDetails')}>

          <Text style={styles.buttonText}>查看房型列表</Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    padding: 16,

    backgroundColor: '#003580',

  },

  headerTitle: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  imageGallery: {

    height: 200,

  },

  mainImage: {

    width: '100%',

    height: 150,

  },

  thumbnailContainer: {

    flexDirection: 'row',

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

    padding: 8,

  },

  thumbnail: {

    width: 50,

    height: 50,

    marginRight: 8,

    borderRadius: 4,

  },

  moreThumbnail: {

    width: 50,

    height: 50,

    backgroundColor: 'rgba(0,0,0,0.5)',

    justifyContent: 'center',

    alignItems: 'center',

    borderRadius: 4,

  },

  moreThumbnailText: {

    color: '#fff',

    fontSize: 16,

  },

  amenitiesContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  amenityItem: {

    alignItems: 'center',

  },

  amenityText: {

    fontSize: 12,

    marginTop: 4,

  },

  hotelInfo: {

    padding: 16,

  },

  hotelName: {

    fontSize: 20,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  ratingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  rating: {

    marginLeft: 8,

    fontSize: 16,

    fontWeight: 'bold',

    color: '#4CAF50',

  },

  bookingInfo: {

    padding: 16,

    backgroundColor: '#f5f5f5',

  },

  dateContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 16,

  },

  dateItem: {},

  dateLabel: {

    fontSize: 14,

    color: '#666',

  },

  dateValue: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  guestInfo: {

    marginBottom: 16,

  },

  guestInfoText: {

    fontSize: 16,

  },

  priceInfo: {

    marginBottom: 16,

  },

  priceLabel: {

    fontSize: 16,

    color: '#666',

  },

  button: {

    backgroundColor: '#003580',

    padding: 16,

    borderRadius: 8,

    alignItems: 'center',

  },

  buttonText: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

});



export default DetailsScreen;