import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchMedicineDisease = () => {
const navigation = useNavigation();
const handleDiseaseSelect = (disease) => {
navigation.navigate('DiseaseDetail', { disease });
};
const handleHomePress = () => {
navigation.navigate('Home');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<Text style={styles.title}>健康百科</Text>
<Text style={styles.subtitle}>三甲医生专业编审·丁香医生官方出品</Text>
<TouchableOpacity>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.icon} />
</TouchableOpacity>
</View>
  <View style={styles.searchBar}>
    <TextInput
      style={styles.searchInput}
      placeholder="搜一搜：疾病/症状/药品/健康问题"
    />
    <TouchableOpacity style={styles.searchButton}>
      <Text style={styles.searchButtonText}>搜索</Text>
    </TouchableOpacity>
  </View>

  <Text style={styles.sectionTitle}>近期热点</Text>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.hotTopicsContainer}>
    {['登革热防范手册', '了解左氧氟沙星', '流感应对手册', '了解司美格鲁肽'].map((topic, index) => (
      <TouchableOpacity key={index} style={styles.hotTopicCard}>
        <Text style={styles.hotTopicTitle}>{topic}</Text>
        <Text style={styles.hotTopicDescription}>
          {index === 0 ? '蚊虫叮咬传播，注意预防' : 
           index === 1 ? '使用抗生素，务必遵医嘱' :
           index === 2 ? '流感高发，助你科学应对' :
           '合理用药，健康科学减肥'}
        </Text>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.hotTopicIcon} />
      </TouchableOpacity>
    ))}
  </ScrollView>

  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>查疾病</Text>
    <Text style={styles.sectionSubtitle}>疾病/症状全了解</Text>
    <TouchableOpacity>
      <Text style={styles.viewMore}>查看更多 ></Text>
    </TouchableOpacity>
  </View>
  <View style={styles.diseasesGrid}>
    {['痔疮', '湿疹', '带状疱疹', '口腔溃疡', '足癣', '高血压', '糖尿病', '甲状腺结节'].map((disease, index) => (
      <TouchableOpacity key={index} style={styles.diseaseItem} onPress={() => handleDiseaseSelect(disease)}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.diseaseIcon} />
        <Text style={styles.diseaseText}>{disease}</Text>
      </TouchableOpacity>
    ))}
  </View>

  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>查药品</Text>
    <Text style={styles.sectionSubtitle}>药品说明随手查</Text>
    <TouchableOpacity>
      <Text style={styles.viewMore}>查看更多 ></Text>
    </TouchableOpacity>
  </View>
  <View style={styles.medicinesContainer}>
    <TouchableOpacity style={styles.medicineItem}>
      <Text style={styles.medicineText}>奥司他韦</Text>
      <Text style={styles.hotTag}>HOT</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.medicineItem}>
      <Text style={styles.medicineText}>布洛芬混悬液</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={handleHomePress}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>问医生</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>查病查药</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>我的</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
},
header: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
padding: 15,
backgroundColor: '#fff',
},
title: {
fontSize: 20,
fontWeight: 'bold',
color: '#6e5cf8',
},
subtitle: {
fontSize: 12,
color: '#666',
},
icon: {
width: 24,
height: 24,
},
searchBar: {
flexDirection: 'row',
margin: 15,
backgroundColor: '#fff',
borderRadius: 20,
overflow: 'hidden',
},
searchInput: {
flex: 1,
padding: 10,
},
searchButton: {
padding: 10,
backgroundColor: '#6e5cf8',
},
searchButtonText: {
color: '#fff',
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
margin: 15,
},
hotTopicsContainer: {
paddingLeft: 15,
},
hotTopicCard: {
width: 150,
backgroundColor: '#fff',
borderRadius: 10,
padding: 15,
marginRight: 10,
},
hotTopicTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
hotTopicDescription: {
fontSize: 12,
color: '#666',
},
hotTopicIcon: {
width: 30,
height: 30,
position: 'absolute',
right: 10,
bottom: 10,
},
sectionHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
margin: 15,
},
sectionSubtitle: {
fontSize: 12,
color: '#666',
},
viewMore: {
fontSize: 12,
color: '#6e5cf8',
},
diseasesGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-around',
padding: 15,
backgroundColor: '#fff',
},
diseaseItem: {
width: '25%',
alignItems: 'center',
marginBottom: 15,
},
diseaseIcon: {
width: 40,
height: 40,
marginBottom: 5,
},
diseaseText: {
fontSize: 12,
},
medicinesContainer: {
backgroundColor: '#fff',
padding: 15,
},
medicineItem: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingVertical: 10,
borderBottomWidth: 1,
borderBottomColor: '#f0f0f0',
},
medicineText: {
fontSize: 16,
},
hotTag: {
fontSize: 12,
color: '#ff6b00',
backgroundColor: '#fff5e6',
paddingHorizontal: 5,
paddingVertical: 2,
borderRadius: 10,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 10,
backgroundColor: '#fff',
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 5,
},
navText: {
fontSize: 12,
},
activeNavItem: {
// Add styles for active nav item if needed
},
activeNavText: {
color: '#6e5cf8',
},
});
export default SearchMedicineDisease;