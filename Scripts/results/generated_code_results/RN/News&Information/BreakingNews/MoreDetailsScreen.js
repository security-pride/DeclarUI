import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const MoreDetails = () => {
const navigation = useNavigation();
const renderMenuItem = (icon, label, onPress) => (
<TouchableOpacity style={styles.menuItem} onPress={onPress}>
<Image source={{ uri: ../assets/${icon}.png }} style={styles.menuIcon} />
<Text style={styles.menuLabel}>{label}</Text>
<Image source={{ uri: '../assets/arrow-right.png' }} style={styles.arrowIcon} />
</TouchableOpacity>
);
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<ScrollView>
{renderMenuItem('settings', '设置', () => navigation.navigate('Settings'))}
{renderMenuItem('same-city', '同城', () => {})}
{renderMenuItem('my-topics', '我的话题', () => {})}
{renderMenuItem('collected-news', '已收藏的新闻', () => {})}
{renderMenuItem('messages', '消息', () => {})}
{renderMenuItem('announcements', '公告', () => navigation.navigate('Notice'))}
{renderMenuItem('share-app', '分享应用', () => {})}
{renderMenuItem('privacy-policy', '隐私政策', () => {})}
{renderMenuItem('support-us', '支持我们', () => {})}
{renderMenuItem('faq', '常见问题解答', () => {})}
{renderMenuItem('exit-app', '退出应用', () => {}})}
</ScrollView>
  <View style={styles.tabBar}>
    <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
      <Image source={{ uri: '../assets/news-icon.png' }} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>新闻</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={{ uri: '../assets/topic-wall-icon.png' }} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>话题墙</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={{ uri: '../assets/beloud-icon.png' }} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>BELOUD</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={{ uri: '../assets/notification-icon.png' }} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>提醒</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={{ uri: '../assets/more-icon.png' }} style={styles.tabIcon} />
      <Text style={styles.tabLabel}>更多</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
menuItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#EEEEEE',
},
menuIcon: {
width: 24,
height: 24,
marginRight: 15,
},
menuLabel: {
flex: 1,
fontSize: 16,
},
arrowIcon: {
width: 20,
height: 20,
},
tabBar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#EEEEEE',
paddingVertical: 10,
},
tabItem: {
alignItems: 'center',
},
tabIcon: {
width: 24,
height: 24,
marginBottom: 5,
},
tabLabel: {
fontSize: 12,
},
});
export default MoreDetails;