import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchMedicineDiseaseScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>健康百科</Text>
        <Icon name="mail-outline" size={24} color="#000" />
      </View>
      <Text style={styles.subtitle}>三甲医生专业编审 · 丁香医生官方出品</Text>

      <View style={styles.searchBar}>
        <Icon name="search-outline" size={20} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="搜索：疾病/症状/药品/健康问题"
          placeholderTextColor="#999"
        />
        <TouchableOpacity>
          <Text style={styles.searchButton}>搜索</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>近期热点</Text>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>登革热防范手册</Text>
              <Text style={styles.cardSubtitle}>蚊虫叮咬传播，注意预防</Text>
            </View>
            <View style={styles.card}>
              <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>了解左氧氟沙星</Text>
              <Text style={styles.cardSubtitle}>使用抗生素，务必遵医嘱</Text>
            </View>
            <View style={styles.card}>
              <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>流感应对手册</Text>
              <Text style={styles.cardSubtitle}>流感高发，助你科学应对</Text>
            </View>
            <View style={styles.card}>
              <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>了解司美格鲁肽</Text>
              <Text style={styles.cardSubtitle}>合理用药，健康科学减肥</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>查疾病</Text>
          <View style={styles.iconRow}>
            {['疱疹', '湿疹', '带状疱疹', '口腔溃疡', '足癣', '高血压', '糖尿病', '甲状腺结节'].map((item, index) => (
              <View key={index} style={styles.iconContainer}>
                <Image source={require('../assets/snack-icon.png')} style={styles.diseaseIcon} />
                <Text style={styles.iconLabel}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>查药品</Text>
          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.moreButtonText}>查看更多</Text>
          </TouchableOpacity>
          <View style={styles.cardContainer}>
            <View style={styles.cardSimple}>
              <Text style={styles.cardSimpleText}>奥司他韦 <Text style={styles.hotText}>HOT</Text></Text>
            </View>
            <View style={styles.cardSimple}>
              <Text style={styles.cardSimpleText}>布洛芬混悬液</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6A0DAD',
  },
  subtitle: {
    fontSize: 12,
    color: '#777',
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 3,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  searchInput: {
    flex: 1,
    padding: 8,
    fontSize: 14,
    color: '#333',
  },
  searchButton: {
    color: '#6A0DAD',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    elevation: 3,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  cardImage: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#777',
  },
  iconRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: '23%',
    alignItems: 'center',
    marginBottom: 16,
  },
  diseaseIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  iconLabel: {
    fontSize: 12,
    color: '#333',
  },
  moreButton: {
    alignSelf: 'flex-end',
  },
  moreButtonText: {
    fontSize: 12,
    color: '#6A0DAD',
  },
  cardSimple: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    elevation: 3,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  cardSimpleText: {
    fontSize: 14,
  },
  hotText: {
    fontSize: 12,
    color: 'red',
  },
});

export default SearchMedicineDiseaseScreen;