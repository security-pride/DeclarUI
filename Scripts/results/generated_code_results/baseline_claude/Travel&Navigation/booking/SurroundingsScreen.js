import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const SurroundingsScreen = () => {

  const navigation = useNavigation();

  const [showNotice, setShowNotice] = useState(true);



  const hotels = [

    {

      id: '1',

      name: '烟台南山皇冠假日酒店',

      rating: 8.6,

      reviews: 29,

      location: '莱山区, 烟台',

      distance: '10千米',

      roomType: '1间酒店客房: 2张床',

      price: 707,

      image: '../assets/snack-icon.png',

      stars: 5,

      specialOffer: '该价格在Booking.com上仅剩2间',

      paymentOption: '无需预付',

    },

    {

      id: '2',

      name: '烟台世茂希尔顿酒店',

      rating: 8.9,

      reviews: 40,

      location: '烟台',

      distance: '750米',

      roomType: '1张床',

      price: 908,

      image: '../assets/snack-icon.png',

      stars: 4,

      sustainability: true,

    },

    {

      id: '3',

      name: '烟台孚利泰国际大酒店',

      rating: 8.3,

      reviews: 22,

      image: '../assets/snack-icon.png',

      stars: 5,

      genius: true,

    },

  ];



  const renderHotelItem = ({ item }) => (

    <TouchableOpacity style={styles.hotelItem} onPress={() => navigation.navigate('Details', { hotelId: item.id })}>

      <Image source={{ uri: item.image }} style={styles.hotelImage} />

      <View style={styles.hotelInfo}>

        <View style={styles.hotelHeader}>

          <Text style={styles.hotelName}>{item.name}</Text>

          <TouchableOpacity>

            <Icon name="heart-outline" size={24} color="#000" />

          </TouchableOpacity>

        </View>

        <View style={styles.ratingContainer}>

          {[...Array(item.stars)].map((_, i) => (

            <Icon key={i} name="star" size={16} color="#febb02" />

          ))}

          {item.genius && <View style={styles.geniusBadge}><Text style={styles.geniusText}>Genius</Text></View>}

        </View>

        <View style={styles.ratingReview}>

          <View style={styles.ratingBox}>

            <Text style={styles.ratingText}>{item.rating}</Text>

          </View>

          <Text style={styles.reviewText}>{item.rating >= 8.5 ? '很棒' : '非常好'} · {item.reviews}条点评</Text>

        </View>

        {item.location && (

          <Text style={styles.locationText}>

            <Icon name="location-outline" size={16} color="#666" /> {item.location} · 距你: {item.distance}

          </Text>

        )}

        {item.sustainability && (

          <Text style={styles.sustainabilityText}>

            <Icon name="leaf-outline" size={16} color="#0d7d4d" /> 可持续性认证

          </Text>

        )}

        {item.roomType && <Text style={styles.roomTypeText}>{item.roomType}</Text>}

        {item.price && (

          <View style={styles.priceContainer}>

            <Text style={styles.priceText}>{item.price}元</Text>

            <Text style={styles.taxText}>含税费及其他费用</Text>

          </View>

        )}

        {item.specialOffer && <Text style={styles.specialOfferText}>{item.specialOffer}</Text>}

        {item.paymentOption && (

          <Text style={styles.paymentOptionText}>

            <Icon name="checkmark-circle-outline" size={16} color="#0d7d4d" /> {item.paymentOption}

          </Text>

        )}

      </View>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>周围地区 7月18日 - 7月19日</Text>

      </View>



      <View style={styles.filterContainer}>

        <TouchableOpacity style={styles.filterButton}>

          <Icon name="arrow-down-up-outline" size={20} color="#000" />

          <Text style={styles.filterText}>排序</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>

          <Icon name="options-outline" size={20} color="#000" />

          <Text style={styles.filterText}>筛选</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>

          <Icon name="map-outline" size={20} color="#000" />

          <Text style={styles.filterText}>地图</Text>

        </TouchableOpacity>

      </View>



      {showNotice && (

        <View style={styles.noticeContainer}>

          <Text style={styles.noticeText}>所付佣金和其他商业因素可能会影响住宿的排名。了解更多</Text>

          <TouchableOpacity onPress={() => setShowNotice(false)}>

            <Icon name="close" size={20} color="#000" />

          </TouchableOpacity>

        </View>

      )}



      <Text style={styles.resultCount}>24家住宿</Text>



      <FlatList

        data={hotels}

        renderItem={renderHotelItem}

        keyExtractor={item => item.id}

        contentContainerStyle={styles.hotelList}

      />

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f5f5f5',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#febb02',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 16,

  },

  filterContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 12,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

    backgroundColor: '#fff',

  },

  filterButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  filterText: {

    marginLeft: 8,

    fontSize: 16,

  },

  noticeContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 12,

    backgroundColor: '#fff',

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  noticeText: {

    flex: 1,

    fontSize: 14,

    color: '#666',

  },

  resultCount: {

    fontSize: 16,

    fontWeight: 'bold',

    padding: 16,

  },

  hotelList: {

    padding: 16,

  },

  hotelItem: {

    backgroundColor: '#fff',

    borderRadius: 8,

    marginBottom: 16,

    overflow: 'hidden',

  },

  hotelImage: {

    width: '100%',

    height: 200,

  },

  hotelInfo: {

    padding: 12,

  },

  hotelHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 8,

  },

  hotelName: {

    fontSize: 18,

    fontWeight: 'bold',

    flex: 1,

  },

  ratingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 4,

  },

  geniusBadge: {

    backgroundColor: '#004cb8',

    paddingHorizontal: 4,

    paddingVertical: 2,

    borderRadius: 4,

    marginLeft: 4,

  },

  geniusText: {

    color: '#fff',

    fontSize: 12,

    fontWeight: 'bold',

  },

  ratingReview: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 8,

  },

  ratingBox: {

    backgroundColor: '#003580',

    padding: 4,

    borderRadius: 4,

    marginRight: 8,

  },

  ratingText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  reviewText: {

    fontSize: 14,

    color: '#666',

  },

  locationText: {

    fontSize: 14,

    color: '#666',

    marginBottom: 4,

  },

  sustainabilityText: {

    fontSize: 14,

    color: '#0d7d4d',

    marginBottom: 4,

  },

  roomTypeText: {

    fontSize: 14,

    marginBottom: 4,

  },

  priceContainer: {

    flexDirection: 'row',

    alignItems: 'baseline',

    marginTop: 8,

  },

  priceText: {

    fontSize: 18,

    fontWeight: 'bold',

    marginRight: 8,

  },

  taxText: {

    fontSize: 12,

    color: '#666',

  },

  specialOfferText: {

    fontSize: 12,

    color: '#e41c4d',

    marginTop: 4,

  },

  paymentOptionText: {

    fontSize: 14,

    color: '#0d7d4d',

    marginTop: 4,

  },

});



export default SurroundingsScreen;