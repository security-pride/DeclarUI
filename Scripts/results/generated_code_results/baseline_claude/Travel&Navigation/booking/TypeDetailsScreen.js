import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const TypeDetailsScreen = () => {

  const navigation = useNavigation();

  const [guestCount, setGuestCount] = useState(2);



  const amenities = [

    { icon: 'wifi', text: '免费无线网络' },

    { icon: 'eye', text: '享有风景' },

    { icon: 'snow', text: '空调' },

    { icon: 'water', text: '独立浴室' },

    { icon: 'tv', text: '平板电视' },

    { icon: 'wine', text: '迷你吧' },

  ];



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#fff" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>选择客房</Text>

        <TouchableOpacity>

          <Icon name="share-outline" size={24} color="#fff" />

        </TouchableOpacity>

      </View>



      <ScrollView>

        <View style={styles.filterContainer}>

          <TouchableOpacity style={styles.filterButton}>

            <Text style={styles.filterButtonText}>包括早餐</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.guestCountContainer}>

          <Text style={styles.sectionTitle}>住客人数</Text>

          <View style={styles.guestCountButtons}>

            <TouchableOpacity

              style={[styles.guestCountButton, guestCount === 2 && styles.activeGuestCountButton]}

              onPress={() => setGuestCount(2)}

            >

              <Text style={[styles.guestCountButtonText, guestCount === 2 && styles.activeGuestCountButtonText]}>2</Text>

            </TouchableOpacity>

            <TouchableOpacity

              style={[styles.guestCountButton, guestCount === 3 && styles.activeGuestCountButton]}

              onPress={() => setGuestCount(3)}

            >

              <Text style={[styles.guestCountButtonText, guestCount === 3 && styles.activeGuestCountButtonText]}>3</Text>

            </TouchableOpacity>

          </View>

        </View>



        <Text style={styles.matchingRoomsText}>有17个选项符合你的筛选条件</Text>



        <View style={styles.roomTypeContainer}>

          <Text style={styles.roomTypeName}>标准间</Text>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.roomImage} />

          <View style={styles.roomDetails}>

            <View style={styles.roomDetailItem}>

              <Icon name="close-circle-outline" size={20} color="#666" />

              <Text style={styles.roomDetailText}>不可退款</Text>

            </View>

            <View style={styles.roomDetailItem}>

              <Icon name="checkmark-circle-outline" size={20} color="#0d7d4d" />

              <Text style={styles.roomDetailText}>无需预付 - 到店付款</Text>

            </View>

            <View style={styles.roomDetailItem}>

              <Icon name="people-outline" size={20} color="#666" />

              <Text style={styles.roomDetailText}>2位成人的入住价格</Text>

            </View>

            <View style={styles.roomDetailItem}>

              <Icon name="bed-outline" size={20} color="#666" />

              <Text style={styles.roomDetailText}>选项1: 2张单人床</Text>

            </View>

            <View style={styles.roomDetailItem}>

              <Icon name="bed-outline" size={20} color="#666" />

              <Text style={styles.roomDetailText}>选项2: 1张超大号双人床</Text>

            </View>

            <View style={styles.roomDetailItem}>

              <Icon name="resize-outline" size={20} color="#666" />

              <Text style={styles.roomDetailText}>客房面积: 46平方米</Text>

            </View>

            <View style={styles.roomDetailItem}>

              <Icon name="restaurant-outline" size={20} color="#0d7d4d" />

              <Text style={styles.roomDetailText}>提供早餐 (到店付款)</Text>

            </View>

          </View>

          <View style={styles.amenitiesContainer}>

            {amenities.map((amenity, index) => (

              <View key={index} style={styles.amenityItem}>

                <Icon name={amenity.icon} size={16} color="#0d7d4d" />

                <Text style={styles.amenityText}>{amenity.text}</Text>

              </View>

            ))}

          </View>

          <Text style={styles.availabilityWarning}>Booking.com上只剩1间房了</Text>

          <View style={styles.priceContainer}>

            <Text style={styles.priceLabel}>1晚房价 (7月18日 - 7月19日)</Text>

            <Text style={styles.priceValue}>707元</Text>

            <Text style={styles.priceTax}>含税费及其他费用</Text>

          </View>

          <TouchableOpacity style={styles.selectButton} onPress={() => navigation.navigate('Reservation')}>

            <Text style={styles.selectButtonText}>选择并定制</Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

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

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#003580',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#fff',

  },

  filterContainer: {

    padding: 16,

  },

  filterButton: {

    borderWidth: 1,

    borderColor: '#003580',

    borderRadius: 20,

    paddingHorizontal: 16,

    paddingVertical: 8,

    alignSelf: 'flex-start',

  },

  filterButtonText: {

    color: '#003580',

  },

  guestCountContainer: {

    padding: 16,

  },

  sectionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  guestCountButtons: {

    flexDirection: 'row',

  },

  guestCountButton: {

    borderWidth: 1,

    borderColor: '#003580',

    paddingHorizontal: 24,

    paddingVertical: 8,

    marginRight: 8,

  },

  activeGuestCountButton: {

    backgroundColor: '#003580',

  },

  guestCountButtonText: {

    color: '#003580',

  },

  activeGuestCountButtonText: {

    color: '#fff',

  },

  matchingRoomsText: {

    padding: 16,

    fontSize: 14,

    color: '#666',

  },

  roomTypeContainer: {

    backgroundColor: '#fff',

    margin: 16,

    borderRadius: 8,

    overflow: 'hidden',

  },

  roomTypeName: {

    fontSize: 18,

    fontWeight: 'bold',

    padding: 16,

  },

  roomImage: {

    width: '100%',

    height: 200,

  },

  roomDetails: {

    padding: 16,

  },

  roomDetailItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 8,

  },

  roomDetailText: {

    marginLeft: 8,

    fontSize: 14,

    color: '#333',

  },

  amenitiesContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    padding: 16,

  },

  amenityItem: {

    flexDirection: 'row',

    alignItems: 'center',

    width: '50%',

    marginBottom: 8,

  },

  amenityText: {

    marginLeft: 8,

    fontSize: 14,

    color: '#0d7d4d',

  },

  availabilityWarning: {

    color: '#e41c4d',

    fontSize: 14,

    padding: 16,

  },

  priceContainer: {

    padding: 16,

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

  priceLabel: {

    fontSize: 14,

    color: '#666',

  },

  priceValue: {

    fontSize: 24,

    fontWeight: 'bold',

    marginVertical: 4,

  },

  priceTax: {

    fontSize: 12,

    color: '#666',

  },

  selectButton: {

    backgroundColor: '#0071c2',

    padding: 16,

    alignItems: 'center',

  },

  selectButtonText: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

});



export default TypeDetailsScreen;