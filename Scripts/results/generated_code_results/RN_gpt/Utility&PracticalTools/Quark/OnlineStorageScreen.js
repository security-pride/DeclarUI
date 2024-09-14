import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnlineStorageScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Image source={require('../assets/snack-icon.png')} style={styles.signalIcon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.signalIcon} />
        <Text style={styles.batteryText}>65</Text>
      </View>
      
      {/* Title */}
      <Text style={styles.title}>夸克网盘</Text>
      
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput placeholder="搜索网盘文件" style={styles.searchInput} />
        <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
      </View>
      
      {/* Login Section */}
      <View style={styles.loginSection}>
        <Text style={styles.loginText}>登录夸克网盘</Text>
        <Text style={styles.promoText}>登录后领取10G空间</Text>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.banner}>
          <Text style={styles.bannerText}>0元秒杀SVIP月卡</Text>
        </ImageBackground>
        <Button title="立即登录" onPress={() => {}} />
      </View>
      
      {/* Function Buttons */}
      <View style={styles.functionsSection}>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>视频</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>相册</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>文档</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>音频</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.iconLabel}>压缩包</Text>
        </TouchableOpacity>
      </View>
      
      {/* Feature Section */}
      <View style={styles.featuresSection}>
        <View style={styles.featureBox}>
          <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
          <Text style={styles.featureLabel}>云收藏</Text>
        </View>
        <View style={styles.featureBox}>
          <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
          <Text style={styles.featureLabel}>加密空间</Text>
        </View>
        <View style={styles.featureBox}>
          <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
          <Text style={styles.featureLabel}>PDF转换</Text>
        </View>
        <View style={styles.featureBox}>
          <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
          <Text style={styles.featureLabel}>回收站</Text>
        </View>
        <View style={styles.featureBox}>
          <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
          <Text style={styles.featureLabel}>AI听记</Text>
        </View>
        <View style={styles.featureBox}>
          <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
          <Text style={styles.featureLabel}>群组</Text>
        </View>
      </View>
      
      {/* Recent Files Section */}
      <View style={styles.recentFilesSection}>
        <Text style={styles.recentFilesTitle}>最近文件</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.recentFileIcon} />
        <Text style={styles.noContentText}>暂无内容</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.eyeIcon} />
      </View>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.bottomNavIcon}>首页</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.bottomNavIcon}>文件</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.bottomNavIcon}>传输</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.bottomNavIcon}>会员</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  signalIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  batteryText: {
    color: '#FFF',
    marginHorizontal: 5,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginVertical: 10,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 5,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    color: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  loginSection: {
    margin: 20,
    backgroundColor: '#111',
    borderRadius: 10,
    padding: 15,
  },
  loginText: {
    color: '#FFF',
    fontSize: 18,
  },
  promoText: {
    color: '#BBB',
    marginVertical: 5,
  },
  banner: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  bannerText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  functionsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconLabel: {
    color: '#FFF',
    textAlign: 'center',
  },
  featuresSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  featureBox: {
    width: '30%',
    backgroundColor: '#222',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    alignItems: 'center',
  },
  featureIcon: {
    width: 40,
    height: 40,
  },
  featureLabel: {
    color: '#FFF',
    marginTop: 5,
  },
  recentFilesSection: {
    backgroundColor: '#111',
    borderRadius: 10,
    margin: 20,
    padding: 10,
  },
  recentFilesTitle: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 10,
  },
  recentFileIcon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  noContentText: {
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  eyeIcon: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  bottomNavIcon: {
    color: '#FFF',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#00F',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 60,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 24,
  },
});

export default OnlineStorageScreen;