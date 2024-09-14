import React from 'react';

import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const NewsScreen = () => {

  const navigation = useNavigation();



  const renderTopNews = () => (

    <View style={styles.topNewsContainer}>

      <View style={styles.dateWeather}>

        <Text style={styles.date}>07{'\n'}16</Text>

        <Text style={styles.weather}>武汉市 30°C</Text>

      </View>

      <View style={styles.topNewsContent}>

        <Text style={styles.topNewsTitle}>早报</Text>

        <Text style={styles.topNewsItem}>• 余承东回应常按任正非批：有误解</Text>

        <Text style={styles.topNewsItem}>• 如何扭转地方财政收缩态势？专家建议</Text>

        <Text style={styles.topNewsItem}>• 美特勤局局长：调整特朗普贴身警卫</Text>

      </View>

      <Image source={require('../assets/snack-icon.png')} style={styles.topNewsImage} />

    </View>

  );



  const renderHotTopics = () => (

    <View style={styles.hotTopicsContainer}>

      <View style={styles.hotTopicsHeader}>

        <Text style={styles.hotTopicsTitle}>热搜榜</Text>

        <View style={styles.tabContainer}>

          <Text style={[styles.tabText, styles.activeTab]}>热搜</Text>

          <Text style={styles.tabText}>微博</Text>

          <Text style={styles.tabText}>知乎</Text>

        </View>

      </View>

      <View style={styles.hotTopicsList}>

        <Text style={styles.hotTopicItem}><Text style={styles.hotTopicRank}>1.</Text> 400多件裙子退货店家损失近80...</Text>

        <Text style={styles.hotTopicItem}><Text style={styles.hotTopicRank}>2.</Text> 几千块手机为何离不开几块钱的...</Text>

        <Text style={styles.hotTopicItem}><Text style={styles.hotTopicRank}>3.</Text> 全面深化改革的实践续篇</Text>

        <Text style={styles.hotTopicItem}><Text style={styles.hotTopicRank}>4.</Text> 抓娃娃票房</Text>

        <Text style={styles.hotTopicItem}><Text style={styles.hotTopicRank}>5.</Text> 小天愿意跟相柳走不是因为誓言</Text>

      </View>

    </View>

  );



  const renderPromotions = () => (

    <View style={styles.promotionsContainer}>

      <TouchableOpacity style={styles.promotionItem}>

        <View style={styles.promotionItem1}>
          <Image source={require('../assets/snack-icon.png')} style={styles.promotionIcon} />
          <Text style={styles.promotionTitle}>芭芭农场</Text>
        </View>
        

        <View style={styles.promotionContent}>

          <Text style={styles.promotionSubtitle}>新鲜水果包邮到家</Text>

          <TouchableOpacity style={styles.promotionButton}>

            <Text style={styles.promotionButtonText}>{"去施肥>"} </Text>

          </TouchableOpacity>

        </View>


      </TouchableOpacity>

      <TouchableOpacity style={styles.promotionItem}>

        <View style={styles.promotionItem1}>
          <Image source={require('../assets/snack-icon.png')} style={styles.promotionIcon} />
          <Text style={styles.promotionTitle}>福利中心</Text>
        </View>
        

        <View style={styles.promotionContent}>

          <Text style={styles.promotionSubtitle}>现金红包天天领取</Text>

          <TouchableOpacity style={styles.promotionButton}>

          <Text style={styles.promotionButtonText}>{"去领钱>"} </Text>

        </TouchableOpacity>

        </View>

        

      </TouchableOpacity>

    </View>

  );



  const renderFeaturedNews = () => (

    <View style={styles.featuredNewsContainer}>

      <View style={styles.featuredNewsTag}>

        <Text style={styles.featuredNewsTagText}>专题</Text>

      </View>

      <Image source={require('../assets/snack-icon.png')} style={styles.featuredNewsImage} />

      <Text style={styles.featuredNewsTitle}>特朗普遇刺右耳受伤</Text>

    </View>

  );



  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" />

      <View style={styles.header}>

        <Text style={styles.headerTitle}>夸克日报</Text>

        <View style={styles.headerIcons}>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

          </TouchableOpacity>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

          </TouchableOpacity>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

          </TouchableOpacity>

        </View>

      </View>

      <ScrollView style={styles.content}>

        {renderTopNews()}

        {renderHotTopics()}

        {renderPromotions()}

        {renderFeaturedNews()}

      </ScrollView>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    paddingVertical: 10,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#FFF',

  },

  headerIcons: {

    flexDirection: 'row',

  },

  headerIcon: {

    width: 24,

    height: 24,

    marginLeft: 15,

    tintColor: '#FFF',

  },

  content: {

    flex: 1,

  },

  topNewsContainer: {

    flexDirection: 'row',

    backgroundColor: '#0077BE',

    padding: 15,

    borderRadius: 10,

    margin: 10,

  },

  dateWeather: {

    marginRight: 10,

  },

  date: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#FFF',

  },

  weather: {

    fontSize: 12,

    color: '#FFF',

  },

  topNewsContent: {

    flex: 1,

  },

  topNewsTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#FFF',

    marginBottom: 5,

  },

  topNewsItem: {

    fontSize: 14,

    color: '#FFF',

    marginBottom: 3,

  },

  topNewsImage: {

    width: 80,

    height: 80,

    borderRadius: 5,

  },

  hotTopicsContainer: {

    backgroundColor: '#222',

    borderRadius: 10,

    margin: 10,

    padding: 15,

  },

  hotTopicsHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  hotTopicsTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#FFF',

  },

  tabContainer: {

    flexDirection: 'row',

  },

  tabText: {

    fontSize: 14,

    color: '#999',

    marginLeft: 10,

  },

  activeTab: {

    color: '#FFF',

  },

  hotTopicsList: {

    marginTop: 10,

  },

  hotTopicItem: {

    fontSize: 14,

    color: '#FFF',

    marginBottom: 8,

  },

  hotTopicRank: {

    fontWeight: 'bold',

    color: '#FF6B6B',

  },

  promotionsContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    margin: 10,

  },

  promotionItem: {

    flexDirection: 'column',

    alignItems: 'center',

    backgroundColor: '#222',

    borderRadius: 10,

    padding: 10,

    flex: 1,

    marginHorizontal: 5,

  },

  promotionItem1: {
    flexDirection: 'row',
  },

  promotionIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  promotionContent: {

    flex: 1,

    flexDirection: 'row',

    marginTop: 10,
  },

  promotionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#FFF',

  },

  promotionSubtitle: {

    fontSize: 12,

    color: '#999',

  },

  promotionButton: {

    backgroundColor: '#4CAF50',

    borderRadius: 15,

    paddingHorizontal: 10,

    height: 16,

  },

  promotionButtonText: {

    color: '#FFF',

    fontSize: 12,

  },

  featuredNewsContainer: {

    margin: 10,

    borderRadius: 10,

    overflow: 'hidden',

  },

  featuredNewsTag: {

    position: 'absolute',

    top: 10,

    left: 10,

    backgroundColor: '#4285F4',

    borderRadius: 5,

    paddingVertical: 3,

    paddingHorizontal: 8,

    zIndex: 1,

  },

  featuredNewsTagText: {

    color: '#FFF',

    fontSize: 12,

    fontWeight: 'bold',

  },

  featuredNewsImage: {

    width: '100%',

    height: 200,

    borderRadius: 10,

  },

  featuredNewsTitle: {

    position: 'absolute',

    bottom: 10,

    left: 10,

    right: 10,

    color: '#FFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

});



export default NewsScreen;