import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchMedicineDiseaseScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>健康百科</Text>
      <Text style={styles.subtitle}>三甲医生专业审核 · 丁香医生官方出品</Text>

      <View style={styles.searchBar}>
        <TextInput style={styles.input} placeholder="搜一搜：疾病/症状/药品/健康问题" />
        <TouchableOpacity>
          <Text style={styles.searchButton}>搜索</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Image source={require('../assets/snack-icon.png')} style={styles.envelopeIcon} />
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>近期热点</Text>
      <View style={styles.hotTopics}>
        <View style={styles.topicCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.topicIcon} />
          <Text style={styles.topicTitle}>登革热防范手册</Text>
          <Text style={styles.topicDescription}>蚊虫叮咬传播，注意预防</Text>
        </View>
        <View style={styles.topicCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.topicIcon} />
          <Text style={styles.topicTitle}>了解左氧氟沙星</Text>
          <Text style={styles.topicDescription}>使用抗生素，务必遵医嘱</Text>
        </View>
      </View>

      <View style={styles.hotTopics}>
        <View style={styles.topicCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.topicIcon} />
          <Text style={styles.topicTitle}>流感应对手册</Text>
          <Text style={styles.topicDescription}>流感高发，助你科学应对</Text>
        </View>
        <View style={styles.topicCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.topicIcon} />
          <Text style={styles.topicTitle}>了解司美格鲁肽</Text>
          <Text style={styles.topicDescription}>合理用药，健康科学减肥</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>查疾病</Text>
      <Text style={styles.sectionSubtitle}>疾病/症状全了解</Text>
      <View style={styles.diseaseIcons}>
        <Image source={require('../assets/snack-icon.png')} style={styles.diseaseIcon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.diseaseIcon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.diseaseIcon} />
      </View>

      <Text style={styles.sectionTitle}>查药品</Text>
      <Text style={styles.sectionSubtitle}>药品说明随手查</Text>
      <View style={styles.medicineList}>
        <Text style={styles.medicineItem}>奥司他韦 <Text style={styles.hotLabel}>HOT</Text></Text>
        <Text style={styles.medicineItem}>布洛芬混悬液</Text>
      </View>

      <View style={styles.footerNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navText}>首页</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>问医生</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('DiseaseDetail')}>
          <Text style={styles.navText}>查病查药</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>我的</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  searchButton: {
    fontSize: 16,
    color: '#000',
    marginLeft: 8,
  },
  envelopeIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 16,
    top: 16,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 16,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  hotTopics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  topicCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  topicIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  topicTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  topicDescription: {
    fontSize: 14,
    color: '#888',
  },
  diseaseIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  diseaseIcon: {
    width: 48,
    height: 48,
  },
  medicineList: {
    marginBottom: 16,
  },
  medicineItem: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
  },
  hotLabel: {
    color: '#f00',
    fontWeight: 'bold',
  },
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 8,
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
    color: '#000',
  },
});

export default SearchMedicineDiseaseScreen;