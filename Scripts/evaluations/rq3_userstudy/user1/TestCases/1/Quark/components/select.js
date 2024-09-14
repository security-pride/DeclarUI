import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
const FeaturedScreen = ({ navigation }) => {
const renderAppIcon = (icon, label) => (
<TouchableOpacity style={styles.appIconContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.appIcon} />
<Text style={styles.appLabel}>{label}</Text>
</TouchableOpacity>
);
const renderSection = (title, items) => (
<View style={styles.section}>
<Text style={styles.sectionTitle}>{title}</Text>
<View style={styles.iconGrid}>
{items.map((item, index) => renderAppIcon(item.icon, item.label))}
</View>
</View>
);
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" />
<View style={styles.header}>
<Text style={styles.headerTitle}>精选</Text>
<View style={styles.headerRight}>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />
</TouchableOpacity>
</View>
</View>
  <View style={styles.searchContainer}>
    <TextInput
      style={styles.searchInput}
      placeholder="输入网址或网站名，网站访问一触即达"
      placeholderTextColor="#999"
    />
  </View>

  <ScrollView>
    {renderSection('常用', [
      { icon: 'bookmark', label: '书签' },
      { icon: 'weibo', label: '微博' },
      { icon: 'tencent', label: '腾讯' },
      { icon: 'netease', label: '网易' },
      { icon: 'sina', label: '新浪网' },
    ])}

    {renderSection('今日新发现', [
      { icon: 'hot', label: '夸克热搜' },
      { icon: 'exam', label: '夸克高考' },
      { icon: 'travel', label: '携程旅行' },
      { icon: 'cash', label: '天天领现金' },
      { icon: 'game', label: '梦幻西游' },
      { icon: 'weibo-hot', label: '微博热搜' },
      { icon: 'anime', label: '腾讯动漫' },
      { icon: 'sina-weibo', label: '新浪微博' },
    ])}

    {renderSection('夸克宝藏功能', [
      { icon: 'ai-listen', label: 'AI听记' },
      { icon: 'capture', label: '捷径' },
      { icon: 'daily', label: '夸克日报' },
      { icon: 'scanner', label: '夸克扫描王' },
      { icon: 'cloud', label: '夸克网盘' },
      { icon: 'bookmark', label: '书签' },
      { icon: 'tools', label: '实用工具' },
      { icon: 'doc', label: '夸克文档' },
    ])}

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>全网热点实时更新</Text>
      {/* Add content for real-time updates here */}
    </View>
  </ScrollView>
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
borderRadius: 20,
padding: 8,
paddingLeft: 16,
color: '#fff',
},
section: {
marginBottom: 24,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
color: '#fff',
marginLeft: 16,
marginBottom: 12,
},
iconGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-around',
paddingHorizontal: 8,
},
appIconContainer: {
alignItems: 'center',
width: '20%',
marginBottom: 16,
},
appIcon: {
width: 48,
height: 48,
borderRadius: 12,
},
appLabel: {
marginTop: 4,
fontSize: 12,
color: '#fff',
textAlign: 'center',
},
});
export default FeaturedScreen;