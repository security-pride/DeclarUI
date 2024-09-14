import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const navigation = useNavigation();
const QuarkDaily = () => {
const [activeTab, setActiveTab] = useState('热搜');
const renderHotItem = (rank, title, views) => (
<View style={styles.hotItem}>
<Text style={[styles.hotRank, rank <= 3 ? styles.hotRankTop : {}]}>{rank}</Text>
<Text style={styles.hotTitle} numberOfLines={1}>{title}</Text>
<Text style={styles.hotViews}>{views}</Text>
</View>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>夸克日报</Text>
<View style={styles.headerRight}>
<TouchableOpacity style={styles.iconButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity style={styles.iconButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
</View>
  <ScrollView>
    <ImageBackground
      source={require('../assets/snack-icon.png')}
      style={styles.dailyBanner}
    >
      <View style={styles.dailyInfo}>
        <Text style={styles.dailyDate}>07 16</Text>
        <Text style={styles.dailyWeather}>武汉市 30°C</Text>
      </View>
      <View style={styles.dailyContent}>
        <Text style={styles.dailyTitle}>早报</Text>
        <Text style={styles.dailyNewsItem}>• 余承东回应常挨任正非批:有误解</Text>
        <Text style={styles.dailyNewsItem}>• 如何扭转地方财政收缩态势?专家建议</Text>
        <Text style={styles.dailyNewsItem}>• 美特勤局局长:调整特朗普贴身警卫</Text>
      </View>
    </ImageBackground>

    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === '热搜' && styles.activeTab]}
        onPress={() => setActiveTab('热搜')}
      >
        <Text style={[styles.tabText, activeTab === '热搜' && styles.activeTabText]}>热搜</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === '微博' && styles.activeTab]}
        onPress={() => setActiveTab('微博')}
      >
        <Text style={[styles.tabText, activeTab === '微博' && styles.activeTabText]}>微博</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === '知乎' && styles.activeTab]}
        onPress={() => setActiveTab('知乎')}
      >
        <Text style={[styles.tabText, activeTab === '知乎' && styles.activeTabText]}>知乎</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.hotList}>
      {renderHotItem(1, '400多件裙子退货店家损失近80...', '170w')}
      {renderHotItem(2, '几千块手机为何离不开几块钱的...', '109w')}
      {renderHotItem(3, '全面深化改革的实践续篇', '89w')}
      {renderHotItem(4, '抓娃娃票房', '87w')}
      {renderHotItem(5, '小天愿意跟相柳走不是因为誓言', '45w')}
    </View>

    <View style={styles.featuredTopic}>
      <Image source={require('../assets/snack-icon.png')} style={styles.featuredImage} />
      <View style={styles.featuredOverlay}>
        <Text style={styles.featuredLabel}>专题</Text>
        <Text style={styles.featuredTitle}>特朗普遇刺右耳受伤</Text>
      </View>
    </View>

    <View style={styles.promotionContainer}>
      <TouchableOpacity style={styles.promotionButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.promotionIcon} />
        <View>
          <Text style={styles.promotionTitle}>芭芭农场</Text>
          <Text style={styles.promotionSubtitle}>新鲜水果包邮到家</Text>
        </View>
        <Text style={styles.promotionAction}>去施肥 {'>'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.promotionButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.promotionIcon} />
        <View>
          <Text style={styles.promotionTitle}>福利中心</Text>
          <Text style={styles.promotionSubtitle}>现金红包天天领取</Text>
        </View>
        <Text style={styles.promotionAction}>去领钱 {'>'}</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
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
backgroundColor: '#000',
},
headerTitle: {
fontSize: 20,
fontWeight: 'bold',
color: '#fff',
},
headerRight: {
flexDirection: 'row',
},
iconButton: {
marginLeft: 16,
},
icon: {
width: 24,
height: 24,
tintColor: '#fff',
},
dailyBanner: {
height: 200,
justifyContent: 'space-between',
padding: 16,
},
dailyInfo: {
flexDirection: 'row',
alignItems: 'center',
},
dailyDate: {
fontSize: 32,
fontWeight: 'bold',
color: '#fff',
marginRight: 8,
},
dailyWeather: {
fontSize: 16,
color: '#fff',
},
dailyContent: {
backgroundColor: 'rgba(0,0,0,0.5)',
padding: 12,
borderRadius: 8,
},
dailyTitle: {
fontSize: 18,
fontWeight: 'bold',
color: '#fff',
marginBottom: 8,
},
dailyNewsItem: {
fontSize: 14,
color: '#fff',
marginBottom: 4,
},
tabContainer: {
flexDirection: 'row',
backgroundColor: '#fff',
marginTop: 16,
},
tab: {
flex: 1,
paddingVertical: 12,
alignItems: 'center',
},
activeTab: {
borderBottomWidth: 2,
borderBottomColor: '#007AFF',
},
tabText: {
fontSize: 16,
color: '#333',
},
activeTabText: {
color: '#007AFF',
fontWeight: 'bold',
},
hotList: {
backgroundColor: '#fff',
paddingHorizontal: 16,
},
hotItem: {
flexDirection: 'row',
alignItems: 'center',
paddingVertical: 12,
borderBottomWidth: 1,
borderBottomColor: '#f0f0f0',
},
hotRank: {
width: 24,
fontSize: 18,
fontWeight: 'bold',
color: '#999',
},
hotRankTop: {
color: '#ff6b00',
},
hotTitle: {
flex: 1,
fontSize: 16,
marginLeft: 8,
},
hotViews: {
fontSize: 14,
color: '#999',
},
featuredTopic: {
margin: 16,
height: 150,
borderRadius: 8,
overflow: 'hidden',
},
featuredImage: {
width: '100%',
height: '100%',
},
featuredOverlay: {
...StyleSheet.absoluteFillObject,
backgroundColor: 'rgba(0,0,0,0.3)',
justifyContent: 'flex-end',
padding: 16,
},
featuredLabel: {
color: '#fff',
fontSize: 14,
fontWeight: 'bold',
marginBottom: 4,
},
featuredTitle: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
promotionContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
padding: 16,
},
promotionButton: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
borderRadius: 8,
padding: 12,
flex: 1,
marginHorizontal: 4,
},
promotionIcon: {
width: 40,
height: 40,
marginRight: 8,
},
promotionTitle: {
fontSize: 16,
fontWeight: 'bold',
},
promotionSubtitle: {
fontSize: 12,
color: '#666',
},
promotionAction: {
fontSize: 14,
color: '#007AFF',
marginLeft: 'auto',
},
});
export default QuarkDaily;