import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const GroupDetailsScreen = ({ navigation }) => {

  const [selectedDate, setSelectedDate] = useState('星期六 07-20');



  const renderDateOption = (day, date) => (

    <TouchableOpacity

      style={[

        styles.dateOption,

        selectedDate === `${day} ${date}` && styles.selectedDateOption,

      ]}

      onPress={() => setSelectedDate(`${day} ${date}`)}

    >

      <Text style={styles.dateOptionText}>{day}</Text>

      <Text style={styles.dateOptionText}>{date}</Text>

    </TouchableOpacity>

  );



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.headerText}>图片1/4</Text>

        <View style={styles.headerRightIcons}>

          <TouchableOpacity style={styles.iconButton}>

            <Icon name="share" size={24} color="#000" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>

            <Icon name="notifications" size={24} color="#000" />

            <View style={styles.notificationBadge}>

              <Text style={styles.notificationCount}>16</Text>

            </View>

          </TouchableOpacity>

        </View>

      </View>

      

      <Image source={require('../assets/snack-icon.png')} style={styles.mainImage} />

      

      <View style={styles.contentContainer}>

        <Text style={styles.title}>烟台+蓬莱区2日1晚拼小团</Text>

        <Text style={styles.price}>¥965/人起</Text>

        <View style={styles.tagContainer}>

          <Text style={styles.tag}>达人探线</Text>

          <Text style={styles.tag}>优选</Text>

          <Text style={styles.tag}>帆船出海</Text>

        </View>

        

        <View style={styles.ratingContainer}>

          <Text style={styles.ratingText}>5.0分</Text>

          <Text style={styles.ratingDescription}>超棒 "酒店很舒服"</Text>

          <Text style={styles.reviewCount}>4条点评 {'>'}</Text>

        </View>

        

        <View style={styles.featureContainer}>

          <Text style={styles.featureText}>放心游·无购物·成团保障·提前2天免费退</Text>

        </View>

        

        <View style={styles.discountContainer}>

          <Text style={styles.discountText}>钻石贵宾专享</Text>

          <Text style={styles.discountText}>暑期大促</Text>

          <Text style={styles.discountText}>分期立减</Text>

          <Text style={styles.moreDiscounts}>29项优惠 {'>'}</Text>

        </View>

        

        <View style={styles.groupTypeContainer}>

          <Text style={styles.groupTypeText}>拼小团</Text>

          <Text style={styles.groupTypeDescription}>人少体验好·自由灵活·特色体验·纯玩无购物</Text>

        </View>

        

        <View style={styles.dateSelectionContainer}>

          <Text style={styles.dateSelectionTitle}>烟台出发</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            {renderDateOption('星期五', '07-19')}

            {renderDateOption('星期六', '07-20')}

            {renderDateOption('星期日', '07-21')}

            {renderDateOption('星期一', '07-22')}

            <TouchableOpacity style={styles.allDatesButton}>

              <Text style={styles.allDatesButtonText}>全部班期</Text>

            </TouchableOpacity>

          </ScrollView>

        </View>

      </View>

      

      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerButton}>

          <Icon name="store" size={24} color="#666" />

          <Text style={styles.footerButtonText}>店铺</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Icon name="favorite-border" size={24} color="#666" />

          <Text style={styles.footerButtonText}>收藏</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Icon name="support-agent" size={24} color="#666" />

          <Text style={styles.footerButtonText}>客服</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bookNowButton}>

          <Text style={styles.bookNowButtonText}>立即预订</Text>

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

    backgroundColor: '#fff',

  },

  headerText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  headerRightIcons: {

    flexDirection: 'row',

  },

  iconButton: {

    marginLeft: 15,

  },

  notificationBadge: {

    position: 'absolute',

    right: -6,

    top: -3,

    backgroundColor: 'red',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  notificationCount: {

    color: '#fff',

    fontSize: 12,

  },

  mainImage: {

    width: '100%',

    height: 200,

    resizeMode: 'cover',

  },

  contentContainer: {

    padding: 15,

    backgroundColor: '#fff',

  },

  title: {

    fontSize: 20,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  price: {

    fontSize: 18,

    color: '#ff6600',

    fontWeight: 'bold',

    marginBottom: 10,

  },

  tagContainer: {

    flexDirection: 'row',

    marginBottom: 10,

  },

  tag: {

    backgroundColor: '#f0f0f0',

    paddingHorizontal: 8,

    paddingVertical: 4,

    marginRight: 8,

    borderRadius: 4,

    fontSize: 12,

  },

  ratingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  ratingText: {

    fontSize: 16,

    fontWeight: 'bold',

    marginRight: 10,

  },

  ratingDescription: {

    fontSize: 14,

    color: '#666',

  },

  reviewCount: {

    fontSize: 14,

    color: '#666',

    marginLeft: 'auto',

  },

  featureContainer: {

    backgroundColor: '#f0f0f0',

    padding: 10,

    borderRadius: 4,

    marginBottom: 10,

  },

  featureText: {

    fontSize: 14,

  },

  discountContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    marginBottom: 10,

  },

  discountText: {

    fontSize: 12,

    color: '#ff6600',

    borderColor: '#ff6600',

    borderWidth: 1,

    borderRadius: 4,

    paddingHorizontal: 6,

    paddingVertical: 2,

    marginRight: 8,

    marginBottom: 5,

  },

  moreDiscounts: {

    fontSize: 12,

    color: '#666',

    alignSelf: 'center',

  },

  groupTypeContainer: {

    marginBottom: 10,

  },

  groupTypeText: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  groupTypeDescription: {

    fontSize: 14,

    color: '#666',

  },

  dateSelectionContainer: {

    marginBottom: 15,

  },

  dateSelectionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  dateOption: {

    alignItems: 'center',

    padding: 10,

    borderWidth: 1,

    borderColor: '#ddd',

    borderRadius: 4,

    marginRight: 10,

  },

  selectedDateOption: {

    borderColor: '#ff6600',

    backgroundColor: '#fff0e6',

  },

  dateOptionText: {

    fontSize: 14,

  },

  allDatesButton: {

    justifyContent: 'center',

    alignItems: 'center',

    padding: 10,

    borderWidth: 1,

    borderColor: '#ddd',

    borderRadius: 4,

  },

  allDatesButtonText: {

    fontSize: 14,

    color: '#666',

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#fff',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

  footerButton: {

    alignItems: 'center',

  },

  footerButtonText: {

    fontSize: 12,

    color: '#666',

    marginTop: 5,

  },

  bookNowButton: {

    backgroundColor: '#ff6600',

    paddingHorizontal: 20,

    paddingVertical: 10,

    borderRadius: 4,

  },

  bookNowButtonText: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

});



export default GroupDetailsScreen;