import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const navigation = useNavigation();
const QuarkScannerKing = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const renderToolButton = (icon, label) => (
<TouchableOpacity style={styles.toolButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.toolIcon} />
<Text style={styles.toolLabel}>{label}</Text>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<ScrollView>
<View style={styles.header}>
<Text style={styles.title}>夸克扫描王</Text>
<View style={styles.headerRight}>
<Text style={styles.points}>65</Text>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
</TouchableOpacity>
</View>
</View>
    {!isLoggedIn && (
      <View style={styles.loginPrompt}>
        <Text>登录查看扫描件</Text>
        <TouchableOpacity style={styles.loginButton} onPress={() => setIsLoggedIn(true)}>
          <Text style={styles.loginButtonText}>立即登录</Text>
        </TouchableOpacity>
      </View>
    )}

    <View style={styles.mainActionContainer}>
      <TouchableOpacity style={styles.mainActionButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.mainActionIcon} />
      </TouchableOpacity>
      <Text style={styles.mainActionText}>快速发起扫描</Text>
    </View>

    <View style={styles.toolsGrid}>
      {renderToolButton('', '万能扫描')}
      {renderToolButton('', '提取文字')}
      {renderToolButton('', '转Word')}
      {renderToolButton('', '拍照翻译')}
      {renderToolButton('', '提取表格')}
      {renderToolButton('', '拍证件照')}
      {renderToolButton('', '扫描证件')}
      {renderToolButton('', '寸照换底色')}
      {renderToolButton('', '会议记录')}
      {renderToolButton('', '取词翻译')}
      {renderToolButton('', '去手写')}
      {renderToolButton('', '文档变高清')}
      {renderToolButton('', '图片矫正')}
      {renderToolButton('', '万物识别')}
      {renderToolButton('', '图片转PDF')}
      {renderToolButton('', '图片转Excel')}
      {renderToolButton('', '图片转TXT')}
      {renderToolButton('', '记录屏幕')}
      <TouchableOpacity style={styles.toolButton}>
        <Text style={styles.moreText}>更多</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.importSection}>
      <Text style={styles.sectionTitle}>选择导入方式，快速发起扫描</Text>
      <View style={styles.importButtons}>
        <Pressable style={styles.importButton}>
          <Text style={styles.importButtonText}>文档导入</Text>
        </Pressable>
        <Pressable style={styles.importButton}>
          <Text style={styles.importButtonText}>相册导入</Text>
        </Pressable>
        <Pressable style={styles.importButton}>
          <Text style={styles.importButtonText}>微信导入</Text>
        </Pressable>
      </View>
    </View>

    <View style={styles.recentSection}>
      <Text style={styles.sectionTitle}>最近使用</Text>
      <View style={styles.recentItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.recentThumbnail} />
        <View style={styles.recentItemInfo}>
          <Text style={styles.recentItemTitle}>夸克扫描王操作手册</Text>
          <Text style={styles.recentItemMeta}>2024-07-16 11:30 · 8MB</Text>
        </View>
      </View>
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navLabel}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navLabel}>文件管理</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.navButton, styles.mainNavButton]}>
      <Image source={require('../assets/snack-icon.png')} style={styles.mainNavIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navLabel}>全部工具</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navLabel}>扫描会员</Text>
    </TouchableOpacity>
  </View>
</View>
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
padding: 16,
},
title: {
fontSize: 20,
fontWeight: 'bold',
},
headerRight: {
flexDirection: 'row',
alignItems: 'center',
},
points: {
marginRight: 8,
fontSize: 16,
color: '#ff9500',
},
avatar: {
width: 32,
height: 32,
borderRadius: 16,
},
loginPrompt: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
backgroundColor: '#fff',
marginBottom: 16,
},
loginButton: {
backgroundColor: '#007AFF',
paddingHorizontal: 12,
paddingVertical: 6,
borderRadius: 4,
},
loginButtonText: {
color: '#fff',
fontWeight: 'bold',
},
mainActionContainer: {
alignItems: 'center',
marginBottom: 24,
},
mainActionButton: {
width: 80,
height: 80,
borderRadius: 40,
backgroundColor: '#ff9500',
justifyContent: 'center',
alignItems: 'center',
},
mainActionIcon: {
width: 40,
height: 40,
tintColor: '#fff',
},
mainActionText: {
marginTop: 8,
fontSize: 16,
},
toolsGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
padding: 16,
},
toolButton: {
width: '22%',
aspectRatio: 1,
alignItems: 'center',
justifyContent: 'center',
marginBottom: 16,
},
toolIcon: {
width: 32,
height: 32,
marginBottom: 4,
},
toolLabel: {
fontSize: 12,
textAlign: 'center',
},
moreText: {
fontSize: 14,
color: '#007AFF',
},
importSection: {
padding: 16,
backgroundColor: '#fff',
marginBottom: 16,
},
sectionTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 12,
},
importButtons: {
flexDirection: 'row',
justifyContent: 'space-between',
},
importButton: {
flex: 1,
backgroundColor: '#f0f0f0',
paddingVertical: 8,
borderRadius: 4,
marginHorizontal: 4,
alignItems: 'center',
},
importButtonText: {
fontSize: 14,
},
recentSection: {
padding: 16,
backgroundColor: '#fff',
},
recentItem: {
flexDirection: 'row',
alignItems: 'center',
},
recentThumbnail: {
width: 48,
height: 48,
marginRight: 12,
borderRadius: 4,
},
recentItemInfo: {
flex: 1,
},
recentItemTitle: {
fontSize: 16,
marginBottom: 4,
},
recentItemMeta: {
fontSize: 12,
color: '#888',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
backgroundColor: '#fff',
paddingVertical: 8,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
navButton: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 4,
},
navLabel: {
fontSize: 12,
},
mainNavButton: {
width: 56,
height: 56,
borderRadius: 28,
backgroundColor: '#007AFF',
justifyContent: 'center',
alignItems: 'center',
marginTop: -20,
},
mainNavIcon: {
width: 32,
height: 32,
tintColor: '#fff',
},
});
export default QuarkScannerKing;