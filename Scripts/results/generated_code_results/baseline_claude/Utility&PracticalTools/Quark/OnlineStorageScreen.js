import React from 'react';

import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const OnlineStorageScreen = () => {

  const navigation = useNavigation();



  const renderFileTypeButton = (icon, label) => (

    <TouchableOpacity style={styles.fileTypeButton}>

      <Image source={require('../assets/snack-icon.png')} style={styles.fileTypeIcon} />

      <Text style={styles.fileTypeLabel}>{label}</Text>

    </TouchableOpacity>

  );



  const renderFeatureButton = (icon, label) => (

    <TouchableOpacity style={styles.featureButton}>

      <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />

      <Text style={styles.featureLabel}>{label}</Text>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" />

      <View style={styles.header}>

        <Text style={styles.headerTitle}>夸克网盘</Text>

        <TouchableOpacity style={styles.headerButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.headerButtonIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.headerButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.headerButtonIcon} />

        </TouchableOpacity>

      </View>

      

      <ScrollView style={styles.content}>

        <View style={styles.searchContainer}>

          <TextInput

            style={styles.searchInput}

            placeholder="搜索网盘文件"

            placeholderTextColor="#666"

          />

        </View>

        

        <View style={styles.loginSection}>

          <Image source={require('../assets/snack-icon.png')} style={styles.avatarIcon} />

          <View style={styles.loginTextContainer}>

            <Text style={styles.loginTitle}>登录夸克网盘</Text>

            <Text style={styles.loginSubtitle}>登录后领取10G空间 ></Text>

          </View>

          <View style={styles.promotionBadge}>

            <Text style={styles.promotionText}>0元秒杀</Text>

            <Text style={styles.promotionSubtext}>免费领SVIP月卡</Text>

          </View>

        </View>

        

        <TouchableOpacity style={styles.loginButton}>

          <Text style={styles.loginButtonText}>立即登录</Text>

        </TouchableOpacity>

        

        <View style={styles.fileTypesContainer}>

          {renderFileTypeButton('video', '视频')}

          {renderFileTypeButton('photo', '相册')}

          {renderFileTypeButton('document', '文档')}

          {renderFileTypeButton('audio', '音频')}

          {renderFileTypeButton('zip', '压缩包')}

        </View>

        

        <View style={styles.featuresContainer}>

          {renderFeatureButton('cloud', '云收藏')}

          {renderFeatureButton('lock', '加密空间')}

          {renderFeatureButton('pdf', 'PDF转换')}

          {renderFeatureButton('trash', '回收站')}

          {renderFeatureButton('mic', 'AI听记')}

          {renderFeatureButton('group', '群组')}

        </View>

        

        <View style={styles.deviceSection}>

          <Image source={require('../assets/snack-icon.png')} style={styles.deviceIcon} />

          <View style={styles.deviceTextContainer}>

            <Text style={styles.deviceTitle}>iPhone手机</Text>

            <Text style={styles.deviceSubtitle}>本机备份未开启</Text>

          </View>

          <TouchableOpacity style={styles.deviceButton}>

            <Text style={styles.deviceButtonText}>立即开启</Text>

          </TouchableOpacity>

        </View>

        

        <View style={styles.recentFilesContainer}>

          <View style={styles.recentFilesHeader}>

            <Text style={styles.recentFilesTitle}>最近文件</Text>

            <TouchableOpacity>

              <Image source={require('../assets/snack-icon.png')} style={styles.recentFilesIcon} />

            </TouchableOpacity>

          </View>

          <View style={styles.emptyFileContainer}>

            <Image source={require('../assets/snack-icon.png')} style={styles.emptyFileIcon} />

            <Text style={styles.emptyFileText}>暂无内容</Text>

          </View>

        </View>

      </ScrollView>

      

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>文件</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>传输</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>会员</Text>

        </TouchableOpacity>

      </View>

      

      <TouchableOpacity style={styles.floatingButton}>

        <Text style={styles.floatingButtonText}>+</Text>

      </TouchableOpacity>

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

    paddingHorizontal: 15,

    paddingVertical: 10,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#FFF',

  },

  headerButton: {

    padding: 5,

  },

  headerButtonIcon: {

    width: 24,

    height: 24,

    tintColor: '#FFF',

  },

  content: {

    flex: 1,

  },

  searchContainer: {

    margin: 15,

  },

  searchInput: {

    backgroundColor: '#222',

    borderRadius: 20,

    paddingVertical: 10,

    paddingHorizontal: 15,

    color: '#FFF',

  },

  loginSection: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#222',

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

  loginTextContainer: {

    flex: 1,

  },

  loginTitle: {

    color: '#FFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  loginSubtitle: {

    color: '#999',

    fontSize: 12,

  },

  promotionBadge: {

    backgroundColor: '#FF6B6B',

    borderRadius: 15,

    padding: 5,

  },

  promotionText: {

    color: '#FFF',

    fontSize: 12,

    fontWeight: 'bold',

  },

  promotionSubtext: {

    color: '#FFF',

    fontSize: 10,

  },

  loginButton: {

    backgroundColor: '#1E90FF',

    margin: 15,

    padding: 15,

    borderRadius: 25,

    alignItems: 'center',

  },

  loginButtonText: {

    color: '#FFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  fileTypesContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginVertical: 15,

  },

  fileTypeButton: {

    alignItems: 'center',

  },

  fileTypeIcon: {

    width: 40,

    height: 40,

    tintColor: '#4285F4',

  },

  fileTypeLabel: {

    color: '#FFF',

    marginTop: 5,

    fontSize: 12,

  },

  featuresContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    marginHorizontal: 15,

  },

  featureButton: {

    width: '30%',

    alignItems: 'center',

    marginBottom: 15,

  },

  featureIcon: {

    width: 30,

    height: 30,

    tintColor: '#4285F4',

  },

  featureLabel: {

    color: '#FFF',

    marginTop: 5,

    fontSize: 12,

  },

  deviceSection: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#222',

    margin: 15,

    padding: 15,

    borderRadius: 10,

  },

  deviceIcon: {

    width: 40,

    height: 40,

    marginRight: 10,

  },

  deviceTextContainer: {

    flex: 1,

  },

  deviceTitle: {

    color: '#FFF',

    fontSize: 16,

  },

  deviceSubtitle: {

    color: '#999',

    fontSize: 12,

  },

  deviceButton: {

    backgroundColor: '#1E90FF',

    paddingVertical: 5,

    paddingHorizontal: 10,

    borderRadius: 15,

  },

  deviceButtonText: {

    color: '#FFF',

    fontSize: 12,

  },

  recentFilesContainer: {

    margin: 15,

  },

  recentFilesHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  recentFilesTitle: {

    color: '#FFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  recentFilesIcon: {

    width: 24,

    height: 24,

    tintColor: '#FFF',

  },

  emptyFileContainer: {

    alignItems: 'center',

    justifyContent: 'center',

    backgroundColor: '#222',

    borderRadius: 10,

    padding: 30,

  },

  emptyFileIcon: {

    width: 60,

    height: 60,

    marginBottom: 10,

    tintColor: '#666',

  },

  emptyFileText: {

    color: '#666',

    fontSize: 14,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#111',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#333',

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    tintColor: '#FFF',

  },

  tabLabel: {

    color: '#FFF',

    fontSize: 12,

    marginTop: 5,

  },

  floatingButton: {

    position: 'absolute',

    right: 20,

    bottom: 80,

    width: 50,

    height: 50,

    borderRadius: 25,

    backgroundColor: '#1E90FF',

    justifyContent: 'center',

    alignItems: 'center',

  },

  floatingButtonText: {

    color: '#FFF',

    fontSize: 24,

    fontWeight: 'bold',

  },

});



export default OnlineStorageScreen;