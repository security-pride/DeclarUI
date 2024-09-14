import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const navigation = useNavigation();
const QuarkCloudDrive = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const renderFeatureButton = (icon, label) => (
<TouchableOpacity style={styles.featureButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
<Text style={styles.featureLabel}>{label}</Text>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" />
<View style={styles.header}>
<Text style={styles.headerTitle}>夸克网盘</Text>
<View style={styles.headerRight}>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />
</TouchableOpacity>
</View>
</View>
  <ScrollView>
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="搜索网盘文件"
        placeholderTextColor="#999"
      />
    </View>

    {!isLoggedIn ? (
      <View style={styles.loginPrompt}>
        <Text style={styles.loginText}>登录夸克网盘</Text>
        <Text style={styles.loginSubtext}>登录后领取10G空间</Text>
        <TouchableOpacity style={styles.loginButton} onPress={() => setIsLoggedIn(true)}>
          <Text style={styles.loginButtonText}>立即登录</Text>
        </TouchableOpacity>
      </View>
    ) : null}

    <ImageBackground
      source={require('../assets/snack-icon.png')}
      style={styles.promotionBanner}
    >
      <Text style={styles.promotionText}>0元秒杀 免费领SVIP月卡</Text>
    </ImageBackground>

    <View style={styles.quickAccessContainer}>
      {renderFeatureButton('../assets/snack-icon.png', '视频')}
      {renderFeatureButton('../assets/snack-icon.png', '相册')}
      {renderFeatureButton('../assets/snack-icon.png', '文档')}
      {renderFeatureButton('../assets/snack-icon.png', '音频')}
      {renderFeatureButton('../assets/snack-icon.png', '压缩包')}
    </View>

    <View style={styles.featuresContainer}>
      <View style={styles.featuresRow}>
        {renderFeatureButton('../assets/snack-icon.png', '云收藏')}
        {renderFeatureButton('../assets/snack-icon.png', '加密空间')}
        {renderFeatureButton('../assets/snack-icon.png', 'PDF转换')}
      </View>
      <View style={styles.featuresRow}>
        {renderFeatureButton('../assets/snack-icon.png', '回收站')}
        {renderFeatureButton('../assets/snack-icon.png', 'AI听记')}
        {renderFeatureButton('../assets/snack-icon.png', '群组')}
      </View>
    </View>

    <View style={styles.deviceBackupContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.deviceIcon} />
      <View style={styles.deviceInfo}>
        <Text style={styles.deviceName}>iPhone手机</Text>
        <Text style={styles.deviceStatus}>本机备份未开启</Text>
      </View>
      <TouchableOpacity style={styles.backupButton}>
        <Text style={styles.backupButtonText}>立即开启</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.recentFilesContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>最近文件</Text>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.emptyStateContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.emptyStateIcon} />
        <Text style={styles.emptyStateText}>暂无内容</Text>
      </View>
    </View>

    <Text style={styles.endOfListText}>- 已经到底了 -</Text>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navLabel}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navLabel}>文件</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navLabel}>传输</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navLabel}>会员</Text>
    </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.floatingActionButton}>
    <Text style={styles.fabText}>+</Text>
  </TouchableOpacity>
</View>
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
padding: 16,
},
headerTitle: {
fontSize: 20,
fontWeight: 'bold',
color: '#fff',
},
headerRight: {
flexDirection: 'row',
},
headerIcon: {
width: 24,
height: 24,
marginLeft: 16,
},
searchContainer: {
padding: 16,
},
searchInput: {
backgroundColor: '#333',
borderRadius: 8,
padding: 8,
color: '#fff',
},
loginPrompt: {
backgroundColor: '#222',
padding: 16,
marginBottom: 16,
},
loginText: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
loginSubtext: {
color: '#999',
marginTop: 4,
},
loginButton: {
backgroundColor: '#0066FF',
borderRadius: 4,
padding: 8,
alignItems: 'center',
marginTop: 12,
},
loginButtonText: {
color: '#fff',
fontWeight: 'bold',
},
promotionBanner: {
height: 60,
justifyContent: 'center',
paddingHorizontal: 16,
marginBottom: 16,
},
promotionText: {
color: '#fff',
fontWeight: 'bold',
},
quickAccessContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: '#222',
padding: 16,
marginBottom: 16,
},
featuresContainer: {
backgroundColor: '#222',
padding: 16,
marginBottom: 16,
},
featuresRow: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 16,
},
featureButton: {
alignItems: 'center',
},
featureIcon: {
width: 40,
height: 40,
marginBottom: 4,
},
featureLabel: {
color: '#fff',
fontSize: 12,
},
deviceBackupContainer: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#222',
padding: 16,
marginBottom: 16,
},
deviceIcon: {
width: 40,
height: 40,
marginRight: 12,
},
deviceInfo: {
flex: 1,
},
deviceName: {
color: '#fff',
fontWeight: 'bold',
},
deviceStatus: {
color: '#999',
},
backupButton: {
backgroundColor: '#0066FF',
borderRadius: 4,
paddingVertical: 4,
paddingHorizontal: 8,
},
backupButtonText: {
color: '#fff',
fontSize: 12,
},
recentFilesContainer: {
backgroundColor: '#222',
padding: 16,
marginBottom: 16,
},
sectionHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 16,
},
sectionTitle: {
color: '#fff',
fontWeight: 'bold',
},
eyeIcon: {
width: 24,
height: 24,
},
emptyStateContainer: {
alignItems: 'center',
padding: 32,
},
emptyStateIcon: {
width: 64,
height: 64,
marginBottom: 16,
},
emptyStateText: {
color: '#999',
},
endOfListText: {
textAlign: 'center',
color: '#666',
padding: 16,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: '#222',
paddingVertical: 8,
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
color: '#fff',
fontSize: 12,
},
floatingActionButton: {
position: 'absolute',
right: 16,
bottom: 72,
width: 56,
height: 56,
borderRadius: 28,
backgroundColor: '#0066FF',
justifyContent: 'center',
alignItems: 'center',
},
fabText: {
color: '#fff',
fontSize: 24,
fontWeight: 'bold',
},
});
export default QuarkCloudDrive;