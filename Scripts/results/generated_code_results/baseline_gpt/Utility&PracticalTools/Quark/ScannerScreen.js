import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ScannerScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>夸克扫描王</Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>立即登录</Text>
        </TouchableOpacity>
      </View>

      {/* Tools Section */}
      <View style={styles.toolsContainer}>
        {tools.map((tool, index) => (
          <View key={index} style={styles.toolItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.toolIcon} />
            <Text style={styles.toolText}>{tool}</Text>
          </View>
        ))}
      </View>

      {/* Import Options */}
      <View style={styles.importContainer}>
        <Text style={styles.importText}>选择导入方式，快速发起扫描</Text>
        <View style={styles.importOptions}>
          {importOptions.map((option, index) => (
            <TouchableOpacity key={index} style={styles.importButton}>
              <Text style={styles.importButtonText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Recently Used */}
      <View style={styles.recentContainer}>
        <Text style={styles.recentTitle}>最近使用</Text>
        <View style={styles.recentItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.recentImage} />
          <View style={styles.recentDetails}>
            <Text style={styles.recentText}>夸克扫描王操作手册</Text>
            <Text style={styles.recentSubText}>2024-07-16 11:30 • 8MB</Text>
          </View>
        </View>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        {footerIcons.map((icon, index) => (
          <TouchableOpacity key={index} style={styles.footerButton}>
            <Icon name={icon.name} size={30} color={icon.color} />
            <Text style={styles.footerText}>{icon.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const tools = [
  '万能扫描', '提取文字', '转Word', '拍照翻译',
  '提取表格', '拍证件照', '扫描证件', '寸照换底色',
  '会议记录', '取词翻译', '去手写', '文档变高清',
  '图像矫正', '万物识别', '图片转PDF', '图片转Excel',
  '图片转TXT', '记录屏幕', '更多'
];

const importOptions = ['文档导入', '相册导入', '微信导入'];

const footerIcons = [
  { name: 'home-outline', text: '首页', color: '#007AFF' },
  { name: 'folder-outline', text: '文件管理', color: '#8E8E93' },
  { name: 'camera-outline', text: '扫描', color: '#007AFF' },
  { name: 'grid-outline', text: '全部工具', color: '#8E8E93' },
  { name: 'person-outline', text: '扫描会员', color: '#8E8E93' }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#FFF',
  },
  toolsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  toolItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  toolIcon: {
    width: 50,
    height: 50,
  },
  toolText: {
    marginTop: 5,
  },
  importContainer: {
    padding: 20,
    backgroundColor: '#FFF',
    marginVertical: 10,
    borderRadius: 10,
  },
  importText: {
    textAlign: 'center',
    marginBottom: 10,
  },
  importOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  importButton: {
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  importButtonText: {
    color: '#333',
  },
  recentContainer: {
    padding: 20,
  },
  recentTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  recentDetails: {
    flex: 1,
  },
  recentText: {
    fontSize: 16,
    marginBottom: 2,
  },
  recentSubText: {
    color: '#888',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    marginTop: 5,
    color: '#333',
  }
});

export default ScannerScreen;