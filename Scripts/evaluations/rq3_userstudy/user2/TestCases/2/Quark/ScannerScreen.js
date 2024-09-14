import React, { useState } from 'react';

import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ScannerScreen = () => {

  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState('首页');



  const renderFeatureButton = (icon, label) => (

    <TouchableOpacity style={styles.featureButton}>

      <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />

      <Text style={styles.featureLabel}>{label}</Text>

    </TouchableOpacity>

  );



  const renderImportButton = (icon, label) => (

    <TouchableOpacity style={styles.importButton}>

      <Image source={require('../assets/snack-icon.png')} style={styles.importIcon} />

      <Text style={styles.importLabel}>{label}</Text>

    </TouchableOpacity>

  );



  const renderTabBarItem = (label) => (

    <TouchableOpacity 

      style={[styles.tabItem, selectedTab === label && styles.selectedTabItem]} 

      onPress={() => setSelectedTab(label)}

    >

      <Image 

        source={require('../assets/snack-icon.png')} 

        style={[styles.tabIcon, selectedTab === label && styles.selectedTabIcon]} 

      />

      <Text style={[styles.tabLabel, selectedTab === label && styles.selectedTabLabel]}>{label}</Text>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>

        <Text style={styles.headerTitle}>夸克扫描王</Text>

        <TouchableOpacity style={styles.headerButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.headerButtonIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.headerButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.headerButtonIcon} />

        </TouchableOpacity>

      </View>

      

      <ScrollView style={styles.content}>

        <View style={styles.loginSection}>

          <Image source={require('../assets/snack-icon.png')} style={styles.avatarIcon} />

          <Text style={styles.loginText}>登录查看扫描件</Text>

          <TouchableOpacity style={styles.loginButton}>

            <Text style={styles.loginButtonText}>立即登录</Text>

          </TouchableOpacity>

        </View>

        

        <View style={styles.featuresGrid}>

          {renderFeatureButton('document', '万能扫描')}

          {renderFeatureButton('text', '提取文字')}

          {renderFeatureButton('word', '转Word')}

          {renderFeatureButton('translate', '拍照翻译')}

          {renderFeatureButton('excel', '提取表格')}

          {renderFeatureButton('id', '拍证件照')}

          {renderFeatureButton('card', '拍证证件')}

          {renderFeatureButton('color', '寸照换底色')}

          {renderFeatureButton('meeting', '会议记录')}

          {renderFeatureButton('dictionary', '取词翻译')}

          {renderFeatureButton('handwriting', '去手写')}

          {renderFeatureButton('hd', '文档变高清')}

          {renderFeatureButton('crop', '图像矫正')}

          {renderFeatureButton('recognition', '万物识别')}

          {renderFeatureButton('pdf', '图片转PDF')}

          {renderFeatureButton('excel', '图片转Excel')}

          {renderFeatureButton('txt', '图片转TXT')}

          {renderFeatureButton('record', '记录屏幕')}

          {renderFeatureButton('more', '更多')}

        </View>



        <View style={styles.importSection}>

          <Text style={styles.importTitle}>选择导入方式，快速发起扫描</Text>

          <View style={styles.importButtonsContainer}>

            {renderImportButton('document', '文档导入')}

            {renderImportButton('album', '相册导入')}

            {renderImportButton('wechat', '微信导入')}

          </View>

        </View>



        <View style={styles.recentUsageSection}>

          <Text style={styles.recentUsageTitle}>最近使用</Text>

          <View style={styles.recentUsageItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.recentUsageImage} />

            <View style={styles.recentUsageTextContainer}>

              <Text style={styles.recentUsageItemTitle}>夸克扫描王操作手册</Text>

              <Text style={styles.recentUsageItemSubtitle}>2024-07-16 11:30 · 8MB</Text>

            </View>

          </View>

        </View>

      </ScrollView>

      

      <View style={styles.tabBar}>

        {renderTabBarItem('首页')}

        {renderTabBarItem('文件管理')}

        <TouchableOpacity style={styles.scanButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.scanButtonIcon} />

        </TouchableOpacity>

        {renderTabBarItem('全部工具')}

        {renderTabBarItem('扫描会员')}

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 15,

    paddingVertical: 10,

    backgroundColor: '#FFFFFF',

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  headerButton: {

    padding: 5,

  },

  headerButtonIcon: {

    width: 24,

    height: 24,

  },

  content: {

    flex: 1,

  },

  loginSection: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    margin: 15,

    padding: 15,

    borderRadius: 10,

  },

  avatarIcon: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  loginText: {

    flex: 1,

    fontSize: 16,

  },

  loginButton: {

    backgroundColor: '#4285F4',

    paddingVertical: 5,

    paddingHorizontal: 10,

    borderRadius: 15,

  },

  loginButtonText: {

    color: '#FFFFFF',

    fontSize: 14,

  },

  featuresGrid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    paddingHorizontal: 15,

    backgroundColor: '#FFFFFF',

    paddingBottom: 15,

  },

  featureButton: {

    width: '20%',

    alignItems: 'center',

    marginTop: 15,

  },

  featureIcon: {

    width: 40,

    height: 40,

  },

  featureLabel: {

    marginTop: 5,

    fontSize: 12,

    textAlign: 'center',

  },

  importSection: {

    backgroundColor: '#FFFFFF',

    marginTop: 15,

    padding: 15,

  },

  importTitle: {

    fontSize: 14,

    color: '#666666',

    marginBottom: 10,

  },

  importButtonsContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  importButton: {

    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',

    backgroundColor: '#F0F0F0',

    paddingVertical: 10,

    marginHorizontal: 5,

    borderRadius: 5,

  },

  importIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  importLabel: {

    fontSize: 12,

  },

  recentUsageSection: {

    backgroundColor: '#FFFFFF',

    marginTop: 15,

    padding: 15,

  },

  recentUsageTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  recentUsageItem: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  recentUsageImage: {

    width: 50,

    height: 50,

    borderRadius: 5,

    marginRight: 10,

  },

  recentUsageTextContainer: {

    flex: 1,

  },

  recentUsageItemTitle: {

    fontSize: 14,

    fontWeight: 'bold',

  },

  recentUsageItemSubtitle: {

    fontSize: 12,

    color: '#666666',

    marginTop: 5,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    paddingVertical: 5,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  tabItem: {

    alignItems: 'center',

  },

  selectedTabItem: {

    // Add styles for selected tab item if needed

  },

  tabIcon: {

    width: 24,

    height: 24,

    tintColor: '#999999',

  },

  selectedTabIcon: {

    tintColor: '#4285F4',

  },

  tabLabel: {

    fontSize: 10,

    color: '#999999',

    marginTop: 2,

  },

  selectedTabLabel: {

    color: '#4285F4',

  },

  scanButton: {

    width: 50,

    height: 50,

    borderRadius: 25,

    backgroundColor: '#4285F4',

    justifyContent: 'center',

    alignItems: 'center',

    marginTop: -25,

  },

  scanButtonIcon: {

    width: 30,

    height: 30,

    tintColor: '#FFFFFF',

  },

});



export default ScannerScreen;