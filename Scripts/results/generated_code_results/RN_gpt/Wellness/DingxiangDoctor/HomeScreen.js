import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>丁香医生</Text>
        <Text style={styles.subtitle}>三甲医生 双重审核 专业循证</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.envelopeIcon} />
      </View>
      
      <View style={styles.searchBarContainer}>
        <Icon name="search" size={20} color="#ccc" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="甲流烧几天" />
        <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('SearchMedicineDisease')}>
          <Text style={styles.searchButtonText}>搜索</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tagsContainer}>
        {['每日辟谣', '免费导诊', '痔疮', '甲状腺结节', '荨麻疹', '痛风'].map(tag => (
          <Text key={tag} style={styles.tag}>{tag}</Text>
        ))}
      </View>

      <View style={styles.featuresContainer}>
        <TouchableOpacity style={styles.featureBox} onPress={() => navigation.navigate('Profile')}>
          <Icon name="chatbubble-ellipses" size={40} color="#46a049" />
          <Text style={styles.featureText}>问医生</Text>
          <Text style={styles.featureDescription}>全国三甲医生</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureBox} onPress={() => navigation.navigate('SearchMedicineDisease')}>
          <Icon name="medkit" size={40} color="#63b7f7" />
          <Text style={styles.featureText}>查疾病</Text>
          <Text style={styles.featureDescription}>权威疾病百科</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureBox} onPress={() => navigation.navigate('SearchMedicineDisease')}>
          <Icon name="flask" size={40} color="#3bb2f9" />
          <Text style={styles.featureText}>查药品</Text>
          <Text style={styles.featureDescription}>7万药品说明书</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.consultationContainer}>
        <View style={styles.consultationBox}>
          <Text style={styles.consultationTitle}>免费导诊</Text>
          <Text style={styles.consultationDescription}>描述问题，精准推荐医生</Text>
          <Text style={styles.onlineStatus}>24 小时在线</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.doctorImage} />
          <TouchableOpacity style={styles.consultButton} onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.consultButtonText}>立即咨询</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.consultationBox}>
          <Text style={styles.videoConsultTitle}>视频问诊</Text>
          <Text style={styles.consultationDescription}>面对面更安心</Text>
          <Icon name="videocam" size={40} color="#46a049" />
        </View>
        <View style={styles.consultationBox}>
          <Text style={styles.newUserConsultationTitle}>新人义诊</Text>
          <Text style={styles.consultationDescription}>9.9元起问医生</Text>
          <Icon name="heart" size={40} color="#ff9800" />
        </View>
      </View>

      <View style={styles.departmentsContainer}>
        {['皮肤科', '儿科', '妇产科', '消化内科', '更多科室'].map(department => (
          <View key={department} style={styles.departmentBox}>
            <Image source={require('../assets/snack-icon.png')} style={styles.departmentIcon} />
            <Text style={styles.departmentText}>{department}</Text>
          </View>
        ))}
      </View>

      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>缓解痛风的一个小习惯, 要坚持</Text>
        <TouchableOpacity>
          <Text style={styles.learnMore}>去了解</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Icon name="home" size={25} color="#000" />
          <Text style={styles.navText}>首页</Text>
        </View>
        <View style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-add" size={25} color="#ccc" />
          <Text style={styles.navText}>问医生</Text>
        </View>
        <View style={styles.navItem} onPress={() => navigation.navigate('SearchMedicineDisease')}>
          <Icon name="search-circle" size={25} color="#ccc" />
          <Text style={styles.navText}>查病查药</Text>
        </View>
        <View style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-circle" size={25} color="#ccc" />
          <Text style={styles.navText}>我的</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginTop: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: '#888',
  },
  envelopeIcon: {
    width: 24,
    height: 24,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
  },
  searchButton: {
    padding: 8,
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  searchButtonText: {
    color: '#fff',
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#eee',
    borderRadius: 4,
    fontSize: 12,
    color: '#555',
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  featureBox: {
    alignItems: 'center',
  },
  featureText: {
    fontSize: 14,
    marginTop: 8,
  },
  featureDescription: {
    fontSize: 12,
    color: '#888',
  },
  consultationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  consultationBox: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1,
    margin: 4,
  },
  consultationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  consultationDescription: {
    fontSize: 12,
    color: '#888',
  },
  onlineStatus: {
    fontSize: 10,
    color: '#46a049',
  },
  doctorImage: {
    width: 40,
    height: 40,
    marginVertical: 8,
  },
  consultButton: {
    backgroundColor: '#46a049',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  consultButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  videoConsultTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  newUserConsultationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  departmentsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  departmentBox: {
    alignItems: 'center',
  },
  departmentIcon: {
    width: 30,
    height: 30,
    marginBottom: 4,
  },
  departmentText: {
    fontSize: 12,
  },
  bannerContainer: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bannerText: {
    fontSize: 14,
    color: '#000',
  },
  learnMore: {
    fontSize: 12,
    color: '#46a049',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#888',
  },
});

export default HomeScreen;