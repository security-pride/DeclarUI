import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScannerScreen = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>夸克扫描王</Text>
        <Image style={styles.avatar} source={require('../assets/snack-icon.png')} />
        <Text style={styles.loginPrompt}>登录查看扫描件</Text>
        <Text style={styles.points}>65</Text>
      </View>
      
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.button}>
          <Text>立即登录</Text>
        </TouchableOpacity>
        <View style={styles.iconGroup}>
          <Text style={styles.refreshIcon}>↻</Text>
          <Text style={styles.closeIcon}>×</Text>
        </View>
      </View>
      
      <View style={styles.mainActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text>万能扫描</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>提取文字</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>转Word</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>拍照翻译</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.toolGrid}>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>提取表格</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>拍证件照</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>扫描证件</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>寸照换底色</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>会议记录</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>取词翻译</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>去手写</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>文档变高清</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>图像矫正</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>万物识别</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>图片转PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>图片转Excel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>图片转TXT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>记录屏幕</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Text style={styles.moreText}>更多</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.chooseImportMethod}>选择导入方式，快速发起扫描</Text>
      
      <View style={styles.importButtons}>
        <TouchableOpacity style={styles.importButton}>
          <Text>文档导入</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.importButton}>
          <Text>相册导入</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.importButton}>
          <Text>微信导入</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.recentSection}>
        <Text style={styles.recentTitle}>最近使用</Text>
        <View style={styles.recentFile}>
          <Image style={styles.recentFileImage} source={require('../assets/snack-icon.png')} />
          <View style={styles.fileInfo}>
            <Text>夸克扫描王操作手册</Text>
            <Text>2024-07-16 11:30 · 8MB</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={navigateToHome}>
          <Text>首页</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>文件管理</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navButton, styles.scanButton]}>
          <Text>全能工具</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>扫描会员</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    width: 24,
    height: 24,
  },
  loginPrompt: {
    marginLeft: 8,
    fontSize: 14,
    color: '#888',
  },
  points: {
    backgroundColor: '#FFD700',
    borderRadius: 12,
    padding: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  iconGroup: {
    flexDirection: 'row',
  },
  refreshIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  closeIcon: {
    fontSize: 20,
  },
  mainActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  actionButton: {
    alignItems: 'center',
  },
  toolGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  gridItem: {
    width: '25%',
    alignItems: 'center',
    paddingVertical: 16,
  },
  icon: {
    width: 48,
    height: 48,
  },
  moreText: {
    fontSize: 14,
  },
  chooseImportMethod: {
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 14,
  },
  importButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
  },
  importButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  recentSection: {
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  recentTitle: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  recentFile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentFileImage: {
    width: 48,
    height: 48,
    marginRight: 8,
  },
  fileInfo: {
    justifyContent: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  scanButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 36,
    padding: 12,
  },
});

export default ScannerScreen;