import React, { useState } from 'react';
import { View, Text, Image, Pressable, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DiseaseDetail = () => {
const navigation = useNavigation();
const [activeTab, setActiveTab] = useState('简介');
const handleTabPress = (tab) => {
setActiveTab(tab);
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<Text style={styles.title}>口腔溃疡</Text>
<Text style={styles.department}>就诊科室：口腔科</Text>
<Text style={styles.source}>三甲医生专业编审·丁香医生官方出品</Text>
</View>
  <View style={styles.experts}>
    <View style={styles.expertProfile}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.expertImage} />
      <View>
        <Text style={styles.expertName}>苗冬青</Text>
        <Text style={styles.expertTitle}>词条作者</Text>
        <Text style={styles.expertHospital}>东海县人民医院口腔科</Text>
      </View>
    </View>
    <View style={styles.expertProfile}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.expertImage} />
      <View>
        <Text style={styles.expertName}>李恒</Text>
        <Text style={styles.expertTitle}>审核专家</Text>
        <Text style={styles.expertHospital}>复旦大学附属口腔医院</Text>
      </View>
    </View>
  </View>

  <View style={styles.tabContainer}>
    {['简介', '症状', '病因', '诊断', '治疗', '生活'].map((tab) => (
      <Pressable
        key={tab}
        style={[styles.tab, activeTab === tab && styles.activeTab]}
        onPress={() => handleTabPress(tab)}
      >
        <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
      </Pressable>
    ))}
  </View>

  <View style={styles.content}>
    <Text style={styles.subtitle}>口腔溃疡是什么？</Text>
    <Text style={styles.paragraph}>
      口腔溃疡又称口腔黏膜溃疡，俗称「口疮」，是指在舌、唇内侧、牙龈、颊黏膜、腭等口腔黏膜的上皮完整性发生连续性缺损或破坏，因表层坏死脱落而形成了凹陷。
    </Text>
    <Text style={styles.paragraph}>
      一般情况下，口腔溃疡都有明显的疼痛感，常见的是伴有烧灼感的疼痛。溃疡比较大时，疼痛感更加剧烈，说话、吃饭等会使得溃疡的疼痛感加重。
    </Text>
  </View>

  <ImageBackground
    source={{ uri: '../assets/snack-icon.png' }}
    style={styles.doctorBanner}
    imageStyle={styles.doctorBannerImage}
  >
    <Text style={styles.doctorBannerText}>特惠问诊</Text>
  </ImageBackground>

  <View style={styles.actionBar}>
    <Pressable style={styles.actionButton} onPress={() => navigation.goBack()}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.actionIcon} />
      <Text style={styles.actionText}>返回</Text>
    </Pressable>
    <Pressable style={styles.actionButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.actionIcon} />
      <Text style={styles.actionText}>收藏</Text>
    </Pressable>
    <Pressable style={styles.actionButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.actionIcon} />
      <Text style={styles.actionText}>评价反馈</Text>
    </Pressable>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
header: {
padding: 20,
backgroundColor: '#f0f0f0',
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 10,
},
department: {
fontSize: 16,
color: '#666',
marginBottom: 5,
},
source: {
fontSize: 14,
color: '#999',
},
experts: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 20,
borderBottomWidth: 1,
borderBottomColor: '#eee',
},
expertProfile: {
alignItems: 'center',
},
expertImage: {
width: 60,
height: 60,
borderRadius: 30,
marginBottom: 10,
},
expertName: {
fontSize: 16,
fontWeight: 'bold',
},
expertTitle: {
fontSize: 14,
color: '#666',
},
expertHospital: {
fontSize: 12,
color: '#999',
textAlign: 'center',
},
tabContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
borderBottomWidth: 1,
borderBottomColor: '#eee',
},
tab: {
paddingVertical: 10,
paddingHorizontal: 15,
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
},
content: {
padding: 20,
},
subtitle: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 10,
},
paragraph: {
fontSize: 16,
lineHeight: 24,
marginBottom: 10,
},
doctorBanner: {
height: 100,
justifyContent: 'center',
alignItems: 'center',
marginVertical: 20,
},
doctorBannerImage: {
borderRadius: 10,
},
doctorBannerText: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
actionBar: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
borderTopWidth: 1,
borderTopColor: '#eee',
},
actionButton: {
alignItems: 'center',
},
actionIcon: {
width: 24,
height: 24,
marginBottom: 5,
},
actionText: {
fontSize: 12,
color: '#666',
},
});
export default DiseaseDetail;