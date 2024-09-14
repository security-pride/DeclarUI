import React from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SelectScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>精选</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="输入网址或网站名，网站访问一触即达"
            placeholderTextColor="#999"
          />
          <Icon name="search-outline" size={20} color="#fff" style={styles.searchIcon} />
        </View>
      </View>

      {/* 常用 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>常用</Text>
        <View style={styles.iconRow}>
          {['书签', '微博', '腾讯', '网易', '新浪网'].map((label, index) => (
            <TouchableOpacity key={index} style={styles.iconContainer} onPress={() => {}}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* 今日新发现 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>今日新发现</Text>
        <View style={styles.iconRow}>
          {['夸克热搜', '夸克高考', '携程旅行', '天天领现金', '梦幻西游', '微博热搜', '腾讯动漫', '新浪微博'].map((label, index) => (
            <TouchableOpacity key={index} style={styles.iconContainer} onPress={() => {}}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* 夸克宝藏功能 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>夸克宝藏功能</Text>
        <View style={styles.iconRow}>
          {['AI听记', '捷径', '夸克日报', '夸克扫描王', '夸克网盘', '书签', '实用工具', '夸克文档'].map((label, index) => (
            <TouchableOpacity key={index} style={styles.iconContainer} onPress={() => {}}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* 全网热点实时更新 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>全网热点实时更新</Text>
        <View style={styles.iconRow}>
          {['热搜', '热点1', '热点2', '热点3', '热点4'].map((label, index) => (
            <TouchableOpacity key={index} style={styles.iconContainer} onPress={() => {}}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 15,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
  },
  searchIcon: {
    marginLeft: 10,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: '18%',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  iconLabel: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default SelectScreen;