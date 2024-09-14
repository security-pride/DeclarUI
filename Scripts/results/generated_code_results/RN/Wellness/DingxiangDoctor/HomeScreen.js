import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
const navigation = useNavigation();
const handleSearchPress = () => {
navigation.navigate('Search');
};
const handleProfilePress = () => {
navigation.navigate('Profile');
};
const handleCheckDiseaseOrMedicine = () => {
navigation.navigate('SearchMedicineDisease');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<Text style={styles.title}>丁香医生</Text>
<Text style={styles.subtitle}>三甲医生 双重审核 专业循证</Text>
<TouchableOpacity onPress={() => {}}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.envelope} />
</TouchableOpacity>
</View>
  <TouchableOpacity style={styles.searchBar} onPress={handleSearchPress}>
    <TextInput
      style={styles.searchInput}
      placeholder="甲流发烧几天"
      editable={false}
    />
    <Text style={styles.searchButton}>搜索</Text>
  </TouchableOpacity>

  <View style={styles.quickAccess}>
    {['每日辟谣', '免费导诊', '痔疮', '甲状腺结节', '荨麻疹', '痛风'].map((item, index) => (
      <TouchableOpacity key={index} style={styles.quickAccessItem}>
        <Text style={styles.quickAccessText}>{item}</Text>
      </TouchableOpacity>
    ))}
  </View>

  <View style={styles.features}>
    <TouchableOpacity style={styles.featureItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.featureIcon} />
      <Text style={styles.featureText}>问医生</Text>
      <Text style={styles.featureDescription}>全国三甲医生</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.featureItem} onPress={handleCheckDiseaseOrMedicine}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.featureIcon} />
      <Text style={styles.featureText}>查疾病</Text>
      <Text style={styles.featureDescription}>权威疾病百科</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.featureItem} onPress={handleCheckDiseaseOrMedicine}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.featureIcon} />
      <Text style={styles.featureText}>查药品</Text>
      <Text style={styles.featureDescription}>7万药品说明书</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.consultationSection}>
    <View style={styles.freeConsultation}>
      <View>
        <Text style={styles.consultationTitle}>免费导诊</Text>
        <Text style={styles.consultationDescription}>描述问题，精准推荐医生</Text>
        <Text style={styles.onlineStatus}>✓ 24小时在线</Text>
      </View>
      <TouchableOpacity style={styles.consultButton}>
        <Text style={styles.consultButtonText}>立即咨询</Text>
      </TouchableOpacity>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.nurseImage} />
    </View>
    <View style={styles.otherConsultations}>
      <TouchableOpacity style={styles.videoConsultation}>
        <Text style={styles.consultationTitle}>视频问诊</Text>
        <Text style={styles.consultationDescription}>面对面更安心</Text>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.videoIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.newUserConsultation}>
        <Text style={styles.consultationTitle}>新人义诊</Text>
        <Text style={styles.consultationDescription}>9.9元起问医生</Text>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.heartIcon} />
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.departments}>
    <TouchableOpacity style={styles.departmentItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.departmentIcon} />
      <Text style={styles.departmentText}>皮肤科</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.departmentItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.departmentIcon} />
      <Text style={styles.departmentText}>儿科</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.departmentItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.departmentIcon} />
      <Text style={styles.departmentText}>妇产科</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.departmentItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.departmentIcon} />
      <Text style={styles.departmentText}>消化内科</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.departmentItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.departmentIcon} />
      <Text style={styles.departmentText}>更多科室</Text>
    </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.goutTipBanner}>
    <Text style={styles.goutTipText}>缓解痛风的一个小习惯，要坚持</Text>
    <View style={styles.goutTipInfo}>
      <Text style={styles.goutTipCalendar}>健康日历</Text>
      <Text style={styles.goutTipViews}>2.6万人查看</Text>
      <TouchableOpacity style={styles.goutTipButton}>
        <Text style={styles.goutTipButtonText}>去了解</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>

  <View style={styles.bottomNavigation}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={handleCheckDiseaseOrMedicine}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>查病查药</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>问医生</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={handleProfilePress}>
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
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
backgroundColor: '#fff',
},
title: {
fontSize: 20,
fontWeight: 'bold',
},
subtitle: {
fontSize: 12,
color: '#666',
},
envelope: {
width: 24,
height: 24,
},
searchBar: {
flexDirection: 'row',
margin: 15,
backgroundColor: '#fff',
borderRadius: 20,
alignItems: 'center',
},
searchInput: {
flex: 1,
padding: 10,
},
searchButton: {
padding: 10,
color: '#4a90e2',
},
quickAccess: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-around',
padding: 10,
},
quickAccessItem: {
backgroundColor: '#e6e6e6',
padding: 8,
borderRadius: 15,
marginBottom: 10,
},
quickAccessText: {
fontSize: 12,
},
features: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 15,
backgroundColor: '#fff',
},
featureItem: {
alignItems: 'center',
},
featureIcon: {
width: 40,
height: 40,
marginBottom: 5,
},
featureText: {
fontSize: 14,
fontWeight: 'bold',
},
featureDescription: {
fontSize: 12,
color: '#666',
},
consultationSection: {
padding: 15,
},
freeConsultation: {
flexDirection: 'row',
backgroundColor: '#fff',
borderRadius: 10,
padding: 15,
marginBottom: 10,
},
consultationTitle: {
fontSize: 16,
fontWeight: 'bold',
},
consultationDescription: {
fontSize: 12,
color: '#666',
},
onlineStatus: {
fontSize: 12,
color: '#4caf50',
},
consultButton: {
backgroundColor: '#4a90e2',
padding: 8,
borderRadius: 15,
marginLeft: 10,
},
consultButtonText: {
color: '#fff',
fontSize: 12,
},
nurseImage: {
width: 60,
height: 60,
position: 'absolute',
right: 10,
bottom: 0,
},
otherConsultations: {
flexDirection: 'row',
justifyContent: 'space-between',
},
videoConsultation: {
flex: 1,
backgroundColor: '#fff',
borderRadius: 10,
padding: 15,
marginRight: 5,
},
newUserConsultation: {
flex: 1,
backgroundColor: '#fff',
borderRadius: 10,
padding: 15,
marginLeft: 5,
},
videoIcon: {
width: 24,
height: 24,
position: 'absolute',
right: 10,
bottom: 10,
},
heartIcon: {
width: 24,
height: 24,
position: 'absolute',
right: 10,
bottom: 10,
},
departments: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: '#fff',
padding: 15,
},
departmentItem: {
alignItems: 'center',
},
departmentIcon: {
width: 30,
height: 30,
marginBottom: 5,
},
departmentText: {
fontSize: 12,
},
goutTipBanner: {
backgroundColor: '#fff',
margin: 15,
padding: 15,
borderRadius: 10,
},
goutTipText: {
fontSize: 16,
fontWeight: 'bold',
},
goutTipInfo: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 10,
},
goutTipCalendar: {
fontSize: 12,
color: '#666',
marginRight: 10,
},
goutTipViews: {
fontSize: 12,
color: '#666',
},
goutTipButton: {
backgroundColor: '#4a90e2',
padding: 5,
borderRadius: 15,
marginLeft: 'auto',
},
goutTipButtonText: {
color: '#fff',
fontSize: 12,
},
bottomNavigation: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: '#fff',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
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
});
export default Home;