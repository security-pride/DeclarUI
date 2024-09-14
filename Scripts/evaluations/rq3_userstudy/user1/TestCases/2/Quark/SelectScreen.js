import React from 'react';

import { View, Text, StyleSheet, SafeAreaView, StatusBar, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SelectScreen = () => {

  const navigation = useNavigation();



  const renderCommonItem = (icon, label) => (

    <TouchableOpacity style={styles.commonItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.commonItemIcon} />

      <Text style={styles.commonItemLabel}>{label}</Text>

    </TouchableOpacity>

  );



  const renderNewDiscoveryItem = (icon, label) => (

    <TouchableOpacity style={styles.newDiscoveryItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.newDiscoveryItemIcon} />

      <Text style={styles.newDiscoveryItemLabel}>{label}</Text>

    </TouchableOpacity>

  );



  const renderFeatureItem = (icon, label) => (

    <TouchableOpacity style={styles.featureItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.featureItemIcon} />

      <Text style={styles.featureItemLabel}>{label}</Text>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" />

      <View style={styles.header}>

        <Text style={styles.headerTitle}>精选</Text>

        <View style={styles.headerButtons}>

          <TouchableOpacity style={styles.headerButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.headerButtonIcon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.headerButton} onPress={() => navigation.goBack()}>

            <Image source={require('../assets/snack-icon.png')} style={styles.headerButtonIcon} />

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.searchContainer}>

        <TextInput

          style={styles.searchInput}

          placeholder="输入网址或网站名，网站访问一触即达"

          placeholderTextColor="#999"

        />

        <TouchableOpacity style={styles.searchButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

        </TouchableOpacity>

      </View>



      <ScrollView style={styles.content}>

        <Text style={styles.sectionTitle}>常用</Text>

        <View style={styles.commonSection}>

          {renderCommonItem('book', '书签')}

          {renderCommonItem('weibo', '微博')}

          {renderCommonItem('tencent', '腾讯')}

          {renderCommonItem('netease', '网易')}

          {renderCommonItem('sina', '新浪网')}

        </View>



        <View style={styles.newDiscoverySection}>

          <Text style={styles.sectionTitle}>今日新发现</Text>

          <View style={styles.newDiscoveryGrid}>

            {renderNewDiscoveryItem('hot', '夸克热搜')}

            {renderNewDiscoveryItem('college', '夸克高考')}

            {renderNewDiscoveryItem('travel', '携程旅行')}

            {renderNewDiscoveryItem('cash', '天天领现金')}

            {renderNewDiscoveryItem('game', '梦幻西游')}

            {renderNewDiscoveryItem('weibo-hot', '微博热搜')}

            {renderNewDiscoveryItem('anime', '腾讯动漫')}

            {renderNewDiscoveryItem('sina-weibo', '新浪微博')}

          </View>

        </View>



        <View style={styles.featureSection}>

          <Text style={styles.sectionTitle}>夸克宝藏功能</Text>

          <View style={styles.featureGrid}>

            {renderFeatureItem('ai', 'AI听记')}

            {renderFeatureItem('capture', '捷径')}

            {renderFeatureItem('daily', '夸克日报')}

            {renderFeatureItem('scan', '夸克扫描王')}

            {renderFeatureItem('cloud', '夸克网盘')}

            {renderFeatureItem('bookmark', '书签')}

            {renderFeatureItem('tools', '实用工具')}

            {renderFeatureItem('doc', '夸克文档')}

          </View>

        </View>



        <Text style={styles.sectionTitle}>全网热点实时更新</Text>

      </ScrollView>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000000',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 15,

    paddingVertical: 10,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#FFFFFF',

  },

  headerButtons: {

    flexDirection: 'row',

  },

  headerButton: {

    marginLeft: 15,

  },

  headerButtonIcon: {

    width: 24,

    height: 24,

    tintColor: '#FFFFFF',

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#333333',

    borderRadius: 20,

    margin: 15,

    paddingHorizontal: 15,

  },

  searchInput: {

    flex: 1,

    height: 40,

    color: '#FFFFFF',

    fontSize: 14,

  },

  searchButton: {

    padding: 5,

  },

  searchIcon: {

    width: 20,

    height: 20,

    tintColor: '#FFFFFF',

  },

  content: {

    flex: 1,

  },

  sectionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#FFFFFF',

    marginLeft: 15,

    marginTop: 20,

    marginBottom: 10,

  },

  commonSection: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingHorizontal: 15,

  },

  commonItem: {

    alignItems: 'center',

  },

  commonItemIcon: {

    width: 50,

    height: 50,

    borderRadius: 25,

  },

  commonItemLabel: {

    color: '#FFFFFF',

    fontSize: 12,

    marginTop: 5,

  },

  newDiscoverySection: {

    marginTop: 20,

  },

  newDiscoveryGrid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    paddingHorizontal: 15,

  },

  newDiscoveryItem: {

    width: '25%',

    alignItems: 'center',

    marginBottom: 15,

  },

  newDiscoveryItemIcon: {

    width: 50,

    height: 50,

    borderRadius: 10,

  },

  newDiscoveryItemLabel: {

    color: '#FFFFFF',

    fontSize: 12,

    marginTop: 5,

    textAlign: 'center',

  },

  featureSection: {

    marginTop: 20,

  },

  featureGrid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    paddingHorizontal: 15,

  },

  featureItem: {

    width: '25%',

    alignItems: 'center',

    marginBottom: 15,

  },

  featureItemIcon: {

    width: 50,

    height: 50,

    borderRadius: 10,

  },

  featureItemLabel: {

    color: '#FFFFFF',

    fontSize: 12,

    marginTop: 5,

    textAlign: 'center',

  },

});



export default SelectScreen;