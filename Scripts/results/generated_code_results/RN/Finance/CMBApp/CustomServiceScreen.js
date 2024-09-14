import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const CustomService = () => {
const navigation = useNavigation();
const navigateToHome = () => {
navigation.navigate('Home');
};
const navigateToSearchBranch = () => {
navigation.navigate('SearchBranch');
};
const QuickActionButton = ({ icon, label, onPress }) => (
<TouchableOpacity style={styles.quickActionButton} onPress={onPress}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Text style={styles.quickActionLabel}>{label}</Text>
</TouchableOpacity>
);
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={navigateToHome}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.title}>小招-客服门户</Text>
<View style={styles.notificationBadge}>
<Text style={styles.notificationText}>99</Text>
</View>
</View>
  <View style={styles.greetingSection}>
    <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
    <View>
      <Text style={styles.greeting}>您好，我是小招</Text>
      <Text style={styles.helpText}>需要帮助点此提问哦~</Text>
    </View>
  </View>

  <View style={styles.quickActionsContainer}>
    <QuickActionButton icon="card" label="卡号查询" onPress={() => {}} />
    <QuickActionButton icon="limit" label="支出限额查询" onPress={() => {}} />
    <QuickActionButton icon="balance" label="查询余额" onPress={() => {}} />
    <QuickActionButton icon="location" label="查找网点" onPress={navigateToSearchBranch} />
    <QuickActionButton icon="transfer" label="转账限额" onPress={() => {}} />
    <QuickActionButton icon="bank" label="开户行查询" onPress={() => {}} />
    <QuickActionButton icon="document" label="证件更新" onPress={() => {}} />
    <QuickActionButton icon="praise" label="我要表扬" onPress={() => {}} />
    <QuickActionButton icon="service" label="咨询与投诉" onPress={() => {}} />
  </View>

  <View style={styles.interestSection}>
    <Text style={styles.sectionTitle}>我关心的</Text>
    <View style={styles.interestTags}>
      <TouchableOpacity style={styles.tag}>
        <Text style={styles.tagText}>贷款</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tag}>
        <Text style={styles.tagText}>账户管理</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tag}>
        <Text style={styles.tagText}>理财</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tag}>
        <Text style={styles.tagText}>信用卡</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.hotTopics}>
      <Text style={styles.hotTopic}>闪电贷介绍<ImageBackground source={require('../assets/snack-icon.png')} style={styles.hotIcon}><Text style={styles.hotText}>热</Text></ImageBackground></Text>
      <Text style={styles.hotTopic}>助学贷款怎么续贷<ImageBackground source={require('../assets/snack-icon.png')} style={styles.hotIcon}><Text style={styles.hotText}>热</Text></ImageBackground></Text>
      <Text style={styles.hotTopic}>装修贷款介绍</Text>
      <Text style={styles.hotTopic}>手机银行如何申请闪电贷</Text>
      <Text style={styles.hotTopic}>车贷查询</Text>
    </View>
  </View>

  <View style={styles.encyclopediaSection}>
    <Text style={styles.sectionTitle}>小招百科</Text>
    <View style={styles.encyclopediaContent}>
      <View style={styles.encyclopediaColumn}>
        <Text style={styles.encyclopediaHeader}>视频</Text>
        <Text style={styles.moreLink}>更多</Text>
      </View>
      <View style={styles.encyclopediaColumn}>
        <Text style={styles.encyclopediaHeader}>文章</Text>
        <Text style={styles.moreLink}>更多</Text>
      </View>
    </View>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f5f5f5',
},
header: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
padding: 15,
backgroundColor: '#fff',
},
backIcon: {
width: 20,
height: 20,
},
title: {
fontSize: 18,
fontWeight: 'bold',
},
notificationBadge: {
backgroundColor: 'red',
borderRadius: 10,
width: 20,
height: 20,
justifyContent: 'center',
alignItems: 'center',
},
notificationText: {
color: 'white',
fontSize: 12,
},
greetingSection: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
backgroundColor: '#fff',
marginBottom: 10,
},
avatar: {
width: 50,
height: 50,
borderRadius: 25,
marginRight: 15,
},
greeting: {
fontSize: 16,
fontWeight: 'bold',
},
helpText: {
fontSize: 14,
color: '#888',
},
quickActionsContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
padding: 15,
backgroundColor: '#fff',
marginBottom: 10,
},
quickActionButton: {
width: '30%',
alignItems: 'center',
marginBottom: 15,
},
icon: {
width: 30,
height: 30,
marginBottom: 5,
},
quickActionLabel: {
fontSize: 12,
textAlign: 'center',
},
interestSection: {
padding: 15,
backgroundColor: '#fff',
marginBottom: 10,
},
sectionTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 10,
},
interestTags: {
flexDirection: 'row',
flexWrap: 'wrap',
marginBottom: 10,
},
tag: {
backgroundColor: '#f0f0f0',
borderRadius: 15,
paddingVertical: 5,
paddingHorizontal: 10,
marginRight: 10,
marginBottom: 10,
},
tagText: {
fontSize: 14,
},
hotTopics: {
marginTop: 10,
},
hotTopic: {
fontSize: 14,
marginBottom: 10,
},
hotIcon: {
width: 20,
height: 20,
justifyContent: 'center',
alignItems: 'center',
marginLeft: 5,
},
hotText: {
color: 'white',
fontSize: 10,
},
encyclopediaSection: {
padding: 15,
backgroundColor: '#fff',
},
encyclopediaContent: {
flexDirection: 'row',
justifyContent: 'space-between',
},
encyclopediaColumn: {
flexDirection: 'row',
alignItems: 'center',
},
encyclopediaHeader: {
fontSize: 14,
fontWeight: 'bold',
},
moreLink: {
fontSize: 12,
color: '#888',
marginLeft: 10,
},
});
export default CustomService;