import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const GroupDetailsScreen = () => {

  const navigation = useNavigation();



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.headerText}>图片1/4</Text>

        <TouchableOpacity>

          <Text style={styles.headerButton}>达人探线</Text>

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.shareIcon} />

        </TouchableOpacity>

      </View>



      <Image source={require('../assets/snack-icon.png')} style={styles.mainImage} />



      <View style={styles.infoContainer}>

        <Text style={styles.title}>烟台+蓬莱区2日1晚拼小团</Text>

        <View style={styles.priceContainer}>

          <Text style={styles.price}>¥965/人起</Text>

          <Text style={styles.discount}>已减100</Text>

          <Text style={styles.promotion}>限时促销</Text>

          <Text style={styles.sold}>已售11人</Text>

        </View>

      </View>



      <View style={styles.detailsContainer}>

        <Text style={styles.detailsTitle}>6人MiniGroup帆船出海/黄渤海分界线/投喂海鸥--"小马尔代夫"--养马岛｜中国四大名楼--蓬莱阁｜专业司兼导｜宝藏机位｜午与午寻同款入海轨道/烟台古城-所展开</Text>

        <View style={styles.tagContainer}>

          <Text style={styles.tag}>优选</Text>

          <Text style={styles.tagText}>帆船出海</Text>

        </View>

      </View>



      <View style={styles.ratingContainer}>

        <Text style={styles.rating}>5.0分</Text>

        <Text style={styles.ratingText}>超棒 "酒店很舒服"</Text>

        <TouchableOpacity>

          <Text style={styles.reviewsLink}>4条点评 ></Text>

        </TouchableOpacity>

      </View>



      <View style={styles.servicesContainer}>

        <Text style={styles.servicesTitle}>服务</Text>

        <View style={styles.serviceItems}>

          <Text style={styles.serviceItem}>放心游·无购物</Text>

          <Text style={styles.serviceItem}>成团保障</Text>

          <Text style={styles.serviceItem}>提前2天免费退</Text>

        </View>

      </View>



      <View style={styles.promotionsContainer}>

        <Text style={styles.promotionsTitle}>优惠</Text>

        <View style={styles.promotionItems}>

          <Text style={styles.promotionItem}>钻石贵宾专享</Text>

          <Text style={styles.promotionItem}>暑期大促</Text>

          <Text style={styles.promotionItem}>分期立减</Text>

        </View>

        <TouchableOpacity>

          <Text style={styles.morePromotions}>29项优惠 ></Text>

        </TouchableOpacity>

      </View>



      <TouchableOpacity style={styles.experienceButton}>

        <Text style={styles.experienceButtonText}>拼小团 人少体验好·自由灵活·特色体验·纯玩无购物 ></Text>

      </TouchableOpacity>



      <View style={styles.departureContainer}>

        <Text style={styles.departureTitle}>烟台出发</Text>

        <Text style={styles.departureSubtitle}>近30天低价</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.dateScrollView}>

          <TouchableOpacity style={styles.dateButton}>

            <Text style={styles.dateButtonText}>星期五</Text>

            <Text style={styles.dateButtonDate}>07-19</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.dateButton}>

            <Text style={styles.dateButtonText}>星期六</Text>

            <Text style={styles.dateButtonDate}>07-20</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.dateButton}>

            <Text style={styles.dateButtonText}>星期日</Text>

            <Text style={styles.dateButtonDate}>07-21</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.dateButton}>

            <Text style={styles.dateButtonText}>星期一</Text>

            <Text style={styles.dateButtonDate}>07-22</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.dateButton}>

            <Text style={styles.dateButtonText}>全部</Text>

            <Text style={styles.dateButtonDate}>班期</Text>

          </TouchableOpacity>

        </ScrollView>

      </View>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerButtonText}>店铺</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerButtonText}>收藏</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerButtonText}>客服</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.scheduleButton}>

          <Text style={styles.scheduleButtonText}>看每日行程</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bookButton}>

          <Text style={styles.bookButtonText}>立即预订</Text>

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

    padding: 10,

    backgroundColor: '#f8f8f8',

  },

  backIcon: {

    width: 20,

    height: 20,

  },

  headerText: {

    flex: 1,

    textAlign: 'center',

    fontSize: 16,

  },

  headerButton: {

    fontSize: 14,

    color: '#007AFF',

  },

  shareIcon: {

    width: 20,

    height: 20,

    marginLeft: 10,

  },

  mainImage: {

    width: '100%',

    height: 200,

    resizeMode: 'cover',

  },

  infoContainer: {

    padding: 15,

  },

  title: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  priceContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  price: {

    fontSize: 20,

    color: '#FF6B00',

    fontWeight: 'bold',

  },

  discount: {

    fontSize: 12,

    color: '#FF6B00',

    backgroundColor: '#FFF0E6',

    padding: 2,

    marginLeft: 5,

  },

  promotion: {

    fontSize: 12,

    color: '#FF6B00',

    borderColor: '#FF6B00',

    borderWidth: 1,

    padding: 2,

    marginLeft: 5,

  },

  sold: {

    fontSize: 12,

    color: '#999',

    marginLeft: 5,

  },

  detailsContainer: {

    padding: 15,

    borderTopWidth: 1,

    borderTopColor: '#f0f0f0',

  },

  detailsTitle: {

    fontSize: 14,

    lineHeight: 20,

  },

  tagContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 10,

  },

  tag: {

    fontSize: 12,

    color: '#fff',

    backgroundColor: '#007AFF',

    padding: 2,

    marginRight: 5,

  },

  tagText: {

    fontSize: 12,

    color: '#007AFF',

  },

  ratingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    borderTopWidth: 1,

    borderTopColor: '#f0f0f0',

  },

  rating: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#FF6B00',

  },

  ratingText: {

    fontSize: 14,

    color: '#333',

    marginLeft: 10,

  },

  reviewsLink: {

    fontSize: 14,

    color: '#007AFF',

    marginLeft: 'auto',

  },

  servicesContainer: {

    padding: 15,

    borderTopWidth: 1,

    borderTopColor: '#f0f0f0',

  },

  servicesTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  serviceItems: {

    flexDirection: 'row',

    flexWrap: 'wrap',

  },

  serviceItem: {

    fontSize: 12,

    color: '#333',

    backgroundColor: '#f0f0f0',

    padding: 5,

    marginRight: 10,

    marginBottom: 5,

    borderRadius: 3,

  },

  promotionsContainer: {

    padding: 15,

    borderTopWidth: 1,

    borderTopColor: '#f0f0f0',

  },

  promotionsTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  promotionItems: {

    flexDirection: 'row',

    flexWrap: 'wrap',

  },

  promotionItem: {

    fontSize: 12,

    color: '#FF6B00',

    backgroundColor: '#FFF0E6',

    padding: 5,

    marginRight: 10,

    marginBottom: 5,

    borderRadius: 3,

  },

  morePromotions: {

    fontSize: 14,

    color: '#007AFF',

    marginTop: 10,

  },

  experienceButton: {

    backgroundColor: '#f0f0f0',

    padding: 15,

    marginHorizontal: 15,

    borderRadius: 5,

  },

  experienceButtonText: {

    fontSize: 14,

    color: '#333',

  },

  departureContainer: {

    padding: 15,

    borderTopWidth: 1,

    borderTopColor: '#f0f0f0',

  },

  departureTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  departureSubtitle: {

    fontSize: 12,

    color: '#999',

    marginTop: 5,

  },

  dateScrollView: {

    marginTop: 10,

  },

  dateButton: {

    alignItems: 'center',

    marginRight: 15,

  },

  dateButtonText: {

    fontSize: 14,

    color: '#333',

  },

  dateButtonDate: {

    fontSize: 12,

    color: '#999',

    marginTop: 5,

  },

  footer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    borderTopWidth: 1,

    borderTopColor: '#f0f0f0',

  },

  footerButton: {

    alignItems: 'center',

    marginRight: 20,

  },

  footerIcon: {

    width: 24,

    height: 24,

  },

  footerButtonText: {

    fontSize: 12,

    color: '#333',

    marginTop: 5,

  },

  scheduleButton: {

    flex: 1,

    backgroundColor: '#FFF0E6',

    padding: 10,

    borderRadius: 5,

    marginRight: 10,

  },

  scheduleButtonText: {

    fontSize: 14,

    color: '#FF6B00',

    textAlign: 'center',

  },

  bookButton: {

    flex: 1,

    backgroundColor: '#FF6B00',

    padding: 10,

    borderRadius: 5,

  },

  bookButtonText: {

    fontSize: 14,

    color: '#fff',

    textAlign: 'center',

  },

});



export default GroupDetailsScreen;