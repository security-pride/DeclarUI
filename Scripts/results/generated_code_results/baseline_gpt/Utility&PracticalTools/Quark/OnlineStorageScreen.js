import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OnlineStorageScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="搜索网盘文件"
          placeholderTextColor="#888"
        />
        <Icon name="magnify" size={25} color="#fff" style={styles.searchIcon} />
      </View>

      {/* Login Section */}
      <View style={styles.loginSection}>
        <View style={styles.loginInfo}>
          <Icon name="account-circle" size={45} color="#fff" />
          <View style={styles.textContainer}>
            <Text style={styles.loginText}>登录夸克网盘</Text>
            <Text style={styles.subText}>登录后领取10G空间</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>立即登录</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Options */}
      <ScrollView horizontal contentContainerStyle={styles.navOptionsContainer}>
        {['视频', '相册', '文档', '音频', '压缩包'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.navOption}>
            <Icon name="folder-outline" size={30} color="#4285F4" />
            <Text style={styles.navText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Tools Section */}
      <ScrollView horizontal contentContainerStyle={styles.toolsContainer}>
        {['云收藏', '加密空间', 'PDF转换', '回收站', 'AI听记', '群组'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.tool}>
            <Icon name="toolbox-outline" size={30} color="#4285F4" />
            <Text style={styles.toolText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Recent Files Section */}
      <View style={styles.recentFiles}>
        <Text style={styles.sectionTitle}>最近文件</Text>
        <View style={styles.noContent}>
          <Image source={require('../assets/snack-icon.png')} style={styles.fileIcon} />
          <Text style={styles.noContentText}>暂无内容</Text>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {['首页', '文件', '传输', '会员'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.bottomNavItem}>
            <Icon name="home-outline" size={25} color="#fff" />
            <Text style={styles.bottomNavText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 8,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: '#fff',
  },
  searchIcon: {
    paddingHorizontal: 10,
  },
  loginSection: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
  },
  loginInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
  },
  subText: {
    color: '#42A5F5',
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: '#4285F4',
    borderRadius: 8,
    marginTop: 10,
    paddingVertical: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  navOptionsContainer: {
    marginVertical: 10,
  },
  navOption: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  navText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
  toolsContainer: {
    marginVertical: 10,
  },
  tool: {
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 10,
  },
  toolText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
  recentFiles: {
    flex: 1,
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  noContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  fileIcon: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  noContentText: {
    color: '#888',
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#222',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
  fab: {
    position: 'absolute',
    bottom: 70,
    right: 15,
    backgroundColor: '#4285F4',
    borderRadius: 50,
    padding: 15,
    elevation: 5,
  },
});

export default OnlineStorageScreen;